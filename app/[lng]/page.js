import Image from "next/image";

import SocialLink from "@/components/about/social-link";
import MailIcon from "@/components/about/mail-icon";
import ContentSection from "@/components/content/content-section";
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
import { getFeaturedProjects } from "@/lib/site-content";
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

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/", getSiteCopy(lng).home.metadata);
}

export default async function HomePage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);
  const titleLines = copy.home.titleLines;

  const featuredProjects = getFeaturedProjects(lng, 3).map((project) => {
    const stackPreview = project.stack?.slice(0, 2)?.join(" · ");

    return {
      href: `/${lng}/projects/${project.slug}`,
      image: project.coverImage,
      title: project.title,
      description: project.summary,
      eyebrow: project.role,
      meta: stackPreview
        ? `${project.timeline} · ${stackPreview}`
        : project.timeline,
      ctaLabel: copy.common.viewProject,
    };
  });

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
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {copy.home.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
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
              <Button href={`/${lng}/about`} variant="accent">
                {copy.home.ctas.about}
              </Button>
              <Button href={`/${lng}/projects`} variant="secondary">
                {copy.home.ctas.projects}
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

        <ExperienceSection copy={copy} />

        <ContentSection
          eyebrow={copy.home.selectedProjects.eyebrow}
          title={copy.home.selectedProjects.title}
          description={copy.home.selectedProjects.description}
          items={featuredProjects}
          ctaHref={`/${lng}/projects`}
          ctaLabel={copy.home.selectedProjects.cta}
        />
      </Container>
    </>
  );
}
