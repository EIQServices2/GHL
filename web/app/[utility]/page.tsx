import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageData, getUtilitySlugs } from "@/lib/data";
import { t } from "@/lib/i18n";
import { HeaderSection } from "@/sections/HeaderSection";
import { HeroSection } from "@/sections/HeroSection";
import { RateComparisonSection } from "@/sections/RateComparisonSection";
import { WhyItMattersSection } from "@/sections/WhyItMattersSection";
import { TrialFormSection } from "@/sections/TrialFormSection";
import { FooterSection } from "@/sections/FooterSection";

export function generateStaticParams(): { utility: string }[] {
  return getUtilitySlugs().map((slug) => ({ utility: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ utility: string }>;
}): Promise<Metadata> {
  const { utility } = await params;
  const data = getPageData(utility);
  if (!data) return {};

  const name = data.rateChange.utility.name;
  return {
    title: t("meta.utilityTitle", "en", { name }),
    description: t("meta.utilityDescription", "en", {
      name,
      previous: data.rateChange.previousRate,
      current: data.rateChange.currentRate,
    }),
    alternates: { canonical: `/${utility}` },
  };
}

export default async function UtilityPage({
  params,
}: {
  params: Promise<{ utility: string }>;
}) {
  const { utility } = await params;
  const data = getPageData(utility);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <HeaderSection />
      <HeroSection rateChange={data.rateChange} />
      <RateComparisonSection rateChange={data.rateChange} />
      <WhyItMattersSection valueProps={data.valueProps} />
      <TrialFormSection cta={data.cta} />
      <FooterSection />
    </main>
  );
}
