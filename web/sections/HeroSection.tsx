import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import type { RateChange } from "@/types";

export interface HeroSectionProps {
  rateChange: RateChange;
}

// Utility hero: navy bg + hero-wide image, two-tone heading.
export function HeroSection({ rateChange }: HeroSectionProps) {
  const o = rateChange.overrides;
  const title = o?.heroTitle ?? `${rateChange.utility.name} ${t("Hero.Title")}.`;
  const subtitle = o?.heroSubtitle ?? t("Hero.Subtitle");

  return (
    <section className="relative w-full overflow-hidden bg-pri-navy py-[60px]">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat md:bg-[length:100%_auto]"
        style={{
          backgroundImage: "url(/images/hero-wide.png)",
        }}
        aria-hidden
      />
      <Container size="narrow" className="relative text-left">
        <h1 className="text-3xl font-normal leading-[1.1] tracking-[-1px] text-white md:text-5xl">
          {title}{" "}
          <span className="text-pri-lavender">{t("Hero.SeeHow")}</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-[1.5] text-white">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
