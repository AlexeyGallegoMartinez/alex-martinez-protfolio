import Link from "next/link";

function ActionArrowIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M4.75 11.25L11.25 4.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4.75H11.25V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        <div className="mt-auto border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <span className="block min-w-0 truncate text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            {meta}
          </span>
          <div className="mt-4 flex justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1.5 text-sm font-semibold text-orange-600 shadow-sm shadow-orange-100/50 transition duration-300 group-hover:border-orange-300 group-hover:bg-orange-100 group-hover:text-orange-700 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300 dark:shadow-none dark:group-hover:border-orange-300/30 dark:group-hover:bg-orange-500/15 dark:group-hover:text-orange-200">
              {ctaLabel}
              <ActionArrowIcon className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
      <Link href={href} aria-label={title} className="absolute inset-0 z-10" />
    </article>
  );
}
