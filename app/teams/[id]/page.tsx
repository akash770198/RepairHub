import React from "react";
import data from "@/data/site.json";
import { PageBanner } from "@/app/components/PageBanner";
import { TeamMemberDetail, ExtendedTeamMember } from "@/app/components/TeamMemberDetail";
import { notFound } from "next/navigation";

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const siteData = data.RepairHub;
  const { id } = await params;
  
  // Find the member in either Team1 or TeamGrid
  let member: ExtendedTeamMember | undefined;
  
  const team1Members = siteData.sections.Team.variants.RepairHubTeam1.members;
  const teamGridMembers = siteData.sections.Team.variants.RepairHubTeamGrid.members;
  
  member = [...team1Members, ...teamGridMembers].find((m: any) => m.id === id) as ExtendedTeamMember | undefined;

  if (!member) {
    notFound();
  }

  // Create a custom banner data for the detail page
  const bannerData = {
    title: "Team Detail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Teams", href: "/teams" },
      { label: "Team Detail", href: `/teams/${id}` }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      
      <TeamMemberDetail member={member} />
    </main>
  );
}

// Generate static params for all members
export function generateStaticParams() {
  const siteData = data.RepairHub;
  const team1Members = siteData.sections.Team.variants.RepairHubTeam1.members;
  const teamGridMembers = siteData.sections.Team.variants.RepairHubTeamGrid.members;
  
  const allMembers = [...team1Members, ...teamGridMembers];
  
  // Return unique IDs
  const uniqueIds = Array.from(new Set(allMembers.map(m => m.id)));
  
  return uniqueIds.map((id) => ({
    id: id,
  }));
}
