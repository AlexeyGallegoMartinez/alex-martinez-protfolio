import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import { formatLongDate } from "@/lib/formatters";
import { getSiteCopy } from "@/lib/site-copy";
import { getArticleBySlug, getArticleSlugs } from "@/lib/site-content";

export function generateStaticParams() {
  return getArticleSlugs();
}

export async function generateMetadata({ params }) {
  const { lng, slug } = await params;
  const article = getArticleBySlug(slug, lng);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} – Alex Martinez`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }) {
  const { lng, slug } = await params;
  const copy = getSiteCopy(lng);
  const article = getArticleBySlug(slug, lng);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <Link
          href={`/${lng}/articles`}
          className="text-sm font-medium text-orange-500 transition hover:text-orange-600 dark:hover:text-orange-400"
        >
          {copy.common.backToArticles}
        </Link>
        <div className="mt-10 grid gap-16 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {article.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {article.summary}
            </p>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-12 space-y-12">
              {article.body.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.codeBlocks?.map((block, index) => (
                      <pre
                        key={`${section.title}-code-${index}`}
                        className="overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                      >
                        <code className={`language-${block.language ?? "text"}`}>
                          {block.code}
                        </code>
                      </pre>
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
                    {copy.common.published}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {formatLongDate(article.publishedAt, lng)}
                  </dd>
                </div>
                {article.updatedAt ? (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      {copy.common.updated}
                    </dt>
                    <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                      {formatLongDate(article.updatedAt, lng)}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.category}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {article.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    {copy.common.topics}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
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
