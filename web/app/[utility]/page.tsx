import { notFound } from "next/navigation";
import { getPageData, getUtilitySlugs } from "@/lib/data";
import type { UtilitySlug } from "@/types";
import { HeaderSection } from "@/sections/HeaderSection";
import { HeroSection } from "@/sections/HeroSection";
import { RateComparisonSection } from "@/sections/RateComparisonSection";
import { WhyItMattersSection } from "@/sections/WhyItMattersSection";
import { TrialFormSection } from "@/sections/TrialFormSection";
import { FooterSection } from "@/sections/FooterSection";

export function generateStaticParams(): { utility: UtilitySlug }[] {
  return getUtilitySlugs().map((slug) => ({ utility: slug }));
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
