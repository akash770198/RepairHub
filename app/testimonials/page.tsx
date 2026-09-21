import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";

export default function TestimonialsPage() {
  const siteData = data.RepairHub;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.TestimonialsBanner;

  // Testimonials Data
  const testimonialsData = siteData.sections.Testimonials.variants.RepairHubTestimonials1;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <div className="bg-slate-50">
        <Testimonials data={testimonialsData} />
      </div>
    </main>
  );
}
