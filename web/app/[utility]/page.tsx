import { notFound } from "next/navigation";
import { getPageData, getUtilitySlugs } from "@/lib/data";
import type { UtilitySlug } from "@/types";
import { RateChangeHero } from "@/components/rate-change/RateChangeHero";
import { RateComparison } from "@/components/rate-change/RateComparison";
import { WhyItMatters } from "@/components/rate-change/WhyItMatters";
import { CtaSection } from "@/components/rate-change/CtaSection";
import { Footer } from "@/components/rate-change/Footer";

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
      <RateChangeHero rateChange={data.rateChange} />
      <RateComparison rateChange={data.rateChange} />
      <WhyItMatters valueProps={data.valueProps} />
      <CtaSection cta={data.cta} />
      <Footer footer={data.footer} />
    </main>
  );
}
