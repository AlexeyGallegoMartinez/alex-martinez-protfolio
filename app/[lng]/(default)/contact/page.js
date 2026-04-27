import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import { getSiteCopy } from "@/lib/site-copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/contact", getSiteCopy(lng).contact.metadata);
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ContactPage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/95 px-6 py-12 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] bg-[radial-gradient(circle,_rgba(249,115,22,0.18)_0%,_rgba(249,115,22,0.08)_38%,_transparent_70%)] blur-3xl" />
          <header className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {copy.contact.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {copy.contact.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.contact.description}
            </p>
          </header>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-2 sm:mt-16">
          {copy.contact.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {card.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
                {card.action}
                <ArrowIcon className="h-4 w-4 stroke-current transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-zinc-200/70 bg-zinc-950 p-8 shadow-sm shadow-black/30 dark:border-zinc-700/60 sm:mt-16 sm:p-10">
          <p className="max-w-3xl text-lg leading-8 text-zinc-100">
            {copy.contact.note}
          </p>
        </section>
      </Container>
    </>
  );
}
