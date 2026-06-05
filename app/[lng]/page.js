import Image from "next/image";
import Link from "next/link";

import SocialLink from "@/components/about/social-link";
import MailIcon from "@/components/about/mail-icon";
import { BusinessOutcomeQuote } from "@/components/content/business-outcome-quote";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/ui/header";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/ui/social-icons";
import { getSiteCopy } from "@/lib/site-copy";
import { getProjectBySlug } from "@/lib/site-content";
import { createPageMetadata } from "@/lib/seo";
import portraitImage from "@/public/images/portrait.png";

const iconMap = {
  x: XIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailIcon,
};

function getRoleDateLabel(value) {
  return typeof value === "string" ? value : value.label;
}

function getYearNumber(value) {
  const label = getRoleDateLabel(value);
  const match = label.match(/\d{4}/);

  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function ExperienceSection({ copy }) {
  const roles = [...copy.profile.resume.roles].sort(
    (a, b) => getYearNumber(a.start) - getYearNumber(b.start),
  );

  return (
    <section className="mt-20 sm:mt-24">
      <div className="rounded-3xl border border-zinc-200/70 bg-white p-8 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
            {copy.home.credibility.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {copy.home.credibility.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {copy.home.credibility.description}
          </p>
        </div>

        <div className="mt-10">
          <ol className="grid w-full gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, roleIndex) => {
              const startLabel = getRoleDateLabel(role.start);
              const summary =
                role.summary ??
                `${role.title} focused on practical system delivery and operational reliability.`;

              return (
                <li key={`${role.company}-${role.title}`} className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <p className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {startLabel}
                    </p>
                    {roleIndex < roles.length - 1 ? (
                      <span className="h-px min-w-0 flex-1 bg-zinc-200 dark:bg-zinc-700" />
                    ) : null}
                  </div>

                  <article className="mt-6 flex min-h-[10rem] flex-col gap-1">
                    <div className="">
                      <p className="text-[0.65rem] leading-4 font-bold uppercase tracking-[0.2em] text-orange-500">
                        {role.company}
                      </p>
                    </div>

                    <h3 className=" text-[0.80rem] leading-5 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {role.title}
                    </h3>

                    <p className=" text-xs leading-6 text-zinc-600 dark:text-zinc-400">
                      {summary}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}

function ProjectImpactSection({ copy, projects, ctaHref }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 sm:mt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
            {copy.home.selectedProjects.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {copy.home.selectedProjects.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {copy.home.selectedProjects.description}
          </p>
        </div>
        <Button
          href={ctaHref}
          variant="secondary"
          className="shrink-0 self-start"
        >
          {copy.home.selectedProjects.cta}
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.href}
            aria-label={`${copy.common.viewProject}: ${project.title}`}
            className="group block h-full overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:border-orange-300/70 hover:shadow-2xl hover:shadow-zinc-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 dark:hover:border-orange-400/40 dark:hover:shadow-black/30"
          >
            <article className="flex h-full flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/45 via-zinc-950/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-800 shadow-sm shadow-zinc-900/10 backdrop-blur dark:bg-zinc-950/80 dark:text-zinc-100">
                  {project.kicker}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-orange-500">
                  {project.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>

                <div className="mt-5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {copy.home.selectedProjects.accomplishmentLabel}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {project.accomplishment}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 pb-6">
                  {project.metrics.map((metric) => (
                    <div
                      key={`${project.slug}-${metric.label}`}
                      className="rounded-2xl border border-orange-200/70 bg-orange-50 px-4 py-3 dark:border-orange-400/20 dark:bg-orange-500/10"
                    >
                      <p className="text-2xl font-semibold tracking-tight text-orange-600 dark:text-orange-300">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-orange-900/70 dark:text-orange-100/70">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-auto inline-flex w-fit rounded-full bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white transition group-hover:bg-orange-500 dark:bg-zinc-100 dark:text-zinc-950 dark:group-hover:bg-orange-400">
                  {copy.common.viewProject}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/", getSiteCopy(lng).home.metadata);
}

export default async function HomePage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);
  const titleLines = copy.home.titleLines;

  const projectImpactCards = copy.home.selectedProjects.stories
    .map((story) => {
      const project = getProjectBySlug(story.slug, lng);

      if (!project) {
        return null;
      }

      return {
        ...story,
        href: `/${lng}/projects/${project.slug}`,
        image: project.coverImage,
        role: project.role,
        title: project.title,
      };
    })
    .filter(Boolean);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <section className="relative grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:items-start">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-28 h-[30rem] w-[30rem] bg-[radial-gradient(circle,_rgba(249,115,22,0.28)_0%,_rgba(249,115,22,0.12)_38%,_transparent_70%)] opacity-80 blur-3xl dark:opacity-100"
          />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-6 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.home.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`/${lng}/projects`} variant="accent">
                {copy.home.ctas.projects}
              </Button>
              <Button href={`/${lng}/about`} variant="secondary">
                {copy.home.ctas.about}
              </Button>
              <Button href={`/${lng}/contact`} variant="secondary">
                {copy.home.ctas.contact}
              </Button>
              <Button href="/api/download" variant="secondary" download>
                {copy.home.ctas.downloadCv}
              </Button>
            </div>
          </div>

          <aside className="relative z-10 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/70 dark:bg-zinc-900/90 dark:shadow-black/30 sm:p-8">
            <Image
              src={portraitImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover opacity-35 dark:opacity-30"
              priority
              aria-hidden
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.1),transparent_45%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.18),transparent_45%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/78 via-white/62 to-zinc-50/78 dark:from-zinc-950/72 dark:via-zinc-900/58 dark:to-zinc-950/82"
            />
            <div className="relative">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {copy.home.contact.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-200/90">
                {copy.home.contact.description}
              </p>
            </div>
            <ul role="list" className="relative mt-6">
              {copy.profile.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon] ?? MailIcon;
                const className =
                  index === 0
                    ? undefined
                    : link.icon === "email"
                      ? "mt-8 border-t border-zinc-200 pt-8 dark:border-white/15"
                      : "mt-4";

                return (
                  <SocialLink
                    key={link.href}
                    href={link.href}
                    icon={Icon}
                    className={className}
                    linkClassName="dark:text-zinc-100 dark:hover:text-orange-300"
                    iconClassName="dark:fill-zinc-300 dark:group-hover:fill-orange-300"
                  >
                    {link.label}
                  </SocialLink>
                );
              })}
            </ul>
          </aside>
        </section>

        <ProjectImpactSection
          copy={copy}
          projects={projectImpactCards}
          ctaHref={`/${lng}/projects`}
        />

        <BusinessOutcomeQuote statement={copy.services.outcomesStatement} />

        <ExperienceSection copy={copy} />
      </Container>
    </>
  );
}
