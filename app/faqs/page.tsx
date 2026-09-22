import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { FaqContent } from "@/app/components/FaqContent";

export default function FaqsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.faqsBanner} />
      <FaqContent data={site.faqs} />
    </main>
  );
}
