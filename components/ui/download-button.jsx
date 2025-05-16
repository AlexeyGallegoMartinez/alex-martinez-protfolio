import Link from "next/link";

export function DownloadButton({ filePath, fileName }) {
  return (
    <Link href={filePath} download={fileName} legacyBehavior>
      <a className="inline-flex items-center justify-center w-full gap-2 rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 active:bg-zinc-900 transition">
        Download CV
      </a>
    </Link>
  );
}
