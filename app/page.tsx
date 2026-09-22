import { site } from "@/data";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Brands } from "./components/Brands";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Blog } from "./components/Blog";
import { FaqContent } from "./components/FaqContent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-navy text-white selection:bg-brand-light selection:text-ink">
      <main className="flex-1">
        <Hero data={{ bannerData: site.banner, featuresData: site.features }} />
        <About data={site.about} />
        <Services data={site.services} />
        <Brands data={site.brands} />
        <Testimonials data={site.testimonials} />
        <Stats data={site.stats} />
        <Team data={site.team} />
        <Blog data={site.blogs} />
        <FaqContent data={site.faqs} />
      </main>
    </div>
  );
}
