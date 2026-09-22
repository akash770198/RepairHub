"use client";

import React from "react";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, FeatureCards1Data } from "@/data";

export function FeatureCards({ data: propData, className }: SectionProps<FeatureCards1Data> = {}) {
  const data = propData || site.featureCards;
  if (!data?.cards?.length) return null;

  return (
    <section className={`relative w-full bg-white pt-0 pb-16 z-20 ${className || ""}`}>
      <div className="page-gutter relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {data.cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 50} className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform text-center h-full">
              <div className="mb-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-navy sm:h-[70px] sm:w-[70px]">
                <DynamicIcon
                  name={card.icon}
                  className="h-9 w-9 sm:h-10 sm:w-10"
                  size={40}
                />
              </div>
              <h4 className="text-[15px] font-bold text-navy leading-tight mb-3">
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
      </div>
    </section>
  );
}
