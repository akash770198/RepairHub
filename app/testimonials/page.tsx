import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";

export default function TestimonialsPage() {
  const siteData = data.RepairHub;
  
  // Data for header and footer
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.TestimonialsBanner;

  // Testimonials Data
  const testimonialsData = siteData.sections.Testimonials.variants.RepairHubTestimonials1;

  return (
    <main className="flex min-h-screen flex-col">
      <Header topbarData={topbarData} headerData={headerData} />
      {bannerData && <PageBanner bannerData={bannerData} />}
      
      <div className="bg-slate-50">
        <Testimonials testimonialsData={testimonialsData} />
      </div>

      <Footer footerData={footerData} />
    </main>
  );
}
