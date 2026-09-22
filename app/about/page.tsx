import { site } from "@/data";
import { PageBanner } from "@/app/components/PageBanner";
import { About } from "@/app/components/About";
import { FeatureCards } from "@/app/components/FeatureCards";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageBanner data={site.aboutUsBanner} />
      <About data={site.about} hideCTA />
      <WhyChooseUs data={site.whyChooseUs} />
    </main>
  );
}
