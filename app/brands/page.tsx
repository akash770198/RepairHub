import React from "react";
import Image from "next/image";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";

export default function BrandsPage() {
  const siteData = data.RepairHub;
  
  // Data for header and footer
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  // Data for Brands
  const brandsData = siteData.sections.Brands.variants.RepairHubBrands1;
  const brandsInfo = brandsData.brandsInfo;
  const brands = brandsData.brands;
  
  // Data for Testimonials
  const testimonialsData = siteData.sections.Testimonials.variants.RepairHubTestimonials1;
  
  const bannerData = siteData.sections.PageBanner.variants.BrandsBanner;

  return (
    <main className="flex min-h-screen flex-col">
      <Header topbarData={topbarData} headerData={headerData} />
      <PageBanner bannerData={bannerData} />
      
      {/* Brands Section */}
      <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
        <div className="page-gutter flex flex-col items-center">
          
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-brand" />
            <span className="type-eyebrow text-brand">{brandsInfo.eyebrow}</span>
            <span className="h-[2px] w-8 rounded-full bg-brand" />
          </div>
          
          <h2 className="type-heading mt-4 text-navy text-center">
             <span className="block">{brandsInfo.heading.line1}</span>
             <span className="text-brand">{brandsInfo.heading.highlight}</span>
          </h2>
          
          <p className="type-body mt-5 max-w-xl text-center text-slate-500 whitespace-pre-line">
            {brandsInfo.description}
          </p>
          
          {/* Brands Grid */}
          <div className="w-full mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand.id} className="relative flex aspect-[2/1] items-center justify-center overflow-hidden rounded-md bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-400">{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonialsData={testimonialsData} />
      <Footer footerData={footerData} />
    </main>
  );
}
