import { t } from "@/lib/i18n";
import type { RateChange } from "@/types";

export function RateChangeHero({ rateChange }: { rateChange: RateChange }) {
  return (
    <section className="w-full bg-pri-surface py-16 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-pri-body md:text-5xl">
          {rateChange.utility.name} {t("rateChange.title")}
        </h1>
        <p className="mt-4 text-lg text-pri-muted">
          {t("rateChange.subtitle")}
        </p>
      </div>
    </section>
  );
}
