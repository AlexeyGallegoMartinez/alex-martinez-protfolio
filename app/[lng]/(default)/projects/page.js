import { Container } from "@/components/ui/container";
import ContentCard from "@/components/content/content-card";
import { Header } from "@/components/ui/header";
import { getSiteCopy } from "@/lib/site-copy";
import { getProjects } from "@/lib/site-content";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return getSiteCopy(lng).projects.metadata;
}

export default async function ProjectsPage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);
  const projects = getProjects(lng);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/95 px-6 py-12 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),transparent_55%)]" />
          <header className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {copy.projects.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {copy.projects.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.projects.description}
            </p>
          </header>
        </section>

        <section className="mt-14 sm:mt-16">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const stackPreview = project.stack.slice(0, 2).join(" · ");

              return (
                <ContentCard
                  key={project.slug}
                  href={`/${lng}/projects/${project.slug}`}
                  image={project.coverImage}
                  title={project.title}
                  description={project.summary}
                  eyebrow={project.role}
                  meta={
                    stackPreview
                      ? `${project.timeline} · ${stackPreview}`
                      : project.timeline
                  }
                  ctaLabel={copy.common.viewProject}
                />
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
}
