import type { Utility } from "./utility";

export interface RateChange {
  utility: Utility;
  previousRate: number; // ¢/kWh
  currentRate: number; // ¢/kWh
  updatedAsOf: string; // ISO date (YYYY-MM-DD)
  currency: string; // "USD"
}
