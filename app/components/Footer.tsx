"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site, SectionProps, RepairHubFooter1Data } from "@/data";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface Post {
  image: string;
  title: string;
  date: string;
  href: string;
}

function resolveFooterPosts(posts: Post[]): Post[] {
  const blogPosts = site.blogs.posts || [];

  return posts.map((item) => {
    const slug = item.href.split("/").filter(Boolean).pop();
    const blog = blogPosts.find((p: { id?: string; link?: string }) => {
      const linkSlug = p.link ? p.link.split("/").filter(Boolean).pop() : p.id;
      return p.id === slug || linkSlug === slug || p.link === item.href;
    });

    if (!blog) return item;

    const image =
      typeof blog.image === "string"
        ? blog.image
        : blog.image?.src || item.image;

    return {
      image,
      title: blog.title || item.title,
      date: blog.date || item.date,
      href: blog.link || item.href,
    };
  });
}

export function Footer({ data, className }: SectionProps<RepairHubFooter1Data> = {}) {
  const footerData = data || site.footer;
  const recentPosts = resolveFooterPosts(
    footerData.postsColumn.posts.map((p) => ({
      image: p.image,
      title: p.title,
      date: p.date,
      href: p.href,
    }))
  );

  return (
    <footer className={`w-full bg-[#081c3c] border-t-4 border-brand text-slate-300 ${className || ""}`}>
      <div className="page-gutter py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: About & Contact */}
          <Reveal animation="rh-fade-up" delay={0} className="flex flex-col">
            <Link href="/" className="inline-block w-64 md:w-[270px] mb-6 -mt-8">
              <Image 
                src={footerData.logo.src} 
                alt={footerData.logo.alt} 
                width={320} 
                height={104} 
                className="w-full h-auto"
              />
            </Link>
            <p className="text-[15px] leading-relaxed mb-8 whitespace-pre-line">
              {footerData.description}
            </p>
            <div className="w-full h-px bg-slate-800 mb-8" />
            <div className="flex flex-col gap-6">
              {footerData.contact.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-navy">
                    <DynamicIcon name={item.icon} size={18} />
                  </div>
                  <div className="flex flex-col text-[15px]">
                    <span className={item.value ? "text-brand font-medium" : "text-slate-300 whitespace-pre-line"}>
                      {item.label}
                    </span>
                    {item.value && (
                      <span className="text-white mt-1">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Column 2: Useful Links */}
          <Reveal animation="rh-fade-up" delay={100} className="flex flex-col lg:pl-8">
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-4 inline-block">
              {footerData.linksColumn.title}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {footerData.linksColumn.links.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="flex items-center gap-2 hover:text-brand transition-colors text-[15px]"
                >
                  <DynamicIcon name="chevron-right" size={14} className="text-brand flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Column 3: Recent Posts */}
          <Reveal animation="rh-fade-up" delay={200} className="flex flex-col lg:pl-4">
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-4 inline-block">
              {footerData.postsColumn.title}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand" />
            </h3>
            <div className="flex flex-col gap-6">
              {recentPosts.map((post, index) => (
                <Link key={index} href={post.href} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-20 h-16 relative rounded overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[15px] font-medium text-white group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-brand text-xs">
                      <DynamicIcon name="calendar" size={12} />
                      {post.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link 
              href={footerData.postsColumn.button.href}
              className="mt-6 inline-flex items-center justify-center gap-2 border border-brand text-brand hover:bg-brand hover:text-navy transition-all py-3 px-6 rounded text-sm font-semibold self-start"
            >
              {footerData.postsColumn.button.label}
              <DynamicIcon name="arrow-right" size={16} />
            </Link>
          </Reveal>

          {/* Column 4: Get Free Estimate */}
          <Reveal animation="rh-fade-up" delay={300} className="flex flex-col lg:pl-4">
            <h3 className="text-xl font-semibold text-white mb-6 relative pb-4 inline-block">
              {footerData.estimateColumn.title}
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-brand" />
            </h3>
            <div className="flex items-center gap-3 text-brand mb-4">
              <DynamicIcon name="phone" size={24} />
              <span className="text-2xl font-bold">{footerData.estimateColumn.phone}</span>
            </div>
            <p className="text-[15px] mb-8">
              {footerData.estimateColumn.description}
            </p>
            <Link 
              href={footerData.estimateColumn.button.href}
              className="inline-flex items-center justify-center gap-3 border border-brand text-brand hover:bg-brand hover:text-navy transition-all py-4 px-6 rounded text-sm font-semibold self-start"
            >
              <DynamicIcon name="calendar" size={18} />
              {footerData.estimateColumn.button.label}
            </Link>
          </Reveal>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#010a1a] py-6 border-t border-slate-800">
        <div className="page-gutter flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-[14px]">
            {footerData.bottomBar.copyright.split('RepairHub').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-brand">RepairHub</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14px]">
            {footerData.bottomBar.policies.map((policy, index) => (
              <React.Fragment key={index}>
                <Link href={policy.href} className="hover:text-brand transition-colors">
                  {policy.label}
                </Link>
                {index < footerData.bottomBar.policies.length - 1 && (
                  <span className="text-slate-700">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[14px]">
            <span className="mr-2">Follow Us</span>
            {footerData.bottomBar.social.map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-navy transition-all text-white"
              >
                <DynamicIcon name={social.icon} size={14} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
