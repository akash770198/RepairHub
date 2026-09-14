import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { PrivacyPolicyContent } from "@/app/components/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  const siteData = data.RepairHub;

  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;

  const bannerData = {
    title: "Privacy Policy",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header data={{ topbarData: topbarData, headerData: headerData }} />
      <PageBanner data={bannerData} />
      <PrivacyPolicyContent />
      <Footer data={footerData} />
    </main>
  );
}
