import type { RateChange } from "./rate";

export interface CtaConfig {
  labelKey: string; // i18n key
  href: string; // signup / trial URL
}

export interface FooterConfig {
  copyright: string;
}

export interface RateChangePageData {
  rateChange: RateChange;
  valueProps: string[]; // i18n keys
  cta: CtaConfig;
  footer: FooterConfig;
}
