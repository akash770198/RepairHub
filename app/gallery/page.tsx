import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { GalleryContent } from "@/app/components/GalleryContent";

export default function GalleryPage() {
  const siteData = data.RepairHub;
  
  const galleryData = siteData.sections.Gallery.variants.RepairHubGallery1;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.GalleryBanner;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <GalleryContent data={galleryData} />
    </main>
  );
}
