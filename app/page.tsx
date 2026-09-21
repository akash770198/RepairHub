import React from "react";
import siteData from "@/data/site.json";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Brands } from "./components/Brands";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Blog } from "./components/Blog";
import { FAQ } from "./components/FAQ";

export default function Home() {
  // Extract all data dynamically from site.json - 0 hardcoding!
  const categoryData = siteData.RepairHub;
  const bannerVariant = categoryData.sections.Banner.variants.RepairHubBanner1;
  const featuresVariant = categoryData.sections.Features.variants.RepairHubFeatures1;
  const aboutVariant = categoryData.sections.About.variants.RepairHubAbout1;
  const servicesVariant = categoryData.sections.Services.variants.RepairHubServices1;
  const brandsVariant = categoryData.sections.Brands.variants.RepairHubBrands1;
  const statsVariant = categoryData.sections.Stats.variants.RepairHubStats1;
  const testimonialsVariant = categoryData.sections.Testimonials.variants.RepairHubTestimonials1;
  const teamVariant = categoryData.sections.Team.variants.RepairHubTeam1;
  const blogVariant = categoryData.sections.Blogs.variants.RepairHubBlogs1;
  const faqVariant = categoryData.sections.FAQ.variants.RepairHubFAQ1;

  return (
    <div className="min-h-screen flex flex-col bg-navy text-white selection:bg-brand-light selection:text-ink">
      {/* Dynamic Hero Section with Custom SVG and Floating Feature Cards */}
      <main className="flex-1">
        <Hero data={{ bannerData: bannerVariant, featuresData: featuresVariant }} />

        {/* Dynamic About Us Section */}
        <About data={aboutVariant} />

        {/* Dynamic Services Section */}
        <Services data={servicesVariant} />

        {/* Dynamic Brands Section */}
        <Brands data={brandsVariant} />

        {/* Dynamic Testimonials Section */}
        <Testimonials data={testimonialsVariant} />

        {/* Dynamic Stats Section */}
        <Stats data={statsVariant} />

        {/* Dynamic Team Section */}
        <Team data={teamVariant} />
        
        {/* Dynamic Blog Section */}
        <Blog data={blogVariant} />

        {/* Dynamic FAQ Section */}
        <FAQ data={faqVariant} />
      </main>
    </div>
  );
}
