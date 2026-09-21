import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { PricingContent } from "@/app/components/PricingContent";

export default function PricingPage() {
  const siteData = data.RepairHub;
  
  const bannerData = siteData.sections.PageBanner.variants.PricingBanner;

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      
      {/* Pricing Content */}
      <PricingContent data={siteData.sections.Pricing.variants.RepairHubPricing1} />
    </main>
  );
}
