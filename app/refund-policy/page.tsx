import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { RefundPolicyContent } from "@/app/components/RefundPolicyContent";

export default function RefundPolicyPage() {
  const siteData = data.RepairHub;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.RefundPolicyBanner;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <RefundPolicyContent />
    </main>
  );
}
