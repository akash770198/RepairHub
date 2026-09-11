import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";
import { BookRepairContent } from "@/app/components/BookRepairContent";

export default function BookRepairPage() {
  const siteData = data.RepairHub;
  
  // Data for header and footer
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  // Data for Testimonials
  const testimonialsData = siteData.sections.Testimonials.variants.RepairHubTestimonials1;
  
  const bannerData = siteData.sections.PageBanner.variants.BookRepairBanner;

  return (
    <main className="flex min-h-screen flex-col">
      <Header topbarData={topbarData} headerData={headerData} />
      <PageBanner bannerData={bannerData} />
      
      {/* Book Repair Form Section */}
      <BookRepairContent />

      <Testimonials testimonialsData={testimonialsData} />
      <Footer footerData={footerData} />
    </main>
  );
}
