function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function getDateLabel(value) {
  return typeof value === "string" ? value : value.label;
}

function getDateTime(value) {
  return typeof value === "string" ? value : value.dateTime;
}

function Role({ role }) {
  const startLabel = getDateLabel(role.start);
  const startDate = getDateTime(role.start);
  const endLabel = getDateLabel(role.end);
  const endDate = getDateTime(role.end);

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
        {role.company
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </div>
      <div className="min-w-0 flex-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </h3>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </p>
          </div>
          <p
            className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500 sm:text-right"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{" "}
            <span aria-hidden="true">-</span>{" "}
            <time dateTime={endDate}>{endLabel}</time>
          </p>
        </div>
        {role.summary ? (
          <p className="mt-3 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
            {role.summary}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export default function Resume({ resume }) {
  return (
    <div className="w-full rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-8">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{resume.title}</span>
      </h2>
      <ol className="mt-8 space-y-8">
        {resume.roles.map((role) => (
          <Role key={`${role.company}-${role.title}`} role={role} />
        ))}
      </ol>
    </div>
  );
}
