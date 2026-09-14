import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { PricingContent } from "@/app/components/PricingContent";

export default function PricingPage() {
  const siteData = data.RepairHub;
  
  // Data for header and footer
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  const bannerData = siteData.sections.PageBanner.variants.PricingBanner;

  return (
    <main className="flex min-h-screen flex-col">
      <Header topbarData={topbarData} headerData={headerData} />
      <PageBanner bannerData={bannerData} />
      
      {/* Pricing Content */}
      <PricingContent data={siteData.sections.Pricing.variants.RepairHubPricing1} />

      <Footer footerData={footerData} />
    </main>
  );
}
