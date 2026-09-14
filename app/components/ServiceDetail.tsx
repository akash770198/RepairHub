"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { DynamicIcon } from "./Icons";

export interface ExtendedServiceItem {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  link: {
    label: string;
    href: string;
  };
  paragraphs?: string[];
  overview?: string;
  keyBenefits?: string[];
  devicesRepairText?: string;
  processImages?: string[];
  callout?: string;
}

export interface ServiceDetailLabels {
  sidebarTitle: string;
  contactCard: { title: string; subtitle: string; phone?: string };
  sections: { overview: string; keyBenefits: string; devicesWeRepair: string };
}

interface ServiceDetailProps {
  service: ExtendedServiceItem;
  allServices: { id: string; title: string; href: string }[];
  labels?: ServiceDetailLabels;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, allServices, labels }) => {
  const sidebarTitle = labels?.sidebarTitle ?? "Our Services";
  const contactCardTitle = labels?.contactCard.title ?? "Let's Contact\nWith Us";
  const contactCardSubtitle = labels?.contactCard.subtitle ?? "Need Help? Talk To Expert";
  const contactCardPhone = labels?.contactCard.phone ?? "+91 112 – 8899";
  const overviewLabel = labels?.sections.overview ?? "Service Overview";
  const keyBenefitsLabel = labels?.sections.keyBenefits ?? "Key Benefits";
  const devicesLabel = labels?.sections.devicesWeRepair ?? "Devices We Repair";
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="page-gutter">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-[32%] flex flex-col gap-8">
            
            {/* Our Services Menu */}
            <Reveal animation="rh-fade-up" className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-navy p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-brand">{sidebarTitle}</h3>
                <DynamicIcon name="tools" className="w-6 h-6 text-brand" />
              </div>
              <div className="flex flex-col">
                {allServices.map((s, idx) => {
                  const isActive = s.id === service.id;
                  return (
                    <Link 
                      key={s.id} 
                      href={s.href}
                      className={`flex items-center gap-3 px-6 py-4 border-b border-slate-100 transition-colors ${
                        isActive 
                          ? 'bg-slate-50 text-navy font-bold' 
                          : 'text-slate-600 hover:text-brand hover:bg-slate-50 font-medium'
                      }`}
                    >
                      <span className="text-brand flex-shrink-0 font-bold">»</span>
                      {s.title}
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* Contact Card */}
            <Reveal animation="rh-fade-up" delay={100} className="bg-navy rounded-xl shadow-sm overflow-hidden p-8 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white mb-6">{contactCardTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i === 0 ? <br/> : null}</React.Fragment>)}</h3>
              
              <div className="w-20 h-20 rounded-full bg-transparent border-2 border-brand flex items-center justify-center mb-6 relative">
                {/* Dashed outer ring effect */}
                <div className="absolute inset-[-6px] border-2 border-dashed border-brand/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <DynamicIcon name="phone" className="w-8 h-8 text-brand" />
              </div>
              
              <p className="text-white font-medium mb-2">{contactCardSubtitle}</p>
              <p className="text-brand text-2xl font-bold">{contactCardPhone}</p>
              
              {/* Decorative background gears */}
              <div className="absolute bottom-[-20px] right-[-20px] opacity-[0.05] pointer-events-none">
                <DynamicIcon name="gear-house" className="w-48 h-48 text-white" size={192} />
              </div>
            </Reveal>

          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[68%] flex flex-col">
            
            {/* Main Image */}
            <Reveal animation="rh-fade-up">
              <div className="relative aspect-[16/9] md:aspect-[2/1] w-full rounded-2xl overflow-hidden shadow-md mb-10">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            {/* Title & Paragraphs */}
            <Reveal animation="rh-fade-up" delay={100}>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">{service.title}</h1>
              {service.paragraphs?.map((p, idx) => (
                <p key={idx} className="text-slate-600 type-body mb-5 leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* Service Overview */}
            {service.overview && (
              <Reveal animation="rh-fade-up" delay={150} className="mt-4">
                <h2 className="text-2xl font-bold text-navy mb-4">{overviewLabel}</h2>
                <p className="text-slate-600 type-body leading-relaxed mb-8">
                  {service.overview}
                </p>
              </Reveal>
            )}

            {/* Key Benefits */}
            {service.keyBenefits && service.keyBenefits.length > 0 && (
              <Reveal animation="rh-fade-up" delay={200} className="mb-10">
                <h2 className="text-2xl font-bold text-navy mb-6">{keyBenefitsLabel}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand flex items-center justify-center text-navy">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-navy font-bold text-[15px]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Devices We Repair */}
            {service.devicesRepairText && (
              <Reveal animation="rh-fade-up" delay={250} className="mb-8">
                <h2 className="text-2xl font-bold text-navy mb-4">{devicesLabel}</h2>
                <p className="text-slate-600 type-body leading-relaxed mb-6">
                  {service.devicesRepairText}
                </p>
                
                {/* Images Row */}
                {service.processImages && service.processImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {service.processImages.map((imgSrc, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src={imgSrc}
                          alt={`Process image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            )}

            {/* Callout */}
            {service.callout && (
              <Reveal animation="rh-fade-up" delay={300}>
                <div className="mt-4 bg-white shadow-sm border border-slate-100 rounded-lg p-6 md:p-8 border-l-4 border-l-brand flex gap-4">
                  <p className="text-navy font-bold type-body leading-relaxed m-0">
                    {service.callout}
                  </p>
                </div>
              </Reveal>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
