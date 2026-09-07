import Image from "next/image";
import { t } from "@/lib/i18n";
import type { FeatureCard } from "@/types/home";

export interface HomeFeaturesProps {
  cards: FeatureCard[];
}

/**
 * Feature cards section: 4 cards with line-art icons.
 * Matches powerrateindex.org "critical tool" section.
 */
export function HomeFeatures({ cards }: HomeFeaturesProps) {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold text-[#121f27] md:text-3xl">
          {t("home.featuresTitle")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.text}
              className="rounded-lg border border-[#e5e5e5] p-6 text-center shadow-sm"
            >
              <Image
                src={`/images/${c.icon}`}
                alt=""
                width={80}
                height={80}
                className="mx-auto h-16 w-16"
              />
              <p className="mt-4 text-[15px] text-[#666]">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
