import type { MetadataRoute } from "next";
import { getUtilitySlugs } from "@/lib/data";

const SITE_URL = "https://www.powerrateindex.org";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const utilities = getUtilitySlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...utilities,
  ];
}
