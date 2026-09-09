import Image from "next/image";
import { t } from "@/lib/i18n";
import { Logo } from "@/components/Logo";

// Minimal GHL footer (inner pages): logo + badge left, copyright + tagline right.
// Ditto clone of GHL section I1KZBFhshM — bg #F1F4FA, row width 80%, no links.
export function GhlFooterSection() {
  return (
    <footer className="w-full bg-[#F1F4FA] py-5 pb-8 text-[#252525]">
      <div className="mx-auto flex w-full max-w-[80%] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <Logo href="/" width={180} height={30} className="h-[30px] w-auto" />
          <Image
            src="/images/powered-by-eiqdigital.png"
            alt="Powered by EIQdigital"
            width={164}
            height={54}
            className="h-auto w-[164px]"
          />
        </div>
        <div className="text-left md:text-right">
          <p className="text-[15px]">{t("Footer.Rights")}</p>
          <p className="mt-1.5 text-[13px] italic leading-[1.1] text-[#252525]/70">
            {t("Footer.Tagline1")}
          </p>
          <p className="mt-1 text-[13px] italic leading-[1.1] text-[#252525]/70">
            {t("Footer.Tagline2")}
          </p>
        </div>
      </div>
    </footer>
  );
}