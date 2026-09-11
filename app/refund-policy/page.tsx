"use client";

import React, { useEffect, useState } from "react";
import data from "@/data/site.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageBanner } from "@/app/components/PageBanner";
import { DynamicIcon } from "@/app/components/Icons";

export default function RefundPolicyPage() {
  const siteData = data.RepairHub;
  const [activeSection, setActiveSection] = useState("general");
  
  // Data for header and footer
  const headerData = siteData.sections.Header.variants.RepairHubHeader1;
  const topbarData = siteData.sections.Topbar.variants.RepairHubTopbar1;
  const footerData = siteData.sections.Footer.variants.RepairHubFooter1;
  
  // Page Banner
  const bannerData = siteData.sections.PageBanner.variants.RefundPolicyBanner;

  const sections = [
    { id: "general", title: "General Policy" },
    { id: "applicable", title: "When Refund is Applicable" },
    { id: "not-applicable", title: "When Refund is Not Applicable" },
    { id: "process", title: "Refund Process" },
    { id: "timeframe", title: "Refund Timeframe" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 120, behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <Header topbarData={topbarData} headerData={headerData} />
      {bannerData && <PageBanner bannerData={bannerData} />}
      
      <section className="page-gutter py-20 lg:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Sticky Sidebar */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h3>
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`text-left text-[14px] font-medium transition-all duration-300 py-2.5 px-4 rounded-lg flex items-center gap-3
                      ${activeSection === section.id 
                        ? "bg-brand/10 text-navy font-bold border-l-4 border-brand" 
                        : "text-slate-500 hover:text-navy hover:bg-slate-50 border-l-4 border-transparent"
                      }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right: Content */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 lg:p-16">
              
              {/* Header */}
              <div className="mb-12 pb-12 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-[13px] font-bold tracking-wide uppercase mb-6">
                  <DynamicIcon name="calendar" className="w-4 h-4" />
                  Last Updated: May 2024
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-navy mb-6 tracking-tight">Refund Policy</h2>
                <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium">
                  At RepairHub, customer satisfaction is our top priority. We strive to provide high-quality mobile repair services with complete transparency. Please read our refund policy carefully before using our services.
                </p>
              </div>

              {/* Sections */}
              <div className="flex flex-col gap-16">
                
                {/* General Policy */}
                <div id="general" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">1</span>
                    General Policy
                  </h3>
                  <p className="text-[16px] text-slate-600 leading-relaxed font-medium pl-11">
                    We offer refunds under certain conditions as per the terms mentioned below. All refund requests are subject to review and approval by our team. RepairHub reserves the right to accept or reject any refund request at its sole discretion.
                  </p>
                </div>

                {/* Applicable */}
                <div id="applicable" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center">
                      <DynamicIcon name="check" className="w-4 h-4" />
                    </span>
                    When Refund is Applicable
                  </h3>
                  <div className="pl-11">
                    <p className="text-[16px] text-slate-600 mb-6 font-medium">A refund may be applicable in the following cases:</p>
                    <ul className="flex flex-col gap-4">
                      {["If we are unable to repair your device.", "If the device is damaged further by our team.", "If the wrong service was provided.", "If the paid amount was more than the quoted amount due to our error."].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[16px] text-slate-600 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Not Applicable */}
                <div id="not-applicable" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    When Refund is Not Applicable
                  </h3>
                  <div className="pl-11">
                    <p className="text-[16px] text-slate-600 mb-6 font-medium">A refund will not be applicable in the following cases:</p>
                    <ul className="flex flex-col gap-4">
                      {["If the device is physically or liquid damaged by the customer before or after the repair.", "If the customer denies the repair after the work has already started.", "If the issue is due to software or any third-party application.", "If it is a minor issue that was informed to the customer before the repair."].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[16px] text-slate-600 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">2</span>
                    Refund Process
                  </h3>
                  <div className="pl-11 bg-slate-50 p-6 sm:p-8 rounded-2xl ml-11 border border-slate-100 mt-4">
                    <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                      To request a refund, please contact our support team within <strong className="text-navy">3 days of service completion</strong>. Our team will review your request and verify the details. If approved, the refund will be processed as per our policy and initiated to your original payment method.
                    </p>
                  </div>
                </div>

                {/* Timeframe */}
                <div id="timeframe" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm">3</span>
                    Refund Timeframe
                  </h3>
                  <p className="text-[16px] text-slate-600 leading-relaxed font-medium pl-11">
                    Once your refund is approved, it may take <strong className="text-navy">5–7 business days</strong> to reflect in your original payment method, depending on your bank or payment provider.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer footerData={footerData} />
    </main>
  );
}
