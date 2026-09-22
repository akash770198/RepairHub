import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { Testimonials } from "@/app/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.testimonialsBanner} />
      <div className="bg-slate-50">
        <Testimonials data={site.testimonials} />
      </div>
    </main>
  );
}
