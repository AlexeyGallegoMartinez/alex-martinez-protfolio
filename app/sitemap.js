import { languages } from "@/app/i18n/settings";
import { getProjectSlugs } from "@/lib/site-content";
import { getSiteOrigin } from "@/lib/seo";

const staticPaths = ["", "/about", "/services", "/projects", "/contact"];

export default function sitemap() {
  const origin = getSiteOrigin();
  const projectPaths = getProjectSlugs().map((project) => `/projects/${project.slug}`);
  const paths = [...staticPaths, ...projectPaths];

  return languages.flatMap((lng) =>
    paths.map((path) => ({
      url: `${origin}/${lng}${path}`,
      lastModified: new Date(),
    })),
  );
}
