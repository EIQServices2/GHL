import type {
  RateChange,
  Utility,
  UtilitySlug,
  RateChangePageData,
} from "@/types";
import type { HomePageData } from "@/types/home";
import utilitiesData from "@/data/utilities.json";
import homeData from "@/data/home.json";
import aepcentral from "@/data/rate-changes/aepcentral.json";
import aepnorth from "@/data/rate-changes/aepnorth.json";
import centerpoint from "@/data/rate-changes/centerpoint.json";
import lubbock from "@/data/rate-changes/lubbock.json";
import oncor from "@/data/rate-changes/oncor.json";
import tnmp from "@/data/rate-changes/tnmp.json";

const utilities = utilitiesData as Utility[];

const rateChanges: Record<string, RateChange> = {
  aepcentral: aepcentral as RateChange,
  aepnorth: aepnorth as RateChange,
  centerpoint: centerpoint as RateChange,
  lubbock: lubbock as RateChange,
  oncor: oncor as RateChange,
  tnmp: tnmp as RateChange,
};

export function getUtilities(): Utility[] {
  return utilities;
}

export function getUtilitySlugs(): UtilitySlug[] {
  return utilities.map((u) => u.slug);
}

export function getRateChange(slug: string): RateChange | null {
  return rateChanges[slug] ?? null;
}

export function getHomeData(): HomePageData {
  return homeData as HomePageData;
}

export function getPageData(slug: string): RateChangePageData | null {
  const rateChange = getRateChange(slug);
  if (!rateChange) return null;

  return {
    rateChange,
    valueProps: [
      "rateChange.valueProp1",
      "rateChange.valueProp2",
      "rateChange.valueProp3",
    ],
    cta: {
      labelKey: "rateChange.cta",
      href: "https://www.powerrateindex.org/",
    },
    footer: {
      copyright: "2025 © EIQdigital. All Rights Reserved.",
    },
  };
}
