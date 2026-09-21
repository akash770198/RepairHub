"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubServices1Data } from "@/data";

export const Services: React.FC<SectionProps<RepairHubServices1Data>> = ({ data, className }) => {
  const servicesData = data || site.services;
  const scrollRef = useRef<HTMLDivElement>(null);
  const isJumpingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [ready, setReady] = useState(false);

  const services = servicesData.services;
  // Duplicate track for seamless infinite loop
  const loopServices = [...services, ...services];

  const getStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-service-card]");
    if (!card) return 0;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "24") || 24;
    return card.offsetWidth + gap;
  }, []);

  const normalizeLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumpingRef.current) return;

    const half = el.scrollWidth / 2;
    if (half <= 0) return;

    // Past end of first set → jump back by one set (no animation)
    if (el.scrollLeft >= half - 2) {
      isJumpingRef.current = true;
      const prev = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.scrollLeft = el.scrollLeft - half;
      el.style.scrollBehavior = prev;
      isJumpingRef.current = false;
    }
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;

      const step = getStep();
      if (!step) return;

      normalizeLoop();

      if (direction === "left" && el.scrollLeft < step + 2) {
        // Wrap to the duplicate set so left can keep looping
        isJumpingRef.current = true;
        const prev = el.style.scrollBehavior;
        el.style.scrollBehavior = "auto";
        el.scrollLeft = el.scrollLeft + el.scrollWidth / 2;
        el.style.scrollBehavior = prev;
        isJumpingRef.current = false;
      }

      el.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    },
    [getStep, normalizeLoop]
  );

  // Wait for layout so first auto-slide doesn't jump with wrong widths
  useEffect(() => {
    if ((servicesData as { layoutType?: string }).layoutType === "grid") return;

    const el = scrollRef.current;
    if (!el) return;

    let timeoutId: number | undefined;
    const rafId = requestAnimationFrame(() => {
      isJumpingRef.current = true;
      el.scrollLeft = 0;
      isJumpingRef.current = false;
      // Let first paint settle before autoplay (avoids empty-gap on first slide)
      timeoutId = window.setTimeout(() => setReady(true), 800);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [servicesData]);

  // Auto-scroll — only after ready, infinite via duplicated track
  useEffect(() => {
    if ((servicesData as { layoutType?: string }).layoutType === "grid" || isPaused || !ready) {
      return;
    }

    const intervalId = window.setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(intervalId);
  }, [servicesData, isPaused, ready, scroll]);

  // Snap loop position after smooth scroll ends
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let settleTimer: number | undefined;

    const onScroll = () => {
      if (isJumpingRef.current) return;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        normalizeLoop();
      }, 120);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.clearTimeout(settleTimer);
    };
  }, [normalizeLoop]);

  if ((servicesData as { layoutType?: string }).layoutType === "grid") {
    return (
      <section id="services" className={`relative w-full bg-white py-16 ${className || ""}`}>
        <div className="page-gutter flex flex-col items-center">
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

          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8">
              {services.map((service, index) => (
                <Reveal
                  key={service.id}
                  delay={index * 50}
                  className="group flex flex-col overflow-hidden rounded-[20px] bg-navy border-b-[4px] border-brand shadow-[0_15px_40px_-15px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.7)]"
                >
                  <Link href={service.link.href} className="flex flex-col h-full w-full cursor-pointer">
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
    <section id="services" className={`relative w-full bg-white pb-16 ${className || ""}`}>
      <div className="relative bg-navy pt-16 pb-40 lg:pb-56">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat" />

        <div className="page-gutter relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-brand" />
              <span className="type-eyebrow text-brand">{servicesData.eyebrow}</span>
            </div>

            <h2 className="type-heading mt-4 text-white">
              {servicesData.heading.line1}
              <span className="text-brand">{servicesData.heading.highlight}</span>
            </h2>

            <p className="type-body mt-5 max-w-lg text-slate-300">
              {servicesData.description}
            </p>
          </Reveal>

          <Reveal delay={100} className="flex gap-4">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-navy"
              aria-label="Previous services"
            >
              <DynamicIcon name="arrow-right" className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-navy"
              aria-label="Next services"
            >
              <DynamicIcon name="arrow-right" className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </div>

      <div className="page-gutter relative z-20 -mt-28 lg:-mt-40">
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid w-full grid-flow-col auto-cols-[100%] sm:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(25%-18px)] gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              data-service-card
              className="group flex flex-col overflow-hidden rounded-[20px] bg-navy border-b-[5px] border-brand shadow-[0_15px_40px_-15px_rgba(15,23,42,0.6)] snap-start"
            >
              <Link href={service.link.href} className="flex h-full w-full cursor-pointer flex-col">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
