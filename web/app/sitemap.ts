import type { MetadataRoute } from "next";
import { getData } from "@/lib/data";

const SITE_URL = "https://www.powerrateindex.org";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { rateChanges } = getData();
  const utilities = rateChanges.map((rc) => ({
    url: `${SITE_URL}/${rc.utility.slug}`,
    lastModified: rc.updatedAsOf ? new Date(rc.updatedAsOf) : new Date(),
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
