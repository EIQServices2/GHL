import Image from "next/image";
import { t } from "@/lib/i18n";
import { RateCard } from "@/components/RateCard";
import type { RateChange } from "@/types";

export interface RateComparisonSectionProps {
  rateChange: RateChange;
}

function formatRate(rate: number): string {
  return `${rate.toFixed(4)}¢/kWh`;
}

/**
 * Rate comparison section: previous (black) vs current (purple #624BFF)
 * with arrow icon between. "Updated as of" is the right-side sub-heading.
 * Matches GHL row-D2Ul3br9l- (desktop).
 */
export function RateComparisonSection({
  rateChange,
}: RateComparisonSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-3xl px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <RateCard
            label={t("rateChange.previousRate")}
            value={formatRate(rateChange.previousRate)}
          />
          <Image
            src="/images/icon-arrow-down.png"
            alt=""
            width={527}
            height={527}
            className="h-8 w-8"
          />
          <RateCard
            label={`${t("rateChange.updatedAsOf")} ${rateChange.updatedAsOf}`}
            value={formatRate(rateChange.currentRate)}
            variant="current"
          />
        </div>
      </div>
    </section>
  );
}
