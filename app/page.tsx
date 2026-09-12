import React from "react";
import siteData from "@/data/site.json";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Brands } from "./components/Brands";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Blog } from "./components/Blog";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function Home() {
  // Extract all data dynamically from site.json - 0 hardcoding!
  const categoryData = siteData.RepairHub;
  const topbarVariant = categoryData.sections.Topbar.variants.RepairHubTopbar1;
  const headerVariant = categoryData.sections.Header.variants.RepairHubHeader1;
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
  const footerVariant = categoryData.sections.Footer.variants.RepairHubFooter1;

  return (
    <div className="min-h-screen flex flex-col bg-navy text-white selection:bg-brand-light selection:text-ink">
      {/* Dynamic Header & Topbar */}
      <Header topbarData={topbarVariant} headerData={headerVariant} />

      {/* Dynamic Hero Section with Custom SVG and Floating Feature Cards */}
      <main className="flex-1">
        <Hero bannerData={bannerVariant} featuresData={featuresVariant} />

        {/* Dynamic About Us Section */}
        <About aboutData={aboutVariant} />

        {/* Dynamic Services Section */}
        <Services servicesData={servicesVariant} />

        {/* Dynamic Brands Section */}
        <Brands brandsData={brandsVariant} />

        {/* Dynamic Testimonials Section */}
        <Testimonials testimonialsData={testimonialsVariant} />

        {/* Dynamic Stats Section */}
        <Stats statsData={statsVariant} />

        {/* Dynamic Team Section */}
        <Team teamData={teamVariant} />
        
        {/* Dynamic Blog Section */}
        <Blog blogData={blogVariant} />

        {/* Dynamic FAQ Section */}
        <FAQ faqData={faqVariant} />
      </main>

      {/* Dynamic Footer Section */}
      <Footer footerData={footerVariant} />
    </div>
  );
}
