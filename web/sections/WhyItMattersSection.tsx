import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import { Checkmark } from "@/components/Checkmark";

export interface WhyItMattersSectionProps {
  valueProps: string[];
  body?: string;
}

// "Why It Matters" section: black heading left, body right, entrance animations per element.
export function WhyItMattersSection({
  valueProps,
  body,
}: WhyItMattersSectionProps) {
  return (
    <section className="w-full py-12">
      <Container size="ghl" className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_3fr]">
        <h2 className="pri-entrance text-3xl font-bold leading-[1.3] text-black md:text-[42px]">
          {t("WhyItMatter.Title")}
        </h2>
        <div className="pri-entrance pri-entrance-1 text-base leading-[1.4] text-pri-dark md:text-[18px] md:leading-[1.3]">
          <p>{body ?? t("WhyItMatter.Body")}</p>
          {valueProps.map((key, i) => (
            <p
              key={key}
              className={`mt-2 flex items-start gap-2 ${i === 0 ? "pri-entrance pri-entrance-2" : i === 1 ? "pri-entrance pri-entrance-3" : "pri-entrance pri-entrance-3"}`}
              style={{ animationDelay: `${0.25 + i * 0.15}s` }}
            >
              <Checkmark className="mt-1 h-5 w-5 shrink-0 text-pri-blue" />
              <span>{t(key)}</span>
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}