"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface ServiceItem {
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
}

interface ServicesData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  services: ServiceItem[];
  layoutType?: 'slider' | 'grid' | string;
}

interface ServicesProps {
  servicesData: ServicesData;
}

export const Services: React.FC<ServicesProps> = ({ servicesData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      const scrollAmount = cardWidth + 24; // 24px is the gap-6 size
      const { scrollLeft } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (servicesData.layoutType === 'grid') {
    return (
      <section id="services" className="relative w-full bg-white py-20 lg:py-24">
        <div className="page-gutter flex flex-col items-center">
          {/* Header */}
          <Reveal animation="rh-fade-up" className="flex flex-col items-center text-center max-w-2xl mb-16">
            <div className="flex flex-col items-center">
              <span className="type-eyebrow text-brand font-bold tracking-wider">{servicesData.eyebrow}</span>
              <span className="h-[3px] w-12 rounded-full bg-brand mt-2" />
            </div>
            <h2 className="type-heading mt-4 text-navy">
              {servicesData.heading.line1}
              <span className="text-brand">{servicesData.heading.highlight}</span>
            </h2>
            <p className="type-body mt-4 text-slate-500 whitespace-pre-line">
              {servicesData.description}
            </p>
          </Reveal>

          {/* 4-column Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8">
              {servicesData.services.map((service, index) => (
                <Reveal
                  key={service.id}
                  delay={index * 50}
                  className="group flex flex-col overflow-hidden rounded-[20px] bg-navy border-b-[4px] border-brand shadow-[0_15px_40px_-15px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.7)]"
                >
                  <Link href={service.link.href} className="flex flex-col h-full w-full cursor-pointer">
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                      {service.image.src ? (
                        <Image
                          src={service.image.src}
                          alt={service.image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-500">
                          <span className="text-sm font-medium">Image Placeholder</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col items-center justify-between p-6 sm:p-7 text-center">
                      <h3 className="mb-6 text-center text-[18px] font-bold text-white xl:text-[20px] leading-snug">
                        {service.title}
                      </h3>
                      
                      <span className="mt-auto inline-flex items-center justify-center gap-2 text-[13px] sm:text-[14px] font-bold tracking-wider text-white transition-colors group-hover:text-brand">
                        <span>{service.link.label}</span>
                        <DynamicIcon name="arrow-right" className="h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative w-full bg-white pb-20 lg:pb-24">
      {/* Top Dark Background Section */}
      <div className="relative bg-navy pt-20 pb-40 lg:pt-24 lg:pb-56">
        {/* Optional background pattern overlay could go here */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat" />

        <div className="page-gutter relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-brand" />
              <span className="type-eyebrow text-brand">{servicesData.eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="type-heading mt-4 text-white">
              {servicesData.heading.line1}
              <span className="text-brand">{servicesData.heading.highlight}</span>
            </h2>

            {/* Description */}
            <p className="type-body mt-5 max-w-lg text-slate-300">
              {servicesData.description}
            </p>
          </Reveal>

          {/* Navigation Arrows */}
          <Reveal delay={100} className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-navy"
            >
              <DynamicIcon name="arrow-right" className="h-5 w-5 rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-navy"
            >
              <DynamicIcon name="arrow-right" className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Cards Section (Overlapping the dark background) */}
      <div className="page-gutter relative z-20 -mt-28 lg:-mt-40">
        <div 
          ref={scrollRef}
          className="grid w-full grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {servicesData.services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 100}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-navy border-b-[5px] border-brand shadow-[0_15px_40px_-15px_rgba(15,23,42,0.6)] snap-start"
            >
              <Link href={service.link.href} className="flex flex-col h-full w-full cursor-pointer">
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                  {service.image.src ? (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-500">
                      <span className="text-sm font-medium">Image Placeholder</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col items-center justify-between p-6 sm:p-8">
                  <h3 className="mb-6 text-center text-[18px] font-bold text-white xl:text-[20px]">
                    {service.title}
                  </h3>
                  
                  <span className="mt-auto flex items-center justify-center gap-2 text-[14px] font-bold tracking-wider text-white transition-colors group-hover:text-brand">
                    {service.link.label}
                    <DynamicIcon name="arrow-right" className="h-5 w-5 text-brand transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
