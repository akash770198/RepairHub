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

const LAST_UPDATED = "September 1, 2024";

const sections: PolicySection[] = [
  {
    id: "introduction",
    icon: "info",
    title: "Introduction",
    content:
      "Welcome to RepairHub. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our repair services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.",
  },
  {
    id: "information-we-collect",
    icon: "file-text",
    title: "Information We Collect",
    content:
      "We may collect information about you in a variety of ways. The information we may collect includes:",
    bullets: [
      "Personal Data — Name, email address, phone number, and mailing address that you voluntarily provide when booking a repair or contacting us.",
      "Device & Repair Information — Details about your device (make, model, serial number) and the nature of the repair needed.",
      "Payment Information — Billing details necessary to process your payment. We do not store full card numbers; all transactions are handled through secure, PCI-compliant payment processors.",
      "Log & Usage Data — IP address, browser type, pages visited, time spent, and referring URLs collected automatically when you access our website.",
      "Cookies & Tracking Technologies — Small data files placed on your device to enhance your experience and analyse site traffic.",
    ],
  },
  {
    id: "how-we-use",
    icon: "settings",
    title: "How We Use Your Information",
    content: "We use the information we collect to:",
    bullets: [
      "Process and fulfil your repair orders and service requests.",
      "Send you booking confirmations, repair status updates, and receipts.",
      "Respond to enquiries, support requests, and feedback.",
      "Improve our website content, products, and overall service quality.",
      "Send promotional communications (only if you have opted in) and newsletters.",
      "Detect and prevent fraudulent transactions and other illegal activities.",
      "Comply with applicable laws and regulations.",
    ],
  },
  {
    id: "sharing",
    icon: "users",
    title: "Sharing Your Information",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners only in the following circumstances:",
    bullets: [
      "Service Providers — Third-party vendors who assist in operating our website, processing payments, or delivering services (e.g., SMS/email providers, analytics tools), all bound by confidentiality agreements.",
      "Legal Requirements — When required by law, court order, or government authority.",
      "Business Transfers — In the event of a merger, acquisition, or sale of all or a portion of our assets.",
      "With Your Consent — Any other sharing will occur only with your explicit permission.",
    ],
  },
  {
    id: "cookies",
    icon: "shield",
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:",
    bullets: [
      "Essential Cookies — Required for the website to function properly (e.g., session management, security).",
      "Analytics Cookies — Help us understand how visitors interact with our site so we can improve it (e.g., Google Analytics).",
      "Marketing Cookies — Used to deliver relevant advertisements and measure campaign effectiveness.",
    ],
  },
  {
    id: "data-security",
    icon: "shield-check",
    title: "Data Security",
    content:
      "We implement industry-standard security measures including SSL/TLS encryption, secure server infrastructure, and restricted access controls to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "retention",
    icon: "clock",
    title: "Data Retention",
    content:
      "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Repair records are typically retained for 5 years for warranty and service history purposes. You may request deletion of your data at any time, subject to applicable legal obligations.",
  },
  {
    id: "your-rights",
    icon: "user",
    title: "Your Rights",
    content: "Depending on your location, you may have the following rights regarding your personal data:",
    bullets: [
      "Access — Request a copy of the personal data we hold about you.",
      "Correction — Request correction of inaccurate or incomplete data.",
      "Deletion — Request erasure of your personal data ('right to be forgotten').",
      "Portability — Receive your data in a structured, machine-readable format.",
      "Objection — Object to the processing of your data for direct marketing purposes.",
      "Withdraw Consent — Withdraw any consent previously given at any time.",
    ],
  },
  {
    id: "third-party",
    icon: "arrow-right",
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We have no control over the content or privacy practices of those sites and encourage you to review their privacy policies independently. RepairHub is not responsible for the privacy practices of any linked third-party site.",
  },
  {
    id: "children",
    icon: "heart",
    title: "Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately so we can delete it promptly.",
  },
  {
    id: "changes",
    icon: "trending-up",
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by updating the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
  },
  {
    id: "contact",
    icon: "phone",
    title: "Contact Us",
    content:
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
    bullets: [
      "Email: support@repairhub.com",
      "Phone: +1 123 456 7890",
      "Address: 123 Repair Street, Los Angeles, CA 90001, USA",
      "Business Hours: Mon – Sat, 09:00 am – 06:00 pm",
    ],
  },
];

export const PrivacyPolicyContent: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
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
                Privacy <span className="text-brand">Policy</span>
              </h1>
              <p className="text-ink-soft text-[16px] leading-relaxed max-w-2xl">
                Your privacy matters to us. This document outlines how RepairHub collects, uses,
                and safeguards your personal information. Please read it carefully before using our
                services.
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
                  <DynamicIcon name="envelope" size={24} className="text-brand" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
                  Have a privacy concern?
                </h3>
                <p className="text-slate-300 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
                  We take your privacy seriously. Reach out to our team and we'll be happy to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand text-navy font-bold py-4 px-8 rounded-lg hover:bg-brand-light transition-colors shadow-lg"
                >
                  Contact Us
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
