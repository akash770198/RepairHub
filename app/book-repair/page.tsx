import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";
import { BookRepairContent } from "@/app/components/BookRepairContent";

export default function BookRepairPage() {
  const siteData = data.RepairHub;
  
  // Data for Testimonials
  const testimonialsData = siteData.sections.Testimonials.variants.RepairHubTestimonials1;
  
  const bannerData = siteData.sections.PageBanner.variants.BookRepairBanner;

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      
      {/* Book Repair Form Section */}
      <BookRepairContent />

      <Testimonials data={testimonialsData} />
    </main>
  );
}
