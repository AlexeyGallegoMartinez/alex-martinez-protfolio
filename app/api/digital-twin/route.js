import { digitalTwinSystemPrompt } from "@/lib/digital-twin-context";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b";
const MAX_USER_MESSAGES = 6;
const MAX_CONTENT_LENGTH = 1200;
const MAX_BODY_LENGTH = 20_000;
const REQUEST_TIMEOUT_MS = 25_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const RATE_LIMIT_MAX_BUCKETS = 500;
const rateLimitBuckets = globalThis.digitalTwinRateLimitBuckets ?? new Map();

globalThis.digitalTwinRateLimitBuckets = rateLimitBuckets;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const jsonHeaders = {
  "Cache-Control": "no-store",
};

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      ...jsonHeaders,
      ...init.headers,
    },
  });
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter((message) => message?.role === "user")
    .slice(-MAX_USER_MESSAGES)
    .map((message) => ({
      role: "user",
      content: String(message.content ?? "").slice(0, MAX_CONTENT_LENGTH),
    }))
    .filter((message) => message.content.trim().length > 0);
}

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexey-martinez.dev";

  try {
    return new URL(siteUrl).origin;
  } catch {
    return "https://alexey-martinez.dev";
  }
}

function getClientIp(request) {
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  if (cloudflareIp) {
    return cloudflareIp.trim();
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    getSiteUrl(),
    new URL(request.url).origin,
  ]);

  return !origin || allowedOrigins.has(origin);
}

function pruneRateLimitBuckets(now) {
  if (rateLimitBuckets.size <= RATE_LIMIT_MAX_BUCKETS) {
    return;
  }

  for (const [key, bucket] of rateLimitBuckets.entries()) {
    if (now > bucket.resetAt) {
      rateLimitBuckets.delete(key);
    }
  }
}

function checkRateLimit(request) {
  const now = Date.now();
  const ip = getClientIp(request);
  const bucket = rateLimitBuckets.get(ip);

  pruneRateLimitBuckets(now);

  if (!bucket || now > bucket.resetAt) {
    rateLimitBuckets.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  bucket.count += 1;
  return true;
}

export async function POST(request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!isAllowedOrigin(request)) {
    return json({ error: "Origin is not allowed." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ error: "Request body must be JSON." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_BODY_LENGTH) {
    return json({ error: "Request body is too large." }, { status: 413 });
  }

  if (!checkRateLimit(request)) {
    return json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  if (!apiKey) {
    return json(
      { error: "OpenRouter is not configured." },
      { status: 500 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Array.isArray(body.messages)) {
    return json({ error: "Messages must be an array." }, { status: 400 });
  }

  const lastMessage = body.messages.at(-1);

  if (lastMessage?.role !== "user") {
    return json(
      { error: "Send a user message to chat with the digital twin." },
      { status: 400 },
    );
  }

  const messages = sanitizeMessages(body.messages);

  if (messages.length === 0) {
    return json(
      { error: "Send a user message to chat with the digital twin." },
      { status: 400 },
    );
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": getSiteUrl(),
        "X-Title": "Alexey Martinez Portfolio Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: digitalTwinSystemPrompt,
          },
          ...messages,
        ],
        temperature: 0.35,
        max_tokens: 650,
      }),
    }).finally(() => {
      clearTimeout(timeout);
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.warn("OpenRouter digital twin request failed", {
        status: response.status,
        message: data?.error?.message,
      });

      return json(
        { error: "The digital twin is temporarily unavailable." },
        { status: 502 },
      );
    }

    const content = data?.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return json(
        { error: "The digital twin did not return a response." },
        { status: 502 },
      );
    }

    return json({ message: { role: "assistant", content } });
  } catch (error) {
    console.warn("Digital twin upstream request failed", {
      name: error?.name,
      message: error?.message,
    });

    const isTimeout = error?.name === "AbortError";

    return json(
      {
        error: isTimeout
          ? "The digital twin timed out. Please try again."
          : "Unable to reach the digital twin right now.",
      },
      { status: isTimeout ? 504 : 502 },
    );
  }
}
