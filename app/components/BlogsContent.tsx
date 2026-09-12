"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface BlogPost {
  id: string;
  featured: boolean;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  comments: number;
  title: string;
  link: string;
}

interface BlogsData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
  };
  description: string;
  posts: BlogPost[];
}

export const BlogsContent = ({ blogsData }: { blogsData: BlogsData }) => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="page-gutter">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-brand rounded-full" />
            <span className="text-brand font-bold uppercase tracking-wider text-sm">{blogsData.eyebrow}</span>
            <span className="h-[2px] w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6">
            {blogsData.heading.line1}<span className="text-brand">{blogsData.heading.highlight}</span>
          </h2>
          <p className="text-ink-soft text-[17px]">
            {blogsData.description}
          </p>
        </div>

        {/* Masonry Grid via CSS Columns */}
        <div className="columns-1 lg:columns-2 gap-8 lg:gap-10">
          {blogsData.posts.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 50} className="w-full break-inside-avoid mb-8 lg:mb-10">
              <div className={`bg-white rounded-[24px] border border-line shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex ${post.featured ? 'flex-col sm:h-[552px] lg:h-[560px]' : 'flex-col sm:flex-row h-auto sm:h-[260px]'}`}>
                
                {/* Image Section */}
                <div className={`relative shrink-0 overflow-hidden ${post.featured ? 'w-full h-1/2 sm:h-[55%]' : 'w-full sm:w-[45%] h-64 sm:h-full'}`}>
                  <Image 
                    src={post.image?.src || ""} 
                    alt={post.image?.alt || post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tag Badge overlay at bottom left of image */}
                  <div className="absolute bottom-0 left-0 bg-brand text-navy text-[11px] sm:text-[13px] font-bold uppercase tracking-wider px-3 py-1.5 sm:px-4 sm:py-2 rounded-tr-[12px]">
                    {post.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`flex-1 flex flex-col justify-center ${post.featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'}`}>
                  {/* Meta row */}
                  <div className={`flex items-center gap-4 sm:gap-6 text-slate-500 font-medium ${post.featured ? 'text-sm mb-6' : 'text-xs mb-3'}`}>
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="calendar" className="w-[18px] h-[18px] text-brand" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <DynamicIcon name="message-circle" className="w-[18px] h-[18px] text-brand" />
                      {String(post.comments).padStart(2, '0')} Comments
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-extrabold text-navy leading-snug mb-6 group-hover:text-brand transition-colors ${post.featured ? 'text-3xl sm:text-[34px] xl:text-[38px]' : 'text-xl sm:text-[22px]'}`}>
                    <Link href={post.link}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Read More Button Area */}
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <Link href={post.link} className={`inline-flex items-center gap-3 text-navy font-bold group/btn ${post.featured ? 'text-[16px]' : 'text-[14px]'}`}>
                      <span className={`rounded-full bg-brand flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110 shadow-sm shrink-0 ${post.featured ? 'w-12 h-12' : 'w-9 h-9'}`}>
                        <DynamicIcon name="arrow-right" className={`${post.featured ? 'w-6 h-6' : 'w-4 h-4'} text-navy`} />
                      </span>
                      Read More
                    </Link>
                    {/* Decorative yellow line ending at the right edge */}
                    <span className="w-16 h-[2px] bg-brand/40 group-hover:bg-brand transition-colors" />
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
