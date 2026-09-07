import type { RateChange } from "./rate";

export interface ValueProp {
  icon: string; // lucide icon name
  textKey: string; // i18n key
}

export interface CtaConfig {
  labelKey: string; // i18n key
  href: string; // signup / trial URL
}

export interface FooterConfig {
  copyright: string;
  taglineKey: string; // i18n key
}

export interface RateChangePageData {
  rateChange: RateChange;
  valueProps: ValueProp[];
  cta: CtaConfig;
  footer: FooterConfig;
}
