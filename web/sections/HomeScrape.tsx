import Image from "next/image";
import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";

// Data scraping section: light lavender bg, illustration left + 3 bullets right.
export function HomeScrape() {
  return (
    <section className="w-full bg-pri-bg-light py-12">
      <Container className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_2fr]">
        <Image
          src="/images/data-store-1.png"
          alt=""
          width={600}
          height={400}
          className="h-auto w-full"
        />
        <div>
          <h2 className="text-2xl font-bold leading-snug text-pri-ink md:text-3xl">
            {t("home.scrapeTitle")}
          </h2>
          <ul className="mt-6 space-y-3 text-[15px] text-pri-ink-muted">
            <li>• {t("home.scrapeBullet1")}</li>
            <li>• {t("home.scrapeBullet2")}</li>
            <li>• {t("home.scrapeBullet3")}</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
