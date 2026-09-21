import React from "react";
import { PageBanner } from "../components/PageBanner";
import { SitemapContent } from "../components/SitemapContent";

export default function SitemapPage() {
  const bannerData = {
    title: "Sitemap",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      <SitemapContent />
    </main>
  );
}
