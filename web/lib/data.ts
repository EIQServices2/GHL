import fs from "node:fs";
import path from "node:path";
import type { RateChange, Utility } from "@/types";
import type { HomePageData, TduRate } from "@/types/home";
import type { SiteConfig } from "@/types/site";
import homeData from "@/data/home.json";
import siteData from "@/data/site.json";

// Auto-load all utility JSON files (dynamic — no manual import map).
// Adding a new utility = drop one JSON file in data/utilities/.
const UTILITIES_DIR = path.join(process.cwd(), "data", "utilities");

function loadRateChanges(): RateChange[] {
  return fs
    .readdirSync(UTILITIES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) =>
      JSON.parse(
        fs.readFileSync(path.join(UTILITIES_DIR, f), "utf-8")
      ) as RateChange
    );
}

const rateChanges: RateChange[] = loadRateChanges();
const utilities: Utility[] = rateChanges.map((rc) => rc.utility);
const tduRates: TduRate[] = rateChanges.map((rc) => ({
  name: rc.utility.name,
  rate: rc.avgRate,
}));

export interface AppData {
  utilities: Utility[];
  rateChanges: RateChange[];
  tduRates: TduRate[];
  home: HomePageData;
  site: SiteConfig;
}

const appData: AppData = {
  utilities,
  rateChanges,
  tduRates,
  home: { ...(homeData as Omit<HomePageData, "utilities">), utilities },
  site: siteData as SiteConfig,
};

// Single data accessor (mimics API); only reader of /data/ JSON.
export function getData(): AppData {
  return appData;
}
