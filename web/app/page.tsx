import type { Metadata } from "next";
import { getHomeData } from "@/lib/data";
import { HomeHeader } from "@/sections/HomeHeader";
import { HomeHero } from "@/sections/HomeHero";
import { HomeScrape } from "@/sections/HomeScrape";
import { HomeFeatures } from "@/sections/HomeFeatures";
import { HomePlatform } from "@/sections/HomePlatform";
import { HomeContact } from "@/sections/HomeContact";
import { UtilityLinksSection } from "@/sections/UtilityLinksSection";
import { FooterSection } from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: "PowerRateIndex | Retail Energy Pricing & Competitive Analysis",
  description:
    "Powerful tool for retail energy pricing and competitive analysis. Residential electricity market and plan data for the retail energy industry.",
};

export default function HomePage() {
  const data = getHomeData();

  return (
    <main className="flex flex-1 flex-col">
      <HomeHeader />
      <HomeHero stats={data.stats} />
      <HomeScrape />
      <HomeFeatures cards={data.featureCards} />
      <HomePlatform states={data.states} tduRates={data.tduRates} />
      <HomeContact />
      <UtilityLinksSection utilities={data.utilities} />
      <FooterSection />
    </main>
  );
}
