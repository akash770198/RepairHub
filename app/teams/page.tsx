import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { Team } from "@/app/components/Team";
import { Stats } from "@/app/components/Stats";

export default function TeamsPage() {
  const siteData = data.RepairHub;
  const layout = siteData.templateComponents["template-1"].pages.teams;

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
          case "Team":
            return (
              <Team
                key={index}
                data={siteData.sections.Team.variants[component.component as keyof typeof siteData.sections.Team.variants]}
              />
            );
          case "Stats":
            return (
              <Stats
                key={index}
                data={siteData.sections.Stats.variants[component.component as keyof typeof siteData.sections.Stats.variants]}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
