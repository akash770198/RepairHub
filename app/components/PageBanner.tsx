"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { site, SectionProps, PageBannerData } from "@/data";

export function PageBanner({ data: propData, className }: SectionProps<PageBannerData> = {}) {
  const bannerData = propData || site.aboutUsBanner;
  const backgroundImage =
    "backgroundImage" in bannerData ? bannerData.backgroundImage : undefined;

  return (
    <section className={`relative w-full bg-[#111c2d] pt-24 pb-0 overflow-hidden min-h-[300px] flex items-center ${className || ""}`}>
      {/* Background Image / Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage || '/Hero_Banner.png'})` }}
      />
      {/* Dark blue filter/shade overlay (matches header) */}
      <div className="absolute inset-0 z-0 bg-navy/80" />
      
      {/* Bottom border line */}
      <div className="absolute left-0 w-full h-[1px] bottom-0 bg-white/10 z-10" />

      <div className="page-gutter relative z-20 w-full h-full flex flex-col justify-end pt-12 pb-28 md:pb-20">
        <Reveal className="flex flex-col items-start w-full">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight max-md:pb-2">
            {bannerData.title}
          </h1>
        </Reveal>
      </div>

      {/* Breadcrumbs Tab - pinned to bottom right inside the container or offset */}
      <div className="absolute bottom-0 right-0 z-30">
        <div className="bg-brand px-10 py-4 sm:px-16 sm:py-5 rounded-tl-[2rem] inline-flex items-center">
          <div className="flex items-center gap-2 text-[14px] sm:text-[15px] font-medium text-white tracking-wide">
            {bannerData.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-white mx-1">-</span>}
                {index === bannerData.breadcrumbs.length - 1 ? (
                  <span className="text-white capitalize">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-white hover:text-navy transition-colors capitalize">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
