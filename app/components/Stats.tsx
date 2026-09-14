import React from "react";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubStats1Data } from "@/data";







export const Stats: React.FC<SectionProps<RepairHubStats1Data>> = ({ data, className }) => {
  const statsData = data || site.stats;
  return (
    <section className="relative w-full bg-navy py-20 lg:py-24 border-t border-slate-800/50">
      <div className="page-gutter relative z-10">
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 ${(statsData as any).layoutType === 'inline' ? 'divide-y sm:divide-y-0 sm:divide-x divide-slate-700/50' : ''}`}>
          {statsData.stats.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 100}
              className={`flex items-center gap-6 ${(statsData as any).layoutType === 'inline' ? 'p-6 lg:p-8 justify-center' : 'border-l-[3px] border-[#fbb03b] bg-[#1a2538] p-6 lg:p-8 shadow-lg transition-transform hover:-translate-y-1'}`}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 text-brand ${(statsData as any).layoutType === 'inline' ? 'border-r-2 border-brand/20 pr-6' : ''}`}>
                <DynamicIcon name={stat.icon} size={64} className="h-16 w-16" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-[15px] font-medium text-slate-300">{stat.label}</p>
                <h3 className="type-heading text-[28px] lg:text-[32px] text-white tracking-tight leading-none">{stat.value}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
