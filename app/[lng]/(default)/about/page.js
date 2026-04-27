import Image from "next/image";

import Resume from "@/components/about/resume";
import { Container } from "@/components/ui/container";
import ProfileSidebar from "@/components/profile/profile-sidebar";
import { Header } from "@/components/ui/header";
import portraitImage from "@/public/images/portrait.png";
import { getSiteCopy } from "@/lib/site-copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/about", getSiteCopy(lng).about.metadata);
}

export default async function AboutPage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <div className="relative grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] bg-[radial-gradient(circle,_rgba(249,115,22,0.2)_0%,_rgba(249,115,22,0.08)_38%,_transparent_70%)] opacity-70 blur-3xl dark:opacity-90"
          />
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt={copy.profile.portraitAlt}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                priority
              />
            </div>
          </div>
          <div className="relative z-10 lg:order-first lg:row-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
              {copy.about.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {copy.about.title}
            </h1>
            <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <ProfileSidebar profile={copy.profile} />
          </div>
        </div>

        <section className="mt-24 sm:mt-32">
          <Resume resume={copy.profile.resume} />
        </section>

        <section className="mt-24 sm:mt-32">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {copy.about.strengthsTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.about.strengths.map((strength, index) => (
              <article
                key={strength.title}
                className="rounded-3xl border border-zinc-200/70 border-t-orange-500/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:border-t-orange-400/70 dark:bg-zinc-900/80 dark:shadow-black/20"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 sm:mt-32">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {copy.about.currentFocusTitle}
            </h2>
            <div className="mt-6 space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.about.currentFocus.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="mt-10 rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-8">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {copy.about.skillGroupsTitle}
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {copy.about.skillGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </aside>
        </section>
      </Container>
    </>
  );
}
