import Link from "next/link";
import { t } from "@/lib/i18n";
import type { HomeStats } from "@/types/home";

export interface HomeHeroProps {
  stats: HomeStats;
}

const statItems = (stats: HomeStats) => [
  { value: stats.totalStates, label: "home.statStates" },
  { value: stats.totalUtilities, label: "home.statUtilities" },
  { value: stats.totalSuppliers, label: "home.statSuppliers" },
  { value: stats.totalPlans, label: "home.statPlans" },
];

/**
 * Home hero: headline + 4 animated stats + 2 CTAs.
 * Matches powerrateindex.org hero.
 */
export function HomeHero({ stats }: HomeHeroProps) {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1440px] px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#121f27] md:text-5xl">
          {t("home.heroTitle")}
        </h1>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {statItems(stats).map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-semibold text-pri-purple md:text-5xl">
                {s.value.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-[#666]">{t(s.label)}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded border border-[#6c757d] px-6 py-2.5 text-sm font-semibold text-[#6c757d]"
          >
            {t("home.talkToSales")}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white"
          >
            {t("home.getStarted")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
