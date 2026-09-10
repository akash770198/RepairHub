"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface TeamData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  members: TeamMember[];
  layoutType?: 'slider' | 'grid' | string;
}

interface TeamProps {
  teamData: TeamData;
}

export const Team: React.FC<TeamProps> = ({ teamData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const calculateMaxIndex = () => {
      const isDesktop = window.innerWidth >= 1024;
      const isTablet = window.innerWidth >= 640;
      const visibleCards = isDesktop ? 4 : (isTablet ? 2 : 1);
      setMaxIndex(Math.max(0, teamData.members.length - visibleCards));
    };

    calculateMaxIndex();
    window.addEventListener('resize', calculateMaxIndex);
    return () => window.removeEventListener('resize', calculateMaxIndex);
  }, [teamData.members.length]);

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      // Calculate the active index based on scroll position
      let newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex > maxIndex) newIndex = maxIndex;
      setActiveIndex(newIndex);
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardWidth = (scrollRef.current.firstElementChild as HTMLElement).offsetWidth;
      const scrollAmount = cardWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="team" className="relative w-full bg-white py-20 lg:py-24">
      <div className="page-gutter flex flex-col items-center">
        
        {/* Header */}
        <Reveal animation="rh-fade-up" className="flex flex-col items-center text-center max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <span className="type-eyebrow text-brand">{teamData.eyebrow}</span>
            <span className="h-[2px] w-8 bg-brand" />
          </div>
          <h2 className="type-heading mt-4 text-navy">
            {teamData.heading.line1}
            <span className="text-brand">{teamData.heading.highlight}</span>
          </h2>
          <p className="type-body mt-5 text-slate-500">
            {teamData.description}
          </p>
        </Reveal>

        {/* Team Content */}
        <div className="w-full mt-16 relative">
          {teamData.layoutType === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8">
              {teamData.members.map((member, index) => (
                <Link key={`${member.id}-${index}`} href={`/teams/${member.id}`} className="block h-full">
                  <Reveal 
                    delay={index * 50}
                    className="group flex flex-col h-full rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1"
                  >
                    {/* Image container */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Social Ribbon */}
                      <div className="absolute bottom-0 left-0 w-12 bg-brand pt-6 pb-4 flex flex-col items-center gap-3 z-10 clip-ribbon">
                        <span className="text-white hover:text-navy transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </span>
                        <span className="text-white hover:text-navy transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </span>
                        <span className="text-white hover:text-navy transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-[22px] font-bold text-navy transition-colors group-hover:text-brand">{member.name}</h3>
                      <p className="text-[15px] text-slate-500 mt-1">{member.role}</p>
                      <span className="w-8 h-[3px] rounded-full bg-brand mt-4 transition-all duration-300 group-hover:w-16" />
                    </div>
                  </Reveal>
                </Link>
              ))}
            </div>
          ) : (
            <>
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-8"
              >
                {teamData.members.map((member, index) => (
                  <div 
                    key={`${member.id}-${index}`} 
                    className="w-full sm:w-[50%] lg:w-[25%] flex-none snap-start px-3 md:px-4"
                  >
                    <Link href={`/teams/${member.id}`} className="block h-full">
                      <Reveal 
                        delay={index * 100}
                        className="group flex flex-col h-full rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden transition-all hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1"
                      >
                        {/* Image container */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          {/* Social Ribbon */}
                          <div className="absolute bottom-0 left-0 w-12 bg-brand pt-6 pb-4 flex flex-col items-center gap-3 z-10 clip-ribbon">
                            <span className="text-white hover:text-navy transition-colors">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </span>
                            <span className="text-white hover:text-navy transition-colors">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </span>
                            <span className="text-white hover:text-navy transition-colors">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                          <h3 className="text-[22px] font-bold text-navy transition-colors group-hover:text-brand">{member.name}</h3>
                          <p className="text-[15px] text-slate-500 mt-1">{member.role}</p>
                          <span className="w-8 h-[3px] rounded-full bg-brand mt-4 transition-all duration-300 group-hover:w-16" />
                        </div>
                      </Reveal>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="mt-8 flex items-center justify-center gap-3">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToDot(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-8 bg-brand" : "w-3 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Go to team member slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .clip-ribbon {
            clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
          }
        `}} />
      </div>
    </section>
  );
};
