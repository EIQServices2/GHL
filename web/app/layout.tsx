import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
    default: "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
    template: "%s | PowerRateIndex",
  },
  description:
    "Powerful tool for retail energy pricing and competitive analysis. Residential electricity market and plan data for the retail energy industry.",
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
    siteName: "PowerRateIndex",
    title: "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
    description:
      "Powerful tool for retail energy pricing and competitive analysis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
    description:
      "Powerful tool for retail energy pricing and competitive analysis.",
  },
  robots: {
    index: true,
    follow: true,
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
