import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import { getSiteCopy } from "@/lib/site-copy";
import { createPageMetadata } from "@/lib/seo";
import automationImage from "@/public/industrial-automation-platform.png";
import operationsImage from "@/public/tes.png";
import receiptImage from "@/public/receipt-reader-mvp.png";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/services", getSiteCopy(lng).services.metadata);
}

export default async function ServicesPage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);
  const [featuredOutcome, ...supportingOutcomes] = copy.services.outcomes;

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/20">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-[30rem] w-[30rem] bg-[radial-gradient(circle,_rgba(249,115,22,0.22),transparent_62%)] blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
                  {copy.services.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
                  {copy.services.title}
                </h2>
                <p className="mt-6 text-base leading-7 text-zinc-300">
                  {copy.services.description}
                </p>
              </div>

              <div className="relative min-h-[27rem]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.2),transparent_55%)]"
                />
                <div className="absolute left-0 top-0 w-[82%] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
                  <Image
                    src={operationsImage}
                    alt="Internal operations platform interface"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 42rem, 100vw"
                  />
                </div>
                <div className="absolute bottom-12 right-0 w-[58%] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
                  <Image
                    src={receiptImage}
                    alt="AI receipt analysis interface"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 30rem, 80vw"
                  />
                </div>
                <div className="absolute bottom-0 left-8 w-[52%] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
                  <Image
                    src={automationImage}
                    alt="Industrial automation dashboard interface"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 28rem, 80vw"
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
                    {copy.services.buildEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
                    {copy.services.offerTitle}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-zinc-300">
                  {copy.services.buildDescription}
                </p>
              </div>
            </div>

            <div className="relative mt-8 grid gap-5 md:grid-cols-2">
              {copy.services.offers.map((offer, index) => (
                <article
                  key={offer.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.07]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
                    0{index + 1} / {copy.services.offerMeta[index]}
                  </p>
                  <h4 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">
                    {offer.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {offer.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {copy.services.offerTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 bg-[radial-gradient(circle,_rgba(249,115,22,0.22),transparent_70%)] blur-2xl"
              />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-lg font-semibold tracking-tight text-zinc-50">
                    {copy.services.workflowCtaTitle}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {copy.services.workflowCtaDescription}
                  </p>
                </div>
                <Button
                  href={`/${lng}/contact`}
                  className="shrink-0 px-5 py-3"
                >
                  {copy.services.workflowCtaLabel}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 sm:mt-24">
          <div className="relative mb-20 w-full px-2 text-center sm:mb-24 sm:px-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_32%,_transparent_72%)] blur-3xl"
            />
            <p className="relative mx-auto max-w-5xl py-14 text-xl font-medium leading-9 text-zinc-700 dark:text-zinc-200 sm:text-2xl sm:leading-10">
              {copy.services.outcomesStatement.before}{" "}
              <span className="font-semibold text-orange-500">
                {copy.services.outcomesStatement.highlightOne}
              </span>{" "}
              {copy.services.outcomesStatement.middle}{" "}
              <span className="font-semibold text-orange-500">
                {copy.services.outcomesStatement.highlightTwo}
              </span>
              .
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="flex min-h-[32rem] flex-col rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {copy.services.processTitle}
              </h2>
              <ol className="mt-10 flex flex-1 flex-col justify-between gap-10">
                {copy.services.process.map((step, index) => (
                  <li key={step} className="relative flex gap-5">
                    {index < copy.services.process.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-12 h-[calc(100%+2.5rem)] w-px bg-zinc-200 dark:bg-zinc-700"
                      />
                    ) : null}
                    <span className="relative z-10 mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white shadow-xl shadow-orange-500/25">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative flex min-h-[32rem] flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 bg-[radial-gradient(circle,_rgba(249,115,22,0.18),transparent_70%)] blur-2xl"
              />
              <h2 className="relative text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {copy.services.outcomesTitle}
              </h2>
              <div className="relative mt-8 grid flex-1 gap-4 sm:grid-cols-2">
                {featuredOutcome ? (
                  <div
                    key={featuredOutcome}
                    className="min-h-36 rounded-2xl border border-orange-400/30 bg-orange-50 p-5 shadow-lg shadow-orange-500/5 dark:border-orange-400/25 dark:bg-orange-500/10 sm:col-span-2"
                  >
                    <span className="text-2xl font-semibold text-orange-500">
                      +
                    </span>
                    <p className="mt-4 max-w-xl text-lg font-medium leading-8 text-zinc-800 dark:text-zinc-100">
                      {featuredOutcome}
                    </p>
                  </div>
                ) : null}
                {supportingOutcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="min-h-32 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-5 dark:border-zinc-700/60 dark:bg-zinc-950/60"
                  >
                    <span className="text-2xl font-semibold text-orange-500">
                      +
                    </span>
                    <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-black/20 sm:mt-24 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
                {copy.services.nextMoveEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
                {copy.services.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                {copy.services.ctaDescription}
              </p>
            </div>
            <div>
              <Button
                href={`/${lng}/contact`}
                variant="accent"
              >
                {copy.services.ctaLabel}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
