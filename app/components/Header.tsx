"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DynamicIcon } from "./Icons";
import { site, SectionProps, RepairHubHeaderBundle } from "@/data";

export function Header({ data, className }: SectionProps<RepairHubHeaderBundle> = {}) {
  const topbarData = data?.topbarData || site.topbar;
  const headerData = data?.headerData || site.header;
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const cta = headerData.buttons[0];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#081c3c] text-white shadow-[0_12px_30px_-20px_rgba(2,6,23,0.9)] flex flex-col ${className || ""}`}>
      {/* MOBILE TOP BAR (Only visible on small screens) */}
      <div className="md:hidden w-full border-b border-white/10 bg-[#06152d]">
        <div className="page-gutter flex h-10 items-center justify-between gap-4">
          <a
            href={`mailto:${topbarData.email}`}
            className="flex min-w-0 items-center gap-2 text-muted transition-colors hover:text-brand-light"
          >
            <DynamicIcon
              name={topbarData.emailIcon}
              className="h-4 w-4 shrink-0 text-brand"
            />
            <span className="text-[12px] sm:text-[13px] whitespace-nowrap">{topbarData.email}</span>
          </a>
          <div className="flex shrink-0 items-center gap-4">
            {topbarData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand-light"
              >
                <DynamicIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Height is pinned so the logo can't outgrow the topbar + nav rows */}
      <div className="page-gutter flex h-[5.25rem] w-full items-stretch overflow-visible py-2 sm:h-[7.25rem] md:h-[6.5rem]">
        {/* BRAND BLOCK — fills header height with almost no extra padding */}
        <div className="rh-fade-left flex shrink-0 self-stretch items-center">
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
                <span className="text-white">{(headerData.logo as any).titlePart1}</span>
                <span className="text-brand">{(headerData.logo as any).titlePart2}</span>
              </span>
            )}
          </Link>
        </div>

        {/* DIAGONAL YELLOW SLASH DIVIDER */}
        <div className="relative mx-3 hidden w-5 shrink-0 self-stretch overflow-visible sm:block lg:mx-5 lg:w-5 xl:mx-7 xl:w-6">
          <div
            className="rh-fade-in absolute left-1/2 z-10 w-[10px] -translate-x-1/2 skew-x-[-15deg] bg-brand lg:w-[11px]"
            style={{
              animationDelay: "150ms",
              top: "-0.5rem",
              bottom: "-0.5rem",
            }}
          />
          <div
            className="rh-fade-in absolute z-0 bg-brand"
            style={{
              animationDelay: "150ms",
              left: "6px",
              top: "-1.15rem",
              width: "20px",
              height: "20px",
              rotate: "-50deg",
            }}
          />
        </div>

        {/* RIGHT SIDE: TOP BAR ROW + NAV ROW */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* 1. TOP CONTACT & SOCIAL BAR */}
          <div className="rh-fade-in type-topbar hidden md:flex min-h-9 items-center justify-between gap-4 border-b-2 border-white/15 pb-2 sm:min-h-10">
            <div className="flex min-w-0 items-center gap-3 lg:gap-5">
              <a
                href={`mailto:${topbarData.email}`}
                className="flex min-w-0 items-center gap-2 text-muted transition-colors hover:text-brand-light"
              >
                <DynamicIcon
                  name={topbarData.emailIcon}
                  className="h-4 w-4 shrink-0 text-brand"
                />
                <span className="text-[11px] sm:text-[13px] md:text-sm whitespace-nowrap">{topbarData.email}</span>
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

            <div className="flex shrink-0 items-center gap-4 pb-0.5">
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
          <div className="flex h-full flex-1 items-center justify-end md:h-[3rem] md:items-stretch md:justify-between sm:h-16">
            <nav className="type-nav hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
              {headerData.menu.map((item, index) => (
                <div
                  key={item.label}
                  style={{ animationDelay: `${200 + index * 70}ms` }}
                  className="rh-fade-up group relative flex h-full items-center"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive(item.href)
                        ? "text-brand-light"
                        : "text-on-dark hover:text-brand-light"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-brand-light transition-transform duration-300 ${
                          isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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

                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute left-0 top-[calc(100%-1rem)] min-w-[200px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 bg-[#081c3c] border border-white/10 rounded-b shadow-xl py-2 flex flex-col z-50">
                      {/* Invisible bridge to keep hover active */}
                      <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className="px-5 py-3 text-sm text-slate-300 hover:text-brand hover:bg-white/5 transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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

            {/* Booking CTA */}
            {cta && (
              <Link
                href={cta.href}
                className="rh-fade-in type-cta group ml-4 hidden shrink-0 items-center gap-2.5 self-start bg-brand text-ink transition-colors duration-300 hover:bg-brand-light md:flex"
                style={{
                  borderBottom: "9px solid #e1aa07",
                  padding: "12px 28px 12px 28px",
                  borderRadius: "26px 0",
                  overflow: "hidden",
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
        <nav className="page-gutter border-t border-white/10 bg-[#081c3c] py-3 lg:hidden">
          {headerData.menu.map((item) => (
            <div key={item.label} className="border-b border-white/5 last:border-0">
              <Link
                href={item.href}
                onClick={() => !item.hasDropdown && setMobileOpen(false)}
                className={`type-nav flex items-center justify-between py-3 ${
                  isActive(item.href) ? "text-brand-light" : "text-on-dark"
                }`}
              >
                {item.label}
                {item.hasDropdown && !item.dropdownItems && (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                )}
              </Link>
              {item.dropdownItems && (
                <div className="flex flex-col pl-4 pb-2">
                  {item.dropdownItems.map((dropItem) => (
                    <Link
                      key={dropItem.label}
                      href={dropItem.href}
                      onClick={() => setMobileOpen(false)}
                      className="type-nav py-2 text-[14px] text-slate-400 hover:text-brand"
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
