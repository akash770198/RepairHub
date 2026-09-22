import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { site, SectionProps, RepairHubBanner1Data, RepairHubFeatures1Data } from "@/data";

// Diagonal cut on the left edge of the hero photo
const PHOTO_CLIP = "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)";

export function Hero({ data, className }: SectionProps<{ bannerData: RepairHubBanner1Data; featuresData: RepairHubFeatures1Data }> = {}) {
  const bannerData = data?.bannerData || site.banner;
  const featuresData = data?.featuresData || site.features;
  return (
    <div className={`w-full ${className || ""}`}>
      {/* 1. FULL-WIDTH DARK HERO */}
      <section className="relative w-full overflow-hidden bg-navy text-white">
        {/* Ambient glows + circuit traces */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="rh-glow absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-900/25 blur-3xl" />
          <div
            className="rh-glow absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-brand/5 blur-3xl"
            style={{ animationDelay: "2s" }}
          />

          <svg
            className="absolute inset-0 h-full w-full opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 720"
            preserveAspectRatio="none"
            fill="none"
          >
            <g stroke="#1e40af" strokeWidth="1.5" strokeLinecap="round">
              <path d="M 60 90 L 210 90 L 270 150 L 430 150" />
              <path
                className="rh-trace"
                stroke="#60a5fa"
                d="M 60 90 L 210 90 L 270 150 L 430 150"
              />
              <circle cx="60" cy="90" r="3.5" fill="#3b82f6" />
              <circle cx="430" cy="150" r="4" fill="#3b82f6" />
              <path d="M 520 60 L 640 60 L 700 120 L 820 120" />
              <path
                className="rh-trace"
                stroke="#60a5fa"
                style={{ animationDelay: "1.5s" }}
                d="M 520 60 L 640 60 L 700 120 L 820 120"
              />
              <circle cx="520" cy="60" r="3" fill="#3b82f6" />
              <circle cx="820" cy="120" r="3.5" fill="#3b82f6" />
              <path d="M 90 420 L 200 420 L 250 470 L 380 470" />
              <path
                className="rh-trace"
                stroke="#60a5fa"
                style={{ animationDelay: "3s" }}
                d="M 90 420 L 200 420 L 250 470 L 380 470"
              />
              <circle cx="90" cy="420" r="3" fill="#3b82f6" />
              <circle cx="380" cy="470" r="3.5" fill="#3b82f6" />
            </g>

            <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.6">
              <path d="M 560 180 L 630 180 L 680 130 L 780 130" />
              <path
                className="rh-trace"
                stroke="#fbbf24"
                style={{ animationDelay: "0.8s" }}
                d="M 560 180 L 630 180 L 680 130 L 780 130"
              />
              <circle cx="560" cy="180" r="3" fill="#f59e0b" />
              <circle cx="780" cy="130" r="4" fill="#f59e0b" />
            </g>

            <g className="rh-glow" fill="#38bdf8" opacity="0.25">
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={640 + col * 20}
                    cy={330 + row * 20}
                    r="2"
                  />
                ))
              )}
            </g>
          </svg>
        </div>

        {/* HERO PHOTO — bleeds to the right screen edge */}
        {/* Mobile / tablet: full-bleed backdrop behind the copy */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src={bannerData.heroImage.src}
            alt={bannerData.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        {/* Desktop: right half with an angled left edge */}
        <div
          className="rh-reveal-right absolute inset-y-0 right-0 z-0 hidden w-[56%] lg:block"
          style={{ clipPath: PHOTO_CLIP }}
        >
          <Image
            src={bannerData.heroImage.src}
            alt={bannerData.heroImage.alt}
            fill
            priority
            sizes="56vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
        </div>

        {/* HERO COPY */}
        <div className="page-gutter relative z-10 pb-36 pt-12 sm:pb-40 lg:pb-44 lg:pt-16 xl:pt-20">
          <div className="max-w-xl lg:max-w-[46%]">
            {/* Tagline */}
            <div className="rh-fade-up flex items-center gap-2.5">
              <DynamicIcon
                name={bannerData.tagline.icon}
                className="rh-drift h-5 w-5 shrink-0 text-brand"
              />
              <span className="type-eyebrow text-brand">
                {bannerData.tagline.text}
              </span>
            </div>

            {/* Headline */}
            <h1 className="type-display mt-5">
              <span
                className="rh-fade-up block text-white"
                style={{ animationDelay: "120ms" }}
              >
                {bannerData.heading.line1}
              </span>
              <span
                className="rh-fade-up block text-brand"
                style={{ animationDelay: "240ms" }}
              >
                {bannerData.heading.line2}
              </span>
              <span
                className="rh-fade-up block text-white"
                style={{ animationDelay: "360ms" }}
              >
                {bannerData.heading.line3}
              </span>
            </h1>

            {/* Description */}
            <p
              className="rh-fade-up type-body mt-5 max-w-md text-muted"
              style={{ animationDelay: "480ms" }}
            >
              {bannerData.description.text}
              <span className="font-semibold text-brand-light">
                {bannerData.description.highlight}
              </span>
            </p>

            {/* Pill CTA */}
            <div className="rh-fade-up mt-7" style={{ animationDelay: "600ms" }}>
              <Link
                href={bannerData.ctaButton.href}
                className="type-cta-hero group inline-flex items-center gap-3 rounded-full bg-brand py-2.5 pl-5 pr-2.5 text-ink shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl hover:shadow-brand/30"
              >
                <DynamicIcon
                  name={bannerData.ctaButton.iconLeft}
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                />
                <span>{bannerData.ctaButton.label}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-brand-light transition-transform duration-300 group-hover:translate-x-1">
                  <DynamicIcon
                    name={bannerData.ctaButton.iconRight}
                    className="h-3.5 w-3.5"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURE CARDS OVERLAPPING THE HERO */}
      <div className="flow-root w-full bg-white pb-16">
        <div className="page-gutter relative z-20 -mt-24 lg:-mt-28">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {featuresData.features.map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${700 + index * 90}ms` }}
                className="rh-fade-up group flex flex-col items-center rounded-xl bg-white px-3 py-6 text-center shadow-[0_10px_30px_-12px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-14px_rgba(15,23,42,0.45)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy transition-all duration-300 group-hover:scale-105 group-hover:bg-navy-mid sm:h-[70px] sm:w-[70px]">
                  <DynamicIcon
                    name={item.icon}
                    className="h-9 w-9 text-brand-light transition-transform duration-300 group-hover:rotate-6 sm:h-10 sm:w-10"
                    size={40}
                  />
                </div>

                <h3 className="type-card mt-4 text-card">
                  <span className="block">{item.titleLine1}</span>
                  <span className="block">{item.titleLine2}</span>
                </h3>

                <span className="mt-4 h-1 w-8 rounded-full bg-brand-light transition-all duration-300 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
