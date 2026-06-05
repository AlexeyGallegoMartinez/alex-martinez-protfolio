"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { fallbackLng, languages } from "@/app/i18n/settings";
import { FallbackScreen } from "@/components/ui/fallback-screen";
import { Header } from "@/components/ui/header";
import { getSiteCopy } from "@/lib/site-copy";

function getLocaleFromPathname(pathname) {
  const maybeLocale = pathname?.split("/")[1];

  return languages.includes(maybeLocale) ? maybeLocale : fallbackLng;
}

export default function Error({ error, reset }) {
  const pathname = usePathname();
  const lng = getLocaleFromPathname(pathname);
  const copy = getSiteCopy(lng).errorPage;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <FallbackScreen
        code="500"
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        resetLabel={copy.retryAction}
        onReset={reset}
        primaryAction={{
          href: `/${lng}`,
          label: copy.homeAction,
        }}
        secondaryAction={{
          href: `/${lng}/projects`,
          label: copy.projectsAction,
        }}
        tertiaryAction={{
          href: `/${lng}/contact`,
          label: copy.contactAction,
        }}
        checks={copy.checks}
      />
    </>
  );
}
