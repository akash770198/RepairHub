"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { DynamicIcon } from "./Icons";

export interface ExtendedTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
  email?: string;
  experience?: string;
  specialization?: string;
  location?: string;
  qualityService?: number;
  customerSatisfaction?: number;
  about?: string;
  expertIn?: Array<{ icon: string; title: string }>;
  skillsDescription?: string;
  skills?: string[];
  workSamples?: string[];
  socialLinks?: Array<{ platform: string; url: string }>;
}

interface TeamMemberDetailProps {
  member: ExtendedTeamMember;
}

export function TeamMemberDetail({ member }: TeamMemberDetailProps) {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="page-gutter">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[35%] flex flex-col gap-8">
            {/* Profile Card */}
            <Reveal animation="rh-fade-up" className="bg-navy rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="relative aspect-square w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-brand font-medium mt-1">{member.role}</p>
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="flex items-center gap-4 mt-6">
                    {member.socialLinks.map((social, idx) => (
                      <a key={idx} href={social.url} className="text-white hover:text-brand transition-colors">
                        {social.platform === "facebook" && <DynamicIcon name="facebook" className="w-5 h-5" />}
                        {social.platform === "twitter" && <DynamicIcon name="twitter" className="w-5 h-5" />}
                        {social.platform === "instagram" && <DynamicIcon name="instagram" className="w-5 h-5" />}
                        {social.platform === "linkedin" && <DynamicIcon name="linkedin" className="w-5 h-5" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Personal Info Card */}
            <Reveal animation="rh-fade-up" delay={100} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-navy">Personal Info</h4>
              </div>
              
              <div className="flex flex-col gap-5 text-[15px]">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Phone
                  </div>
                  <span className="text-slate-600 text-right">{member.phone}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </div>
                  <span className="text-slate-600 text-right">{member.email}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Experience
                  </div>
                  <span className="text-slate-600 text-right">{member.experience}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    Specialization
                  </div>
                  <span className="text-slate-600 text-right">{member.specialization}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-navy font-semibold">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Location
                  </div>
                  <span className="text-slate-600 text-right">{member.location}</span>
                </div>
              </div>
            </Reveal>

            {/* Why Member Card */}
            <Reveal animation="rh-fade-up" delay={200} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-navy">Why {member.name.split(' ')[0]}?</h4>
              </div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-navy font-semibold">Quality Service</span>
                    <span className="text-navy font-bold">{member.qualityService}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-brand h-2 rounded-full" style={{ width: `${member.qualityService}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-navy font-semibold">Customer Satisfaction</span>
                    <span className="text-navy font-bold">{member.customerSatisfaction}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-brand h-2 rounded-full" style={{ width: `${member.customerSatisfaction}%` }}></div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Follow Card */}
            <Reveal animation="rh-fade-up" delay={300} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-navy">Follow {member.name.split(' ')[0]}</h4>
              </div>
              
              <div className="flex gap-4">
                {member.socialLinks?.map((social, idx) => (
                  <a key={idx} href={social.url} className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand hover:text-white hover:border-brand transition-all">
                    {social.platform === "facebook" && <DynamicIcon name="facebook" className="w-5 h-5" />}
                    {social.platform === "twitter" && <DynamicIcon name="twitter" className="w-5 h-5" />}
                    {social.platform === "instagram" && <DynamicIcon name="instagram" className="w-5 h-5" />}
                    {social.platform === "linkedin" && <DynamicIcon name="linkedin" className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[65%] flex flex-col gap-10 lg:pl-6">
            
            {/* About */}
            <Reveal animation="rh-fade-up">
              <h2 className="text-3xl font-bold text-navy mb-5">About {member.name}</h2>
              <p className="text-slate-600 leading-relaxed type-body whitespace-pre-line">
                {member.about}
              </p>
            </Reveal>

            {/* Expert In */}
            {member.expertIn && member.expertIn.length > 0 && (
              <Reveal animation="rh-fade-up" delay={100}>
                <h3 className="text-2xl font-bold text-navy mb-6">Expert In</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {member.expertIn.map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand/30 group cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 rounded-full bg-brand/10 group-hover:bg-brand flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                        <DynamicIcon name={item.icon} className="w-10 h-10 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="relative text-[18px] font-bold text-navy leading-tight group-hover:text-brand transition-colors duration-300">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Specialty & Skills */}
            <Reveal animation="rh-fade-up" delay={200}>
              <h3 className="text-2xl font-bold text-navy mb-5">Specialty & Skills</h3>
              <p className="text-slate-600 mb-8 type-body">
                {member.skillsDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {member.skills?.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded border border-brand/30 bg-brand/10 flex items-center justify-center text-brand">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-navy font-medium text-[15.5px]">{skill}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Works Samples */}
            {member.workSamples && member.workSamples.length > 0 && (
              <Reveal animation="rh-fade-up" delay={300}>
                <h3 className="text-2xl font-bold text-navy mb-6">Works Samples</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.workSamples.map((sample, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image
                        src={sample}
                        alt={`Work Sample ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
