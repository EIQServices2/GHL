import { t } from "@/lib/i18n";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { RateChange } from "@/types";

export interface RateComparisonSectionProps {
  rateChange: RateChange;
}

function formatRate(rate: number): string {
  return `${rate.toFixed(4)}¢/kWh`;
}

// Long-form date (GHL: "September 1, 2026") from ISO updatedAsOf.
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Rate comparison: previous vs current rate, left-aligned, arrow prefixed to amount.
export function RateComparisonSection({
  rateChange,
}: RateComparisonSectionProps) {
  const decreased = rateChange.currentRate < rateChange.previousRate;
  const TrendIcon = decreased ? TrendingDown : TrendingUp;

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="pri-entrance text-left">
            <p className="text-[20px] text-black">
              {t("RateComparison.PreviousRate")}
            </p>
            <p className="mt-2 text-3xl font-bold leading-tight text-pri-footer-text md:text-[44px]">
              {formatRate(rateChange.previousRate)}
            </p>
          </div>
          <div className="pri-entrance pri-entrance-1 text-left">
            <p className="text-[20px] text-black">
              {`${t("RateComparison.UpdatedAsOf")} ${formatDate(rateChange.updatedAsOf)}`}
            </p>
            <p className="mt-2 flex items-center gap-3 text-3xl font-bold leading-tight text-pri-purple md:text-[44px]">
              <TrendIcon
                className="h-10 w-10 shrink-0 md:h-14 md:w-14"
                aria-label={
                  decreased
                    ? t("RateComparison.Decreased")
                    : t("RateComparison.Increased")
                }
              />
              {formatRate(rateChange.currentRate)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}