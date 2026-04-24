import clsx from "clsx";

export default function PageIntro({ eyebrow, title, description, className }) {
  return (
    <header className={clsx("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </header>
  );
}
