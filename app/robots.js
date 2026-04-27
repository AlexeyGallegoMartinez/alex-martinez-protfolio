import { getSiteOrigin } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getSiteOrigin()}/sitemap.xml`,
  };
}
