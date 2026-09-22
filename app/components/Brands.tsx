"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubBrands1Data } from "@/data";

export function Brands({ data, className }: SectionProps<RepairHubBrands1Data> = {}) {
  const brandsData = data || site.brands;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync state if video pauses/plays externally or via autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    
    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className={`relative w-full bg-navy py-16 overflow-hidden ${className || ""}`}>
      {/* White background for the top half (above the horizontal line) */}
      <div className="absolute top-0 left-0 w-full h-40 lg:h-56 bg-white z-0" />

      {/* Decorative diagonal stripe line behind the video banner */}
      <div 
        className="absolute left-0 w-full h-[8px] top-40 lg:top-56 z-0" 
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #f59e0b, #f59e0b 2px, transparent 2px, transparent 6px)' }}
      />

      {/* Decorative dot background on the left */}
      <div className="absolute left-0 bottom-0 w-1/3 h-2/3 bg-[url('/pattern.svg')] bg-repeat opacity-[0.03]" />

      <div className="page-gutter relative z-10 flex flex-col gap-16 lg:gap-24">
        
        {/* TOP: Video Banner */}
        <Reveal animation="rh-fade-up">
          <div className="relative w-full overflow-hidden border-[3px] border-brand bg-slate-900 aspect-[16/9] lg:aspect-[21/9]">
            {brandsData.videoBanner.image.src ? (
              brandsData.videoBanner.image.src.toLowerCase().endsWith('.mp4') ? (
                <video
                  ref={videoRef}
                  src={brandsData.videoBanner.image.src}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={brandsData.videoBanner.image.src}
                  alt={brandsData.videoBanner.image.alt}
                  fill
                  className="object-cover"
                />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500 bg-navy/80">
                <span>Video Thumbnail Placeholder</span>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/40 flex flex-col items-center justify-center text-center p-6 transition-colors duration-500 hover:bg-navy/50">
              {/* Play/Pause Button */}
              <button 
                onClick={togglePlay}
                className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white transition-all hover:scale-110 mb-6 lg:h-24 lg:w-24 ${
                  isPlaying 
                    ? "opacity-0 hover:opacity-100 shadow-none" 
                    : "opacity-100 shadow-[0_0_0_12px_rgba(245,158,11,0.3)] lg:shadow-[0_0_0_16px_rgba(245,158,11,0.3)]"
                }`}
              >
                <DynamicIcon name={isPlaying ? "pause" : "play"} className={`h-8 w-8 ${!isPlaying ? "ml-1" : ""}`} />
              </button>
              
              <h3 className="type-heading text-white mb-6 drop-shadow-lg">
                {brandsData.videoBanner.title}
              </h3>
              
              <Link
                href={brandsData.videoBanner.button.href}
                className="group flex items-center gap-3 rounded-full bg-brand py-3 pl-6 pr-3 font-semibold text-navy transition-colors hover:bg-brand-light"
              >
                <span>{brandsData.videoBanner.button.label}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:translate-x-1">
                  <DynamicIcon name="arrow-right" className="h-4 w-4" />
                </span>
              </Link>
            </div>
            
            {/* Top right Logo Placeholder inside banner */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-10 flex items-center gap-2">
               <DynamicIcon name="gear-house" className="text-brand h-8 w-8" />
               <span className="text-white font-bold text-xl drop-shadow-md">RepairHub</span>
            </div>
          </div>
        </Reveal>

        {/* BOTTOM: Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
          {/* Left Info */}
          <Reveal className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-brand" />
              <span className="type-eyebrow text-brand">{brandsData.brandsInfo.eyebrow}</span>
            </div>
            
            <h2 className="type-heading mt-4 text-white">
              <span className="block">{brandsData.brandsInfo.heading.line1}</span>
              <span className="text-brand">{brandsData.brandsInfo.heading.highlight}</span>
            </h2>
            
            <p className="type-body mt-5 max-w-md text-slate-300">
              {brandsData.brandsInfo.description}
            </p>
            
            <Link
              href={brandsData.brandsInfo.button.href}
              className="group mt-8 flex items-center gap-3 rounded-full bg-brand py-3 pl-6 pr-3 font-semibold text-navy transition-colors hover:bg-brand-light shadow-lg"
            >
              <span>{brandsData.brandsInfo.button.label}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:translate-x-1">
                <DynamicIcon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brandsData.brands.map((brand, index) => (
              <Reveal key={brand.id} delay={index * 50} className="relative flex aspect-[2/1] items-center justify-center overflow-hidden rounded-md bg-white p-4 shadow-md transition-transform hover:-translate-y-1">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-4"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full">
                    {/* Placeholder for missing brand logo */}
                    <span className="text-sm font-bold text-slate-400">{brand.name}</span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
