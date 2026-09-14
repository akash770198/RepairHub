"use client";

import React from "react";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface PolicySection {
  id: string;
  icon: string;
  title: string;
  content: string;
  bullets?: string[];
}

const LAST_UPDATED = "May 1, 2024";

const sections: PolicySection[] = [
  {
    id: "general-policy",
    icon: "info",
    title: "General Policy",
    content:
      "We offer refunds under certain conditions as per the terms mentioned below. All refund requests are subject to review and approval by our team. RepairHub reserves the right to accept or reject any refund request at its sole discretion.",
  },
  {
    id: "when-applicable",
    icon: "check",
    title: "When Refund is Applicable",
    content:
      "A refund may be applicable in the following cases:",
    bullets: [
      "If we are unable to repair your device.",
      "If the device is damaged further by our team.",
      "If the wrong service was provided.",
      "If the paid amount was more than the quoted amount due to our error.",
    ],
  },
  {
    id: "when-not-applicable",
    icon: "x",
    title: "When Refund is Not Applicable",
    content: "A refund will not be applicable in the following cases:",
    bullets: [
      "If the device is physically or liquid damaged by the customer before or after the repair.",
      "If the customer denies the repair after the work has already started.",
      "If the issue is due to software or any third-party application.",
      "If it is a minor issue that was informed to the customer before the repair.",
    ],
  },
  {
    id: "refund-process",
    icon: "settings",
    title: "Refund Process",
    content:
      "To request a refund, please contact our support team within 3 days of service completion. Our team will review your request and verify the details. If approved, the refund will be processed as per our policy and initiated to your original payment method.",
  },
  {
    id: "refund-timeframe",
    icon: "clock",
    title: "Refund Timeframe",
    content:
      "Once your refund is approved, it may take 5–7 business days to reflect in your original payment method, depending on your bank or payment provider.",
  },
];

export const RefundPolicyContent: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="page-gutter">
        <div className="max-w-5xl mx-auto">
          {/* Page intro */}
          <Reveal animation="rh-fade-up">
            <div className="mb-14 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-brand rounded-full" />
                <span className="text-brand font-bold uppercase tracking-widest text-xs">
                  Legal Document
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-navy mb-5 leading-tight">
                Refund <span className="text-brand">Policy</span>
              </h1>
              <p className="text-ink-soft text-[16px] leading-relaxed max-w-2xl">
                At RepairHub, customer satisfaction is our top priority. We strive to provide high-quality mobile repair services with complete transparency. Please read our refund policy carefully before using our services.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <DynamicIcon name="clock" size={14} className="text-brand" />
                Last Updated: <span className="font-semibold text-navy ml-1">{LAST_UPDATED}</span>
              </div>
            </div>
          </Reveal>

          {/* Quick Nav */}
          <Reveal animation="rh-fade-up" delay={50}>
            <div className="mb-14 bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-navy mb-5">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {sections.map((s, idx) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2 text-[14px] text-slate-600 hover:text-brand transition-colors py-0.5 group"
                  >
                    <span className="text-brand font-bold text-xs w-5 shrink-0">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {s.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Policy Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((section, idx) => (
              <Reveal key={section.id} animation="rh-fade-up" delay={idx * 30}>
                <div
                  id={section.id}
                  className="scroll-mt-32 bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <DynamicIcon name={section.icon} size={22} className="text-brand" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand block mb-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl lg:text-2xl font-extrabold text-navy leading-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100 mb-6" />

                  {/* Body */}
                  <p className="text-[15px] lg:text-[16px] text-ink-soft leading-relaxed mb-0">
                    {section.content}
                  </p>

                  {/* Bullet List */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-3">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-brand shrink-0" />
                          <span className="text-[15px] lg:text-[16px] text-ink-soft leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal animation="rh-fade-up" delay={100}>
            <div className="mt-14 bg-navy rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-5">
                  <DynamicIcon name="help-circle" size={24} className="text-brand" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
                  Have a refund question?
                </h3>
                <p className="text-slate-300 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
                  We aim to be fully transparent. Contact our team if you need clarification on any point.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand text-navy font-bold py-4 px-8 rounded-lg hover:bg-brand-light transition-colors shadow-lg"
                >
                  Contact Support
                  <DynamicIcon name="arrow-right" size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
