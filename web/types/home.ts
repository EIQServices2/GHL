import type { Utility } from "./utility";

export interface HomeStats {
  totalStates: number;
  totalUtilities: number;
  totalSuppliers: number;
  totalPlans: number;
}

export interface StateOption {
  id: string;
  name: string;
  active?: boolean;
}

export interface TduRate {
  name: string;
  rate: number;
}

export interface FeatureCard {
  icon: string;
  textKey: string;
}

export interface HomePageData {
  stats: HomeStats;
  states: StateOption[];
  tduRates: TduRate[];
  featureCards: FeatureCard[];
  utilities: Utility[];
}
