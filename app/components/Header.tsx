"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";

interface TopbarData {
  email: string;
  emailIcon: string;
  openHoursPrefix: string;
  openHoursValue: string;
  openHoursIcon: string;
  socialLinks: Array<{
    label: string;
    href: string;
    icon: string;
  }>;
}

interface HeaderData {
  logo: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    titlePart1?: string;
    titlePart2?: string;
    tagline?: string;
    href: string;
  };
  menu: Array<{
    label: string;
    href: string;
    active?: boolean;
    hasDropdown?: boolean;
  }>;
  buttons: Array<{
    label: string;
    href: string;
    icon: string;
  }>;
}

interface HeaderProps {
  topbarData: TopbarData;
  headerData: HeaderData;
}

export const Header: React.FC<HeaderProps> = ({ topbarData, headerData }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cta = headerData.buttons[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-[0_12px_30px_-20px_rgba(2,6,23,0.9)]">
      {/* Height is pinned so the logo can't outgrow the topbar + nav rows */}
      <div className="page-gutter flex h-[5.5rem] w-full items-stretch sm:h-[6.5rem]">
        {/* BRAND BLOCK — fills header height with almost no extra padding */}
        <div className="rh-fade-left flex shrink-0 self-stretch py-2">
          <Link
            href={headerData.logo.href}
            className="flex h-full items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            {headerData.logo.src ? (
              <Image
                src={headerData.logo.src}
                alt={headerData.logo.alt || "Logo"}
                width={headerData.logo.width || 180}
                height={headerData.logo.height || 60}
                priority
                className="h-full max-h-full w-auto max-w-[45vw] object-contain object-left sm:max-w-none"
              />
            ) : (
              <span className="font-heading text-3xl font-black leading-none tracking-tight sm:text-4xl">
                <span className="text-white">{headerData.logo.titlePart1}</span>
                <span className="text-brand">{headerData.logo.titlePart2}</span>
              </span>
            )}
          </Link>
        </div>

        {/* DIAGONAL YELLOW SLASH DIVIDER */}
        <div className="relative mx-3 hidden w-6 shrink-0 sm:block lg:mx-5 lg:w-7 xl:mx-7 xl:w-8">
          <div
            className="rh-fade-in absolute inset-y-0 left-0 w-full skew-x-[-15deg] bg-brand"
            style={{ animationDelay: "150ms" }}
          />
        </div>

        {/* RIGHT SIDE: TOP BAR ROW + NAV ROW */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* 1. TOP CONTACT & SOCIAL BAR */}
          <div className="rh-fade-in type-topbar flex h-9 items-center justify-between gap-4 sm:h-10">
            <div className="flex min-w-0 items-center gap-3 lg:gap-5">
              <a
                href={`mailto:${topbarData.email}`}
                className="flex min-w-0 items-center gap-2 text-muted transition-colors hover:text-brand-light"
              >
                <DynamicIcon
                  name={topbarData.emailIcon}
                  className="h-4 w-4 shrink-0 text-brand"
                />
                <span className="truncate">{topbarData.email}</span>
              </a>

              <span className="hidden h-4 w-px bg-white/20 md:block" />

              <div className="hidden items-center gap-2 md:flex">
                <DynamicIcon
                  name={topbarData.openHoursIcon}
                  className="h-4 w-4 shrink-0 text-brand"
                />
                <span className="font-medium text-brand">
                  {topbarData.openHoursPrefix}
                </span>
                <span className="text-muted">{topbarData.openHoursValue}</span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              {topbarData.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-brand-light"
                >
                  <DynamicIcon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. MAIN NAVIGATION ROW */}
          <div className="flex h-[2.5rem] flex-1 items-stretch justify-between sm:h-16">
            <nav className="type-nav hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
              {headerData.menu.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ animationDelay: `${200 + index * 70}ms` }}
                  className={`rh-fade-up group relative flex items-center gap-1 transition-colors ${
                    item.active
                      ? "text-brand-light"
                      : "text-on-dark hover:text-brand-light"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-brand-light transition-transform duration-300 ${
                        item.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </span>
                  {item.hasDropdown && (
                    <svg
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="flex items-center px-1 text-on-dark transition-colors hover:text-brand-light lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>

            {/* Angled booking CTA, flush with the right screen edge */}
            {cta && (
              <Link
                href={cta.href}
                className="bleed-right rh-fade-in type-cta group ml-4 flex shrink-0 items-center gap-2.5 bg-brand pl-9 text-ink transition-colors duration-300 hover:bg-brand-light sm:pl-10 xl:pl-12"
                style={{
                  clipPath: "polygon(30px 0, 100% 0, 100% 100%, 0% 100%)",
                  animationDelay: "300ms",
                }}
              >
                <DynamicIcon
                  name={cta.icon}
                  className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                />
                <span className="whitespace-nowrap">{cta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      {mobileOpen && (
        <nav className="page-gutter border-t border-white/10 bg-navy py-3 lg:hidden">
          {headerData.menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`type-nav flex items-center gap-1 border-b border-white/5 py-3 last:border-0 ${
                item.active ? "text-brand-light" : "text-on-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
