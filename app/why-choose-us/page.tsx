import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { FeatureCards } from "@/app/components/FeatureCards";

export default function WhyChooseUsPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages["why-choose-us"];

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
          case "WhyChooseUs":
            return (
              <WhyChooseUs
                key={index}
                data={siteData.sections.WhyChooseUs.variants[component.component as keyof typeof siteData.sections.WhyChooseUs.variants]}
              />
            );
          case "FeatureCards":
            return (
              <FeatureCards
                key={index}
                data={siteData.sections.FeatureCards.variants[component.component as keyof typeof siteData.sections.FeatureCards.variants]}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
