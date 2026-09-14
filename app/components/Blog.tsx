"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubBlogs1Data } from "@/data";

export const Blog: React.FC<SectionProps<RepairHubBlogs1Data>> = ({ data: propData, className }) => {
  const blogData = (propData || site.blogs) as any;
  if (!blogData || !blogData.posts || blogData.posts.length === 0) return null;

  const mainPost = blogData.posts[0];
  const sidePosts = blogData.posts.slice(1, 3);
  const readMore = blogData.readMoreLabel ?? "Read More";
  const commentsWord = blogData.commentsLabel ?? "Comments";

  return (
    <section id="blog" className={`py-16 bg-[#f8fbff] ${className || ""}`}>
      <div className="page-gutter">
        {/* Header Section */}
        <Reveal className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-[3px] w-9 rounded-full bg-brand" />
            <span className="type-eyebrow text-navy">{blogData.eyebrow}</span>
            <span className="h-[3px] w-9 rounded-full bg-brand" />
          </div>
          
          <h2 className="type-heading text-navy mb-4">
            {blogData.heading.line1}
            <span className="text-brand">{blogData.heading.highlight}</span>
          </h2>
          
          <p className="type-body text-slate-500 max-w-2xl mx-auto whitespace-pre-line">
            {blogData.description}
          </p>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Post (Left) */}
          <Reveal delay={100} className="group flex flex-col rounded-[20px] bg-white border border-slate-200 shadow-md overflow-hidden transition-all hover:shadow-xl h-full">
            <div className="relative flex-1 min-h-[250px] w-full overflow-hidden">
              <Image
                src={mainPost.image.src}
                alt={mainPost.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-brand text-white px-6 py-2 rounded-tr-xl font-bold text-sm tracking-wider uppercase">
                {mainPost.category}
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col shrink-0 bg-white">
              <div className="flex items-center gap-6 text-slate-500 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <DynamicIcon name="calendar" className="w-4 h-4 text-brand" />
                  <span>{mainPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="chat" className="w-4 h-4 text-brand" />
                  <span>{mainPost.comments} {commentsWord}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-6 transition-colors group-hover:text-brand">
                <Link href={mainPost.link}>
                  {mainPost.title}
                </Link>
              </h3>
              
              <div className="mt-auto flex items-center justify-between">
                <Link href={mainPost.link} className="flex items-center gap-3 font-bold text-navy transition-colors group-hover:text-brand">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <DynamicIcon name="arrow-right" className="h-5 w-5" />
                  </span>
                  {readMore}
                </Link>
                <span className="h-[2px] w-12 bg-brand/30" />
              </div>
            </div>
          </Reveal>

          {/* Side Posts (Right) */}
          <div className="flex flex-col gap-8">
            {sidePosts.map((post: any, index: any) => (
              <Reveal key={post.id} delay={200 + index * 100} className="group flex flex-col sm:flex-row rounded-[20px] bg-white border border-slate-200 shadow-md overflow-hidden transition-all hover:shadow-xl">
                <div className="relative aspect-[4/3] sm:aspect-square sm:w-2/5 overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand text-white px-4 py-1.5 rounded-tr-xl font-bold text-xs tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center sm:w-3/5">
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                    <div className="flex items-center gap-1.5">
                      <DynamicIcon name="calendar" className="w-4 h-4 text-brand" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DynamicIcon name="chat" className="w-4 h-4 text-brand" />
                      <span>{post.comments} {commentsWord}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-4 transition-colors group-hover:text-brand line-clamp-2">
                    <Link href={post.link}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <Link href={post.link} className="flex items-center gap-3 font-bold text-navy transition-colors group-hover:text-brand text-sm">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                        <DynamicIcon name="arrow-right" className="h-4 w-4" />
                      </span>
                      {readMore}
                    </Link>
                    <span className="h-[2px] w-8 bg-brand/30" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
