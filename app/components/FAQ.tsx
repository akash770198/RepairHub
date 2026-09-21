"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubFAQ1Data } from "@/data";

export const FAQ: React.FC<SectionProps<RepairHubFAQ1Data>> = ({ data, className }) => {
  const faqData = data || site.fAQ;
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className={`relative w-full bg-[#081c3c] py-16 border-t border-slate-800 ${className || ""}`}>
      <div className="page-gutter flex flex-col">
        
        {/* Header */}
        <Reveal animation="rh-fade-up" className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <span className="type-eyebrow text-brand">{faqData.eyebrow}</span>
            <span className="h-[2px] w-8 bg-brand" />
          </div>
          <h2 className="type-heading mt-4 text-white leading-snug">
            {faqData.heading.line1.trim()}
            <br />
            <span className="text-brand">{faqData.heading.highlight}</span>
          </h2>
          <p className="type-body mt-5 text-slate-400">
            {faqData.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4">
            {faqData.questions.map((q, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal delay={index * 50} key={q.id}>
                  <div 
                    className={`rounded-lg border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen 
                        ? "border-slate-600 bg-[#031c46]" 
                        : "border-slate-800 bg-[#081c3c] hover:border-slate-700 hover:bg-[#0b254a]"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* Accordion Header */}
                    <div className="flex items-center justify-between p-5 md:p-6 gap-4">
                      <div className="flex items-center gap-4">
                        {/* Plus/Minus Icon */}
                        <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                          isOpen 
                            ? "bg-brand text-navy" 
                            : "border-2 border-brand text-brand"
                        }`}>
                          <DynamicIcon name={isOpen ? "minus" : "plus"} size={16} />
                        </div>
                        <h3 className={`text-base md:text-[17px] font-semibold transition-colors ${
                          isOpen ? "text-white" : "text-slate-200"
                        }`}>
                          {q.question}
                        </h3>
                      </div>
                      
                      {/* Chevron */}
                      <div className="flex-shrink-0 text-brand">
                        <DynamicIcon name={isOpen ? "chevron-up" : "chevron-down"} size={20} />
                      </div>
                    </div>

                    {/* Accordion Content */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6 px-5 md:px-6 md:pl-[68px] pt-0 text-slate-400 text-[15px] leading-relaxed">
                          {q.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Support Box */}
          <Reveal delay={300} animation="rh-fade-left">
            <div className="rounded-xl border border-slate-700 bg-[#031c46] p-8 lg:p-10 flex flex-col items-center text-center sticky top-24">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full border border-slate-600 text-brand mb-6">
                <DynamicIcon name="headset" size={32} />
              </div>
              
              {/* Heading */}
              <h3 className="text-[22px] font-bold text-white mb-3">
                {faqData.support.heading.line1}
                <span className="text-brand">{faqData.support.heading.highlight}</span>
              </h3>
              
              <p className="text-[15px] text-slate-400 mb-6">
                {faqData.support.description}
              </p>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-brand/50 mb-8 rounded-full" />

              {/* Contact Details */}
              <div className="w-full flex flex-col">
                
                {/* Phone */}
                <div className="flex items-center gap-4 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-brand">
                    <DynamicIcon name="phone" size={18} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-slate-400">Call Us</span>
                    <a href={`tel:${faqData.support.phone.replace(/[^0-9+]/g, '')}`} className="text-base font-semibold text-white hover:text-brand transition-colors">
                      {faqData.support.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-brand">
                    <DynamicIcon name="whatsapp" size={20} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-slate-400">WhatsApp Us</span>
                    <a href={`https://wa.me/${faqData.support.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-brand transition-colors">
                      {faqData.support.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-brand">
                    <DynamicIcon name="envelope" size={18} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-slate-400">Email Us</span>
                    <a href={`mailto:${faqData.support.email}`} className="text-base font-semibold text-white hover:text-brand transition-colors">
                      {faqData.support.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <Link 
                href={faqData.support.button.href}
                className="mt-8 flex items-center justify-center w-full gap-2 py-4 px-6 rounded bg-brand text-navy font-bold hover:bg-brand-light transition-all hover:-translate-y-0.5 group"
              >
                {faqData.support.button.label}
                <DynamicIcon name="arrow-right" size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
