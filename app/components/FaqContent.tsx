"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubFaqs1Data } from "@/data";

export const FaqContent: React.FC<SectionProps<RepairHubFaqs1Data>> = ({ data: propData, className }) => {
  const faqData = (propData || site.faqs) as any;
  const [openId, setOpenId] = useState<string | null>(faqData.questions[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`bg-slate-50 py-16 lg:py-24 ${className || ""}`}>
      <div className="page-gutter">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-brand rounded-full" />
            <span className="text-brand font-bold uppercase tracking-wider text-sm">{faqData.eyebrow}</span>
            <span className="h-[2px] w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6">
            {faqData.heading.line1}<span className="text-brand">{faqData.heading.highlight}</span>
          </h2>
          <p className="text-ink-soft text-lg">
            {faqData.description}
          </p>
          <span className="block h-[3px] w-12 bg-brand mx-auto mt-8 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
          {/* Left Column: Accordion */}
          <div className="flex-1 flex flex-col gap-4">
            {faqData.questions.map((faq: any, idx: any) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal key={faq.id} delay={idx * 50} className="w-full">
                  <div
                    className={`border border-line rounded-[16px] bg-white transition-all duration-300 overflow-hidden ${
                      isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                    >
                      <div className="flex items-center gap-5 sm:gap-6 w-full">
                        <span
                          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors duration-300 ${
                            isOpen
                              ? "bg-brand text-navy"
                              : "border-2 border-brand text-brand bg-white group-hover:bg-brand/10"
                          }`}
                        >
                          <DynamicIcon name={isOpen ? "minus" : "plus"} className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                        <h3 className="text-lg sm:text-[19px] font-bold text-navy leading-snug pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <DynamicIcon name="chevron-down" className="w-5 h-5 text-navy" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-8 pb-8 pt-0 text-slate-600 leading-relaxed text-[15px] sm:text-[16px] pl-[68px] sm:pl-[88px]">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Sidebar */}
          <Reveal delay={200} className="lg:w-[380px] xl:w-[420px] shrink-0">
            <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-line flex flex-col items-center text-center sticky top-24">
              
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                <DynamicIcon name={faqData.sidebar.icon} className="w-12 h-12 sm:w-16 sm:h-16 text-navy" />
              </div>

              <h3 className="text-2xl sm:text-[28px] font-extrabold text-navy leading-tight mb-4">
                {faqData.sidebar.title} <span className="text-brand">{faqData.sidebar.titleHighlight}</span>
              </h3>
              
              <p className="text-slate-500 mb-8 max-w-[280px]">
                {faqData.sidebar.description}
              </p>

              <div className="w-full flex flex-col gap-6 text-left mb-8">
                {faqData.sidebar.contacts.map((contact: any, i: any) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-100 text-navy group-hover:bg-brand group-hover:border-brand transition-colors duration-300 shadow-sm shrink-0">
                      <DynamicIcon name={contact.icon} className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-navy">{contact.label}</p>
                      <p className="text-slate-600 text-[14px]">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={faqData.sidebar.button.href}
                className="w-full inline-flex items-center justify-center gap-3 bg-brand text-navy font-bold py-4 px-6 rounded-md hover:bg-[#e69500] transition-colors duration-300 shadow-sm"
              >
                {faqData.sidebar.button.label}
                <DynamicIcon name="arrow-right" className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
