import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { PageBanner } from "../../components/PageBanner";
import { CareerDetailContent } from "../../components/CareerDetailContent";

export default async function CareerDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const dataPath = path.join(process.cwd(), "data", "site.json");
  const siteData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  
  const careerData = siteData.RepairHub.sections.Career.variants.RepairHubCareer1;

  // Find the specific job
  const job = careerData.jobs?.find((j: any) => j.slug === slug);
  
  if (!job) {
    notFound();
  }

  // Get other jobs excluding the current one
  const otherJobs = careerData.jobs?.filter((j: any) => j.slug !== slug) || [];

  const bannerData = {
    title: "Career Detail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Career", href: "/career" },
      { label: "Career Detail", href: `/career/${slug}` }
    ]
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <PageBanner data={bannerData} />
      
      <CareerDetailContent 
        job={job} 
        sidebar={careerData.sidebar} 
        otherJobs={otherJobs} 
      />
    </main>
  );
}
