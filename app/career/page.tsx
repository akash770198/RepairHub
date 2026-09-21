import React from "react";
import fs from "fs";
import path from "path";
import { PageBanner } from "../components/PageBanner";
import { CareerContent } from "../components/CareerContent";

export default function CareerPage() {
  const dataPath = path.join(process.cwd(), "data", "site.json");
  const siteData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  
  const careerData = siteData.RepairHub.sections.Career.variants.RepairHubCareer1;

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <PageBanner data={careerData.banner} />
      
      <CareerContent data={careerData} />
    </main>
  );
}
