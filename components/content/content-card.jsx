import Link from "next/link";

export default function ContentCard({
  href,
  image,
  title,
  description,
  eyebrow,
  meta,
  ctaLabel,
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10 focus-within:ring-2 focus-within:ring-orange-500 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/35 via-zinc-950/0 to-white/10" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {eyebrow ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-orange-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-100 pt-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <span className="truncate">{meta}</span>
          <span className="font-medium text-orange-500 transition group-hover:translate-x-0.5">
            {ctaLabel}
          </span>
        </div>
      </div>
      <Link href={href} aria-label={title} className="absolute inset-0 z-10" />
    </article>
  );
}
