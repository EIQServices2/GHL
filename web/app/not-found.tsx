import Link from "next/link";
import { t } from "@/lib/i18n";

/**
 * Global 404 page (static export → 404.html).
 */
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-pri-purple">404</h1>
      <p className="mt-4 text-lg text-[#666]">{t("notFound.title")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded bg-pri-purple px-6 py-2.5 text-sm font-semibold text-white"
      >
        {t("notFound.home")}
      </Link>
    </main>
  );
}
