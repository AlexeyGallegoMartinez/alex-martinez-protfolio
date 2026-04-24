import { Button } from "@/components/ui/button";
import ContentCard from "@/components/content/content-card";

export default function ContentSection({
  eyebrow,
  title,
  description,
  items,
  ctaHref,
  ctaLabel,
}) {
  return (
    <section className="mt-24 sm:mt-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
        {ctaHref && ctaLabel ? (
          <Button href={ctaHref} variant="secondary" className="shrink-0 self-start">
            {ctaLabel}
          </Button>
        ) : null}
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ContentCard key={item.href} {...item} />
        ))}
      </div>
    </section>
  );
}
