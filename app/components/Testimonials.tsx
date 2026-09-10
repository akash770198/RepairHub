"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  repaired: string;
  rating: number;
  avatar: string;
}

interface TestimonialsData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  testimonials: TestimonialItem[];
}

interface TestimonialsProps {
  testimonialsData: TestimonialsData;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      // Index is scrollLeft divided by wrapper width
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, testimonialsData.testimonials.length - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      const { scrollLeft } = scrollRef.current;
      const newScrollLeft = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update index
      setActiveIndex((current) => {
        const next = direction === 'left' ? current - 1 : current + 1;
        return Math.max(0, Math.min(next, testimonialsData.testimonials.length - 1));
      });
    }
  };

  // Auto-sliding animation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const isDesktop = window.innerWidth >= 768;
        const maxIndex = testimonialsData.testimonials.length - (isDesktop ? 2 : 1);
        const next = current >= maxIndex ? 0 : current + 1;
        
        if (scrollRef.current && scrollRef.current.firstElementChild) {
          const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
          const scrollAmount = cardWidth * next;
          scrollRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
        
        return next;
      });
    }, 4000); // Slides every 4 seconds

    return () => clearInterval(timer);
  }, [testimonialsData.testimonials.length]);

  return (
    <section className="relative w-full bg-slate-50 py-20 lg:py-24 overflow-hidden">
      <div className="page-gutter relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <Reveal animation="rh-fade-up" className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-brand" />
            <span className="type-eyebrow text-navy">{testimonialsData.eyebrow}</span>
            <span className="h-[2px] w-8 rounded-full bg-brand" />
          </div>
          
          <h2 className="type-heading mt-4 text-navy">
            {testimonialsData.heading.line1}
            <span className="text-brand">{testimonialsData.heading.highlight}</span>
          </h2>
          
          <p className="type-body mt-4 max-w-lg text-slate-500 whitespace-pre-line">
            {testimonialsData.description}
          </p>
          
          <div className="mt-8 h-[3px] w-12 rounded-full bg-brand" />
        </Reveal>

        {/* Testimonials Slider */}
        <div className="w-full mt-12 relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 pt-8"
          >
            {testimonialsData.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="relative flex-shrink-0 w-full md:w-[50%] snap-center sm:snap-start px-4 md:px-6"
              >
                {/* Speech Bubble Container with Continuous Drop Shadow */}
                <div className="relative drop-shadow-[0_15px_35px_rgba(15,23,42,0.12)] mb-28 mt-8">
                  
                  {/* Quote Badge */}
                  <div className="absolute -top-10 right-6 lg:right-10 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)]">
                    <DynamicIcon name="quote" className="h-8 w-8 text-navy" />
                  </div>

                  {/* Main Card Body (No border) */}
                  <div className="relative z-20 rounded-[32px] bg-white p-8 sm:p-10">
                    <h3 className="text-[22px] font-bold text-navy">{testimonial.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-[15px] font-medium text-[#4B70F5]">
                      <DynamicIcon name="map-pin" className="h-[18px] w-[18px]" />
                      <span>{testimonial.location}</span>
                    </div>

                    <p className="mt-6 text-[16px] leading-relaxed text-slate-600">
                      {testimonial.text}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                        <DynamicIcon name="tools" className="h-[14px] w-[14px] text-slate-700" />
                      </div>
                      <span className="text-[15px] font-bold text-navy">Repaired:</span>
                      <span className="text-[15px] font-medium text-slate-600">{testimonial.repaired}</span>
                    </div>

                    <div className="mt-8 flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <DynamicIcon 
                          key={i} 
                          name="star" 
                          className={`h-[22px] w-[22px] ${i < testimonial.rating ? "text-[#f59e0b]" : "text-slate-200"}`} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* SVG Shape: Arch and Tail - Fused to card bottom */}
                  <svg 
                    className="absolute -bottom-[100px] left-1/2 w-[200px] h-[140px] -translate-x-1/2 fill-white z-10" 
                    viewBox="0 0 200 140"
                  >
                    <path d="M 0 40 
                             C 30 40, 30 80, 46 80 
                             C 60 4, 140 4, 154 80 
                             C 160 100, 150 125, 135 135 
                             C 170 130, 170 40, 200 40 
                             L 200 0 L 0 0 Z" />
                  </svg>

                  {/* Avatar Wrapper (Completely Separate, sitting perfectly in the arch gap) */}
                  <div className="absolute -bottom-[96px] left-1/2 z-20 h-[88px] w-[88px] -translate-x-1/2 rounded-full bg-white p-[5px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-2 flex items-center justify-center gap-4">
          <button 
            onClick={() => scroll('left')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 shadow-sm transition-colors hover:border-brand hover:bg-brand hover:text-white"
            aria-label="Previous testimonial"
          >
            <DynamicIcon name="arrow-right" className="h-5 w-5 rotate-180" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 shadow-sm transition-colors hover:border-brand hover:bg-brand hover:text-white"
            aria-label="Next testimonial"
          >
            <DynamicIcon name="arrow-right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
