import { t } from "@/lib/i18n";
import type { FooterConfig } from "@/types";

export function Footer({ footer }: { footer: FooterConfig }) {
  return (
    <footer className="w-full bg-pri-body py-8 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-white/80">{footer.copyright}</p>
        <p className="mt-2 text-xs text-white/60">{t(footer.taglineKey)}</p>
      </div>
    </footer>
  );
}
