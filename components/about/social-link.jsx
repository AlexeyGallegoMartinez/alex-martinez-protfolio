import Link from "next/link";
import clsx from "clsx";

export default function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  linkClassName,
  iconClassName,
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className={clsx(
          "group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500",
          linkClassName,
        )}
      >
        <Icon
          className={clsx(
            "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500",
            iconClassName,
          )}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}
