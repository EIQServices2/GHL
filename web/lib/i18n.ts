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

    // Home page
    "home.login": "Login",
    "home.heroTitle":
      "Residential Electricity Market and Plan Data for the Retail Energy Industry",
    "home.statStates": "Total States",
    "home.statUtilities": "Total Utilities",
    "home.statSuppliers": "Total Suppliers",
    "home.statPlans": "Total Plans",
    "home.talkToSales": "Talk To Sales",
    "home.getStarted": "Get Started",
    "home.scrapeTitle":
      "PowerRateIndex continually scrapes the internet to gather the most comprehensive, timely and accurate Residential Electricity Plan data available",
    "home.scrapeBullet1": "All markets and plans scraped at least once a day",
    "home.scrapeBullet2":
      "Our AI calculates the effective rate for any plan structure including tiered and TOU plans",
    "home.scrapeBullet3":
      "Continually monitors and updates utilities\u2019 Price-to-Compare",
    "home.featuresTitle":
      "PowerRateIndex is a critical tool for making effective Pricing, Sales and Marketing decisions",
    "home.platformTitle": "Energy Pricing Intelligence Platform",
    "home.platformSubtitle":
      "Our platform updates daily, ensuring users have real-time insights into competitive pricing, helping firms optimize their strategies and stay ahead in the evolving energy market",
    "home.avgRate": "Avg Rate",
    "home.avgRateByTdu": "Today's Avg Rate by TDU based on 1000 kWh",
    "home.avgRateByUtility": "Today's Avg Rate by Utility",
    "home.contactTitle": "Explore the Future of Energy Pricing Analysis",
    "home.contactSubtitle":
      "Ready to make informed decisions with reliable and comprehensive energy pricing data?",
    "home.formFirstName": "First Name",
    "home.formLastName": "Last Name",
    "home.formCompany": "Company",
    "home.formEmail": "Email",
    "home.formMessage": "Message",
    "home.formSubmit": "Submit",
    "home.formSuccess": "Submit Successfully!",
    "home.formSuccessBody": "We will contact you ASAP.",
    "home.utilityLinksTitle": "Explore Utility Rate Changes",

    // Form
    "form.emailPlaceholder": "Enter your email",

    // Footer
    "footer.rights": "2025 © EIQdigital. All Rights Reserved.",
    "footer.tagline1": "AI-First, Data and Technology Leader.",
    "footer.tagline2":
      "Powering the Energy Industry's Digital and Sustainability Transition.",
    "footer.products": "Products",
    "footer.support": "Support & Contact",
    "footer.developers": "Developers",
    "footer.followUs": "Follow us on",
    "footer.contactUs": "Contact Us",
    "footer.documentation": "Documentation",

    // Common
    "common.loading": "Loading…",

    // 404
    "notFound.title": "Page not found",
    "notFound.home": "Back to Home",
  },
};

export function t(key: string, locale: Locale = "en"): string {
  return translations[locale]?.[key] ?? key;
}
