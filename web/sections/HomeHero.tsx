"use client";

import { ArrowRight, Headphones } from "lucide-react";
import { t } from "@/lib/i18n";
import { useCountUp } from "@/lib/useCountUp";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import type { HomeStats } from "@/types/home";

export interface HomeHeroProps {
  stats: HomeStats;
}

function Stat({ value, label }: { value: number; label: string }) {
  const display = useCountUp({ end: value, duration: 1 });
  return (
    <div>
      <p className="text-4xl font-semibold text-pri-purple md:text-5xl">
        {display}
      </p>
      <p className="mt-1 text-sm text-pri-ink-muted">{t(label)}</p>
    </div>
  );
}

/**
 * Home hero: headline + 4 animated count-up stats + 2 CTAs.
 * Matches powerrateindex.org hero (CountUp animation).
 * Both CTAs smooth-scroll to the contact form (#contact).
 */
export function HomeHero({ stats }: HomeHeroProps) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-12">
      <Container className="text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-pri-ink md:text-5xl">
          {t("home.heroTitle")}
        </h1>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          <Stat value={stats.totalStates} label="home.statStates" />
          <Stat value={stats.totalUtilities} label="home.statUtilities" />
          <Stat value={stats.totalSuppliers} label="home.statSuppliers" />
          <Stat value={stats.totalPlans} label="home.statPlans" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="outline"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded border-pri-border-mid px-6 py-2.5 text-sm font-semibold text-pri-border-mid"
          >
            <Headphones className="h-4 w-4" />
            {t("home.talkToSales")}
          </Button>
          <Button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white hover:bg-pri-purple/90"
          >
            {t("home.getStarted")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
