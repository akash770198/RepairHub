"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubTestimonials1Data } from "@/data";

export const Testimonials: React.FC<SectionProps<RepairHubTestimonials1Data>> = ({ data, className }) => {
  const testimonialsData = data || site.testimonials;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardImage = testimonialsData.cardImage;

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, testimonialsData.testimonials.length - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const isDesktop = window.innerWidth >= 768;
        const maxIndex = testimonialsData.testimonials.length - (isDesktop ? 2 : 1);
        const next = current >= maxIndex ? 0 : current + 1;

        if (scrollRef.current && scrollRef.current.firstElementChild) {
          const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
          scrollRef.current.scrollTo({
            left: cardWidth * next,
            behavior: "smooth",
          });
        }

        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonialsData.testimonials.length]);

  return (
    <section className={`relative w-full bg-slate-50 py-16 overflow-hidden ${className || ""}`}>
      <div className="page-gutter relative z-10 flex flex-col items-center">
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

        <div className="relative mt-12 w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth pt-8 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonialsData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative w-full flex-shrink-0 snap-center px-4 sm:snap-start md:w-[50%] md:px-6"
              >
                <div className="relative mx-auto w-full max-w-[540px] pb-12">
                  {/* Card_Temp.png speech-bubble frame */}
                  <div className="relative w-full aspect-[1277/1232]">
                    <Image
                      src={cardImage.src}
                      alt={cardImage.alt}
                      fill
                      className="pointer-events-none select-none object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Text content */}
                    <div className="absolute left-[9%] right-[13%] top-[12%] bottom-[28%] flex flex-col sm:left-[10%] sm:right-[14%] sm:top-[13%] sm:bottom-[30%]">
                      <h3 className="text-[20px] font-bold leading-tight text-navy sm:text-[22px]">
                        {testimonial.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-[14px] font-medium text-[#4B70F5] sm:text-[15px]">
                        <DynamicIcon name="map-pin" className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
                        <span>{testimonial.location}</span>
                      </div>

                      <p className="mt-5 text-[14px] leading-relaxed text-slate-600 sm:mt-6 sm:text-[16px]">
                        {testimonial.text}
                      </p>

                      <div className="mt-7 flex items-center gap-2.5 sm:mt-8 sm:gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-8 sm:w-8">
                          <DynamicIcon name="tools" className="h-3 w-3 text-slate-700 sm:h-[14px] sm:w-[14px]" />
                        </div>
                        <p className="text-[13px] leading-snug sm:text-[15px]">
                          <span className="font-bold text-navy">
                            {testimonialsData.repairedLabel ?? "Repaired:"}
                          </span>{" "}
                          <span className="font-medium text-slate-600">{testimonial.repaired}</span>
                        </p>
                      </div>

                      <div className="mt-5 flex items-center gap-1.5 sm:mt-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <DynamicIcon
                            key={i}
                            name="star"
                            className={`h-[18px] w-[18px] sm:h-[22px] sm:w-[22px] ${
                              i < testimonial.rating ? "text-[#f59e0b]" : "text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Avatar — slightly below the card body */}
                    <div
                      className="absolute left-1/2 z-20 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand p-[5px] sm:h-[88px] sm:w-[88px]"
                      style={{ top: "88%" }}
                    >
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
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          {testimonialsData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (scrollRef.current && scrollRef.current.firstElementChild) {
                  const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
                  scrollRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                }
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-brand" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
