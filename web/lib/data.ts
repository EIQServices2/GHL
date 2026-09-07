import fs from "node:fs";
import path from "node:path";
import type {
  RateChange,
  Utility,
  RateChangePageData,
} from "@/types";
import type { HomePageData } from "@/types/home";
import homeData from "@/data/home.json";

// Auto-load all rate-change JSON files (dynamic — no manual import map).
// Adding a new utility = drop one JSON file in data/rate-changes/.
const RATE_CHANGES_DIR = path.join(process.cwd(), "data", "rate-changes");

function loadRateChanges(): RateChange[] {
  const files = fs
    .readdirSync(RATE_CHANGES_DIR)
    .filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(RATE_CHANGES_DIR, f), "utf-8");
    return JSON.parse(raw) as RateChange;
  });
}

const rateChanges: RateChange[] = loadRateChanges();

const utilities: Utility[] = rateChanges.map((rc) => rc.utility);

const rateChangeBySlug: Record<string, RateChange> = Object.fromEntries(
  rateChanges.map((rc) => [rc.utility.slug, rc])
);

export function getUtilities(): Utility[] {
  return utilities;
}

export function getUtilitySlugs(): string[] {
  return utilities.map((u) => u.slug);
}

export function getRateChange(slug: string): RateChange | null {
  return rateChangeBySlug[slug] ?? null;
}

export function getHomeData(): HomePageData {
  return {
    ...(homeData as Omit<HomePageData, "utilities">),
    utilities,
  };
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
