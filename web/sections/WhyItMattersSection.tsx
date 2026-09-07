import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import { Checkmark } from "@/components/Checkmark";

export interface WhyItMattersSectionProps {
  valueProps: string[];
}

/**
 * "Why It Matters" section: purple heading (#624BFF) left, body (#313131)
 * right. Value props use a customizable Checkmark (blue #188bf6) instead of
 * emoji. Matches GHL row-ZML8NaNtru.
 */
export function WhyItMattersSection({
  valueProps,
}: WhyItMattersSectionProps) {
  return (
    <section className="w-full py-12">
      <Container size="narrow" className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_3fr]">
        <h2 className="text-[42px] font-bold leading-[1.3] text-pri-purple">
          {t("rateChange.whyItMatters")}
        </h2>
        <div className="text-[18px] leading-[1.3] text-pri-dark">
          <p>{t("rateChange.whyItMattersBody")}</p>
          {valueProps.map((key) => (
            <p key={key} className="mt-2 flex items-start gap-2">
              <Checkmark className="mt-1 h-5 w-5 shrink-0 text-pri-blue" />
              <span>{t(key)}</span>
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
