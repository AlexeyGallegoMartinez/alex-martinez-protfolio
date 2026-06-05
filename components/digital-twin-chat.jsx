"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { fallbackLng } from "@/app/i18n/settings";
import { getSiteCopy } from "@/lib/site-copy";

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 5.75a3 3 0 0 1 3-3h8.5a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3H12l-4.25 3.5v-3.5a3 3 0 0 1-3-3v-6.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 8.25h7.5M8.25 11.25h4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m6.75 6.75 10.5 10.5M17.25 6.75 6.75 17.25"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m4.75 12 14.5-7.25-3.5 14.5-3.25-5.75-7.75-1.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function normalizeMarkdownText(content) {
  return String(content ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/([^\n])\s+(-\s+\*\*)/g, "$1\n$2")
    .trim();
}

function renderInlineMarkdown(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function MessageContent({ content, role }) {
  if (role !== "assistant") {
    return <span className="whitespace-pre-wrap break-words">{content}</span>;
  }

  const lines = normalizeMarkdownText(content).split("\n");
  const blocks = [];
  let paragraph = [];
  let list = null;

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }

    blocks.push({
      type: "paragraph",
      text: paragraph.join(" ").trim(),
    });
    paragraph = [];
  }

  function flushList() {
    if (!list) {
      return;
    }

    blocks.push(list);
    list = null;
  }

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushParagraph();
      flushList();
      return;
    }

    const unorderedMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
    const orderedMatch = trimmedLine.match(/^\d+[.)]\s+(.+)$/);

    if (unorderedMatch || orderedMatch) {
      flushParagraph();

      const type = unorderedMatch ? "unordered-list" : "ordered-list";
      const text = unorderedMatch?.[1] ?? orderedMatch[1];

      if (!list || list.type !== type) {
        flushList();
        list = {
          type,
          items: [],
        };
      }

      list.items.push(text);
      return;
    }

    flushList();
    paragraph.push(trimmedLine);
  });

  flushParagraph();
  flushList();

  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={`${block.type}-${index}`} className="break-words">
              {renderInlineMarkdown(block.text)}
            </p>
          );
        }

        const ListTag = block.type === "ordered-list" ? "ol" : "ul";

        return (
          <ListTag
            key={`${block.type}-${index}`}
            className={clsx(
              "space-y-2 pl-5",
              block.type === "ordered-list" ? "list-decimal" : "list-disc",
            )}
          >
            {block.items.map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`} className="break-words pl-1">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}

export default function DigitalTwinChat({ lng = fallbackLng }) {
  const copy = getSiteCopy(lng).digitalTwin;
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);
  const [typingMessage, setTypingMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: copy.initialMessage,
    },
  ]);
  const scrollRef = useRef(null);
  const typingMessageIdRef = useRef(0);
  const completedTypingMessageIdRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, isSending, isOpen, typingMessage, errorMessage]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsGreetingVisible(true);
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!typingMessage || typingMessage.isComplete) {
      return;
    }

    const activeTypingMessageId = typingMessage.id;
    const timer = window.setTimeout(() => {
      setTypingMessage((current) => {
        if (!current || current.id !== activeTypingMessageId) {
          return current;
        }

        const nextLength = Math.min(
          current.visible.length + 3,
          current.content.length,
        );

        return {
          ...current,
          visible: current.content.slice(0, nextLength),
          isComplete: nextLength >= current.content.length,
        };
      });
    }, 18);

    return () => {
      window.clearTimeout(timer);
    };
  }, [typingMessage]);

  useEffect(() => {
    if (!typingMessage?.isComplete) {
      return;
    }

    if (completedTypingMessageIdRef.current === typingMessage.id) {
      return;
    }

    completedTypingMessageIdRef.current = typingMessage.id;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: "assistant",
        content: typingMessage.content,
      },
    ]);
    setTypingMessage((current) =>
      current?.id === typingMessage.id ? null : current,
    );
  }, [typingMessage]);

  function openChat() {
    setIsOpen(true);
    setIsGreetingVisible(false);
  }

  function closeGreeting() {
    setIsGreetingVisible(false);
  }

  async function sendMessage(content) {
    const nextContent = content.trim();

    if (!nextContent || isSending) {
      return;
    }

    const nextMessages = [...messages, { role: "user", content: nextContent }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/digital-twin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? copy.unavailableError);
      }

      const nextTypingMessageId = typingMessageIdRef.current + 1;
      typingMessageIdRef.current = nextTypingMessageId;

      setTypingMessage({
        id: nextTypingMessageId,
        content: data.message.content,
        isComplete: false,
        visible: "",
      });
    } catch (error) {
      setErrorMessage(error.message ?? copy.defaultError);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex flex-col items-end sm:left-auto sm:right-6 sm:bottom-6">
      <div
        className={clsx(
          "mb-4 w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-2xl shadow-zinc-900/20 transition duration-200 dark:border-zinc-700/70 dark:bg-zinc-900 dark:shadow-black/40",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
        aria-hidden={!isOpen}
      >
        <header className="relative overflow-hidden border-b border-zinc-200/70 px-5 py-4 dark:border-zinc-700/70">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                {copy.eyebrow}
              </p>
              <h2 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {copy.title}
              </h2>
              <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                {copy.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label={copy.closeLabel}
            >
              <CloseIcon className="h-5 w-5 stroke-current" />
            </button>
          </div>
        </header>

        <div className="max-h-[26rem] overflow-y-auto px-5 py-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={clsx(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={clsx(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
                    message.role === "user"
                      ? "bg-orange-500 text-white"
                      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
                  )}
                >
                  <MessageContent
                    content={message.content}
                    role={message.role}
                  />
                </div>
              </div>
            ))}
            {typingMessage ? (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl bg-zinc-100 px-4 py-3 text-sm leading-6 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  <MessageContent
                    content={typingMessage.visible}
                    role="assistant"
                  />
                  <span className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-orange-500" />
                </div>
              </div>
            ) : null}
            {errorMessage ? (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
                  {errorMessage}
                </div>
              </div>
            ) : null}
            {isSending ? (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  {copy.thinking}
                </div>
              </div>
            ) : null}
            <div ref={scrollRef} />
          </div>
        </div>

        {messages.length === 1 ? (
          <div className="border-t border-zinc-200/70 px-5 py-3 dark:border-zinc-700/70">
            <div className="flex flex-wrap gap-2">
              {copy.starterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs text-zinc-600 transition hover:border-orange-500/50 hover:text-orange-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-orange-400/50 dark:hover:text-orange-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 border-t border-zinc-200/70 p-4 dark:border-zinc-700/70"
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            maxLength={1200}
            className="min-w-0 flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-orange-400 dark:focus:bg-zinc-950"
            placeholder={copy.placeholder}
            aria-label={copy.inputLabel}
          />
          <button
            type="submit"
            disabled={!input.trim() || isSending}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-zinc-50 transition hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-700 dark:hover:bg-orange-500"
            aria-label={copy.sendLabel}
          >
            <SendIcon className="h-5 w-5 stroke-current" />
          </button>
        </form>
      </div>

      <div
        className={clsx(
          "absolute bottom-20 right-0 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-xl shadow-zinc-900/15 transition duration-200 dark:border-zinc-700/70 dark:bg-zinc-900 dark:shadow-black/30",
          isGreetingVisible && !isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={closeGreeting}
          className="absolute right-2 top-2 rounded-full p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          aria-label={copy.dismissGreetingLabel}
        >
          <CloseIcon className="h-4 w-4 stroke-current" />
        </button>
        <button type="button" onClick={openChat} className="block text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
            {copy.greetingEyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {copy.greetingTitle}
          </p>
          <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
            {copy.greetingDescription}
          </p>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            return;
          }

          openChat();
        }}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/25 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/35 dark:shadow-black/30 dark:hover:bg-orange-400"
        aria-label={isOpen ? copy.closeLabel : copy.openLabel}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6 stroke-current" />
        ) : (
          <ChatIcon className="h-6 w-6 stroke-current" />
        )}
      </button>
    </div>
  );
}
