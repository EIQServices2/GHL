import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import type { RateChange } from "@/types";

export interface HeroSectionProps {
  rateChange: RateChange;
}

/**
 * Hero section: deep navy background + hero-wide background image (GHL
 * section-EjUrkJcvV6, bg 689a4bd76bdead336d0404ba.png). GHL uses
 * .bgCover100 = background-size:100% auto + no-repeat + top. Text left-aligned.
 * Heading is two-tone: white + lavender second line.
 */
export function HeroSection({ rateChange }: HeroSectionProps) {
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
          {rateChange.utility.name} {t("rateChange.title")}.{" "}
          <span className="text-pri-lavender">{t("rateChange.seeHow")}</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-[1.5] text-white">
          {t("rateChange.subtitle")}
        </p>
      </Container>
    </section>
  );
}
