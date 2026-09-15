import Image from "next/image";
import { t } from "@/lib/i18n";
import { Logo } from "@/components/Logo";

// Minimal GHL footer (inner pages): logo left, powered-by + text stacked below.
// bg #F1F4FA, left aligned, no links.
export function GhlFooterSection() {
  return (
    <footer className="w-full bg-[#F1F4FA] py-5 pb-8 text-[#252525]">
      <div className="mx-auto w-full max-w-[80%]">
        <div className="pri-entrance flex flex-col items-start text-left">
          <Logo href="/" width={180} height={30} className="h-[30px] w-auto" />
          <Image
            src="/images/powered-by-eiqdigital.png"
            alt="Powered by EIQdigital"
            width={164}
            height={54}
            className="pri-entrance pri-entrance-1 mt-4 h-auto w-[164px]"
          />
          <p className="pri-entrance pri-entrance-2 mt-2 text-[15px]">
            {t("Footer.Rights")}
          </p>
          <p className="pri-entrance pri-entrance-2 mt-1.5 text-[13px] italic leading-[1.1] text-[#252525]/70">
            {t("Footer.Tagline1")}
          </p>
          <p className="pri-entrance pri-entrance-2 mt-1 text-[13px] italic leading-[1.1] text-[#252525]/70">
            {t("Footer.Tagline2")}
          </p>
        </div>
      </div>
    </footer>
  );
}