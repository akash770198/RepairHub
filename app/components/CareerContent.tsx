"use client";

import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubCareer1Data } from "@/data";



export function CareerContent({ data, className }: SectionProps<RepairHubCareer1Data> = {}) {
  const careerData = data || site.career;
  const { intro, positions, whyJoin, cta } = careerData;

  return (
    <div className="w-full bg-white text-navy font-sans">
      
      {/* Intro Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="page-gutter max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <Reveal animation="rh-fade-up">
            <div className="flex items-center justify-center gap-4 mb-6 w-full">
              <div className="h-[2px] w-8 bg-brand"></div>
              <span className="text-sm font-bold tracking-widest text-navy uppercase">{intro.tag}</span>
              <div className="h-[2px] w-8 bg-brand"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {intro.titlePart1}
              <span className="text-brand inline-block relative">
                {intro.titleHighlight}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-brand"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-lg text-ink-soft max-w-3xl mx-auto mb-16">
              {intro.description}
            </p>
          </Reveal>

          {/* Benefits Row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] border-t border-dashed border-slate-300 -z-10" />
            {intro.benefits.map((benefit: any, idx: number) => (
              <Reveal animation="rh-fade-up" delay={idx * 100} key={idx} className="flex flex-col items-center bg-white">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10 group transition-all duration-300 hover:shadow-md hover:border-brand">
                  <DynamicIcon name={benefit.icon} size={40} className="text-navy group-hover:text-brand transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-ink-soft px-4">{benefit.description}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="page-gutter">
          <div className="text-center mb-16">
            <Reveal animation="rh-fade-up">
              <h2 className="text-4xl font-extrabold mb-4 relative inline-block">
                {positions.title}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand"></div>
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto mt-6">{positions.subtitle}</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {positions.list.map((job: any, idx: number) => (
              <Reveal animation="rh-fade-up" delay={idx * 50} key={idx}>
                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-orange-50 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-navy transition-colors">
                      <DynamicIcon name={job.icon} size={28} />
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{job.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mb-6 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-1.5">
                      <DynamicIcon name="clock" size={16} />
                      {job.type}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex items-center gap-1.5">
                      <DynamicIcon name="map-pin" size={16} />
                      {job.location}
                    </div>
                  </div>
                  
                  <p className="text-ink-soft mb-8 flex-grow">{job.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <Link href={job.link} className="flex items-center gap-2 text-navy font-bold hover:text-brand transition-colors text-sm">
                      View Details
                      <DynamicIcon name="arrow-right" size={16} />
                    </Link>
                    <Link href={job.link} className="bg-brand text-navy font-bold py-2.5 px-6 rounded hover:bg-brand-light transition-colors text-sm">
                      Apply Now
                    </Link>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>


        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16">
        <div className="page-gutter">
          <div className="text-center mb-16">
            <Reveal animation="rh-fade-up">
              <h2 className="text-4xl font-extrabold mb-4">
                Why Join <span className="text-navy border-b-4 border-navy pb-1">RepairHub?</span>
              </h2>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto">{whyJoin.subtitle}</p>
            </Reveal>
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative">
            {whyJoin.reasons.map((reason: any, idx: number) => (
              <Reveal 
                animation="rh-fade-up" 
                delay={idx * 100} 
                key={idx} 
                className="flex flex-col items-center text-center flex-1 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-dashed border-slate-300 last:border-0 px-4"
              >
                <div className="w-20 h-20 rounded-full bg-navy text-white flex items-center justify-center mb-6 shadow-lg shadow-navy/20 relative">
                  {/* Subtle inner yellow ring effect to match design */}
                  <div className="absolute inset-1 rounded-full border border-brand/50"></div>
                  <DynamicIcon name={reason.icon} size={32} className="text-brand" />
                </div>
                <h3 className="font-bold text-lg mb-3">{reason.title}</h3>
                <p className="text-sm text-ink-soft">{reason.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16">
        <div className="page-gutter max-w-5xl mx-auto">
          <Reveal animation="rh-fade-up">
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
              
              {/* Illustration Placeholder (Using icon and styling for now) */}
              <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center bg-white rounded-xl shadow-inner border border-slate-100">
                <DynamicIcon name="file-text" size={64} className="text-navy absolute z-10" />
                <DynamicIcon name="search" size={48} className="text-brand absolute -bottom-4 -right-4 z-20 drop-shadow-md" />
              </div>
              
              <div className="flex flex-col flex-grow text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-navy">
                  {cta.title}
                </h2>
                <p className="text-ink-soft text-lg mb-0 max-w-lg">
                  {cta.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link href={cta.button.href} className="inline-flex items-center gap-3 bg-brand text-navy font-bold py-4 px-8 rounded-lg shadow-lg shadow-brand/30 hover:-translate-y-1 hover:bg-brand-light transition-all duration-300">
                  {cta.button.label}
                  <DynamicIcon name="arrow-right" size={18} />
                </Link>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
