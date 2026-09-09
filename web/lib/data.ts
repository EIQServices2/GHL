import fs from "node:fs";
import path from "node:path";
import type { RateChange, Utility } from "@/types";
import type { HomePageData } from "@/types/home";
import type { SiteConfig } from "@/types/site";
import homeData from "@/data/home.json";
import siteData from "@/data/site.json";

// Auto-load all rate-change JSON files (dynamic — no manual import map).
// Adding a new utility = drop one JSON file in data/rate-changes/.
const RATE_CHANGES_DIR = path.join(process.cwd(), "data", "rate-changes");

function loadRateChanges(): RateChange[] {
  return fs
    .readdirSync(RATE_CHANGES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) =>
      JSON.parse(
        fs.readFileSync(path.join(RATE_CHANGES_DIR, f), "utf-8")
      ) as RateChange
    );
}

const rateChanges: RateChange[] = loadRateChanges();
const utilities: Utility[] = rateChanges.map((rc) => rc.utility);

export interface AppData {
  utilities: Utility[];
  rateChanges: RateChange[];
  home: HomePageData;
  site: SiteConfig;
}

const appData: AppData = {
  utilities,
  rateChanges,
  home: { ...(homeData as Omit<HomePageData, "utilities">), utilities },
  site: siteData as SiteConfig,
};

// Single data accessor (mimics API); only reader of /data/ JSON.
export function getData(): AppData {
  return appData;
}
