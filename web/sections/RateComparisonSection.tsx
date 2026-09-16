"use client";

import { t } from "@/lib/i18n";
import { useCountUp } from "@/lib/useCountUp";
import { Container } from "@/elements/Container";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { RateChange } from "@/types";

export interface RateComparisonSectionProps {
  rateChange: RateChange;
}

// GHL number-counter equivalent: both rates start at 0.0000, count up on load.
// Previous fills first, updated rate animates after (staggered 0.5s).
function RateValue({ rate, delay, className }: { rate: number; delay: number; className: string }) {
  const display = useCountUp({
    end: rate,
    duration: 1,
    decimals: 4,
    delay,
    separator: "",
  });
  return <p className={className}>{`${display}¢/kWh`}</p>;
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
      <Container size="ghl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="pri-entrance text-left">
            <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-[20px] font-semibold text-black">
              {t("RateComparison.PreviousRate")}
            </p>
            <RateValue
              rate={rateChange.previousRate}
              delay={0}
              className="mt-2 text-3xl font-bold leading-tight text-pri-footer-text md:text-[44px]"
            />
          </div>
          <div className="pri-entrance pri-entrance-1 text-left">
            <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-[20px] font-semibold text-black">
              {`${t("RateComparison.UpdatedAsOf")} ${formatDate(rateChange.updatedAsOf)}`}
            </p>
            <div className="mt-2 flex items-center gap-3 text-3xl font-bold leading-tight text-pri-purple md:text-[44px]">
              <TrendIcon
                className="h-10 w-10 shrink-0 md:h-14 md:w-14"
                aria-label={
                  decreased
                    ? t("RateComparison.Decreased")
                    : t("RateComparison.Increased")
                }
              />
              <RateValue
                rate={rateChange.currentRate}
                delay={0.5}
                className="tabular-nums"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}