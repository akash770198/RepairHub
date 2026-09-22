import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { PricingContent } from "@/app/components/PricingContent";

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.pricingBanner} />
      <PricingContent data={site.pricing} />
    </main>
  );
}
