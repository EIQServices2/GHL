export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Rate change page
    "rateChange.title": "TDU Delivery Rates Just Changed",
    "rateChange.seeHow": "See How It Affects You.",
    "rateChange.subtitle":
      "Stay on top of utility delivery rate updates and competitor pricing changes with PowerRateIndex.",
    "rateChange.previousRate": "Previous Rate",
    "rateChange.currentRate": "Current",
    "rateChange.updatedAsOf": "Updated as of",
    "rateChange.whyItMatters": "Why It Matters",
    "rateChange.whyItMattersBody":
      "Fluctuations in TDU rates can directly impact your total electricity costs. PowerRateIndex keeps you informed — automatically.",
    "rateChange.valueProp1": "✅ Track all TDU delivery rate updates",
    "rateChange.valueProp2": "✅ Compare competitor pricing in one dashboard",
    "rateChange.valueProp3": "✅ Get alerts when rates shift or new offers appear",
    "rateChange.experienceFree": "EXPERIENCE IT FOR FREE",
    "rateChange.startMonitoring": "Start monitoring smarter today.",
    "rateChange.cta": "Start 30-day free trial",

    // Form
    "form.emailPlaceholder": "Enter your email",

    // Footer
    "footer.rights": "2025 © EIQdigital. All Rights Reserved.",
    "footer.tagline1": "AI-First, Data and Technology Leader.",
    "footer.tagline2":
      "Powering the Energy Industry's Digital and Sustainability Transition.",

    // Common
    "common.loading": "Loading…",
  },
};

export function t(key: string, locale: Locale = "en"): string {
  return translations[locale]?.[key] ?? key;
}
