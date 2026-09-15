import Image from "next/image";
import { t } from "@/lib/i18n";
import { Logo } from "@/components/Logo";
import { Container } from "@/elements/Container";

// GHL footer (inner pages): two columns — left 62.3% (logo top, rights bottom, space-between),
// right 37.7% (powered-by img + tagline, centered). bg #F1F4FA, row width 80%.
export function GhlFooterSection() {
  return (
    <footer className="w-full bg-[#F1F4FA] py-[15px] text-[#252525]">
      <Container size="ghl">
        <div className="pri-entrance flex w-full flex-col justify-between gap-8 md:flex-row md:items-stretch">
          {/* left col: logo + rights */}
          <div className="flex flex-col justify-between md:w-[62.3%]">
            <Logo href="/" width={180} height={30} className="h-auto w-[180px]" />
            <p className="pri-entrance pri-entrance-1 mt-8 text-[16px] font-normal text-black">
              {t("Footer.Rights")}
            </p>
          </div>
          {/* right col: powered-by + tagline */}
          <div className="flex flex-col justify-center md:w-[37.7%]">
            <Image
              src="/images/powered-by-eiqdigital.png"
              alt="Powered by EIQdigital"
              width={164}
              height={54}
              className="pri-entrance pri-entrance-1 h-auto w-[164px]"
            />
            <p className="pri-entrance pri-entrance-2 mt-5 text-[16px] font-normal leading-[1.3] text-black/50">
              {t("Footer.Tagline1")}
              <br />
              {t("Footer.Tagline2")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}