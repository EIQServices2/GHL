import type { MetadataRoute } from "next";
import { getRateChange, getUtilitySlugs } from "@/lib/data";

const SITE_URL = "https://www.powerrateindex.org";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const utilities = getUtilitySlugs().map((slug) => {
    const rc = getRateChange(slug);
    return {
      url: `${SITE_URL}/${slug}`,
      lastModified: rc?.updatedAsOf ? new Date(rc.updatedAsOf) : new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    };
  });

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
