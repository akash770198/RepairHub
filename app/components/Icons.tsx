import React from "react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = "w-5 h-5", size = 20 }) => {
  switch (name) {
    case "envelope":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case "clock":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );

    case "twitter":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );

    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );

    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case "calendar":
    case "calendar-badge":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <circle cx="15" cy="15" r="2" fill="currentColor" />
        </svg>
      );

    case "chat":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );

    case "wrench":
    case "tools":
    case "wrench-screwdriver":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.8 1.8-1.6-1.6a1 1 0 0 0-1.4 0l-.7.7a1 1 0 0 0 0 1.4l1.6 1.6-6.4 6.4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 0-1.4l6.4-6.4-1.6-1.6a1 1 0 0 0-1.4 0l-.7.7a1 1 0 0 0 0 1.4l1.6 1.6-1.8 1.8-1.6-1.6a1 1 0 0 0-1.4 0l-1.4 1.4a1 1 0 0 0 0 1.4l5.7 5.7c1.6 1.6 4.1 1.6 5.7 0l7.1-7.1a1 1 0 0 0 0-1.4l-1.4-1.4a1 1 0 0 0-1.4 0l-1.4 1.4z" />
          <path d="m21.7 2.3-3.4 3.4 2.8 2.8 3.4-3.4c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0z" />
        </svg>
      );

    case "arrow-right":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "play":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );

    case "pause":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </svg>
      );

    case "quote":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
      );

    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" className={className}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );

    case "map-pin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case "circuit-board":
    case "microchip":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <rect x="20" y="20" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="3" />
          <rect x="28" y="28" width="8" height="8" rx="1.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M26 20V13M32 20V13M38 20V13" />
            <path d="M26 51V44M32 51V44M38 51V44" />
            <path d="M20 26H13M20 32H13M20 38H13" />
            <path d="M51 26H44M51 32H44M51 38H44" />
          </g>
        </svg>
      );

    case "fast-clock":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="38" cy="32" r="16" stroke="currentColor" strokeWidth="3" />
          <path
            d="M38 23v9l6 4"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M8 24h9M4 32h10M8 40h9" />
          </g>
        </svg>
      );

    case "gear-house":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <g transform="translate(32, 32)">
            <circle r="19" stroke="currentColor" strokeWidth="3" fill="none" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="-3.5"
                y="-24"
                width="7"
                height="6"
                rx="1.5"
                fill="currentColor"
                transform={`rotate(${angle})`}
              />
            ))}
            <g
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <path d="M-12 0 L0 -10 L12 0" />
              <path d="M-8 -1 V11 H8 V-1" />
            </g>
            <rect x="-3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
          </g>
        </svg>
      );

    case "smartphone":
    case "smartphone-repair":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Outer Phone Bezel */}
          <rect x="16" y="8" width="32" height="48" rx="7" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Screen Top Speaker / Notch */}
          <line x1="28" y1="13" x2="36" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Home Button / Indicator */}
          <circle cx="32" cy="50" r="2" fill="currentColor" />
          {/* Diagonal Wrench across phone screen */}
          <path d="M23 37 L37 23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 34 L25 37 L23 39 L20 36 Z" fill="currentColor" />
          <path d="M35 21 L38 24 L40 22 L37 19 Z" fill="currentColor" />
          {/* Gear in bottom right */}
          <g transform="translate(38, 38)">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="2.5" fill="#0a111e" />
            <path d="M9 1 L9 17 M1 9 L17 9 M3 3 L15 15 M3 15 L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "expert-technician":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Technician Head */}
          <circle cx="32" cy="25" r="9" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Cap / Helmet with Gear Badge */}
          <path d="M21 23 C21 15 43 15 43 23 L46 25 L18 25 Z" fill="currentColor" />
          <circle cx="32" cy="18" r="2.5" fill="#0a111e" stroke="currentColor" strokeWidth="1" />
          {/* Torso / Shoulders */}
          <path d="M14 51 C14 38 23 37 32 37 C41 37 50 38 50 51" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Wrench held horizontally across chest */}
          <path d="M18 48 L46 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M16 45 L16 51 M48 45 L48 51" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "price-tag":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Luggage / Price Tag Outline */}
          <path d="M32 10 L50 28 L36 54 L18 54 L10 36 L24 10 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
          <circle cx="23" cy="22" r="3.5" fill="currentColor" />
          {/* Indian Rupee ₹ symbol */}
          <g transform="translate(25, 26)">
            <path d="M2 3 L14 3 M2 7 L12 7 M2 3 C10 3 10 11 2 11 L12 21 M2 3 L2 21" stroke="#0a111e" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M2 3 L14 3 M2 7 L12 7 M2 3 C10 3 10 11 2 11 L12 21 M2 3 L2 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "shield-check":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Outer Shield */}
          <path d="M32 8 L50 16 V32 C50 44 42 52 32 56 C22 52 14 44 14 32 V16 Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" fill="none" />
          {/* Inner Shield Accent */}
          <path d="M32 14 L44 20 V31 C44 40 38 46 32 49 C26 46 20 40 20 31 V20 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="currentColor" fillOpacity="0.08" />
          {/* Bold Checkmark */}
          <polyline points="23 32 29 38 41 24" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "genuine-gear":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Circular Gear with 8 cog teeth */}
          <g transform="translate(32, 32)">
            <circle cx="0" cy="0" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* 8 Cog Teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="-3.5"
                y="-23"
                width="7"
                height="6"
                rx="1.5"
                fill="currentColor"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
          {/* 3D Isometric Parcel Box inside Gear */}
          <g transform="translate(32, 32)">
            {/* Top diamond */}
            <polygon points="0,-10 10,-4 0,2 -10,-4" fill="currentColor" />
            {/* Left face */}
            <polygon points="-10,-4 0,2 0,12 -10,6" fill="#d97706" />
            {/* Right face */}
            <polygon points="0,2 10,-4 10,6 0,12" fill="#b45309" />
          </g>
        </svg>
      );

    case "five-star-satisfaction":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* 5 Stars in an arc above */}
          <g fill="currentColor">
            {/* Star 1 */}
            <polygon points="12,20 14,14 16,20 11,16 17,16" />
            {/* Star 2 */}
            <polygon points="21,14 23,8 25,14 20,10 26,10" />
            {/* Star 3 (Top Center) */}
            <polygon points="32,10 34,4 36,10 31,6 37,6" />
            {/* Star 4 */}
            <polygon points="43,14 45,8 47,14 42,10 48,10" />
            {/* Star 5 */}
            <polygon points="52,20 54,14 56,20 51,16 57,16" />
          </g>

          {/* Thumbs Up Hand */}
          <g transform="translate(3, 4)">
            {/* Cuff / Wrist */}
            <rect x="20" y="36" width="4" height="15" rx="1.5" fill="currentColor" />
            {/* Palm & 4 curled fingers */}
            <path d="M26 36 H38 C40 36 41 37.5 41 39 C41 40 40 41 39 41.5 C41 42 42 43.5 41.5 45 C41.2 46 40 47 38.5 47 C40 47.5 40.5 49 40 50 C39.5 51 38 51 36 51 H26 Z" fill="currentColor" />
            {/* Erect Thumb pointing up */}
            <path d="M26 36 L28 29 C29 25 31 24 33 24 C34.5 24 35.5 25.5 35 27.5 L33.5 33 L36 33 C38 33 39 34.5 38.5 36 Z" fill="currentColor" />
          </g>
        </svg>
      );

    case "stats-devices":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Phone Outline */}
          <rect x="16" y="8" width="32" height="48" rx="4" stroke="#fbb03b" strokeWidth="3" fill="none" />
          {/* Notch */}
          <line x1="26" y1="13" x2="38" y2="13" stroke="#fbb03b" strokeWidth="3" strokeLinecap="round" />
          {/* Wrench overlay bottom right */}
          {/* Clear background for wrench */}
          <circle cx="44" cy="44" r="12" fill="#101f38" />
          <path d="M44 36 L52 44 L44 52 L36 44 Z" stroke="#fbb03b" strokeWidth="3" strokeLinejoin="round" fill="none" />
          <path d="M48 40 A 5 5 0 1 0 40 48" stroke="#fbb03b" strokeWidth="3" strokeLinecap="round" />
          {/* Handle */}
          <path d="M48 48 L56 56" stroke="#fbb03b" strokeWidth="6" strokeLinecap="round" />
          {/* Actually the wrench in the image is curved. Let's make a better wrench */}
          <path d="M38 46 L30 54 A 3 3 0 0 1 26 50 L34 42" stroke="#fbb03b" strokeWidth="3" fill="none" />
          <path d="M34 42 A 8 8 0 1 1 46 30 A 8 8 0 0 1 34 42" stroke="#fbb03b" strokeWidth="3" />
        </svg>
      );

    case "stats-happy":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Main smiling face */}
          <circle cx="32" cy="40" r="16" stroke="#fbb03b" strokeWidth="3" fill="none" />
          {/* Eyes */}
          <path d="M26 36 Q 28 34 30 36 M34 36 Q 36 34 38 36" stroke="#fbb03b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Smile */}
          <path d="M26 44 Q 32 48 38 44" stroke="#fbb03b" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* 3 Stars */}
          <g stroke="#fbb03b" strokeWidth="2" strokeLinejoin="round" fill="none">
            {/* Center Star */}
            <polygon points="32,8 34,14 40,14 35,18 37,24 32,20 27,24 29,18 24,14 30,14" />
            {/* Left Star */}
            <polygon points="18,14 19.5,18 24,18 20,21 21.5,25 18,22 14.5,25 16,21 12,18 16.5,18" />
            {/* Right Star */}
            <polygon points="46,14 47.5,18 52,18 48,21 49.5,25 46,22 42.5,25 44,21 40,18 44.5,18" />
          </g>
        </svg>
      );

    case "stats-experience":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Shield */}
          <path d="M32 6 L50 12 V28 C50 42 40 52 32 56 C24 52 14 42 14 28 V12 Z" stroke="#fbb03b" strokeWidth="3" fill="none" />
          {/* Inner Shield */}
          <path d="M32 12 L44 16 V28 C44 38 37 46 32 50 C27 46 20 38 20 28 V16 Z" stroke="#fbb03b" strokeWidth="2" fill="none" />
          {/* Star inside shield */}
          <polygon points="32,20 34.5,26 41,26 36,30 38,36 32,32 26,36 28,30 23,26 29.5,26" stroke="#fbb03b" strokeWidth="2" strokeLinejoin="round" fill="none" />
          {/* Ribbons at bottom */}
          <path d="M22 46 L16 60 L24 56 L32 60 L32 56" stroke="#fbb03b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
          <path d="M42 46 L48 60 L40 56 L32 60 L32 56" stroke="#fbb03b" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case "stats-centers":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          {/* Map Pin */}
          <path d="M32 6 C26 6 22 10 22 16 C22 24 32 32 32 32 C32 32 42 24 42 16 C42 10 38 6 32 6 Z" stroke="#fbb03b" strokeWidth="3" fill="none" />
          <circle cx="32" cy="16" r="3" stroke="#fbb03b" strokeWidth="2" fill="none" />
          {/* Storefront Roof */}
          <path d="M12 34 L18 26 H46 L52 34" stroke="#fbb03b" strokeWidth="3" strokeLinejoin="round" fill="none" />
          {/* Awning Scallops */}
          <path d="M12 34 A 4 4 0 0 0 20 34 A 4 4 0 0 0 28 34 A 4 4 0 0 0 36 34 A 4 4 0 0 0 44 34 A 4 4 0 0 0 52 34" stroke="#fbb03b" strokeWidth="3" fill="none" />
          {/* Store body */}
          <rect x="16" y="34" width="32" height="22" stroke="#fbb03b" strokeWidth="3" fill="none" />
          {/* Door */}
          <rect x="22" y="44" width="8" height="12" stroke="#fbb03b" strokeWidth="2" fill="none" />
          {/* Window */}
          <rect x="36" y="44" width="8" height="6" stroke="#fbb03b" strokeWidth="2" fill="none" />
        </svg>
      );

    case "plus":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );

    case "minus":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );

    case "chevron-up":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="18 15 12 9 6 15" />
        </svg>
      );

    case "chevron-down":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      );

    case "headset":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          <path d="M12 22v-3" /> {/* Add subtle mic line if needed, or leave it */}
        </svg>
      );

    case "phone":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.162-.175.195-.349.21-.646.06-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      );

    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--bg-navy, #0B172B)" />
        </svg>
      );

    case "map-pin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    default:
      return null;
  }
};
