import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { BlogsContent } from "@/app/components/BlogsContent";

export default function BlogsPage() {
  const siteData = data.RepairHub;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.BlogsBanner;

  // Blogs Data
  const blogsData = siteData.sections.Blogs.variants.RepairHubBlogs1;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <BlogsContent data={blogsData} />
    </main>
  );
}
