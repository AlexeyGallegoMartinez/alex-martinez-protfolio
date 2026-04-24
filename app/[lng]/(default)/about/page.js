import Image from "next/image";

import { Container } from "@/components/ui/container";
import ProfileSidebar from "@/components/profile/profile-sidebar";
import { Header } from "@/components/ui/header";
import portraitImage from "@/public/images/portrait.png";
import { getSiteCopy } from "@/lib/site-copy";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  return getSiteCopy(lng).about.metadata;
}

export default async function AboutPage({ params }) {
  const { lng } = await params;
  const copy = getSiteCopy(lng);

  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
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
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {copy.about.title}
            </h1>
            <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {copy.about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ProfileSidebar profile={copy.profile} />
        </div>

        <section className="mt-24 sm:mt-32">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {copy.about.strengthsTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {copy.about.strengths.map((strength) => (
              <article
                key={strength.title}
                className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {strength.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] sm:mt-32">
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
          <aside className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:shadow-black/20">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {copy.about.skillGroupsTitle}
            </h2>
            <div className="mt-6 space-y-6">
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
