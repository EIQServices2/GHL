"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { Button } from "@/elements/Button";
import type { StateOption, TduRate } from "@/types/home";

export interface HomePlatformProps {
  states: StateOption[];
  tduRates: TduRate[];
}

/**
 * Energy Pricing Intelligence Platform: interactive state selector + TDU bar chart.
 * Clicking a state chip switches the active state (GHL onClick → setState).
 * Chart title: "TDU based on 1000 kWh" for TX, "Utility" otherwise.
 */
export function HomePlatform({ states, tduRates }: HomePlatformProps) {
  const [activeId, setActiveId] = useState(
    states.find((s) => s.active)?.id ?? states[0]?.id ?? "TX"
  );
  const maxRate = Math.max(...tduRates.map((r) => r.rate));
  const isTx = activeId === "TX";

  return (
    <section className="w-full bg-pri-bg-grey py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <h2 className="text-center text-2xl font-bold text-pri-ink md:text-3xl">
          {t("home.platformTitle")}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-pri-ink-muted">
          {t("home.platformSubtitle")}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
          {/* State selector */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="State selector">
            {states.map((s) => (
              <Button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === activeId}
                onClick={() => setActiveId(s.id)}
                className={`rounded px-3 py-1.5 text-sm transition-colors ${
                  s.id === activeId
                    ? "bg-pri-ink text-white"
                    : "border border-pri-border bg-white text-pri-ink-muted hover:border-pri-ink"
                }`}
              >
                {s.name}
              </Button>
            ))}
          </div>

          {/* Bar chart */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-pri-ink">
              {isTx ? t("home.avgRateByTdu") : t("home.avgRateByUtility")}
            </h3>
            <div className="space-y-3">
              {tduRates.map((r) => (
                <div key={r.name} className="flex items-center gap-3">
                  <span className="w-48 shrink-0 text-sm text-pri-ink-muted">
                    {r.name}
                  </span>
                  <div className="h-6 flex-1 rounded bg-pri-fill">
                    <div
                      className="h-6 rounded bg-pri-purple transition-all duration-500"
                      style={{ width: `${(r.rate / maxRate) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-sm font-semibold text-pri-ink">
                    {r.rate.toFixed(2)}¢
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
