import React from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { Team } from "@/app/components/Team";
import { Stats } from "@/app/components/Stats";

export default function TeamsPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages.teams;

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
          case "Team":
            return (
              <Team
                key={index}
                teamData={siteData.sections.Team.variants[component.variant as keyof typeof siteData.sections.Team.variants]}
              />
            );
          case "Stats":
            return (
              <Stats
                key={index}
                statsData={siteData.sections.Stats.variants[component.variant as keyof typeof siteData.sections.Stats.variants]}
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
