"use client";

import Image from "next/image";
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
      <p className="text-[40px] font-medium leading-tight text-pri-org-accent">
        {display}
      </p>
      <p className="mt-1 text-sm text-pri-ink-muted">{t(label)}</p>
    </div>
  );
}

// Home hero (original PRI): left-aligned headline + stats, US map right, bg #f3f6f9.
export function HomeHero({ stats }: HomeHeroProps) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-pri-org-body-bg py-12">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="pri-entrance text-left text-4xl font-bold leading-tight text-pri-ink md:text-5xl">
              {t("HomeHero.Title")}
            </h1>

            <div className="mt-10 flex flex-wrap gap-4 md:gap-8">
              <Stat value={stats.totalStates} label="HomeHero.StatStates" />
              <Stat value={stats.totalUtilities} label="HomeHero.StatUtilities" />
              <Stat value={stats.totalSuppliers} label="HomeHero.StatSuppliers" />
              <Stat value={stats.totalPlans} label="HomeHero.StatPlans" />
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="pri-elevate-hover inline-flex items-center gap-2 rounded-none border-pri-org-accent px-4 py-2 text-sm font-semibold text-pri-org-accent hover:bg-pri-org-accent/10"
              >
                <Headphones className="h-4 w-4" />
                {t("HomeHero.TalkToSales")}
              </Button>
              <Button
                onClick={scrollToContact}
                className="pri-elevate-hover inline-flex items-center gap-2 rounded-none bg-pri-org-accent px-4 py-2 text-sm font-semibold text-white hover:bg-pri-org-accent/90"
              >
                {t("HomeHero.GetStarted")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* US GeoChart: active states highlighted #865ce2 (original colors) */}
          <div className="hidden justify-center md:flex">
            <Image
              src="/images/us-map.svg"
              alt="US states coverage map"
              width={959}
              height={593}
              className="h-auto w-full max-w-[520px]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}