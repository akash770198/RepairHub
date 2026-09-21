import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { ContactContent } from "@/app/components/ContactContent";

export default function ContactPage() {
  const siteData = data.RepairHub;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.ContactBanner;

  // Contact Data
  const contactData = siteData.sections.Contact.variants.RepairHubContact1;

  return (
    <main className="flex min-h-screen flex-col">
      {bannerData && <PageBanner data={bannerData} />}
      
      <ContactContent data={contactData} />
    </main>
  );
}
