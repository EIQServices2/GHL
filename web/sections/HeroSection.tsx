import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import type { RateChange } from "@/types";

export interface HeroSectionProps {
  rateChange: RateChange;
}

// Utility hero (GHL eiqdigital.info): desktop = row mt-20 pb-15, text col 59.9% (pad 10/5/10/0),
// heading py-10 48px lh-52.8, para mt-20 20px → constant 453px across viewports.
// Mobile = separate reference section: heading 30px lh-1.3 pt-140 pr-40 pb-4, para 14px mt-20, pb-40.
export function HeroSection({ rateChange }: HeroSectionProps) {
  const o = rateChange.overrides;
  const title = o?.heroTitle ?? `${rateChange.utility.name} ${t("Hero.Title")}.`;
  const subtitle = o?.heroSubtitle ?? t("Hero.Subtitle");

  return (
    <section className="relative mt-[72px] w-full overflow-hidden bg-pri-navy pt-[60px] pb-[40px] md:pb-[80px]">
      {/* bg image: 100% auto, top-anchored, no-repeat (GHL bgCover100) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-[length:100%_auto]"
        style={{ backgroundImage: "url(/images/hero-bg-eiq.png)" }}
        aria-hidden
      />
      <Container size="ghl" className="relative">
        {/* mobile: 80% row px-16, left-aligned, heading pushed down 140px over bg */}
        <div className="mx-auto w-[80%] px-4 md:hidden">
          <h1 className="pri-entrance pb-[4px] pr-[40px] pt-[140px] text-[30px] font-medium leading-[1.3] tracking-[-1px] text-white">
            {title}{" "}
            <span className="font-bold text-pri-lavender">
              {t("Hero.SeeHow")}
            </span>
          </h1>
          <p className="pri-entrance pri-entrance-1 mt-[20px] pr-[20px] text-[14px] font-normal leading-[21px] text-pri-muted">
            {subtitle}
          </p>
        </div>
        {/* desktop: text col 59.9% + spacer — text column-constrained, not free-flow */}
        <div className="hidden md:grid md:grid-cols-[59.9%_40.1%] md:pb-[15px] md:pt-[20px]">
          <div className="pb-[10px] pr-[5px] pt-[10px] text-left">
            <h1 className="pri-entrance py-[10px] text-[48px] font-medium leading-[52.8px] tracking-[-1px] text-white">
              {title}{" "}
              <span className="font-bold text-pri-lavender">
                {t("Hero.SeeHow")}
              </span>
            </h1>
            <p className="pri-entrance pri-entrance-1 mt-[20px] text-[20px] font-normal leading-[30px] text-pri-muted">
              {subtitle}
            </p>
          </div>
          <div aria-hidden />
        </div>
      </Container>
    </section>
  );
}