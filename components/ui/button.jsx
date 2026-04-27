import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 shadow-sm shadow-zinc-900/10 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20 active:bg-orange-600 active:text-white/80 dark:bg-zinc-700 dark:hover:bg-orange-500 dark:hover:text-white dark:active:bg-orange-600 dark:active:text-white/80",
  secondary:
    "bg-zinc-50 font-medium text-zinc-900 shadow-sm shadow-zinc-900/5 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20 active:bg-orange-600 active:text-white/80 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-orange-500 dark:hover:text-white dark:active:bg-orange-600 dark:active:text-white/80",
  accent:
    "bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-400 hover:text-white hover:shadow-orange-500/30 active:bg-orange-600 active:text-white/80",
};

export function Button({ variant = "primary", download, className, ...props }) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} download={download} />
  );
}
