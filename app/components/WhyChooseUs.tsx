"use client";

import React from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
    line2?: string;
  };
  description: string;
  features: Feature[];
  image: {
    src: string;
    alt: string;
  };
  badge?: {
    count: string;
    label: string;
    sublabel: string;
  };
}

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      <div className="page-gutter relative grid lg:grid-cols-2 gap-16 lg:gap-2 items-center">
        
        {/* Content Side (Left) */}
        <div className="flex flex-col z-10 lg:pr-2">
          <Reveal delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex flex-col gap-1">
                <span className="h-[2px] w-8 bg-slate-400" />
                <span className="h-[2px] w-8 bg-slate-400" />
              </span>
              <span className="text-[13px] font-bold uppercase tracking-wider text-brand">{data.eyebrow}</span>
            </div>
            
            <h2 className="text-4xl lg:text-[42px] font-extrabold text-navy leading-[1.15] mb-6">
              {data.heading.line1} <br className="hidden sm:block" />
              <span className="text-brand">{data.heading.highlight}</span> {data.heading.line2}
            </h2>
            
            <p className="text-[16px] text-slate-600 mb-10 leading-relaxed max-w-lg">
              {data.description}
            </p>
          </Reveal>

          {/* Features List */}
          <div className="flex flex-col gap-8 relative">
            {data.features.map((feature, index) => (
              <Reveal key={index} delay={100 + index * 100} className="flex gap-6 sm:gap-8 items-start">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full border-[1.5px] border-brand bg-white p-1 flex items-center justify-center z-10 mt-1">
                  <div className="w-full h-full rounded-full bg-navy flex items-center justify-center text-brand">
                    <div className="scale-[1.6]">
                      <DynamicIcon name={feature.icon} size={64} />
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-2">
                  <h3 className="text-[18px] font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed max-w-sm">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image Side (Right) */}
        <Reveal delay={200} className="relative w-full max-w-[650px] mx-auto lg:ml-auto lg:mr-0 pt-8 pr-8 pb-16 z-0">
          
          {/* Top Right Yellow Shape */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] border-[24px] border-brand border-l-0 border-b-0 z-0 hidden sm:block" />
          
          {/* Thin outline box behind (offset bottom left) */}
          <div className="absolute top-16 bottom-0 left-0 right-16 border-[2px] border-slate-800 z-0" />
          
          {/* Bottom Left Stripes Pattern */}
          <div 
            className="absolute bottom-0 left-0 w-32 h-32 opacity-30 z-0"
            style={{
              background: 'repeating-linear-gradient(45deg, #cbd5e1, #cbd5e1 1px, transparent 1px, transparent 6px)'
            }}
          />

          {/* Main Image Container */}
          <div className="relative aspect-[5/4] sm:aspect-[4/3] w-[90%] ml-auto mt-8 z-10 shadow-lg">
            <Image 
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Bottom Centered Floating Badge */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand px-6 py-5 lg:px-8 lg:py-6 z-20 flex items-center gap-4 sm:gap-5 shadow-xl w-[90%] sm:w-auto min-w-[300px]">
             <div className="text-navy flex-shrink-0 border-2 border-navy rounded-full p-2">
               <DynamicIcon name="trophy" size={32} />
             </div>
           <div className="flex flex-col text-navy">
               <span className="text-2xl lg:text-[26px] font-black leading-none mb-1">{data.badge?.count ?? "10,000+"}</span>
               <span className="text-[14px] lg:text-[15px] font-bold leading-tight">{data.badge?.label ?? "Happy Customers"}</span>
               <span className="text-[12px] opacity-90 font-medium">{data.badge?.sublabel ?? "Trusted Repair Service"}</span>
             </div>
          </div>
          
        </Reveal>
      </div>

    </section>
  );
};
