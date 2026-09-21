import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { FaqContent } from "@/app/components/FaqContent";

export default function FaqsPage() {
  const siteData = data.RepairHub;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.FaqsBanner;

  // Faqs Data
  const faqData = siteData.sections.Faqs.variants.RepairHubFaqs1;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <FaqContent data={faqData} />
    </main>
  );
}
