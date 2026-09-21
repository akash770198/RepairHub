import React from "react";
import { PageBanner } from "@/app/components/PageBanner";
import { PrivacyPolicyContent } from "@/app/components/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  const bannerData = {
    title: "Privacy Policy",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      <PrivacyPolicyContent />
    </main>
  );
}
