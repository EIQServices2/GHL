import Image from "next/image";
import { t } from "@/lib/i18n";
import { Container } from "@/elements/Container";
import type { FeatureCard } from "@/types/home";

export interface HomeFeaturesProps {
  cards: FeatureCard[];
}

// Feature cards section: 4 cards with line-art icons.
export function HomeFeatures({ cards }: HomeFeaturesProps) {
  return (
    <section className="w-full bg-white py-12">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-pri-ink md:text-3xl">
          {t("HomeFeatures.Title")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.textKey}
              className="rounded-lg border border-pri-border p-6 text-center shadow-sm"
            >
              <Image
                src={`/images/${c.icon}`}
                alt=""
                width={80}
                height={80}
                className="mx-auto h-16 w-16"
              />
              <p className="mt-4 text-[15px] text-pri-ink-muted">{t(c.textKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
