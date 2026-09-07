import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getData } from "@/lib/data";
import { t } from "@/lib/i18n";
import { HeroSection } from "@/sections/HeroSection";
import { RateComparisonSection } from "@/sections/RateComparisonSection";
import { WhyItMattersSection } from "@/sections/WhyItMattersSection";
import { TrialFormSection } from "@/sections/TrialFormSection";

export function generateStaticParams(): { utility: string }[] {
  return getData().utilities.map((u) => ({ utility: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ utility: string }>;
}): Promise<Metadata> {
  const { utility } = await params;
  const rc = getData().rateChanges.find((r) => r.utility.slug === utility);
  if (!rc) return {};

  const name = rc.utility.name;
  return {
    title: t("meta.utilityTitle", "en", { name }),
    description: t("meta.utilityDescription", "en", {
      name,
      previous: rc.previousRate,
      current: rc.currentRate,
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
  const rateChange = getData().rateChanges.find(
    (r) => r.utility.slug === utility
  );

  if (!rateChange) {
    notFound();
  }

  return (
    <>
      <HeroSection rateChange={rateChange} />
      <RateComparisonSection rateChange={rateChange} />
      <WhyItMattersSection
        valueProps={[
          "rateChange.valueProp1",
          "rateChange.valueProp2",
          "rateChange.valueProp3",
        ]}
      />
      <TrialFormSection />
    </>
  );
}
