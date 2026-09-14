import React from "react";
import type { Metadata } from "next";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { NotFoundContent } from "@/app/components/NotFoundContent";

const notFoundData = data.RepairHub.sections.NotFound.variants.RepairHubNotFound1;

export const metadata: Metadata = {
  title: notFoundData.meta.title,
  description: notFoundData.meta.description,
};

export default function NotFound() {
  const siteData = data.RepairHub;

  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header data={{ topbarData: topbarData, headerData: headerData }} />
      <NotFoundContent data={notFoundData} />
      <Footer data={footerData} />
    </main>
  );
}
