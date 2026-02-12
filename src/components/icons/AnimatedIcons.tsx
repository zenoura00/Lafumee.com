"use client";

import { useEffect, useState } from "react";

export function ShishaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Smoke particles */}
      <g className="smoke">
        <circle cx="32" cy="8" r="3" fill="currentColor" opacity="0.3" />
        <circle cx="28" cy="12" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="36" cy="10" r="2.5" fill="currentColor" opacity="0.25" />
      </g>

      {/* Bowl */}
      <path
        d="M26 20 L38 20 L36 28 L28 28 Z"
        fill="currentColor"
        className="animate-pulse"
      />

      {/* Stem */}
      <rect x="30" y="28" width="4" height="12" fill="currentColor" />

      {/* Base body */}
      <path
        d="M22 40 Q22 48 32 52 Q42 48 42 40 L38 40 Q38 46 32 48 Q26 46 26 40 Z"
        fill="currentColor"
      />

      {/* Water line */}
      <path
        d="M24 44 Q32 46 40 44"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Base bottom */}
      <ellipse cx="32" cy="52" rx="12" ry="4" fill="currentColor" />

      {/* Hose */}
      <path
        d="M42 38 Q50 38 52 44 Q54 50 48 52"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Mouthpiece */}
      <rect x="46" y="52" width="6" height="3" rx="1" fill="currentColor" />
    </svg>
  );
}

export function CocktailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glass rim */}
      <path
        d="M16 16 L48 16 L32 44 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Liquid */}
      <path
        d="M20 22 L44 22 L32 40 Z"
        fill="currentColor"
        opacity="0.3"
        className="animate-pulse"
      />

      {/* Stem */}
      <rect x="30" y="44" width="4" height="10" fill="currentColor" />

      {/* Base */}
      <ellipse cx="32" cy="56" rx="10" ry="3" fill="currentColor" />

      {/* Olive/garnish */}
      <circle cx="36" cy="26" r="3" fill="currentColor" />
      <rect x="35" y="18" width="2" height="8" fill="currentColor" opacity="0.8" />

      {/* Bubbles */}
      <g className="float">
        <circle cx="28" cy="30" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="34" cy="34" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="30" cy="36" r="1.5" fill="currentColor" opacity="0.35" />
      </g>
    </svg>
  );
}

export function DJIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Turntable base */}
      <rect x="8" y="24" width="48" height="32" rx="4" fill="currentColor" opacity="0.3" />

      {/* Record */}
      <circle cx="32" cy="40" r="14" fill="currentColor" opacity="0.8" />
      <circle cx="32" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <circle cx="32" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <circle cx="32" cy="40" r="3" fill="currentColor" />

      {/* Spinning animation overlay */}
      <circle
        cx="32"
        cy="40"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 8"
        className="rotate-slow origin-center"
        style={{ transformOrigin: '32px 40px' }}
      />

      {/* Tonearm */}
      <path
        d="M50 28 L46 36 L44 38"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="50" cy="28" r="3" fill="currentColor" />

      {/* Sound waves */}
      <g className="animate-pulse">
        <path d="M8 16 Q16 12 24 16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M40 16 Q48 12 56 16" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M12 12 Q20 8 28 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M36 12 Q44 8 52 12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Shisha", "Cocktail", "Lounge"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            fill="none"
          />
          {/* Inner decorative pattern */}
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3 3"
            className="rotate-slow origin-center"
            style={{ transformOrigin: '24px 24px' }}
          />
          {/* Center F */}
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fill="url(#goldGradient)"
            fontSize="20"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
          >
            F
          </text>
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F4D03F" />
              <stop offset="100%" stopColor="#C5A028" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-display font-bold text-gold-gradient">
          La Fumee
        </span>
        <span className="text-xs md:text-sm text-primary/80 font-light tracking-wider transition-all duration-500">
          {words[wordIndex]}
        </span>
      </div>
    </div>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

export function StarIcon({ className = "", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
