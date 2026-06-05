import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import { getSiteCopy } from "@/lib/site-copy";
import { getProjectBySlug, getProjectSlugs } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({ params }) {
  const { lng, slug } = await params;
  const project = getProjectBySlug(slug, lng);

  if (!project) {
    return {};
  }

  return {
    ...createPageMetadata(lng, `/projects/${slug}`, {
      title: `${project.title} – Alexey Martinez`,
      description: project.summary,
    }),
  };
}

export default async function ProjectDetailPage({ params }) {
  const { lng, slug } = await params;
  const copy = getSiteCopy(lng);
  const project = getProjectBySlug(slug, lng);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <Link
          href={`/${lng}/projects`}
          className="text-sm font-medium text-orange-500 transition hover:text-orange-600 dark:hover:text-orange-400"
        >
          {copy.common.backToProjects}
        </Link>
        <div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {project.role}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 60rem, 100vw"
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-12 space-y-12">
              {project.body.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20">
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.role}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.timeline}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.timeline}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.stack}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.links}
                  </dt>
                  <dd className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block font-medium text-orange-500 transition hover:text-orange-600 dark:hover:text-orange-400"
                      >
                        {link.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
