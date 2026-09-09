import Image from "next/image";
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

  return (
    <section className="w-full py-12">
      <Container size="narrow">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <RateCard
            label={t("rateChange.previousRate")}
            value={formatRate(rateChange.previousRate)}
          />
          <Image
            src="/images/icon-arrow-down.png"
            alt={decreased ? t("rateChange.decreased") : t("rateChange.increased")}
            width={527}
            height={527}
            className={`mx-auto h-8 w-8 ${decreased ? "" : "rotate-180"}`}
          />
          <RateCard
            label={`${t("rateChange.updatedAsOf")} ${rateChange.updatedAsOf}`}
            value={formatRate(rateChange.currentRate)}
            variant="current"
          />
        </div>
      </Container>
    </section>
  );
}
