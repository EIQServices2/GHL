import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import { Link } from "@/elements/Link";
import type { Utility } from "@/types";

export interface UtilityLinksSectionProps {
  utilities: Utility[];
}

// Utility links (before footer): one button per utility, data-driven.
export function UtilityLinksSection({ utilities }: UtilityLinksSectionProps) {
  return (
    <section className="w-full bg-pri-bg-light py-12">
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-pri-ink md:text-3xl">
          {t("UtilityLinks.Title")}
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
      </Container>
    </section>
  );
}
