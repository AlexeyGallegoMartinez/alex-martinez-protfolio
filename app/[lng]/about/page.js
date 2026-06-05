import Image from "next/image";

import Resume from "@/components/about/resume";
import { Container } from "@/components/ui/container";
import ProfileSidebar from "@/components/profile/profile-sidebar";
import { Header } from "@/components/ui/header";
import storyImage from "@/public/images/photos/image-3.jpg";
import portraitImage from "@/public/images/portrait.png";
import { getSiteCopy } from "@/lib/site-copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return createPageMetadata(lng, "/about", getSiteCopy(lng).about.metadata);
}

function StorySection({ copy }) {
  return (
    <section className="mt-24 sm:mt-32">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-500">
            {copy.about.storyEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {copy.about.storyTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {copy.about.storyDescription}
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-100 shadow-xl shadow-zinc-900/10 dark:border-zinc-700/60 dark:bg-zinc-900 dark:shadow-black/30">
            <Image
              src={storyImage}
              alt={copy.about.storyImageAlt}
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <ol className="space-y-6">
          {copy.about.storyChapters.map((chapter, index) => (
            <li
              key={chapter.title}
              className="grid gap-4 sm:grid-cols-[5.5rem_minmax(0,1fr)]"
            >
              <div className="flex items-center gap-3 sm:block">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white shadow-lg shadow-orange-500/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 sm:mt-3">
                  {chapter.period}
                </p>
              </div>

              <article className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
                  {chapter.kicker}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {chapter.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PersonalCompassSection({ copy }) {
  return (
    <section className="mt-24 sm:mt-32">
      <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-950 p-8 text-white shadow-xl shadow-zinc-900/10 dark:border-zinc-800 dark:bg-white dark:text-zinc-950 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
              {copy.about.personalEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {copy.about.personalTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300 dark:text-zinc-700">
              {copy.about.personalDescription}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {copy.about.personalInfluences.map((influence) => (
              <article
                key={influence.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 dark:border-zinc-200 dark:bg-zinc-50"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {influence.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300 dark:text-zinc-700">
                  {influence.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
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

        <StorySection copy={copy} />

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

        <PersonalCompassSection copy={copy} />

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
