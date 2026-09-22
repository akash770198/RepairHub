import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { CareerContent } from "@/app/components/CareerContent";

export default function CareerPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <PageBanner data={site.career.banner} />
      <CareerContent data={site.career} />
    </main>
  );
}
