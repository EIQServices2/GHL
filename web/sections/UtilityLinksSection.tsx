import { t } from "@/lib/i18n";
import { Link } from "@/elements/Link";
import type { Utility } from "@/types";

export interface UtilityLinksSectionProps {
  utilities: Utility[];
}

/**
 * Utility links section (before footer): buttons linking to each utility's
 * rate-change inner page. Data-driven from utilities.json — adding a utility
 * auto-adds a button.
 */
export function UtilityLinksSection({ utilities }: UtilityLinksSectionProps) {
  return (
    <section className="w-full bg-pri-bg-light py-12">
      <div className="mx-auto max-w-[1440px] px-4 text-center">
        <h2 className="text-2xl font-bold text-pri-ink md:text-3xl">
          {t("home.utilityLinksTitle")}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {utilities.map((u) => (
            <Link
              key={u.slug}
              href={`/${u.slug}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded border border-pri-border bg-white px-5 py-2.5 text-sm font-semibold text-pri-ink transition-colors hover:border-pri-purple hover:text-pri-purple"
            >
              {u.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
