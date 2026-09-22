import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";
import { BookRepairContent } from "@/app/components/BookRepairContent";

export default function BookRepairPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.bookRepairBanner} />
      <BookRepairContent />
      <Testimonials data={site.testimonials} />
    </main>
  );
}
