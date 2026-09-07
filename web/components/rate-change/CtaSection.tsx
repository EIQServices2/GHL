import { t } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import type { CtaConfig } from "@/types";

export function CtaSection({ cta }: { cta: CtaConfig }) {
  return (
    <section className="w-full bg-pri-purple py-16 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
          {t("rateChange.experienceFree")}
        </h2>
        <h3 className="mt-3 text-3xl font-bold text-white">
          {t("rateChange.startMonitoring")}
        </h3>
        <Button
          asChild
          size="lg"
          className="mt-6 rounded-full bg-white text-pri-purple hover:bg-white/90"
        >
          <a href={cta.href}>{t(cta.labelKey)}</a>
        </Button>
      </div>
    </section>
  );
}
