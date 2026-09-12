"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface InfoCard {
  icon: string;
  title: string;
  details: string[];
}

interface ContactData {
  eyebrow: string;
  heading: {
    line1: string;
    highlight: string;
  };
  infoCards: InfoCard[];
  form: {
    eyebrow: string;
    heading: string;
    button: string;
    sideContent: {
      image: string;
      text: string;
    };
  };
}

export const ContactContent = ({ contactData }: { contactData: ContactData }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section className="w-full bg-white relative">
      
      {/* Top Section: Info Cards */}
      <div className="page-gutter py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-slate-400 rounded-full" />
            <span className="text-brand font-bold uppercase tracking-wider text-sm">{contactData.eyebrow}</span>
            <span className="h-[2px] w-8 bg-slate-400 rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-[42px] font-extrabold text-navy leading-tight whitespace-pre-line">
            {contactData.heading.line1}<span className="text-navy">{contactData.heading.highlight}</span>
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {contactData.infoCards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 100} className="flex flex-col sm:flex-row gap-6 pt-10 md:pt-0 px-4 lg:px-8 first:pt-0">
              {/* Massive yellow icon */}
              <div className="flex-shrink-0">
                <DynamicIcon name={card.icon} className="w-12 h-12 lg:w-[60px] lg:h-[60px] text-brand drop-shadow-sm" />
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-navy mb-4">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-1 text-[15px] text-slate-600 font-medium">
                  {card.details.map((detail, dIdx) => (
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
        {/* Background Map Container */}
        <div className="w-full h-[500px] lg:h-[600px] relative bg-slate-900">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.09262729759!2d77.10898504999999!3d28.62726595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 hue-rotate-180 invert brightness-90 mix-blend-luminosity opacity-80" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Overlapping Form Container */}
        <div className="page-gutter relative -mt-32 lg:-mt-48 pb-20 lg:pb-32 z-10">
          <Reveal animation="rh-fade-up">
            <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
              
              {/* Left Side: Form */}
              <div className="flex-1 p-8 sm:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[3px] w-8 bg-slate-400 rounded-full" />
                  <span className="text-brand font-bold uppercase tracking-wider text-sm">{contactData.form.eyebrow}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-10 leading-tight">
                  {contactData.form.heading}
                </h2>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <DynamicIcon name="user" className="h-[18px] w-[18px] text-brand" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        required
                        className="w-full bg-transparent border border-slate-200 rounded text-[15px] font-medium py-4 pl-12 pr-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      />
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <DynamicIcon name="envelope" className="h-[18px] w-[18px] text-brand" />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        required
                        className="w-full bg-transparent border border-slate-200 rounded text-[15px] font-medium py-4 pl-12 pr-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <DynamicIcon name="file-text" className="h-[18px] w-[18px] text-brand" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Subject"
                      required
                      className="w-full bg-transparent border border-slate-200 rounded text-[15px] font-medium py-4 pl-12 pr-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <div className="absolute top-5 left-0 pl-5 pointer-events-none">
                      <DynamicIcon name="message-circle" className="h-[18px] w-[18px] text-brand" />
                    </div>
                    <textarea 
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="w-full bg-transparent border border-slate-200 rounded text-[15px] font-medium py-4 pl-12 pr-4 text-navy placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="self-start mt-4 bg-[#0a1526] hover:bg-brand text-white hover:text-navy border-b-4 border-brand hover:border-[#0a1526] transition-all duration-300 font-bold px-10 py-4 flex items-center gap-3">
                    {contactData.form.button}
                    <DynamicIcon name="chevron-right" className="w-4 h-4 text-brand group-hover:text-navy" />
                  </button>
                </form>
              </div>

              {/* Right Side: Graphic & Text */}
              <div className="hidden lg:flex flex-col w-[40%] bg-slate-50 border-l border-slate-100 p-16 relative overflow-hidden items-center justify-center">
                {contactData.form.sideContent.image ? (
                  <div className="relative w-full h-[300px] mb-8">
                    <Image src={contactData.form.sideContent.image} alt="Phones" fill className="object-contain" />
                  </div>
                ) : (
                  <div className="relative w-64 h-64 mb-10 bg-slate-200 rounded-3xl flex items-center justify-center animate-pulse">
                    <DynamicIcon name="smartphone-repair" className="w-20 h-20 text-slate-400" />
                  </div>
                )}
                
                <p className="text-center text-[17px] font-medium text-slate-600 leading-relaxed px-4">
                  {contactData.form.sideContent.text}
                </p>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up">
          <div className="flex items-center gap-4 bg-white border border-green-200 shadow-2xl rounded-2xl px-6 py-5 min-w-[320px]">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <DynamicIcon name="check" size={24} className="text-green-600" />
            </div>
            <div>
              <p className="font-extrabold text-navy text-[15px]">Thank you for your response!</p>
              <p className="text-slate-500 text-sm mt-0.5">We'll get back to you shortly.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
