import { languages } from "@/app/i18n/settings";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexey-martinez.dev";

export function getSiteOrigin() {
  try {
    return new URL(siteUrl).origin;
  } catch {
    return "https://alexey-martinez.dev";
  }
}

export function createPageMetadata(lng, path, metadata) {
  const origin = getSiteOrigin();
  const localizedPath = path === "/" ? `/${lng}` : `/${lng}${path}`;
  const url = `${origin}${localizedPath}`;
  const languagesMap = Object.fromEntries(
    languages.map((language) => [
      language,
      `${origin}${path === "/" ? `/${language}` : `/${language}${path}`}`,
    ]),
  );

  return {
    ...metadata,
    alternates: {
      canonical: url,
      languages: languagesMap,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      siteName: "Alexey Martinez",
      locale: lng === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}
