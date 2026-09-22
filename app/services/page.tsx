import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { Services } from "@/app/components/Services";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.repairServiceBanner} />
      <Services data={site.servicesGrid} />
    </main>
  );
}
