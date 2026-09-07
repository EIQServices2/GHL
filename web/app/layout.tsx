import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { t } from "@/lib/i18n";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.powerrateindex.org";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: t("meta.title"),
    template: t("meta.titleTemplate"),
  },
  description: t("meta.description"),
  keywords: [
    "retail energy",
    "electricity pricing",
    "TDU rates",
    "competitive analysis",
    "energy market data",
    "residential electricity plans",
    "PowerRateIndex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: t("meta.siteName"),
    title: t("meta.title"),
    description: t("meta.ogDescription"),
  },
  twitter: {
    card: "summary_large_image",
    title: t("meta.title"),
    description: t("meta.ogDescription"),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
