import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { About } from "@/app/components/About";
import { FeatureCards } from "@/app/components/FeatureCards";
import { PageBanner } from "@/app/components/PageBanner";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";

export default function AboutPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages.about;

  return (
    <main className="flex min-h-screen flex-col">
      {layout.map((component: any, index: number) => {
        switch (component.section) {
          case "Header":
            return (
              <Header
                key={index}
                topbarData={siteData.sections.Topbar.variants.RepairHubTopbar1}
                headerData={siteData.sections.Header.variants[component.variant as keyof typeof siteData.sections.Header.variants]}
              />
            );
          case "PageBanner":
            return (
              <PageBanner
                key={index}
                bannerData={siteData.sections.PageBanner.variants[component.variant as keyof typeof siteData.sections.PageBanner.variants]}
              />
            );
          case "About":
            return (
              <About
                key={index}
                aboutData={siteData.sections.About.variants[component.variant as keyof typeof siteData.sections.About.variants]}
              />
            );
          case "FeatureCards":
            return (
              <FeatureCards
                key={index}
                data={siteData.sections.FeatureCards.variants[component.variant as keyof typeof siteData.sections.FeatureCards.variants]}
              />
            );
          case "WhyChooseUs":
            return (
              <WhyChooseUs
                key={index}
                data={siteData.sections.WhyChooseUs.variants[component.variant as keyof typeof siteData.sections.WhyChooseUs.variants]}
              />
            );
          case "Footer":
            return (
              <Footer
                key={index}
                footerData={siteData.sections.Footer.variants[component.variant as keyof typeof siteData.sections.Footer.variants]}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
