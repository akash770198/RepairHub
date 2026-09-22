import { notFound } from "next/navigation";
import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { TeamMemberDetail, ExtendedTeamMember } from "@/app/components/TeamMemberDetail";

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member = [...site.team.members, ...site.teamGrid.members].find(
    (m) => m.id === id
  ) as ExtendedTeamMember | undefined;

  if (!member) {
    notFound();
  }

  const bannerData = {
    title: "Team Detail",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Teams", href: "/teams" },
      { label: "Team Detail", href: `/teams/${id}` },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={bannerData} />
      <TeamMemberDetail member={member} />
    </main>
  );
}

export function generateStaticParams() {
  const allMembers = [...site.team.members, ...site.teamGrid.members];
  const uniqueIds = Array.from(new Set(allMembers.map((m) => m.id)));

  return uniqueIds.map((id) => ({ id }));
}
