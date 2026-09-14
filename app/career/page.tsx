import React from "react";
import fs from "fs";
import path from "path";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageBanner } from "../components/PageBanner";
import { CareerContent } from "../components/CareerContent";

export default function CareerPage() {
  const dataPath = path.join(process.cwd(), "data", "site.json");
  const siteData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  
  const topbarData = siteData.RepairHub.sections.Topbar.variants.RepairHubTopbar1;
  const headerData = siteData.RepairHub.sections.Header.variants.RepairHubHeader1;
  const footerData = siteData.RepairHub.sections.Footer.variants.RepairHubFooter1;
  const careerData = siteData.RepairHub.sections.Career.variants.RepairHubCareer1;

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header data={{ topbarData: topbarData, headerData: headerData }} />
      
      <PageBanner data={careerData.banner} />
      
      <CareerContent data={careerData} />
      
      <Footer data={footerData} />
    </main>
  );
}
