# Code Review — `personal-portfolio-nextjs`

Date: 2026-04-27
Branch: `main`
Reviewer: Claude (Opus 4.7)
Scope: Comprehensive review of source, configuration, content, API routes, i18n, middleware, build/lint, and adherence to [AGENT.md](AGENT.md).

This document is a read-only analysis. No code was changed.

---

## 1. Executive summary

The project is in solid shape overall — the visual language is consistent, the App Router structure is clean, and the Digital Twin API route is well-bounded with good guardrails. The site renders, lints with only 3 warnings, and follows the design intent in [AGENT.md](AGENT.md).

However, there are a handful of real issues that should be addressed before treating this as "production-ready":

- A **Tailwind v3 / v4 syntax mismatch** that almost certainly breaks gradients and a few spacing/outline utilities at runtime.
- **Significant amounts of dead code** (leftover from a previous "Bridge" project, an articles section that was deleted from routes but not from data, four stub pages, and several unused components).
- A few **lint warnings** for raw `<img>` usage, a `legacyBehavior` Link prop that is removed in Next.js 16, and some unused imports/variables on the home page.
- **Accessibility miss**: `<html lang="en">` is hardcoded regardless of locale.
- **i18n drift**: the header's nav labels are hardcoded inline rather than reading from [lib/shell-copy.js](lib/shell-copy.js), which itself still references the deleted "articles" route.
- The **Digital Twin route** is solid, but lacks rate limiting, request timeout, and an allowed-origin check — all relevant for a public endpoint that triggers a paid LLM call.

A prioritized action list is at the bottom (Section 13).

---

## 2. Project structure and configuration

### Strengths
- Clean App Router layout with the `[lng]` param at the right level.
- Route groups (`(default)`) used to share layout cleanly.
- `jsconfig.json` path alias `@/*` is consistent throughout the codebase.
- ESLint flat config is valid and uses `eslint-config-next/core-web-vitals` correctly.

### Issues

**[package.json:7](package.json#L7) — `--webpack` flag pins to Webpack instead of Turbopack.**
Next.js 16's default builder is Turbopack. `next build --webpack` opts out. If this was intentional (e.g. due to a plugin incompatibility), document why; otherwise switch to `next build` to take the default.

**[README.md](README.md) is still the stock `create-next-app` README.**
It contradicts [AGENT.md](AGENT.md) item 6 ("Keep README and documentation minimal") only in the sense that it adds no project-specific value. Either replace with a 5-line description (what it is, how to run dev, where the digital twin key lives) or remove it.

**[tailwind.config.mjs:2](tailwind.config.mjs#L2) — anonymous default export warning.**
Lint flags `import/no-anonymous-default-export`. Trivial fix: assign to a named const before exporting.

**[postcss.config.mjs](postcss.config.mjs) only loads `tailwindcss`.**
No `autoprefixer`. For Tailwind v3 (current) this matters for older Safari/iOS targets. Tailwind v4 ships its own autoprefixing, so if a v4 upgrade happens, this becomes a non-issue.

**[next.config.mjs](next.config.mjs)** is minimal and only sets `distDir` from an env var. No `output`, `images` domains, `experimental` flags. That's fine for the current scope, but consider:
- An `images.formats` setting if you want WebP/AVIF defaults.
- A redirect from `/` (currently handled by [proxy.js](proxy.js)) is OK as-is.

**[.gitignore:46](.gitignore#L46)** has `.env` listed at the bottom in addition to the `.env*` glob on line 37 — duplicate, harmless.

**`Resume.pdf` and `Profile.pdf` committed at the project root** rather than under `/public`. They're tracked binaries (~220 KB combined). The download route reads from `public/alexcv.pdf`, which exists separately. Either:
- Move these PDFs into `/public` if they're meant to be downloadable, or
- Add them to `.gitignore` if they're local working copies.

**No `.env.example`.** A new clone has no way to know that `OPENROUTER_API_KEY` is required without reading the API route source. Recommend adding a one-line example.

---

## 3. Critical: Tailwind v3 / v4 syntax mismatch

`tailwindcss` is pinned at `^3.4.1` in [package.json:30](package.json#L30) and `globals.css` uses v3 directives (`@tailwind base/components/utilities`). However, several files use **Tailwind v4-only utility names**:

| File | Line | v4 class | v3 equivalent |
|---|---|---|---|
| [app/[lng]/(default)/page.js:210](app/[lng]/(default)/page.js#L210) | hero portrait overlay | `bg-linear-to-br` | `bg-gradient-to-br` |
| [components/ui/header.jsx:147](components/ui/header.jsx#L147) | active nav underline | `bg-linear-to-r` | `bg-gradient-to-r` |
| [components/content/content-card.jsx:46](components/content/content-card.jsx#L46) | image scrim | `bg-linear-to-t` | `bg-gradient-to-t` |
| [components/ui/header.jsx:365](components/ui/header.jsx#L365) | avatar offset | `mt-[calc(--spacing(16)-(--spacing(3)))]` | needs concrete `calc()` values |
| [components/ui/header.jsx:374](components/ui/header.jsx#L374), [:406](components/ui/header.jsx#L406) | sticky offsets | `top-(--header-top,--spacing(6))` | v3 doesn't support paren shorthand or `--spacing()` |
| [components/home/newsletter.jsx:45](components/home/newsletter.jsx#L45) | email input | `outline-hidden`, `py-[calc(--spacing(2)-1px)]` | `outline-none` and a concrete pad value |

**Impact:** these classes silently produce no CSS in v3, so:
- Gradients (the orange accent line under the active nav item, the home image scrim, the home portrait fade) will not render.
- The header avatar/sticky math depends on CSS variables that aren't installed by v3.
- The newsletter input loses its outline reset (less visible because that component is unused — see Section 7).

**Recommended action — pick one:**
1. **Upgrade to Tailwind v4** (recommended): bump `tailwindcss` to `^4`, switch `globals.css` to `@import "tailwindcss";`, and the existing classes work as written. This is what the code was clearly written for. Tailwind v4 also drops the need for autoprefixer.
2. **Stay on v3**: rewrite the offending classes to v3 names (`bg-gradient-to-*`, `outline-none`) and replace `--spacing()` with concrete values.

Header-only files like `header.jsx` were almost certainly copied from a v4 template (Tailwind UI / Spotlight) — the `--spacing()` and paren-shorthand patterns are Tailwind UI v4 idioms.

---

## 4. App routes and pages

### `/[lng]` — locale root

[app/[lng]/layout.jsx](app/[lng]/layout.jsx) uses `generateStaticParams` for both languages — good. But:
- The layout destructures `lng` from `params` and **never uses it**. The intent (likely) was to set `<html lang={lng}>`, but the `<html>` tag is in [app/layout.jsx:11](app/layout.jsx#L11) with `lang="en"` hardcoded. **Spanish pages serve `lang="en"` to assistive tech** — an accessibility regression.
- The commented-out `<AOSInitializer />` and the unused `aos`/`aos/dist/aos.css` dependency add ~30 KB of dead code to install. Either re-enable AOS or drop the dependency.

[app/layout.jsx](app/layout.jsx) — root layout — has duplicated metadata vs. [app/[lng]/layout.jsx](app/[lng]/layout.jsx) and [app/[lng]/(default)/layout.js](app/[lng]/(default)/layout.js). Children win in Next.js metadata merging, so this is benign, but the duplication is noise.

### `/[lng]/page.js` (home)

[app/[lng]/(default)/page.js](app/[lng]/(default)/page.js) is the strongest page. A few cleanups:

- **Lines 17–20, 31–36**: `logoEncore`, `logoFiu`, `logoGE`, `logoUbif` are imported and `logoMap` is constructed, but **never referenced** anywhere in the file. Dead code.
- **Lines 42–44, 78–79**: `getRoleDateTime`, `startDate`, `endDate` are computed but only used inside a commented-out `<time>` block on lines 111–115. Dead code.
- **Lines 138–141**: the fallback that splits `copy.home.title` on `"|"` will never run because every locale provides a `titleLines` array. The fallback also wouldn't produce a useful split because the title strings (e.g. `"Practical Software  AI Workflows  Industrial Systems"`) contain no pipes — it would put the entire title on a single line. Misleading dead code.
- The page imports `getFeaturedProjects(lng, 3)` — fine — but the function default at [lib/site-content.js:1009](lib/site-content.js#L1009) is `limit = 2`. Either reconcile the default or accept this as an explicit per-call override.

### `/[lng]/about` and `/[lng]/projects/...`

[app/[lng]/(default)/about/page.js](app/[lng]/(default)/about/page.js) is clean.

[app/[lng]/(default)/projects/page.js](app/[lng]/(default)/projects/page.js) is clean.

[app/[lng]/(default)/projects/[slug]/page.js](app/[lng]/(default)/projects/[slug]/page.js) has issues:
- **Line 58**: raw `<img src={project.coverImage} ... />` — flagged by lint, no Next.js Image optimization on the largest above-the-fold image of the page.
- **Line 9**: `generateStaticParams()` returns only `{slug}`. Next.js will cross-product with parent's `[lng]` params, so this works, but consider returning `[{lng, slug}]` pairs explicitly so prebuilt routes are predictable.

### `/[lng]/contact` and `/[lng]/services`

Both clean and well-structured. [app/[lng]/(default)/services/page.js](app/[lng]/(default)/services/page.js) hardcodes a few English strings (`"What I build"`, `"Have a workflow that should not still be manual?"`, `"Save time"`, `"Reduce errors"`, `"Improve visibility"`, `"Contact me"`, `"Next move"`) that are not localized. For a bilingual site this is a content bug — Spanish visitors see English fragments mixed with Spanish.

Same issue in [app/[lng]/(default)/services/page.js:115–123](app/[lng]/(default)/services/page.js#L115-L123) — the tag pills.

### Stub pages

Four pages exist with placeholder content and are not in the nav:

- [app/[lng]/(default)/uses/page.js](app/[lng]/(default)/uses/page.js)
- [app/[lng]/(default)/blog/page.js](app/[lng]/(default)/blog/page.js)
- [app/[lng]/(default)/work/page.js](app/[lng]/(default)/work/page.js)
- [app/[lng]/(default)/speaking/page.js](app/[lng]/(default)/speaking/page.js)

[AGENT.md:15](AGENT.md#L15) says "no unnecessary pages, no generic blog emphasis, no clutter." These stub pages are exactly that — they're indexable URLs that say "coming soon" and are reachable via direct nav. Recommend deleting them.

### Articles routes

`app/[lng]/(default)/articles/page.js` and `app/[lng]/(default)/articles/[slug]/page.js` are deleted (visible in `git status`). However, [lib/site-content.js:4–488](lib/site-content.js#L4-L488) still contains the entire `articleEntries` array with 3 long bilingual articles, plus `getArticles`, `getFeaturedArticles`, `getArticleBySlug`, `getArticleSlugs` — none of which are imported anywhere. [lib/site-copy.js](lib/site-copy.js) also retains `home.featuredArticles`, `articles.metadata`, and `common.backToArticles` / `common.readArticle`. All dead.

If articles are coming back: keep the data and restore the routes. If not: delete `articleEntries` and the related getters/copy.

### `/not-found.jsx`

[app/not-found.jsx](app/not-found.jsx) is hardcoded English and links to `/`. Because of the locale prefix middleware, that path will be redirected — which works, but it would be cleaner to render a localized 404 inside the `[lng]` segment. Minor.

---

## 5. API routes

### `/api/digital-twin/route.js`

[app/api/digital-twin/route.js](app/api/digital-twin/route.js) is the strongest piece of the codebase:

**Strengths:**
- Reads API key from server env only ([line 24](app/api/digital-twin/route.js#L24)).
- Sanitizes/whitelists message roles, truncates to 12 messages × 1200 chars per message ([lines 8–21](app/api/digital-twin/route.js#L8-L21)).
- Handles JSON parse failure ([lines 35–39](app/api/digital-twin/route.js#L35-L39)).
- Rejects empty/non-user-tail conversations.
- Wraps the upstream fetch in a try/catch and returns a friendly 502.

**Gaps:**
- **No rate limiting.** Anyone can POST to `/api/digital-twin` and trigger a paid OpenRouter call. Even a basic in-memory token bucket per IP (or a Vercel KV / Upstash-backed limiter on production) would protect against accidental cost spikes.
- **No request timeout.** A slow OpenRouter response will hold the route handler open until the platform's default timeout (~10s on Vercel hobby, longer on others). Add an `AbortController` with a 20–25s deadline.
- **No allowed-origin check.** While same-origin is the typical case, any third party can POST cross-origin without preflight (this is `application/json` so it does trigger preflight from browsers, but server-to-server calls bypass that). For a portfolio site, a cheap defense: check `request.headers.get("origin")` and require it to match your production host.
- **HTTP-Referer is hardcoded** to `https://alexey-martinez.dev` ([line 56](app/api/digital-twin/route.js#L56)). If the actual production host differs, OpenRouter dashboards will show the wrong attribution.
- **No logging.** A single `console.warn` on upstream errors would help debugging without compromising privacy.

### `/api/download/route.jsx`

[app/api/download/route.jsx](app/api/download/route.jsx):
- File extension is `.jsx` but contains no JSX — should be `.js`.
- Uses synchronous `fs.readFileSync` ([line 10](app/api/download/route.jsx#L10)) which blocks the event loop. For a small (~200 KB) PDF on a serverless platform that's tolerable, but `fs.promises.readFile` is a one-line improvement.
- The download route serves `public/alexcv.pdf`. That file exists. However, the README/AGENT context implies multiple CV-style PDFs (`Resume.pdf`, `Profile.pdf` at the project root) — none of those are reachable, and the route hardcodes the filename. If the intent is to surface different PDFs (Profile vs Resume), this becomes parameterized.
- Note: the homepage and about page never link to this route — there is no "Download CV" button on screen. The route is unreferenced; either wire it up or remove it.

---

## 6. Components

### `components/ui/header.jsx`

Strong, but has issues beyond the Tailwind v3/v4 mismatch above:

- **Hardcoded i18n labels** ([lines 68–95](components/ui/header.jsx#L68-L95)). [lib/shell-copy.js](lib/shell-copy.js) exists for exactly this purpose, but the header inlines its own dictionary that still doesn't include `services`/`contact` in shell-copy.js. Pick one source of truth.
- **`useHomeHeroAvatar = false`** ([line 246](components/ui/header.jsx#L246)) is a hardcoded constant that gates roughly 100 lines of avatar-scaling CSS-variable code. The dead branch ([lines 305–334](components/ui/header.jsx#L305-L334) and [361–397](components/ui/header.jsx#L361-L397)) is ~25% of the file. Either wire up the home hero avatar feature or delete the dead branch.
- **`updateHeaderStyles` is verbose**. Sets up to 7 CSS variables on `:root` and reads `getBoundingClientRect` on every scroll/resize. With `passive: true` it's not a problem, but it could be migrated to a `useScroll`-style hook or to `IntersectionObserver` for less noise.
- **ARIA on theme toggle** ([line 190](components/ui/header.jsx#L190)) is fine.

### `components/ui/layout.jsx`

[components/ui/layout.jsx:1–14](components/ui/layout.jsx#L1-L14):
- The commented `<Header />` import and JSX should just be deleted — it's confusing.
- `<DigitalTwinChat />` is rendered globally at the layout level, including on every locale page. Good — it means the chat appears everywhere. Just be aware that it ships a "use client" component on every page; mitigated by the small footprint.

### `components/ui/button.jsx`

[components/ui/button.jsx](components/ui/button.jsx) is clean. Tiny note: when used as a `<Link>`, `download` is forwarded; when used as a `<button>`, `download` is silently dropped (because the spread is only on `props`). Acceptable.

### `components/digital-twin-chat.jsx`

[components/digital-twin-chat.jsx](components/digital-twin-chat.jsx) is well-built. Notes:

- **Typing animation** ([lines 84–121](components/digital-twin-chat.jsx#L84-L121)) at 3 chars / 18 ms ≈ 167 chars/s. For a 650-token reply (~3000 chars), that's ~18 seconds of animation after the response arrives. Consider speeding it up or just rendering instantly — visitors are already waiting for the LLM.
- **Error UX**: errors are typed out via the same `setTypingMessage` state as a regular reply ([lines 163–168](components/digital-twin-chat.jsx#L163-L168)). The error then becomes part of `messages` history and gets sent back on the next request as if it were the assistant's actual answer. That can poison subsequent context. Recommend rendering errors as ephemeral UI not appended to `messages`.
- **No `Esc` key to close** the panel and **no focus trap** when open. Minor accessibility polish.
- **No request abort** when the user closes the panel mid-request.
- **Hardcoded English** in starter questions ([lines 6–10](components/digital-twin-chat.jsx#L6-L10)), greeting copy ([lines 200–204](components/digital-twin-chat.jsx#L200-L204), [315–323](components/digital-twin-chat.jsx#L315-L323)), and aria-labels. Should accept locale or read from `getSiteCopy(lng)`.

### `components/about/resume.jsx`

[components/about/resume.jsx](components/about/resume.jsx) ignores the `role.logo` field provided in [lib/site-copy.js](lib/site-copy.js) and instead computes 2-letter initials. Either drop `logo` from the data or use it (preferred — initials for "Florida International University" are "FI", which is misleading vs. an FIU logo).

### `components/profile/profile-sidebar.jsx`

Clean. Reasonable.

### `components/content/content-card.jsx`

[components/content/content-card.jsx:41](components/content/content-card.jsx#L41) — raw `<img>` instead of `<Image>`. Lint warning. Project cards on home and projects pages all flow through this; switching to `next/image` will measurably help LCP.

### `components/ui/social-icons.jsx`, `components/about/social-link.jsx`, `components/about/mail-icon.jsx`, `components/ui/container.jsx`

All clean.

### `components/ui/footer/footer.jsx`

Big block of commented-out NavLink code ([lines 23–28](components/ui/footer/footer.jsx#L23-L28)). Either bring it back or delete it. The footer copy is also hardcoded English — Spanish visitors see "All rights reserved."

### Dead components (no inbound references)

The following files are not imported anywhere in `app/` or `components/`:

| File | Notes |
|---|---|
| [components/about/about.jsx](components/about/about.jsx) | Older hardcoded English about page. References `Newsletter` (commented) and `<Resume />` without props (which now requires `resume`). Replaced by the new `app/[lng]/(default)/about/page.js`. |
| [components/cta-component.jsx](components/cta-component.jsx) | "Bridge Newsletter" leftover from a previous project. Imports `@/assets/newsImg2.png` which doesn't exist — would fail to compile if imported. |
| [components/submit-email-component.jsx](components/submit-email-component.jsx) | Same Bridge styling (`#00A6FF`). |
| [components/form-submit.jsx](components/form-submit.jsx) | Same. |
| [components/success-component.jsx](components/success-component.jsx) | Same. |
| [components/title.jsx](components/title.jsx) | Bridge gradient title. |
| [components/card-ui.jsx](components/card-ui.jsx) | References missing `@/assets/horizontalDots.png`. |
| [components/home/nav-buttons.jsx](components/home/nav-buttons.jsx) | Links to `/work` and `/blog` (the stub pages). |
| [components/home/newsletter.jsx](components/home/newsletter.jsx) | Unused; form posts to `/thank-you` which doesn't exist. |
| [components/home/social-link.jsx](components/home/social-link.jsx) | Duplicates `components/about/social-link.jsx` with less polish. |
| [components/ui/aos-initializer.jsx](components/ui/aos-initializer.jsx) | Only the commented import in `app/[lng]/layout.jsx` references it. |
| [components/ui/card.jsx](components/ui/card.jsx) | Spotlight-template card. |
| [components/ui/download-button.jsx](components/ui/download-button.jsx) | Uses `legacyBehavior` on `<Link>`, which is **removed in Next.js 16**. If imported, it would throw at runtime. |
| [components/content/page-intro.jsx](components/content/page-intro.jsx) | Replaced by inline `<header>` blocks in each page. |

Recommend **deleting all of these** — they bloat search results, confuse readers, and `card-ui.jsx` and `cta-component.jsx` would fail to compile if anyone tried to use them.

---

## 7. Library code (`lib/`)

### `lib/site-copy.js`

[lib/site-copy.js](lib/site-copy.js) is the source of truth for content. It is well-structured. Concerns:

- **Stale `articles` block** ([lines 314–325](lib/site-copy.js#L314-L325) and [lines 730–740](lib/site-copy.js#L730-L740)) refers to a deleted route.
- **Stale `home.featuredArticles`** ([lines 163–169](lib/site-copy.js#L163-L169) and Spanish equivalent).
- **Stale `common.backToArticles` / `common.readArticle`**.
- **`new Date().getFullYear().toString()`** for the "Present" role's `dateTime` ([lines 110, 526](lib/site-copy.js#L110)) is computed at module load time. On server-rendered builds that's fine; on long-running serverless instances it stays accurate; the only edge case is a December→January date boundary on a long-warm container.

### `lib/site-content.js`

[lib/site-content.js](lib/site-content.js) — large data file. As above:
- The entire `articleEntries` array is dead code if articles aren't returning.
- `getFeaturedProjects` ([lines 1009–1024](lib/site-content.js#L1009-L1024)) hardcodes a sort priority for `"receipt-reader-ai-feasibility-mvp"`. If the goal is featuring, add a `featured: true` plus a separate `priority` field to the data. Right now the reader has to guess why one slug is special.
- **`role`, `timeline`, and `links.label`** are localized via the bilingual map; **`stack`** is not (just an array of strings). That's fine for stacks like "React 18 + Vite + Tailwind" but inconsistent — Spanish users see English stack labels mixed with localized prose. Acceptable, given technical terms.

### `lib/locale.js`

[lib/locale.js](lib/locale.js) — only a subset is referenced. `isSupportedLanguage`, `getPathLanguage`, `stripLanguageFromPath`, `replacePathLanguage`, `localizeValue`, `getIntlLocale` — verify which are actually called. (Quick grep suggests `getIntlLocale` is only used by [lib/formatters.js](lib/formatters.js), which itself is unused — see below.)

### `lib/formatters.js`

[lib/formatters.js](lib/formatters.js) — `formatMonthYear` and `formatLongDate`. **Not imported anywhere.** Dead.

### `lib/shell-copy.js`

[lib/shell-copy.js](lib/shell-copy.js) — defines nav labels, theme toggle copy, language switcher copy. **Not imported anywhere.** Header hardcodes its own copy. Either:
- Make the header consume `getShellCopy(lng)` (preferred — also fixes the missing `services`/`contact` keys), or
- Delete this file.

### `lib/digital-twin-context.js`

[lib/digital-twin-context.js](lib/digital-twin-context.js) — clean, well-written system prompt. Two things to consider:
- The current system prompt cites email `alexeygallegomartinez@gmail.com` ([line 7](lib/digital-twin-context.js#L7)). That matches `lib/site-copy.js`. Good consistency.
- Career claims (e.g. "Improved process reliability from roughly 80% to 99%") are factual statements the model will repeat. Make sure these match the resume / projects pages exactly — currently `lib/site-content.js` says the cap analyzer "improved cap quality outcomes" without the 80→99% number, while the system prompt asserts it. Align both.

---

## 8. i18n and middleware

### Settings / instance ([app/i18n/](app/i18n/))

- [app/i18n/settings.js](app/i18n/settings.js) defines `fallbackLng`, `languages`, `cookieName`, and `getOptions`. Used by the proxy and by the unused i18next instance.
- [app/i18n/index.js](app/i18n/index.js) creates an `i18next` instance backed by `app/i18n/locales/{en,es}/translation.json`. Verify these JSONs are actually used — **all rendered text comes through `getSiteCopy()`**, not `useTranslation()`. The whole `i18next` setup may be dead code from an earlier scaffolding step.

If unused, save bundle size and complexity by removing:
- [app/i18n/index.js](app/i18n/index.js)
- [app/i18n/locales/en/translation.json](app/i18n/locales/en/translation.json)
- [app/i18n/locales/es/translation.json](app/i18n/locales/es/translation.json)
- The `i18next`, `i18next-resources-to-backend`, and `react-i18next` dependencies in [package.json](package.json).

The `accept-language` package is still needed for the proxy — keep that.

### `proxy.js`

[proxy.js](proxy.js) is the Next.js 16 renamed middleware (`middleware.js` → `proxy.js`, exported function `proxy`). Logic:

- If no locale prefix and not `_next`, redirect to `/{lng}{path}` based on cookie or `Accept-Language`. Good.
- If `referer` exists, set the cookie based on the referer's locale. **This is the typical i18next-Next.js example pattern**, but it has a subtle issue: when the user is on `/es/about` and navigates internally to `/es/contact`, the referer language is `es` and the cookie is set to `es` correctly. But when the user clicks an external link or refreshes from Google referer, the referer's locale (none) is fed into `acceptLanguage.get(null)` returning `null`, then `if (lngInReferer)` short-circuits the cookie write. So the bug is only theoretical. OK as written.

The matcher excludes `/api`, static, image, manifest, webmanifest, favicon, and any path with a dot. Reasonable.

---

## 9. Accessibility

- **`<html lang>` is always `"en"`** (Section 4). Fix by reading the locale from the segment-level layout and setting `<html lang>` either via `app/layout.jsx` (would need to become a server component that reads cookies/headers) or by moving the `<html>` tag down to `app/[lng]/layout.jsx`.
- **Alt text**: portrait images use `alt=""` (decorative) on the home page and `alt={copy.profile.portraitAlt}` on the about page — good consistency.
- **Heading hierarchy**: home page uses `<h1>` for the hero, then `<h2>` and `<h3>` consistently — good. Project detail page uses `<h1>` for the title, then `<h2>` for sections — good.
- **Keyboard**: chat panel has no `Esc` close, no focus trap, no return focus to trigger. Minor.
- **Color contrast**: `text-zinc-400 dark:text-zinc-500` on `bg-zinc-50 dark:bg-zinc-950` is borderline at small sizes. Verify with a contrast checker.
- **`aria-label="Send message"`** on the chat send button — good.

---

## 10. SEO and metadata

- Each page exports `generateMetadata` returning `title`/`description` from copy — good.
- **No Open Graph / Twitter Card metadata.** A portfolio site benefits from rich social-share previews. Add `openGraph` and `twitter` blocks to each page's metadata, or set defaults in `app/[lng]/layout.jsx`.
- **No `alternates.canonical` or `alternates.languages`.** For a bilingual site, declare `<link rel="alternate" hrefLang="...">` so search engines understand `/en/about` and `/es/about` are the same page in two languages. Next.js metadata supports this directly via `alternates.languages`.
- **No `robots.txt` or `sitemap.xml`.** Both are trivial in App Router (`app/robots.js`, `app/sitemap.js`). Add them.
- **No favicon/icon configuration** beyond `app/favicon.ico`. The commented-out `icons.icon` block in [app/[lng]/layout.jsx:9–11](app/[lng]/layout.jsx#L9-L11) suggests it was once intended.

---

## 11. Security and operational concerns

- **API key**: only used server-side via `process.env.OPENROUTER_API_KEY`. Confirmed safe.
- **No rate limiting** on `/api/digital-twin` (Section 5).
- **No request timeout** on the upstream OpenRouter call (Section 5).
- **No allowed-origin check** on the API (Section 5).
- **No logging / observability**. A few `console.warn`s for upstream failures would help during incidents.
- **`.env`** is tracked locally only and is in `.gitignore`. Confirm it's not in git history (`git log --all --full-history -- .env`).
- **Public files**: `Resume.pdf` and `Profile.pdf` in the project root — if these contain personally identifying information beyond what's already on the public site, decide whether they should ship to production at all.

---

## 12. Spec adherence (`AGENT.md`)

| Requirement | Status |
|---|---|
| Polished web app | ✅ |
| Full-stack systems engineer brand | ✅ |
| Home, About, Projects, Services, Contact, AI Digital Twin | ✅ all present |
| Home communicates "enterprise meets edgy" | ✅ |
| About explains background, working style, etc. | ✅ |
| Projects = case studies (problem/architecture/role/stack/outcomes) | ✅ |
| Services = business services | ✅ |
| Contact = professional, slightly funny, direct | ✅ |
| Digital Twin grounded in career context | ✅ |
| Slick, gorgeous UI/UX | ✅ (with caveats from Tailwind v3/v4 issue) |
| **No unnecessary pages** | ❌ — `uses`, `blog`, `work`, `speaking` are stubs |
| **No clutter** | ⚠️ — significant dead code |
| Next.js App Router | ✅ |
| Tailwind | ✅ (with v3/v4 mismatch) |
| Server components by default | ✅ |
| Digital Twin client-rendered, server API route | ✅ |
| OpenRouter, model `openai/gpt-oss-120b` | ✅ ([app/api/digital-twin/route.js:4](app/api/digital-twin/route.js#L4)) |
| `OPENROUTER_API_KEY` server-only | ✅ |
| Career-grounded system prompt | ✅ |
| No auth, no DB persistence | ✅ |
| **No emojis** | ✅ verified — none in source |
| Minimal README | ❌ — still default `create-next-app` |

---

## 13. Recommended remediations (prioritized)

### P0 — Functional / correctness

1. **Resolve the Tailwind v3/v4 mismatch** (Section 3). Recommended path: upgrade `tailwindcss` to `^4`, switch `globals.css` to `@import "tailwindcss";`. Verify gradients (active nav underline, home portrait scrim, project card scrim) actually render.
2. **Set `<html lang>` correctly per locale** (Section 4 / 9). Move the `<html>` tag from [app/layout.jsx](app/layout.jsx) into [app/[lng]/layout.jsx](app/[lng]/layout.jsx) (using the `lng` param).
3. **Replace `<img>` with `next/image`** in [app/[lng]/(default)/projects/[slug]/page.js:58](app/[lng]/(default)/projects/[slug]/page.js#L58) and [components/content/content-card.jsx:41](components/content/content-card.jsx#L41).
4. **Localize hardcoded English fragments** in [app/[lng]/(default)/services/page.js](app/[lng]/(default)/services/page.js) (e.g. "What I build", "Save time", "Reduce errors", "Improve visibility", "Contact me", "Next move").
5. **Fix the digital twin error UX**: do not append API errors to the conversation `messages` history — render them as ephemeral UI ([components/digital-twin-chat.jsx:163–168](components/digital-twin-chat.jsx#L163-L168)).

### P1 — Spec drift / cleanup

6. **Delete stub pages**: `uses`, `blog`, `work`, `speaking` (Section 4).
7. **Decide on articles**: either restore the routes or delete `articleEntries` data and the related copy (Section 4 / 7).
8. **Delete dead components** (Section 6 table — 14 files). At minimum, delete the ones that would fail to compile if imported (`cta-component.jsx`, `card-ui.jsx`, `download-button.jsx`).
9. **Pick one source of truth for shell copy** — either wire [lib/shell-copy.js](lib/shell-copy.js) into [components/ui/header.jsx](components/ui/header.jsx) or delete `shell-copy.js`.
10. **Remove unused i18next plumbing** if `useTranslation` is not actually called: [app/i18n/index.js](app/i18n/index.js), the `locales/*.json` files, and the `i18next`, `react-i18next`, `i18next-resources-to-backend` deps.
11. **Remove unused AOS dependency** (or re-enable it).
12. **Remove unused imports / dead variables on the home page** (Section 4: logo imports, `getRoleDateTime`, `startDate`/`endDate`, `titleLines` fallback split).
13. **Remove the dead `useHomeHeroAvatar` branch** from [components/ui/header.jsx](components/ui/header.jsx) (or actually use the feature).
14. **Custom README.md** — replace the boilerplate with a 5–10 line project description.

### P2 — Hardening

15. **Add rate limiting to `/api/digital-twin`** (in-memory bucket per IP for dev, Vercel KV / Upstash for prod). Section 5.
16. **Add `AbortController` timeout** (~25s) to the OpenRouter fetch in [app/api/digital-twin/route.js](app/api/digital-twin/route.js).
17. **Add an allowed-origin check** on the API route (read `request.headers.get("origin")` and require match against `process.env.NEXT_PUBLIC_SITE_URL` or similar).
18. **Add `console.warn` logging** for upstream OpenRouter failures so production issues are debuggable.
19. **Fix `HTTP-Referer`** in the OpenRouter call to use the actual deployed URL.
20. **Add `.env.example`** documenting `OPENROUTER_API_KEY`.
21. **Use `role.logo` in [components/about/resume.jsx](components/about/resume.jsx)** instead of the initials fallback (or remove `logo` from data).

### P3 — Polish

22. **Add OG/Twitter metadata defaults** in the locale layout.
23. **Add `alternates.languages`** to each page's metadata so the EN/ES variants are linked for SEO.
24. **Add `app/robots.js` and `app/sitemap.js`**.
25. **Localize the not-found page** under `app/[lng]/`.
26. **Tighten chat UX**: `Esc` to close, focus trap when open, abort fetch on close, faster typing animation (or none).
27. **Footer copy localization** (currently English-only "All rights reserved.").
28. **Switch [app/api/download/route.jsx](app/api/download/route.jsx) to `route.js` and use `fs.promises.readFile`.** Or delete the route — nothing on the site currently links to it.
29. **Move `Resume.pdf` / `Profile.pdf` to `/public`** (or `.gitignore` them).
30. **Reconcile `npm run build --webpack`** — drop the flag to use Turbopack, or document why it's pinned to Webpack.

### P4 — Nitpicks

31. Tailwind config anonymous default export warning ([tailwind.config.mjs:2](tailwind.config.mjs#L2)).
32. Consolidate metadata declarations (root layout, `[lng]` layout, `(default)` layout all set the same title/description).
33. Reconsider `getFeaturedProjects` hardcoded sort priority on a specific slug.
34. Align the system prompt's "80→99%" claim with the actual project copy in [lib/site-content.js](lib/site-content.js).

---

## 14. Lint output

```
npm run lint
> eslint .

app/[lng]/(default)/projects/[slug]/page.js
  58:15  warning  Using `<img>` could result in slower LCP and higher bandwidth …  @next/next/no-img-element

components/content/content-card.jsx
  41:9   warning  Using `<img>` could result in slower LCP and higher bandwidth …  @next/next/no-img-element

tailwind.config.mjs
  2:1    warning  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

✖ 3 problems (0 errors, 3 warnings)
```

All addressed in remediations P0-3, P0-3 (dup), and P4-31 above.

---

## 15. What's good

- The content/copy is genuinely well-written, specific, and on-brand.
- The bilingual content model (EN/ES) is consistent and well-maintained where used.
- The Digital Twin route is concise, well-bounded, and free of common LLM-app footguns.
- The visual design is cohesive — the orange-on-zinc accent system is applied consistently.
- The App Router structure with `[lng]` and `(default)` is the right shape.
- Accessibility is reasonable and intentional in most places.
- The spec in [AGENT.md](AGENT.md) is largely honored.

The bulk of the cleanup is **deleting**, not rewriting.
