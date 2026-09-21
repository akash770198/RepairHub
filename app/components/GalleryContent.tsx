"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { DynamicIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { site, SectionProps, RepairHubGallery1Data } from "@/data";

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

const PHOTOS_PER_PAGE = 8;
const VIDEOS_PER_PAGE = 6;

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}) => {
  const photo = photos[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Close"
      >
        <DynamicIcon name="x" className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm select-none">
        {currentIndex + 1} / {photos.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Previous photo"
      >
        <DynamicIcon name="chevron-left" className="w-7 h-7" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Next photo"
      >
        <DynamicIcon name="chevron-right" className="w-7 h-7" />
      </button>

      {/* Main image */}
      <div
        className="relative w-[90vw] max-w-5xl h-[75vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={`Gallery photo ${photo.id}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Thumbnail strip */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-[90vw] pb-1"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((p: any, idx: any) => (
          <button
            key={p.id}
            onClick={() => onGoTo(idx)}
            className={`relative w-14 h-10 rounded overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
              idx === currentIndex
                ? "border-yellow-400 scale-110"
                : "border-transparent opacity-50 hover:opacity-90"
            }`}
          >
            <Image src={p.src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// ── Video Modal ───────────────────────────────────────────────────────────────
const VideoModal = ({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Close video"
      >
        <DynamicIcon name="x" className="w-5 h-5" />
      </button>

      {/* Video Title */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm select-none whitespace-nowrap">
        {video.title}
      </div>

      {/* Video Player */}
      <div
        className="relative w-[92vw] max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={video.videoUrl}
          controls
          autoPlay
          className="w-full max-h-[80vh] object-contain"
          playsInline
        />
      </div>
    </div>
  );
};


export const GalleryContent: React.FC<SectionProps<RepairHubGallery1Data>> = ({ data: propData, className }) => {
  const galleryData = (propData || site.gallery) as any;
  const { eyebrow, heading, description, tabs, photoSection, videoSection, photoCategories, videoCategories, photos, videos } = galleryData;

  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [activePhotoCat, setActivePhotoCat] = useState("All Photos");
  const [activeVideoCat, setActiveVideoCat] = useState("All Videos");

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Video Modal
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Load More
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [visibleVideoCount, setVisibleVideoCount] = useState(VIDEOS_PER_PAGE);

  const filteredPhotos = photos.filter((p: any) => activePhotoCat === "All Photos" || p.category === activePhotoCat);
  const filteredVideos = videos.filter((v: any) => activeVideoCat === "All Videos" || v.category === activeVideoCat);

  // Reset visible count when category changes
  useEffect(() => { setVisibleCount(PHOTOS_PER_PAGE); }, [activePhotoCat]);
  useEffect(() => { setVisibleVideoCount(VIDEOS_PER_PAGE); }, [activeVideoCat]);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  const visibleVideos = filteredVideos.slice(0, visibleVideoCount);
  const hasMoreVideos = visibleVideoCount < filteredVideos.length;

  const openLightbox = useCallback((indexInFiltered: number) => {
    setLightboxIndex(indexInFiltered);
    setLightboxOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1)),
    [filteredPhotos.length]);
  const nextPhoto = useCallback(() =>
    setLightboxIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1)),
    [filteredPhotos.length]);
  const goToPhoto = useCallback((i: number) => setLightboxIndex(i), []);

  return (
    <>
      {/* Photo Lightbox */}
      {lightboxOpen && (
        <Lightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          onGoTo={goToPhoto}
        />
      )}

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
      <section className={`bg-white py-16 ${className || ""}`}>
        <div className="page-gutter">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-brand rounded-full" />
              <span className="text-brand font-bold uppercase tracking-wider text-sm">{eyebrow}</span>
              <span className="h-[2px] w-8 bg-brand rounded-full" />
            </div>
            <h2 className="mb-6 text-4xl font-extrabold leading-snug text-navy lg:text-5xl lg:leading-snug">
              {heading.line1.trim()}
              <br />
              <span className="text-brand">{heading.highlight}</span>
            </h2>
            <p className="text-ink-soft text-lg">{description}</p>
            <span className="block h-[3px] w-16 bg-brand mx-auto mt-6 rounded-full" />
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab("photo")}
              className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold transition-all duration-300 ${
                activeTab === "photo"
                  ? "bg-navy text-white shadow-lg"
                  : "bg-white text-navy border border-line hover:border-brand"
              }`}
            >
              <DynamicIcon name="image" className="w-5 h-5" />
              {tabs.photo}
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-navy text-white shadow-lg"
                  : "bg-white text-navy border border-line hover:border-brand"
              }`}
            >
              <DynamicIcon name="play-circle" className="w-5 h-5" />
              {tabs.video}
            </button>
          </div>

          {/* PHOTO GALLERY SECTION */}
          <div className={activeTab === "photo" ? "block" : "hidden"}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-line pb-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-brand">
                  <DynamicIcon name="image" className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-bold text-navy">{photoSection.title}</h3>
              </div>
              {/* Photo Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {photoCategories.map((cat: any) => (
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
              {visiblePhotos.map((photo: any, i: any) => (
                <Reveal
                  key={photo.id}
                  delay={i * 50}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="relative w-full h-full"
                    onClick={() => openLightbox(filteredPhotos.indexOf(photo))}
                  >
                    <Image
                      src={photo.src}
                      alt="Gallery image"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-navy transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <DynamicIcon name="zoom-in" className="w-6 h-6" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Load More Photos — functional */}
            {hasMore ? (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PHOTOS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand hover:text-brand transition-colors"
                >
                  {photoSection.loadMoreLabel}
                  <DynamicIcon name="chevron-down" className="w-4 h-4" />
                </button>
              </div>
            ) : filteredPhotos.length > PHOTOS_PER_PAGE && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount(PHOTOS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand hover:text-brand transition-colors"
                >
                  Show Less
                  <DynamicIcon name="chevron-up" className="w-4 h-4" />
                </button>
              </div>
            )}

            {filteredPhotos.length === 0 && (
              <div className="text-center text-ink-soft py-16">{photoSection.emptyMessage}</div>
            )}
          </div>

          {/* VIDEO GALLERY SECTION */}
          <div className={activeTab === "video" ? "block" : "hidden"}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-line pb-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-brand">
                  <DynamicIcon name="play-circle" className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-bold text-navy">{videoSection.title}</h3>
              </div>
              {/* Video Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {videoCategories.map((cat: any) => (
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleVideos.map((video: any, i: any) => {
                const isPlayable = !!video.videoUrl;
                return (
                  <Reveal key={video.id} delay={i * 50} className="group">
                    <div
                      className={`relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mb-4 bg-navy/5 ${isPlayable ? "cursor-pointer" : "cursor-default"}`}
                      onClick={() => isPlayable && setActiveVideo(video)}
                      role={isPlayable ? "button" : undefined}
                      aria-label={isPlayable ? `Play ${video.title}` : undefined}
                    >
                      {/* Thumbnail or placeholder */}
                      {video.thumbnail ? (
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : video.videoUrl ? (
                        <video
                          src={`${video.videoUrl}#t=0.1`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-navy/60">
                          <DynamicIcon name="film" className="w-12 h-12 text-white/20" />
                        </div>
                      )}

                      {/* Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                        isPlayable ? "bg-navy/40 group-hover:bg-navy/55" : "bg-navy/60"
                      }`}>
                        {isPlayable ? (
                          <span className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <DynamicIcon name="play-circle" className="w-6 h-6 ml-1" />
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Duration Badge */}
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 bg-navy/80 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-navy text-[15px] leading-snug group-hover:text-brand transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-brand text-sm font-medium mt-1">{video.category}</p>
                  </Reveal>
                );
              })}
            </div>

            {/* Load More Videos */}
            {hasMoreVideos ? (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleVideoCount((prev) => prev + VIDEOS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand hover:text-brand transition-colors"
                >
                  {videoSection.loadMoreLabel ?? "Load More Videos"}
                  <DynamicIcon name="chevron-down" className="w-4 h-4" />
                </button>
              </div>
            ) : filteredVideos.length > VIDEOS_PER_PAGE && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleVideoCount(VIDEOS_PER_PAGE)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-line text-navy font-semibold hover:border-brand hover:text-brand transition-colors"
                >
                  Show Less
                  <DynamicIcon name="chevron-up" className="w-4 h-4" />
                </button>
              </div>
            )}

            {filteredVideos.length === 0 && (
              <div className="text-center text-ink-soft py-16">{videoSection.emptyMessage}</div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};
