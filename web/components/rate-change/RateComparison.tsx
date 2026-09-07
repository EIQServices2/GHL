import { t } from "@/lib/i18n";
import type { RateChange } from "@/types";

function formatRate(rate: number): string {
  return `${rate.toFixed(4)}¢/kWh`;
}

export function RateComparison({ rateChange }: { rateChange: RateChange }) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 px-6">
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm font-medium text-pri-muted">
            {t("rateChange.previousRate")}
          </p>
          <p className="mt-2 text-3xl font-bold text-pri-body">
            {formatRate(rateChange.previousRate)}
          </p>
        </div>
        <div className="rounded-xl border border-pri-blue bg-card p-6 text-center">
          <p className="text-sm font-medium text-pri-muted">
            {t("rateChange.currentRate")}
          </p>
          <p className="mt-2 text-3xl font-bold text-pri-blue">
            {formatRate(rateChange.currentRate)}
          </p>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-pri-muted">
        {t("rateChange.updatedAsOf")} {rateChange.updatedAsOf}
      </p>
    </section>
  );
}
