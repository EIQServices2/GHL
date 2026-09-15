import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import type { RateChange } from "@/types";

export interface HeroSectionProps {
  rateChange: RateChange;
}

// Utility hero (GHL eiqdigital.info): photo bg 100%-width top-anchored, H1 48px/wt-500 with wt-700 span, P 20px #8893a8.
export function HeroSection({ rateChange }: HeroSectionProps) {
  const o = rateChange.overrides;
  const title = o?.heroTitle ?? `${rateChange.utility.name} ${t("Hero.Title")}.`;
  const subtitle = o?.heroSubtitle ?? t("Hero.Subtitle");

  return (
    <section className="relative w-full overflow-hidden bg-pri-navy pt-[60px] pb-[80px]">
      {/* bg image: 100% auto, top-anchored, no-repeat (GHL bgCover100) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-[length:100%_auto]"
        style={{ backgroundImage: "url(/images/hero-bg-eiq.png)" }}
        aria-hidden
      />
      <Container size="narrow" className="relative text-left">
        <h1 className="pri-entrance text-left text-[30px] font-medium leading-[1.1] tracking-[-1px] text-white md:text-[48px] md:leading-[52.8px]">
          {title}{" "}
          <span className="font-bold text-pri-lavender">{t("Hero.SeeHow")}</span>
        </h1>
        <p className="pri-entrance pri-entrance-1 mt-4 max-w-xl text-[20px] font-normal leading-[30px] text-pri-muted">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}