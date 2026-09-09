import type { Utility } from "./utility";

export interface RateChange {
  utility: Utility;
  previousRate: number; // ¢/kWh
  currentRate: number; // ¢/kWh
  updatedAsOf: string; // ISO date (YYYY-MM-DD)
  avgRate: number; // ¢/kWh — today's avg rate (bar chart)
  valueProps: string[]; // i18n keys for "Why It Matters" bullets
}
