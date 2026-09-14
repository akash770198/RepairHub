import React from "react";
import fs from "fs";
import path from "path";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageBanner } from "../components/PageBanner";
import { SitemapContent } from "../components/SitemapContent";

export default function SitemapPage() {
  const dataPath = path.join(process.cwd(), "data", "site.json");
  const siteData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  const topbarData = siteData.RepairHub.sections.Topbar.variants.RepairHubTopbar1;
  const headerData = siteData.RepairHub.sections.Header.variants.RepairHubHeader1;
  const footerData = siteData.RepairHub.sections.Footer.variants.RepairHubFooter1;

  const bannerData = {
    title: "Sitemap",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header data={{ topbarData: topbarData, headerData: headerData }} />
      <PageBanner data={bannerData} />
      <SitemapContent />
      <Footer data={footerData} />
    </main>
  );
}
