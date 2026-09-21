import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { Services } from "@/app/components/Services";

export default function ServicesPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages.services;

  return (
    <main className="flex min-h-screen flex-col">
      {layout.components.map((component: any, index: number) => {
        switch (component.key) {
          case "PageBanner":
            return (
              <PageBanner
                key={index}
                data={siteData.sections.PageBanner.variants[component.component as keyof typeof siteData.sections.PageBanner.variants]}
              />
            );
          case "Services":
            return (
              <Services
                key={index}
                data={siteData.sections.Services.variants[component.component as keyof typeof siteData.sections.Services.variants] as any}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
