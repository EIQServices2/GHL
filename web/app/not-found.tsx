import { t } from "@/lib/i18n";
import { Link } from "@/elements/Link";
import { Header } from "@/sections/Header";

// Global 404 page (static export → 404.html); uses home-style header.
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-pri-org-accent md:text-6xl">404</h1>
        <p className="mt-4 text-lg text-pri-ink-muted">{t("NotFound.Title")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded bg-pri-org-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-pri-org-accent/90"
        >
          {t("NotFound.Home")}
        </Link>
      </div>
    </>
  );
}