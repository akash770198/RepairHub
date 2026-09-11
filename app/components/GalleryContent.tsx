"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";

interface Photo {
  id: number;
  src: string;
  category: string;
}

interface Video {
  id: number;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

interface GalleryData {
  photoCategories: string[];
  videoCategories: string[];
  photos: Photo[];
  videos: Video[];
}

export const GalleryContent = ({ galleryData }: { galleryData: GalleryData }) => {
  const { photoCategories, videoCategories, photos, videos } = galleryData;

  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [activePhotoCat, setActivePhotoCat] = useState("All Photos");
  const [activeVideoCat, setActiveVideoCat] = useState("All Videos");

  const filteredPhotos = photos.filter((p) => activePhotoCat === "All Photos" || p.category === activePhotoCat);
  const filteredVideos = videos.filter((v) => activeVideoCat === "All Videos" || v.category === activeVideoCat);

  const scrollToSection = (id: string) => {
    setActiveTab(id as "photo" | "video");
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="page-gutter">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-brand rounded-full" />
            <span className="text-brand font-bold uppercase tracking-wider text-sm">Gallery</span>
            <span className="h-[2px] w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6">
            Photo & <span className="text-brand">Video Gallery</span>
          </h2>
          <p className="text-ink-soft text-lg">
            Take a look at our repair work, behind-the-scenes moments, and what our happy customers have to say about us.
          </p>
          <span className="block h-[3px] w-16 bg-brand mx-auto mt-6 rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection("photo")}
            className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold transition-all duration-300 ${
              activeTab === "photo"
                ? "bg-navy text-white shadow-lg"
                : "bg-white text-navy border border-line hover:border-brand"
            }`}
          >
            <DynamicIcon name="image" className="w-5 h-5" />
            PHOTO GALLERY
          </button>
          <button
            onClick={() => scrollToSection("video")}
            className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold transition-all duration-300 ${
              activeTab === "video"
                ? "bg-navy text-white shadow-lg"
                : "bg-white text-navy border border-line hover:border-brand"
            }`}
          >
            <DynamicIcon name="play-circle" className="w-5 h-5" />
            VIDEO GALLERY
          </button>
        </div>

        {/* PHOTO GALLERY SECTION */}
        <div className={activeTab === "photo" ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-line pb-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-brand">
                <DynamicIcon name="image" className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-navy">Photo Gallery</h3>
            </div>
            {/* Photo Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {photoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActivePhotoCat(cat)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activePhotoCat === cat
                      ? "bg-brand text-navy"
                      : "bg-white border border-line text-ink-soft hover:border-brand hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, i) => (
              <Reveal key={photo.id} delay={i * 50} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                <Image src={photo.src} alt="Gallery image" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-navy transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <DynamicIcon name="image" className="w-6 h-6" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredPhotos.length > 0 && (
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand transition-colors">
                Load More Photos
                <DynamicIcon name="chevron-down" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* VIDEO GALLERY SECTION */}
        <div className={activeTab === "video" ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-line pb-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-brand">
                <DynamicIcon name="play-circle" className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold text-navy">Video Gallery</h3>
            </div>
            {/* Video Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {videoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveVideoCat(cat)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeVideoCat === cat
                      ? "bg-brand text-navy"
                      : "bg-white border border-line text-ink-soft hover:border-brand hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video, i) => (
              <Reveal key={video.id} delay={i * 50} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mb-4">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/50 transition-colors flex items-center justify-center">
                    <span className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <DynamicIcon name="play-circle" className="w-6 h-6 ml-1" />
                    </span>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-navy/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-bold text-navy text-[15px] leading-snug group-hover:text-brand transition-colors">{video.title}</h4>
                <p className="text-brand text-sm font-medium mt-1">{video.category}</p>
              </Reveal>
            ))}
          </div>

          {filteredVideos.length > 0 && (
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand transition-colors">
                Load More Videos
                <DynamicIcon name="chevron-down" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
