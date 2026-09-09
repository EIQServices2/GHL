import { TrendingDown, TrendingUp } from "lucide-react";
import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import { RateCard } from "@/components/RateCard";
import type { RateChange } from "@/types";

export interface RateComparisonSectionProps {
  rateChange: RateChange;
}

function formatRate(rate: number): string {
  return `${rate.toFixed(4)}¢/kWh`;
}

// Rate comparison section: previous (black) vs current (purple #624BFF)
export function RateComparisonSection({
  rateChange,
}: RateComparisonSectionProps) {
  const decreased = rateChange.currentRate < rateChange.previousRate;
  const TrendIcon = decreased ? TrendingDown : TrendingUp;

  return (
    <section className="w-full py-12">
      <Container size="narrow">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <RateCard
            label={t("RateComparison.PreviousRate")}
            value={formatRate(rateChange.previousRate)}
          />
          <TrendIcon
            aria-label={decreased ? t("RateComparison.Decreased") : t("RateComparison.Increased")}
            className="mx-auto h-8 w-8 text-pri-purple"
          />
          <RateCard
            label={`${t("RateComparison.UpdatedAsOf")} ${rateChange.updatedAsOf}`}
            value={formatRate(rateChange.currentRate)}
            variant="current"
          />
        </div>
      </Container>
    </section>
  );
}
