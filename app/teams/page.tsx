import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { Team } from "@/app/components/Team";
import { Stats } from "@/app/components/Stats";

export default function TeamsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.teamsBanner} />
      <Team data={site.teamGrid} />
    </main>
  );
}
