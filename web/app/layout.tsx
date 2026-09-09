import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { t } from "@/lib/i18n";
import { AppConfig } from "@/config";
import { Header } from "@/sections/Header";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const SITE_URL = AppConfig.SITE_URL;

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: t("Meta.Title"),
    template: t("Meta.TitleTemplate"),
  },
  description: t("Meta.Description"),
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
    siteName: t("Meta.SiteName"),
    title: t("Meta.Title"),
    description: t("Meta.OgDescription"),
  },
  twitter: {
    card: "summary_large_image",
    title: t("Meta.Title"),
    description: t("Meta.OgDescription"),
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
