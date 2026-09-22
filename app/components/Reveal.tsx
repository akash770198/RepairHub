"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Any animation utility from globals.css, e.g. rh-fade-up */
  animation?: string;
  delay?: number;
}

/**
 * Plays an entrance animation when the element scrolls into view.
 * Renders visible on the server, so the content is still readable without JS.
 */
export function Reveal({
  children,
  className = "",
  animation = "rh-fade-up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "playing">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount — animate straight away instead of hiding it first.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("playing");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setState("playing");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${state === "hidden" ? "opacity-0" : ""} ${
        state === "playing" ? animation : ""
      }`}
      style={state === "playing" && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
