"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface BlogDetailContentProps {
  post: any;
  allPosts: any[];
}

export const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ post, allPosts }) => {
  const recentPosts = allPosts.filter(p => p.id !== post.id).slice(0, 5);
  
  return (
    <section className="bg-white py-16">
      <div className="page-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left, spans 2 cols) */}
          <div className="lg:col-span-2">
            
            <Reveal animation="rh-fade-up">


              {/* Tag */}
              <div className="inline-block bg-brand text-navy font-bold uppercase tracking-wider text-[12px] px-3 py-1 rounded mb-4">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-slate-500 font-medium text-sm mb-8 pb-6 border-b border-line">
                <div className="flex items-center gap-2">
                  <DynamicIcon name="calendar" className="w-[18px] h-[18px] text-brand" />
                  {post.date}
                </div>
                <div className="text-slate-300">|</div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="user" className="w-[18px] h-[18px] text-brand" />
                  {post.author}
                </div>
                <div className="text-slate-300">|</div>
                <div className="flex items-center gap-2">
                  <DynamicIcon name="message-circle" className="w-[18px] h-[18px] text-brand" />
                  {String(post.comments).padStart(2, '0')} Comments
                </div>
              </div>

              {/* Hero Image */}
              <div className="w-full relative h-[250px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden mb-10">
                <Image src={post.image.src || post.image} alt={post.image.alt || post.title} fill className="object-cover" />
              </div>
            </Reveal>

            {/* Dynamic Content Mapping */}
            <div className="flex flex-col gap-6 text-[16px] md:text-[17px] text-ink-soft leading-relaxed">
              {post.content && post.content.map((block: any, index: number) => {
                if (block.type === 'paragraph') {
                  return (
                    <Reveal delay={100} key={index}>
                      <p>{block.text}</p>
                    </Reveal>
                  );
                }
                
                if (block.type === 'blockquote') {
                  return (
                    <Reveal delay={100} key={index}>
                      <blockquote className="relative bg-[#fffbf0] border-l-4 border-brand p-8 md:p-10 rounded-r-xl">
                        <DynamicIcon name="quote" className="w-12 h-12 text-brand absolute top-6 left-6 opacity-20" size={48} />
                        <p className="relative z-10 text-lg md:text-xl text-navy font-bold italic leading-snug pl-8">
                          "{block.text}"
                        </p>
                      </blockquote>
                    </Reveal>
                  );
                }

                if (block.type === 'heading') {
                  return (
                    <Reveal delay={100} key={index}>
                      <h2 className="text-2xl md:text-3xl font-bold text-navy mt-8 mb-4">{block.text}</h2>
                    </Reveal>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <Reveal delay={100} key={index}>
                      <ul className="flex flex-col gap-3 my-4">
                        {block.items.map((item: string, i: number) => (
                          <li key={i} className="flex gap-3 text-ink-soft items-start">
                            <div className="w-2 h-2 rounded-sm bg-brand shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  );
                }

                if (block.type === 'split-list') {
                  return (
                    <Reveal delay={100} key={index}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
                        <div className="relative h-[240px] md:h-[300px] rounded-xl overflow-hidden shadow-md">
                          <Image src={block.image.src} alt={block.image.alt || "Image"} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">{block.title}</h3>
                          <p className="mb-6 text-ink-soft">{block.description}</p>
                          <ul className="flex flex-col gap-3">
                            {block.items.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-3">
                                {/* Using a custom SVG for square check mark */}
                                <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                                  <rect width="24" height="24" rx="4" fill="currentColor" />
                                  <path d="M10 16.4l-4-4 1.4-1.4 2.6 2.6 6-6 1.4 1.4-7.4 7.4z" fill="white" />
                                </svg>
                                <span className="font-semibold text-navy">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* Sidebar (Right, spans 1 col) */}
          <div className="lg:col-span-1 flex flex-col gap-10 sticky top-32 h-fit">
            
            <Reveal animation="rh-fade-left">
              {/* Recent Posts Widget */}
              <div className="bg-white border border-line rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6 relative inline-block pb-3">
                  Recent Posts
                  <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand" />
                </h3>
                
                <div className="flex flex-col gap-6">
                  {recentPosts.map((rPost: any, idx: number) => (
                    <Link key={idx} href={rPost.link} className="flex items-center gap-4 group">
                      <div className="w-20 h-20 rounded bg-slate-100 overflow-hidden relative shrink-0">
                        <Image src={rPost.image.src || rPost.image} alt={rPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-[15px] font-bold text-navy leading-snug group-hover:text-brand transition-colors line-clamp-2">
                          {rPost.title}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mt-1">
                          <DynamicIcon name="calendar" className="w-3.5 h-3.5 text-brand" />
                          {rPost.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal animation="rh-fade-left" delay={200}>
              {/* Need Help CTA Widget */}
              <div className="bg-[#0b172b] rounded-xl p-8 text-center relative overflow-hidden text-white shadow-xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand rounded-full opacity-10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand rounded-full opacity-10 blur-3xl pointer-events-none" />
                
                <h3 className="text-3xl font-extrabold mb-4 leading-tight relative z-10">
                  Need <span className="text-brand">Help</span> With Your Device?
                </h3>
                <p className="text-slate-300 mb-8 text-[15px] relative z-10">
                  Our experts are here to fix your phone quickly and reliably.
                </p>
                
                <Link href="/book-repair" className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-bold px-6 py-3.5 rounded hover:bg-brand-light transition-colors w-full shadow-lg relative z-10 group">
                  Book a Repair Now
                  <DynamicIcon name="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                {/* Optional: illustration image inside the CTA */}
                <div className="mt-8 relative h-48 w-full z-10 rounded overflow-hidden">
                  <Image src="/AboutUs/phone_repair_secondary.jpg" alt="Device Repair Tools" fill className="object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b172b] via-[#0b172b]/50 to-transparent" />
                </div>
              </div>
            </Reveal>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
