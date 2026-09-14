import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { Services } from "@/app/components/Services";

export default function ServicesPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages.services;

  return (
    <main className="flex min-h-screen flex-col">
      {layout.components.map((component: any, index: number) => {
        switch (component.key) {
          case "Header":
            return (
              <Header
                key={index}
                topbarData={siteData.sections.Topbar.variants.RepairHubTopbar1}
                headerData={siteData.sections.Header.variants[component.component as keyof typeof siteData.sections.Header.variants]}
              />
            );
          case "PageBanner":
            return (
              <PageBanner
                key={index}
                bannerData={siteData.sections.PageBanner.variants[component.component as keyof typeof siteData.sections.PageBanner.variants]}
              />
            );
          case "Services":
            return (
              <Services
                key={index}
                servicesData={siteData.sections.Services.variants[component.component as keyof typeof siteData.sections.Services.variants]}
              />
            );
          case "Footer":
            return (
              <Footer
                key={index}
                footerData={siteData.sections.Footer.variants[component.component as keyof typeof siteData.sections.Footer.variants]}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
