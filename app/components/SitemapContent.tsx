"use client";

import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface SitemapSection {
  number: string;
  title: string;
  icon: string;
  links: { label: string; href: string }[];
}

const sections: SitemapSection[] = [
  {
    number: "01",
    title: "Home",
    icon: "home",
    links: [{ label: "Home", href: "/" }],
  },
  {
    number: "02",
    title: "About Us",
    icon: "info",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Our Team", href: "/teams" },
      { label: "Team Member Detail", href: "/teams/1" },
    ],
  },
  {
    number: "03",
    title: "Repair Services",
    icon: "settings",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Service Detail", href: "/service" },
    ],
  },
  {
    number: "04",
    title: "Brands We Repair",
    icon: "smartphone",
    links: [{ label: "Brands We Repair", href: "/brands" }],
  },
  {
    number: "05",
    title: "Book A Repair",
    icon: "calendar",
    links: [{ label: "Book A Repair", href: "/book-repair" }],
  },
  {
    number: "06",
    title: "Pricing / Repair Cost",
    icon: "tag",
    links: [{ label: "Pricing / Repair Cost", href: "/pricing" }],
  },
  {
    number: "07",
    title: "Gallery",
    icon: "image",
    links: [{ label: "Photo Gallery", href: "/gallery" }],
  },
  {
    number: "08",
    title: "Testimonials",
    icon: "message-circle",
    links: [{ label: "Testimonials", href: "/testimonials" }],
  },
  {
    number: "09",
    title: "Blog",
    icon: "book-open",
    links: [
      { label: "Blog Listing", href: "/blogs" },
      { label: "Blog Detail", href: "/blogs/1" },
    ],
  },
  {
    number: "10",
    title: "FAQ",
    icon: "help-circle",
    links: [{ label: "FAQ", href: "/faqs" }],
  },
  {
    number: "11",
    title: "Careers",
    icon: "briefcase",
    links: [
      { label: "Careers", href: "/career" },
      { label: "Career Detail", href: "/career/senior-technician" },
    ],
  },
  {
    number: "12",
    title: "Contact Us",
    icon: "phone",
    links: [{ label: "Contact Us", href: "/contact" }],
  },
  {
    number: "13",
    title: "Policies",
    icon: "shield",
    links: [{ label: "Refund Policy", href: "/refund-policy" }],
  },

];

export function SitemapContent() {
  return (
    <section className="w-full bg-white py-16">
      <div className="page-gutter">
        {/* Logo / Page Header */}
        <Reveal animation="rh-fade-up">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-2">
              Repair<span className="text-brand">Hub</span>
            </h2>
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
              Mobile Repair Experts
            </p>
            <div className="w-12 h-[3px] bg-brand" />
          </div>
        </Reveal>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sections.map((section, idx) => (
            <Reveal animation="rh-fade-up" delay={idx * 50} key={section.number}>
              <div className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* Card Header */}
                <div className="bg-navy px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <DynamicIcon name={section.icon} size={18} className="text-brand" />
                  </div>
                  <h3 className="font-bold text-white text-sm leading-tight">
                    <span className="text-brand mr-1">{section.number}.</span>
                    {section.title}
                  </h3>
                </div>

                {/* Card Links */}
                <div className="bg-white px-5 py-4 flex flex-col gap-3 flex-grow">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-600 hover:text-brand transition-colors group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 group-hover/link:scale-125 transition-transform" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
