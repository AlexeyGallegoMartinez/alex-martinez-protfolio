"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FallbackScreen({
  code,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  resetLabel,
  onReset,
  checks = [],
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <section className="relative overflow-hidden py-10 text-center sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[72rem] max-w-none -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_34%,_transparent_72%)] blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
            {eyebrow}
          </p>
          <p className="mt-6 text-sm font-semibold text-zinc-400 dark:text-zinc-500">
            {code}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {onReset ? (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
              >
                {resetLabel}
              </button>
            ) : null}
            {primaryAction ? (
              <Button href={primaryAction.href} variant="accent">
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </Button>
            ) : null}
            {tertiaryAction ? (
              <Button href={tertiaryAction.href} variant="secondary">
                {tertiaryAction.label}
              </Button>
            ) : null}
          </div>
        </div>

        {checks.length > 0 ? (
          <div className="relative mx-auto mt-14 grid max-w-5xl gap-4 text-left md:grid-cols-3">
            {checks.map((check, index) => (
              <article
                key={check.title}
                className="rounded-3xl border border-zinc-200/70 bg-white/82 p-5 shadow-sm shadow-zinc-900/5 backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {check.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {check.description}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </Container>
  );
}
