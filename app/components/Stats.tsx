import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubStatsData } from "@/data";

export function Stats({ data, className }: SectionProps<RepairHubStatsData> = {}) {
  const statsData = data || site.stats;
  const isInline = "layoutType" in statsData && statsData.layoutType === "inline";

  return (
    <section
      className={`relative w-full border-t border-slate-800/50 ${
        isInline ? "bg-[#081c3c] py-8 lg:py-10" : "bg-navy py-16"
      } ${className || ""}`}
    >
      <div className="page-gutter relative z-10">
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${
            isInline ? "gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/50 lg:gap-0" : "gap-6 lg:gap-8"
          }`}
        >
          {statsData.stats.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 100}
              className={`flex items-center gap-5 ${
                isInline
                  ? "justify-center px-4 py-4 lg:px-6 lg:py-5"
                  : "border-l-[3px] border-[#fbb03b] bg-[#1a2538] p-6 lg:p-8 shadow-lg transition-transform hover:-translate-y-1 gap-6"
              }`}
            >
              <div
                className={`flex-shrink-0 text-brand ${
                  isInline ? "border-r-2 border-brand/20 pr-5" : ""
                }`}
              >
                <DynamicIcon
                  name={stat.icon}
                  size={isInline ? 48 : 64}
                  className={isInline ? "h-12 w-12" : "h-16 w-16"}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-[14px] font-medium text-slate-300 lg:text-[15px]">{stat.label}</p>
                <h3
                  className={`font-extrabold tracking-tight leading-none text-white ${
                    isInline ? "text-[24px] lg:text-[28px]" : "type-heading text-[28px] lg:text-[32px]"
                  }`}
                >
                  {stat.value}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
