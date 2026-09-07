import type { Metadata } from "next";
import { getData } from "@/lib/data";
import { t } from "@/lib/i18n";
import { HomeHeader } from "@/sections/HomeHeader";
import { HomeHero } from "@/sections/HomeHero";
import { HomeScrape } from "@/sections/HomeScrape";
import { HomeFeatures } from "@/sections/HomeFeatures";
import { HomePlatform } from "@/sections/HomePlatform";
import { HomeContact } from "@/sections/HomeContact";
import { UtilityLinksSection } from "@/sections/UtilityLinksSection";
import { FooterSection } from "@/sections/FooterSection";

export const metadata: Metadata = {
  title: t("meta.title"),
  description: t("meta.description"),
};

export default function HomePage() {
  const { home } = getData();

  return (
    <main className="flex flex-1 flex-col">
      <HomeHeader />
      <HomeHero stats={home.stats} />
      <HomeScrape />
      <HomeFeatures cards={home.featureCards} />
      <HomePlatform states={home.states} tduRates={home.tduRates} />
      <HomeContact />
      <UtilityLinksSection utilities={home.utilities} />
      <FooterSection />
    </main>
  );
}
