"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const BUSINESS = {
  name: "Swathi Safety Nets",
  phone: "+91 9000182240",
  phoneDisplay: "+91 90001 82240",
  phoneHref: "tel:+919000182240",
  whatsapp:
    "https://wa.me/919000182240?text=Hello%2C%20I%20need%20professional%20safety%20net%20services.%20%0ACan%20you%20provide%20a%20quotation%3F",
  rating: "4.9",
  reviewCount: "1,250",
};

// Authentic Swathi Project folder images
const SLIDES = [
  {
    id: 1,
    label: "Balcony Safety Nets",
    imagePath: "/images/balconnybharathi.webp",
    alt: "Balcony safety net installation in Bangalore apartment - Swathi Safety Nets",
  },
  {
    id: 2,
    label: "Invisible Grills",
    imagePath: "/images/invisible-grill.webp",
    alt: "Modern invisible grills installed on apartment balcony - Swathi Safety Nets",
  },
  {
    id: 3,
    label: "Pigeon & Bird Nets",
    imagePath: "/images/pigeon.webp",
    alt: "Pigeon and bird safety netting for balconies in Bangalore - Swathi Safety Nets",
  },
  {
    id: 4,
    label: "Children Safety Nets",
    imagePath: "/images/child.webp",
    alt: "Children safety net installation on high-rise balcony - Swathi Safety Nets",
  },
  {
    id: 5,
    label: "Pet Safety Nets",
    imagePath: "/images/pets.webp",
    alt: "Tear-resistant pet safety net installation in Bangalore - Swathi Safety Nets",
  },
  {
    id: 6,
    label: "Duct Area Safety Nets",
    imagePath: "/images/ductareanets.webp",
    alt: "Duct area and building shaft safety netting - Swathi Safety Nets",
  },
  {
    id: 7,
    label: "Monkey Safety Nets",
    imagePath: "/images/monkey.webp",
    alt: "Heavy-duty monkey protection netting - Swathi Safety Nets",
  },
  {
    id: 8,
    label: "Cricket Practice Nets",
    imagePath: "/images/cricketgrass.webp",
    alt: "Cricket practice sports nets in Bangalore - Swathi Safety Nets",
  },
  {
    id: 9,
    label: "Construction Safety Nets",
    imagePath: "/images/constructionnets.webp",
    alt: "Heavy-duty industrial construction safety nets - Swathi Safety Nets",
  },
  {
    id: 10,
    label: "Ceiling Cloth Hangers",
    imagePath: "/images/clothhanger.webp",
    alt: "Ceiling cloth drying hanger installation - Swathi Safety Nets",
  },
];

const DURATION = 3500; // ms per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setTimeout(() => setAnimating(false), 500);
  }, [animating]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, DURATION);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 min-h-[560px] sm:min-h-[620px] md:min-h-[680px] flex items-center">
      {/* Authentic Swathi Project Slide Images */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.imagePath}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0 || i === 1}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Clean, Elegant Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25 z-20 pointer-events-none" />

      {/* ── Fixed Corner Rating Badge (Top Right) ── */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 md:right-8 z-30 inline-flex items-center gap-1.5 sm:gap-2 bg-black/60 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs md:text-sm font-bold px-3.5 sm:px-4 py-1.5 rounded-full shadow-xl transition-all">
        <span className="text-yellow-400 font-extrabold flex items-center gap-1">
          ★ {BUSINESS.rating}/5
        </span>
        <span className="text-white/40">·</span>
        <span>{BUSINESS.reviewCount}+ Customers</span>
        <span className="text-white/40 hidden md:inline">·</span>
        <span className="text-green-300 font-extrabold hidden md:inline">Bangalore&apos;s #1 Safety Net Company</span>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-black/40 hover:bg-green-600 border border-white/20 hover:border-green-500 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-black/40 hover:bg-green-600 border border-white/20 hover:border-green-500 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Main Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 flex flex-col items-start justify-center">
        <div className="max-w-3xl">

          {/* ── SERVICE NAME (Transparent Background with Green Accent) ── */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2.5 sm:gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md text-green-400 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider px-5 sm:px-7 py-2 sm:py-3 rounded-2xl border border-white/25 shadow-lg transition-all duration-300">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse" />
              🛡️ {SLIDES[current].label}
            </span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-sm">
            Premium Safety Nets &amp; Invisible Grills in{" "}
            <span className="text-green-400">Bangalore</span>
          </h1>

          {/* Subheading Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 font-normal leading-relaxed mb-8 max-w-2xl">
            Protect your family, children and pets with Swathi Safety Nets&apos; premium quality solutions. Free site inspection · Same day installation · Best price guaranteed.
          </p>

          {/* Action Buttons (Big Round Buttons with High Contrast) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto mb-8 sm:mb-9">
            {/* Big Round Primary Call Now Button */}
            <a
              href={BUSINESS.phoneHref}
              id="hero-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-11 py-4 sm:py-4.5 bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 hover:from-green-400 hover:to-emerald-500 text-white font-black text-base sm:text-xl rounded-full shadow-2xl shadow-green-600/50 border border-green-300/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
              </svg>
              <span>Call Now: {BUSINESS.phoneDisplay}</span>
            </a>

            {/* High-Visibility Big Round Get Free Quote Button */}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-quote-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 bg-white hover:bg-gray-100 text-green-800 font-black text-base sm:text-xl rounded-full shadow-2xl shadow-white/30 border-2 border-white hover:border-green-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Trust Checklist */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 w-full">
            {[
              "Free Site Inspection",
              "Same Day Installation",
              "5 Years Warranty",
              "Best Price Guarantee",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/90 text-xs sm:text-sm md:text-base font-semibold">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Slider Progress Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? "w-8 bg-green-400 shadow-md shadow-green-500/60"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
