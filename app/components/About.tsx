import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface AboutImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface AboutHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface AboutData {
  eyebrow: string;
  heading: {
    line1: string;
    line2: string;
    line2Highlight: string;
  };
  description: string;
  media: {
    primaryImage: AboutImage;
    secondaryImage: AboutImage;
    badgeIcon: string;
  };
  highlights: AboutHighlight[];
  ctaButton: {
    label: string;
    href: string;
    icon: string;
  };
}

interface AboutProps {
  aboutData: AboutData;
}

const DotGrid: React.FC<{ className?: string; rows: number; cols: number }> = ({
  className = "",
  rows,
  cols,
}) => (
  <svg
    aria-hidden
    className={className}
    width={cols * 14}
    height={rows * 14}
    fill="none"
  >
    {Array.from({ length: rows }).map((_, row) =>
      Array.from({ length: cols }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 14 + 3}
          cy={row * 14 + 3}
          r="2.5"
          fill="currentColor"
        />
      ))
    )}
  </svg>
);

export const About: React.FC<AboutProps> = ({ aboutData }) => {
  const { primaryImage, secondaryImage, badgeIcon } = aboutData.media;

  return (
    <section id="about" className="relative w-full overflow-clip bg-white py-20 lg:py-24">
      <div className="page-gutter relative grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-12">
        {/* Decorative dot grids, kept inside the page gutter */}
        <DotGrid
          rows={4}
          cols={5}
          className="pointer-events-none absolute right-0 top-0 hidden text-brand/60 lg:block"
        />
        <DotGrid
          rows={5}
          cols={6}
          className="pointer-events-none absolute bottom-0 right-0 hidden text-brand/60 lg:block"
        />

        {/* LEFT — IMAGE COLLAGE */}
        <Reveal animation="rh-fade-left" className="relative mx-auto w-full max-w-[640px] lg:mx-0">
          {/* Yellow block sitting behind the frame, peeking out top, left and bottom */}
          <span className="absolute -top-5 bottom-[-14px] left-0 w-[20%] rounded-[28px] bg-brand" />

          {/* Main framed photo */}
          <div className="relative z-10 ml-[5%] w-[67%] rounded-[26px] bg-white p-2 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)] sm:p-2.5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                fill
                sizes="(max-width: 1024px) 60vw, 27vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Overlapping inset photo with the yellow border */}
          <div className="absolute right-[1%] top-[22%] z-20 w-[38%] overflow-hidden rounded-[22px] border-[5px] border-brand shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]">
            <div className="relative aspect-[4/7]">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(max-width: 1024px) 34vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Centre emblem straddling both photos */}
          <span className="absolute left-[60%] top-[61%] z-30 flex aspect-square w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-[0_14px_30px_-10px_rgba(2,6,23,0.6)]">
            <span className="absolute inset-[7%] rounded-full border-2 border-dashed border-brand animate-[spin_8s_linear_infinite]" />
            <DynamicIcon name={badgeIcon} className="h-[65%] w-[65%] text-brand" size={64} />
          </span>
        </Reveal>

        {/* RIGHT — COPY */}
        <div className="relative">
          <Reveal>
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-brand" />
              <span className="type-eyebrow text-card">{aboutData.eyebrow}</span>
              <span className="h-[3px] w-9 rounded-full bg-brand" />
            </div>

            {/* Heading */}
            <h2 className="type-heading mt-4 text-card">
              <span className="block">{aboutData.heading.line1}</span>
              <span className="block">
                {aboutData.heading.line2}
                <span className="text-brand">{aboutData.heading.line2Highlight}</span>
              </span>
            </h2>

            {/* Intro copy */}
            <p className="type-body mt-5 max-w-xl text-ink-soft">{aboutData.description}</p>
          </Reveal>

          {/* Highlight grid */}
          <div className="mt-9 grid border-t border-line sm:grid-cols-2">
            {aboutData.highlights.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 100}
                className={`flex gap-4 py-6 ${index > 0 ? "border-t border-line" : ""} ${
                  index === 1 ? "sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-line sm:pl-7" : "sm:pr-7"}`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-brand shadow-sm">
                  <DynamicIcon name={item.icon} className="h-8 w-8" size={32} />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-card">{item.title}</h3>
                  <p className="type-caption mt-1 text-ink-soft">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={120}>
            <Link
              href={aboutData.ctaButton.href}
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-navy py-2 pl-7 pr-2 text-white transition-colors duration-300 hover:bg-navy-mid"
            >
              <span className="text-[14px] font-semibold">{aboutData.ctaButton.label}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink transition-transform duration-300 group-hover:translate-x-1">
                <DynamicIcon name={aboutData.ctaButton.icon} className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
