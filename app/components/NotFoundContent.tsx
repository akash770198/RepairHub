"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubNotFound1Data } from "@/data";

export const NotFoundContent: React.FC<SectionProps<RepairHubNotFound1Data>> = ({ data: propData, className }) => {
  const notFoundData = (propData || site.notFound) as any;
  return (
    <section className={`w-full bg-white ${className || ""}`}>
      <div className="page-gutter py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <Reveal className="flex flex-col items-start">
            <p className="text-[92px] font-black leading-[0.85] tracking-tight text-brand sm:text-[120px] lg:text-[140px] xl:text-[160px]">
              {notFoundData.code}
            </p>

            <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-navy sm:text-[40px] lg:text-[44px]">
              {notFoundData.heading}
            </h1>

            <span className="mt-4 h-[3px] w-16 rounded-full bg-brand" />

            <p className="mt-6 max-w-md type-body text-ink-soft">
              {notFoundData.description}
            </p>

            <Link
              href={notFoundData.button.href}
              className="mt-8 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-3.5 text-[15px] font-bold text-navy shadow-md shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-lg hover:shadow-brand/30"
            >
              <DynamicIcon name={notFoundData.button.icon} className="h-5 w-5 shrink-0" />
              {notFoundData.button.label}
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <Image
              src={notFoundData.image.src}
              alt={notFoundData.image.alt}
              width={notFoundData.image.width}
              height={notFoundData.image.height}
              className="h-auto w-full object-contain"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
