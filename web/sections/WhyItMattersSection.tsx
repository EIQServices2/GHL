import { t } from "@/lib/i18n";

export interface WhyItMattersSectionProps {
  valueProps: string[];
}

/**
 * "Why It Matters" section: purple heading (#624BFF) left, body (#313131)
 * right. Value props use ✅ emoji (GHL uses emoji, not icons).
 * Matches GHL row-ZML8NaNtru.
 */
export function WhyItMattersSection({
  valueProps,
}: WhyItMattersSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-6 md:grid-cols-[2fr_3fr]">
        <h2 className="text-[42px] font-bold leading-[1.3] text-pri-purple">
          {t("rateChange.whyItMatters")}
        </h2>
        <div className="text-[18px] leading-[1.3] text-[#313131]">
          <p>{t("rateChange.whyItMattersBody")}</p>
          {valueProps.map((key) => (
            <p key={key} className="mt-1">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
