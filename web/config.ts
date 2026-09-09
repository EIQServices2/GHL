import type {
  FooterProduct,
  FooterLink,
  SocialLink,
  AuthConfig,
} from "@/types/site";

// Single app config object — the only place hardcoded URLs/values live.
// Import `AppConfig` anywhere a constant is needed; never redefine inline.
export interface AppConfig {
  SITE_URL: string;
  footer: {
    products: FooterProduct[];
    support: FooterLink;
    developers: FooterLink;
    social: SocialLink[];
    aws: FooterLink;
    eiqdigital: FooterLink;
  };
  auth: AuthConfig;
}

export const AppConfig: AppConfig = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.powerrateindex.org",
  footer: {
    products: [
      { label: "PowerLego", href: "https://www.powerlego.com/" },
      { label: "EIQhome", href: "https://eiqhome.com/" },
      { label: "EIQShopping", href: "https://eiqshopping.com/" },
      { label: "ESIID.io", href: "https://esiid.io/" },
      { label: "BillReader", href: "https://www.billreader.com/" },
      { label: "Personalized.Energy", href: "https://www.personalized.energy/" },
    ],
    support: { href: "https://www.powerrateindex.org/contact-us" },
    developers: {
      href: "https://documenter.getpostman.com/view/4831254/SzKYPH3c",
    },
    social: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/p/eIQdigital-61552099297028/",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/eiqdigital/" },
    ],
    aws: { href: "https://aws.amazon.com/what-is-cloud-computing" },
    eiqdigital: { href: "https://www.eiqdigital.com/" },
  },
  auth: {
    apiBase: "https://7vu0h6rh6d.execute-api.us-east-2.amazonaws.com/v1/",
    cognitoUserPoolId: "us-east-2_sTXcVV4cC",
    cognitoWebClientId: "2f3qaqno4o6faa90j0tvjos2fe",
    cognitoRegion: "us-east-2",
  },
};
