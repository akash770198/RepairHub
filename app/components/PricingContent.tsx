"use client";

import React from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

import { site, SectionProps, RepairHubPricing1Data } from "@/data";

export function PricingContent({ data: propData, className }: SectionProps<RepairHubPricing1Data> = {}) {
  const data = propData || site.pricing;
  const {
    eyebrow,
    heading,
    description,
    image,
    featureCards,
    tableSection,
    pricingData,
    promoBanner
  } = data;


  return (
    <div className={`w-full bg-slate-50 flex flex-col items-center pb-24 ${className || ""}`}>
      {/* Top Intro Section */}
      <section className="page-gutter relative w-full pt-16 pb-12 lg:pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <Reveal className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-brand" />
            <span className="type-eyebrow text-brand font-bold uppercase tracking-wider text-sm">{eyebrow}</span>
            <span className="h-[2px] w-8 rounded-full bg-brand" />
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy leading-tight">
            {heading.line1}<br/>
            <span className="text-brand">{heading.highlight}</span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 font-medium max-w-md">
            {description}
          </p>
        </Reveal>

        <Reveal className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-[16/9] lg:aspect-[3/2] rounded-2xl overflow-hidden border-2 border-brand/20 shadow-xl bg-white p-4">
             {/* Replace with actual parts image later if needed, using a placeholder styling for now based on the requested image */}
             <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
             </div>
          </div>
        </Reveal>
      </section>

      {/* Feature Cards Grid (overlapping or just placed below) */}
      {/* <section className="page-gutter relative w-full mb-16 lg:mb-24 z-10 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {featureCards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 50} className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform text-center h-full">
              <div className="w-[72px] h-[72px] rounded-full bg-navy text-brand flex items-center justify-center mb-4 flex-shrink-0">
                <div className="scale-[1.5]">
                  <DynamicIcon name={card.icon} size={24} />
                </div>
              </div>
              <h4 className="text-[14px] sm:text-[15px] font-bold text-navy leading-snug mb-3">
                {card.title.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h4>
              <div className="w-6 h-[3px] bg-brand rounded-full mt-auto" />
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* Pricing Table Section */}
      <section className="page-gutter relative w-full flex flex-col items-center">
        <div className="flex items-center gap-4 w-full justify-center mb-10">
          <div className="h-[2px] w-12 sm:w-24 bg-slate-300"></div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy text-center">{tableSection.title}</h3>
          <div className="h-[2px] w-12 sm:w-24 bg-slate-300"></div>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-navy text-white uppercase text-xs sm:text-sm font-bold tracking-wider">
                  <th className="py-5 px-6 sm:px-8 w-[35%]">Repair Service</th>
                  <th className="py-5 px-6 sm:px-8 w-[40%]">Description</th>
                  <th className="py-5 px-6 sm:px-8 w-[25%] text-center">Estimated Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors group">
                    <td className="py-5 px-6 sm:px-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-navy flex items-center justify-center flex-shrink-0 border border-slate-200 group-hover:bg-white group-hover:border-brand transition-colors">
                        <DynamicIcon name={item.icon} className="w-5 h-5 text-brand" />
                      </div>
                      <span className="font-bold text-navy text-sm sm:text-base">{item.service}</span>
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-slate-500 text-sm sm:text-base font-medium">
                      {item.description}
                    </td>
                    <td className="py-5 px-6 sm:px-8 text-center font-extrabold text-navy text-sm sm:text-base bg-slate-50/50 group-hover:bg-brand/5 transition-colors">
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-slate-500 text-sm font-medium text-center justify-center w-full bg-slate-100/50 py-3 rounded-xl">
          <DynamicIcon name="info-circle" className="w-5 h-5 text-navy" />
          <p>{tableSection.note}</p>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="page-gutter relative w-full mt-16 lg:mt-24">
        <div className="w-full bg-navy rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 shadow-2xl relative">
          
          {/* Decorative Pattern */}
          <div className="absolute left-0 bottom-0 w-1/3 h-full bg-[url('/pattern.svg')] bg-repeat opacity-10 pointer-events-none" />

          {/* Left: Offer Details */}
          <div className="flex items-center gap-6 lg:gap-10 z-10 mb-8 lg:mb-0 w-full lg:w-auto justify-center lg:justify-start">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl border-2 border-dashed border-brand/50 flex flex-col items-center justify-center text-brand flex-shrink-0">
               <div className="text-4xl lg:text-5xl font-extrabold">%</div>
               <div className="absolute -top-2 -right-2 bg-brand text-navy text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Offer</div>
            </div>
            
            <div className="flex flex-col items-start">
              <h3 className="text-2xl lg:text-4xl font-extrabold text-white leading-tight">
                {promoBanner.textLine1}<span className="text-brand">{promoBanner.discount}</span><br/>
                {promoBanner.textLine2}
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-white font-medium">Use Code:</span>
                <span className="bg-brand text-navy font-extrabold px-4 py-1.5 rounded-lg text-lg tracking-wider border-2 border-brand shadow-[0_0_15px_rgba(245,158,11,0.4)]">{promoBanner.promoCode}</span>
              </div>
              <p className="mt-3 text-xs text-slate-400">{promoBanner.terms}</p>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="flex items-center justify-center lg:justify-end gap-6 sm:gap-12 w-full lg:w-auto z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 flex-wrap lg:flex-nowrap">
             
             {promoBanner.highlights.map((highlight, idx) => (
               <div key={idx} className="flex flex-col items-center text-center gap-3 w-[100px]">
                  <div className="w-14 h-14 rounded-full bg-white/10 text-brand flex items-center justify-center border border-white/20">
                     <DynamicIcon name={highlight.icon} className="w-7 h-7" />
                  </div>
                  <p className="text-white text-xs font-semibold leading-snug">
                    {highlight.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i === 0 && <br/>}
                      </React.Fragment>
                    ))}
                  </p>
               </div>
             ))}

          </div>
        </div>
      </section>

    </div>
  );
}
