"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubContact1Data } from "@/data";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 text-[15px] font-medium py-4 pl-12 pr-4 text-navy placeholder:text-slate-400 outline-none transition-all duration-300 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15";

export const ContactContent: React.FC<SectionProps<RepairHubContact1Data>> = ({ data: propData, className }) => {
  const contactData = (propData || site.contact) as any;
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section className={`relative w-full bg-white ${className || ""}`}>
      {/* Top Section: Info Cards */}
      <div className="page-gutter py-16 lg:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-brand" />
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              {contactData.eyebrow}
            </span>
            <span className="h-[2px] w-8 rounded-full bg-brand" />
          </div>
          <h2 className="text-4xl font-extrabold leading-snug text-navy lg:text-[42px]">
            {contactData.heading.line1.trim()}
            <br />
            <span className="text-brand">{contactData.heading.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {contactData.infoCards.map((card: any, idx: any) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className="group flex flex-col gap-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.25)] sm:flex-row sm:items-start lg:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-brand shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-navy">
                <DynamicIcon name={card.icon} className="h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <h3 className="mb-3 text-lg font-bold text-navy lg:text-xl">{card.title}</h3>
                <div className="flex flex-col gap-1 text-[15px] font-medium text-slate-600">
                  {card.details.map((detail: any, dIdx: any) => (
                    <span key={dIdx}>{detail}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="relative w-full">
        <div className="relative h-[420px] w-full bg-navy lg:h-[520px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262729759!2d77.10898504999999!3d28.62726595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="absolute inset-0 h-full w-full border-0 opacity-70 grayscale contrast-125 brightness-90"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RepairHub location map"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        </div>

        <div className="page-gutter relative z-10 -mt-28 pb-20 lg:-mt-40 lg:pb-28">
          <Reveal animation="rh-fade-up">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_80px_-30px_rgba(2,6,23,0.55)] lg:rounded-[32px]">
              <div className="flex flex-col lg:flex-row">
                {/* Form */}
                <div className="relative flex-1 p-8 sm:p-10 lg:p-14 xl:p-16">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-navy/5 blur-3xl" />

                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="h-[3px] w-8 rounded-full bg-brand" />
                      <span className="text-sm font-bold uppercase tracking-wider text-brand">
                        {contactData.form.eyebrow}
                      </span>
                    </div>
                    <h2 className="mb-3 max-w-md text-3xl font-extrabold leading-snug text-navy lg:text-4xl">
                      {contactData.form.heading}
                    </h2>
                    <p className="mb-9 max-w-lg text-[15px] text-slate-500">
                      {contactData.form.intro}
                    </p>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-navy/70">
                            {contactData.form.fieldLabels?.name ?? "Name"}
                          </span>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                              <DynamicIcon name="user" className="h-[18px] w-[18px] text-brand" />
                            </div>
                            <input
                              type="text"
                              placeholder={contactData.form.placeholders?.name ?? "Your Name"}
                              required
                              className={fieldClass}
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-navy/70">
                            {contactData.form.fieldLabels?.email ?? "Email"}
                          </span>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                              <DynamicIcon name="envelope" className="h-[18px] w-[18px] text-brand" />
                            </div>
                            <input
                              type="email"
                              placeholder={contactData.form.placeholders?.email ?? "Your Email"}
                              required
                              className={fieldClass}
                            />
                          </div>
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-navy/70">
                          {contactData.form.fieldLabels?.subject ?? "Subject"}
                        </span>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <DynamicIcon name="file-text" className="h-[18px] w-[18px] text-brand" />
                          </div>
                          <input
                            type="text"
                            placeholder={contactData.form.placeholders?.subject ?? "Subject"}
                            required
                            className={fieldClass}
                          />
                        </div>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-navy/70">
                          {contactData.form.fieldLabels?.message ?? "Message"}
                        </span>
                        <div className="relative">
                          <div className="pointer-events-none absolute left-0 top-4 flex items-center pl-4">
                            <DynamicIcon name="message-circle" className="h-[18px] w-[18px] text-brand" />
                          </div>
                          <textarea
                            placeholder={contactData.form.placeholders?.message ?? "Your Message"}
                            required
                            rows={5}
                            className={`${fieldClass} resize-none`}
                          />
                        </div>
                      </label>

                      <button
                        type="submit"
                        className="group mt-2 inline-flex items-center justify-center gap-3 self-start rounded-xl bg-brand px-9 py-4 text-[15px] font-extrabold text-navy shadow-[0_12px_30px_-12px_rgba(255,193,7,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-[0_16px_36px_-12px_rgba(255,193,7,0.9)]"
                      >
                        {contactData.form.button}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-brand transition-transform duration-300 group-hover:translate-x-0.5">
                          <DynamicIcon name="arrow-right" className="h-4 w-4" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Side panel */}
                <div className="relative hidden w-full overflow-hidden bg-navy lg:flex lg:w-[42%] lg:flex-col lg:justify-between">
                  <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, transparent 40%, rgba(255,193,7,0.35) 40%, rgba(255,193,7,0.35) 42%, transparent 42%), linear-gradient(45deg, transparent 60%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.08) 61%, transparent 61%)",
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-14">
                    <div>
                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-brand">
                        <DynamicIcon name="phone" className="h-3.5 w-3.5" />
                        {contactData.form.sideContent.badge ?? "Fast Response"}
                      </div>
                      <h3 className="max-w-sm text-3xl font-extrabold leading-snug text-white xl:text-[34px]">
                        {contactData.form.sideContent.title ?? "Expert repair help,"}{" "}
                        <span className="text-brand">
                          {contactData.form.sideContent.titleHighlight ?? "one message away"}
                        </span>
                      </h3>
                    </div>

                    {contactData.form.sideContent.image ? (
                      <div className="relative my-10 h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                        <Image
                          src={contactData.form.sideContent.image}
                          alt="RepairHub contact"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                      </div>
                    ) : null}

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <p className="text-[16px] font-medium leading-relaxed text-slate-200">
                        {contactData.form.sideContent.text}
                      </p>
                      <div className="mt-5 flex items-center gap-3 text-sm font-bold text-brand">
                        <DynamicIcon name="check" className="h-4 w-4" />
                        {contactData.form.sideContent.note ?? "Usually reply within a few hours"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 animate-fade-in-up">
          <div className="flex min-w-[320px] items-center gap-4 rounded-2xl border border-green-200 bg-white px-6 py-5 shadow-2xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50">
              <DynamicIcon name="check" size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-[15px] font-extrabold text-navy">
                {contactData.form.successToast?.title ?? "Thank you for your response!"}
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                {contactData.form.successToast?.subtitle ?? "We'll get back to you shortly."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
