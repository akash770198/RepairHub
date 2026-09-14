"use client";

import React, { useState } from "react";
import { DynamicIcon } from "./Icons";

export const BookRepairContent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    deviceType: "",
    brand: "",
    model: "",
    deviceCondition: "",
    issue: "",
    description: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className="relative w-full bg-slate-50 py-16">
      <div className="page-gutter relative z-10">
        {/* Top Headings */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-brand" />
            <span className="type-eyebrow text-brand uppercase font-bold tracking-wider text-sm">Book A Repair</span>
          </div>
          
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between mt-4 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                Book Your <span className="text-brand">Repair</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 font-medium">
                Get your device repaired by our experts.<br className="hidden sm:block" />
                Quick, reliable and hassle-free service.
              </p>
            </div>
            
            {/* Decorative Image */}
            <div className="hidden lg:block relative w-[400px] h-[180px] rounded-xl overflow-hidden shadow-lg">
              <img src="/OurService/laptop_repair.jpg" alt="Repair" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden border border-slate-100">
            {/* Form Header */}
            <div className="bg-navy px-8 py-5 flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand/20 text-brand">
                <DynamicIcon name="calendar" className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Repair Request Form</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-10 flex flex-col gap-10">
              
              {/* 1. Your Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-200 text-slate-500">
                    <DynamicIcon name="user" className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">1. Your Information</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Mobile Number</label>
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile number" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-navy">Email Address</label>
                    <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Enter your email address" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700" />
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-slate-100"></div>

              {/* 2. Device Information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-200 text-slate-500">
                    <DynamicIcon name="smartphone" className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">2. Device Information</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Device Type</label>
                    <select name="deviceType" value={formData.deviceType} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 appearance-none">
                      <option value="">Select device type</option>
                      <option value="smartphone">Smartphone</option>
                      <option value="tablet">Tablet</option>
                      <option value="laptop">Laptop / PC</option>
                      <option value="smartwatch">Smartwatch</option>
                      <option value="console">Game Console</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Brand</label>
                    <select name="brand" value={formData.brand} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 appearance-none">
                      <option value="">Select brand</option>
                      <option value="apple">Apple</option>
                      <option value="samsung">Samsung</option>
                      <option value="oneplus">OnePlus</option>
                      <option value="xiaomi">Xiaomi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Model</label>
                    <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Enter model name" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Device Condition</label>
                    <select name="deviceCondition" value={formData.deviceCondition} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 appearance-none">
                      <option value="">Select condition</option>
                      <option value="powers-on">Powers On</option>
                      <option value="dead">Dead / Won't Power On</option>
                      <option value="water-damaged">Water Damaged</option>
                      <option value="physical-damage">Physical Damage Only</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-slate-100"></div>

              {/* 3. Issue Details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-200 text-slate-500">
                    <DynamicIcon name="tools" className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">3. Issue Details</h4>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Select Issue / Problem</label>
                    <select name="issue" value={formData.issue} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 appearance-none">
                      <option value="">Choose the issue</option>
                      <option value="screen">Screen Replacement</option>
                      <option value="battery">Battery Replacement</option>
                      <option value="charging">Charging Port Issue</option>
                      <option value="water">Water Damage</option>
                      <option value="camera">Camera Repair</option>
                      <option value="software">Software Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Describe the issue</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Briefly describe the problem you are facing..." className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 resize-y"></textarea>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-slate-100"></div>

              {/* 4. Preferred Appointment */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-200 text-slate-500">
                    <DynamicIcon name="calendar-badge" className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">4. Preferred Appointment</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Preferred Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Preferred Time</label>
                    <select name="time" value={formData.time} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-slate-700 appearance-none">
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand text-navy font-bold text-lg py-4 rounded-xl hover:bg-brand-light transition-colors shadow-[0_4px_14px_rgba(245,158,11,0.39)]">
                  <DynamicIcon name="calendar" className="w-5 h-5" />
                  Book Repair Now
                </button>
                <p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
                  <DynamicIcon name="shield-check" className="w-4 h-4 text-emerald-500" />
                  Your information is safe with us and will not be shared.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Need Help Box */}
            <div className="bg-navy rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <DynamicIcon name="headset" className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-brand/20 text-brand flex items-center justify-center">
                    <DynamicIcon name="headset" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Need Help?</h3>
                    <p className="text-slate-300 text-sm">Our support team is ready to assist you.</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-brand flex flex-shrink-0 items-center justify-center mt-1">
                      <DynamicIcon name="phone" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">Call Us</p>
                      <p className="font-bold text-lg">+1 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-brand flex flex-shrink-0 items-center justify-center mt-1">
                      <DynamicIcon name="envelope" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">Email Us</p>
                      <p className="font-bold text-base">support@repairhub.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-brand flex flex-shrink-0 items-center justify-center mt-1">
                      <DynamicIcon name="map-pin" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">Visit Us</p>
                      <p className="font-bold text-base leading-snug">123 Repair Street,<br/>Los Angeles, CA 90001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why RepairHub Box */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-100">
              <h3 className="text-xl font-bold text-navy mb-6">Why <span className="text-brand">RepairHub?</span></h3>
              
              <div className="flex flex-col gap-6">
                {[
                  { icon: "expert-technician", title: "Expert Technicians", desc: "Skilled and certified professionals." },
                  { icon: "genuine-gear", title: "Genuine Parts", desc: "We use only high quality original spare parts." },
                  { icon: "fast-clock", title: "Quick Turnaround", desc: "Most repairs completed on the same day." },
                  { icon: "shield-check", title: "Warranty Protection", desc: "Up to 6 months warranty on repairs." },
                  { icon: "price-tag", title: "Affordable Prices", desc: "Transparent pricing with no hidden charges." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-navy flex flex-shrink-0 items-center justify-center text-white mt-1">
                       <DynamicIcon name={item.icon as any} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
