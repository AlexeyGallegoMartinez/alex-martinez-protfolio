import clsx from "clsx";

export function BusinessOutcomeQuote({ statement, className }) {
  return (
    <section className={clsx("mt-20 sm:mt-24", className)}>
      <div className="relative w-full px-2 text-center sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[64rem] max-w-none -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.3),_rgba(249,115,22,0.12)_32%,_transparent_72%)] blur-3xl"
        />
        <p className="relative mx-auto max-w-5xl py-14 text-xl font-medium leading-9 text-zinc-700 dark:text-zinc-200 sm:text-2xl sm:leading-10">
          {statement.before}{" "}
          <span className="font-semibold text-orange-500">
            {statement.highlightOne}
          </span>{" "}
          {statement.middle}{" "}
          <span className="font-semibold text-orange-500">
            {statement.highlightTwo}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
