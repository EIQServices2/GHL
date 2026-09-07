import Image from "next/image";
import { t } from "@/lib/i18n";
import type { FooterConfig } from "@/types";

export interface FooterSectionProps {
  footer: FooterConfig;
}

/**
 * Footer section: light background (#F1F4FA), dark text, two columns —
 * logo (180px) + copyright (left), "Powered by EIQdigital" badge (164px) +
 * two-line tagline (right). Matches GHL section-I1KZBFhshM.
 */
export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="w-full bg-pri-surface py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src="/images/logo-powerrateindex.png"
            alt="Power Rate Index"
            width={1406}
            height={174}
            className="h-auto w-[180px]"
          />
          <p className="text-sm text-[#3d3d3d] opacity-50">
            {footer.copyright}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <Image
            src="/images/badge-eiqdigital.png"
            alt="Powered by EIQdigital"
            width={486}
            height={161}
            className="h-auto w-[164px]"
          />
          <div className="text-center text-sm leading-[1.5] text-pri-footer-text sm:text-right">
            <p>{t("footer.tagline1")}</p>
            <p>{t("footer.tagline2")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
