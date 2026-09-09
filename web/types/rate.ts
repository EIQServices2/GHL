import type { Utility } from "./utility";

// Optional per-utility overrides — when present, replace the generic i18n text.
// Mirrors an API response that can carry custom strings for a specific utility.
export interface UtilityOverrides {
  seoTitle?: string;
  seoDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  whyItMattersBody?: string;
}

export interface RateChange {
  utility: Utility;
  previousRate: number; // ¢/kWh
  currentRate: number; // ¢/kWh
  updatedAsOf: string; // ISO date (YYYY-MM-DD)
  avgRate: number; // ¢/kWh — today's avg rate (bar chart)
  valueProps: string[]; // i18n keys for "Why It Matters" bullets
  overrides?: UtilityOverrides;
}
