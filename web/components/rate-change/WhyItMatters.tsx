import { Check } from "lucide-react";
import { t } from "@/lib/i18n";
import type { ValueProp } from "@/types";

export function WhyItMatters({ valueProps }: { valueProps: ValueProp[] }) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-pri-body">
          {t("rateChange.whyItMatters")}
        </h2>
        <p className="mt-3 text-pri-muted">
          {t("rateChange.whyItMattersBody")}
        </p>
        <ul className="mt-6 space-y-3">
          {valueProps.map((vp) => (
            <li key={vp.textKey} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pri-blue/10 text-pri-blue">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-pri-body">{t(vp.textKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
