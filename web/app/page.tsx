import type { Metadata } from "next";
import { getData } from "@/lib/data";
import { t } from "@/lib/i18n";
import { HomeHero } from "@/sections/HomeHero";
import { HomeScrape } from "@/sections/HomeScrape";
import { HomeFeatures } from "@/sections/HomeFeatures";
import { HomePlatform } from "@/sections/HomePlatform";
import { HomeContact } from "@/sections/HomeContact";

export const metadata: Metadata = {
  title: t("Meta.Title"),
  description: t("Meta.Description"),
};

export default function HomePage() {
  const { home, tduRates } = getData();

  return (
    <>
      <HomeHero stats={home.stats} />
      <HomeScrape />
      <HomeFeatures cards={home.featureCards} />
      <HomePlatform states={home.states} tduRates={tduRates} />
      <HomeContact />
    </>
  );
}
