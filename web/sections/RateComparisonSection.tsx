import { t } from "@/lib/i18n";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { RateChange } from "@/types";

export interface RateComparisonSectionProps {
  rateChange: RateChange;
}

function formatRate(rate: number): string {
  return `${rate.toFixed(4)}¢/kWh`;
}

// Rate comparison: previous vs current rate, unboxed (side-by-side comparison).
export function RateComparisonSection({
  rateChange,
}: RateComparisonSectionProps) {
  const decreased = rateChange.currentRate < rateChange.previousRate;
  const TrendIcon = decreased ? TrendingDown : TrendingUp;

  return (
    <section className="w-full py-12">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="text-center">
            <p className="text-sm font-medium text-pri-muted">
              {t("RateComparison.PreviousRate")}
            </p>
            <p className="mt-2 text-3xl font-bold leading-tight text-pri-footer-text md:text-[44px]">
              {formatRate(rateChange.previousRate)}
            </p>
          </div>
          <TrendIcon
            className="mx-auto h-8 w-8 text-pri-purple"
            aria-label={
              decreased
                ? t("RateComparison.Decreased")
                : t("RateComparison.Increased")
            }
          />
          <div className="text-center">
            <p className="text-sm font-medium text-pri-muted">
              {`${t("RateComparison.UpdatedAsOf")} ${rateChange.updatedAsOf}`}
            </p>
            <p className="mt-2 text-3xl font-bold leading-tight text-pri-purple md:text-[44px]">
              {formatRate(rateChange.currentRate)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}