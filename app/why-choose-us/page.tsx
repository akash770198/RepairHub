import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { FeatureCards } from "@/app/components/FeatureCards";

export default function WhyChooseUsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.whyChooseUsBanner} />
      <WhyChooseUs data={site.whyChooseUs} />
    </main>
  );
}
