import { t } from "@/lib/i18n";
import type { StateOption, TduRate } from "@/types/home";

export interface HomePlatformProps {
  states: StateOption[];
  tduRates: TduRate[];
}

/**
 * Energy Pricing Intelligence Platform: state selector + TDU bar chart.
 * Matches powerrateindex.org platform section.
 */
export function HomePlatform({ states, tduRates }: HomePlatformProps) {
  const maxRate = Math.max(...tduRates.map((r) => r.rate));

  return (
    <section className="w-full bg-[#f8f9fa] py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <h2 className="text-center text-2xl font-bold text-[#121f27] md:text-3xl">
          {t("home.platformTitle")}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] text-[#666]">
          {t("home.platformSubtitle")}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
          {/* State selector */}
          <div className="flex flex-wrap gap-2">
            {states.map((s) => (
              <span
                key={s.id}
                className={`rounded px-3 py-1.5 text-sm ${
                  s.active
                    ? "bg-[#121f27] text-white"
                    : "bg-white text-[#666] border border-[#e5e5e5]"
                }`}
              >
                {s.name}
              </span>
            ))}
          </div>

          {/* Bar chart */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#121f27]">
              {t("home.avgRateByTdu")}
            </h3>
            <div className="space-y-3">
              {tduRates.map((r) => (
                <div key={r.name} className="flex items-center gap-3">
                  <span className="w-48 shrink-0 text-sm text-[#666]">
                    {r.name}
                  </span>
                  <div className="h-6 flex-1 rounded bg-[#e9ecef]">
                    <div
                      className="h-6 rounded bg-pri-purple"
                      style={{ width: `${(r.rate / maxRate) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-sm font-semibold text-[#121f27]">
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
