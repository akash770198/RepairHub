"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface CareerDetailContentProps {
  job: any;
  sidebar: any;
  otherJobs: any[];
}

export const CareerDetailContent: React.FC<CareerDetailContentProps> = ({ job, sidebar, otherJobs }) => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowApplyModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const form = e.target as HTMLFormElement;
    form.reset();
    setShowApplyModal(false);
    setShowSuccessMessage(true);
    
    // Hide success message after a few seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-navy font-sans py-16 relative">
      <div className="page-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative items-start">
          
          {/* Main Content (Left, spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            
            <Reveal animation="rh-fade-up">
              {/* Job Header */}
              <div className="mb-8">
                <div className="inline-block bg-brand text-navy font-bold uppercase tracking-wider text-[12px] px-3 py-1 rounded mb-4">
                  {job.tag}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-6 leading-tight">
                  {job.title}
                </h1>
                
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="briefcase" size={18} className="text-brand" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="map-pin" size={18} className="text-brand" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicIcon name="calendar" size={18} className="text-brand" />
                    Posted on {job.datePosted}
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="w-full relative h-[300px] md:h-[450px] rounded-xl overflow-hidden mb-10 shadow-md">
                <Image src={job.image} alt={job.title} fill className="object-cover" />
              </div>

              {/* Job Overview */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Job Overview</h2>
                <div className="w-12 h-1 bg-brand mb-6"></div>
                <p className="text-ink-soft leading-relaxed text-lg">
                  {job.overview}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Key Responsibilities</h2>
                <div className="w-12 h-1 bg-brand mb-6"></div>
                <ul className="flex flex-col gap-4">
                  {job.responsibilities.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                      <div className="mt-1 shrink-0 text-brand bg-brand/10 p-1 rounded-full">
                        <DynamicIcon name="check" size={14} />
                      </div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-navy mb-4">Requirements</h2>
                <div className="w-12 h-1 bg-brand mb-6"></div>
                <ul className="flex flex-col gap-4">
                  {job.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-ink-soft leading-relaxed">
                      <div className="mt-1 shrink-0 text-brand bg-brand/10 p-1 rounded-full">
                        <DynamicIcon name="check" size={14} />
                      </div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Offer */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-navy mb-4">What We Offer</h2>
                <div className="w-12 h-1 bg-brand mb-6"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {job.offers.map((offer: any, idx: number) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-brand mb-4">
                        <DynamicIcon name={offer.icon} size={28} />
                      </div>
                      <span className="font-bold text-sm leading-snug">{offer.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply CTA Banner */}
              <div className="bg-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
                {/* Background Decoration */}
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                
                <div className="relative z-10 flex items-center gap-6 md:gap-8">
                  <div className="w-24 h-24 hidden md:flex items-center justify-center bg-white/10 rounded-xl">
                    <DynamicIcon name="file-text" size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                      Think You're the Right Fit?
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base max-w-md">
                      Join RepairHub and be a part of a team that powers thousands of happy customers.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto">
                  <button onClick={handleApplyClick} className="w-full md:w-auto bg-brand text-navy font-extrabold py-4 px-8 rounded-lg shadow-lg hover:bg-brand-light transition-colors flex items-center justify-center gap-2">
                    Apply Now
                    <DynamicIcon name="arrow-right" size={20} />
                  </button>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Sidebar (Right, spans 1 col) */}
          <div className="lg:col-span-1 flex flex-col gap-8 sticky top-32 h-fit">
            
            <Reveal animation="rh-fade-left">
              {/* Job Summary Widget */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy mb-6 pb-4 border-b border-slate-100 relative">
                  {sidebar.summaryTitle}
                  <div className="absolute bottom-[-1px] left-0 w-12 h-[2px] bg-brand"></div>
                </h3>
                
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="user-cog" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Job Title</p>
                      <p className="font-semibold text-navy">{job.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="calendar" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Job Type</p>
                      <p className="font-semibold text-navy">{job.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="clock" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Work Mode</p>
                      <p className="font-semibold text-navy">{job.workMode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="award" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Experience</p>
                      <p className="font-semibold text-navy">{job.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="map-pin" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                      <p className="font-semibold text-navy">{job.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-slate-400 mt-0.5"><DynamicIcon name="users" size={20} /></div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Department</p>
                      <p className="font-semibold text-navy">{job.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="rh-fade-left" delay={100}>
              {/* Share This Job Widget */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy mb-6 pb-4 border-b border-slate-100 relative">
                  {sidebar.shareTitle}
                  <div className="absolute bottom-[-1px] left-0 w-12 h-[2px] bg-brand"></div>
                </h3>
                
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                    <DynamicIcon name="facebook" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                    <DynamicIcon name="linkedin" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                    <DynamicIcon name="whatsapp" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                    <DynamicIcon name="envelope" size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal animation="rh-fade-left" delay={200}>
              {/* Other Openings Widget */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-extrabold text-navy mb-6 pb-4 border-b border-slate-100 relative">
                  {sidebar.otherOpeningsTitle}
                  <div className="absolute bottom-[-1px] left-0 w-12 h-[2px] bg-brand"></div>
                </h3>
                
                <div className="flex flex-col gap-6">
                  {otherJobs.slice(0, 4).map((otherJob: any, idx: number) => (
                    <Link href={`/career/${otherJob.slug}`} key={idx} className="group block pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-navy group-hover:text-brand transition-colors line-clamp-1">{otherJob.title}</h4>
                        <DynamicIcon name="arrow-right" size={16} className="text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><DynamicIcon name="clock" size={12} /> {otherJob.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1"><DynamicIcon name="map-pin" size={12} /> {otherJob.location}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal animation="rh-fade-left" delay={300}>
              {/* Need Help Widget */}
              <div className="bg-navy rounded-xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-brand mb-6">
                  <DynamicIcon name="headset" size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {sidebar.needHelp.title}
                </h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  {sidebar.needHelp.description}
                </p>
                
                <div className="flex flex-col items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <DynamicIcon name="phone" size={16} className="text-brand" />
                    {sidebar.needHelp.phone}
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <DynamicIcon name="envelope" size={16} className="text-brand" />
                    {sidebar.needHelp.email}
                  </div>
                </div>

                <Link href={sidebar.needHelp.button.href} className="inline-flex items-center justify-center gap-2 w-full bg-brand text-navy font-bold py-3 px-6 rounded hover:bg-brand-light transition-colors">
                  {sidebar.needHelp.button.label}
                  <DynamicIcon name="arrow-right" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white font-bold px-6 py-4 rounded-xl shadow-2xl z-[100] flex items-center gap-3 animate-fade-in-up">
          <DynamicIcon name="check" size={24} />
          Thanks for filling the form!
        </div>
      )}

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={() => setShowApplyModal(false)}></div>
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative z-10 shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy transition-colors"
            >
              <DynamicIcon name="plus" className="rotate-45" size={20} />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-navy mb-2">Apply for {job.title}</h3>
              <p className="text-ink-soft">Fill out the form below and our HR team will get back to you.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">Full Name *</label>
                <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">Email Address *</label>
                <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">Phone Number *</label>
                <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-1.5">Resume Link / Portfolio *</label>
                <input type="url" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="https://..." />
              </div>
              <button type="submit" className="mt-4 w-full bg-brand text-navy font-bold py-4 rounded-lg hover:bg-brand-light transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
