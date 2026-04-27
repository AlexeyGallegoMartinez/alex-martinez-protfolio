# Alexey Martinez Portfolio

Personal portfolio built with Next.js App Router, Tailwind CSS, bilingual EN/ES routes, project case studies, services pages, and an OpenRouter-powered Digital Twin chat.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`; the proxy redirects to `/en` or `/es`.

## Environment

Copy `.env.example` to `.env.local` and set `OPENROUTER_API_KEY` for the Digital Twin API. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin for SEO metadata and API origin checks.
