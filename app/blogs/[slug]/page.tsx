import React from "react";
import { notFound } from "next/navigation";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { BlogDetailContent } from "@/app/components/BlogDetailContent";

export function generateStaticParams() {
  const allPosts = data.RepairHub.sections.Blogs?.variants?.RepairHubBlogs1?.posts || [];
  
  return allPosts.map((post: any) => {
    const linkSlug = post.link ? post.link.split("/").pop() : post.id;
    return { slug: linkSlug };
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const siteData = data.RepairHub;
  
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  const banners = siteData.sections.PageBanner.variants as any;
  const bannerData = banners.BlogDetailBanner || banners.BlogsBanner;

  const allPosts = siteData.sections.Blogs?.variants?.RepairHubBlogs1?.posts || [];
  
  const post = allPosts.find((p: any) => {
    const linkSlug = p.link ? p.link.split("/").pop() : p.id;
    return p.id === slug || linkSlug === slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header data={{ topbarData: topbarData, headerData: headerData }} />
      {bannerData && <PageBanner data={bannerData} />}
      
      <BlogDetailContent post={post} allPosts={allPosts} />

      <Footer data={footerData} />
    </main>
  );
}
