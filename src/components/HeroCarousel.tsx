"use client";

import React, { useState, useEffect, useRef } from "react";

interface Slide {
  image: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  { image: "/images/pigeon.webp", alt: "Pigeon Safety Nets Bangalore", caption: "Pigeon Safety Nets" },
  { image: "/images/net.webp", alt: "Balcony Safety Nets Bangalore", caption: "Balcony Safety Nets" },
  { image: "/images/child.webp", alt: "Children Safety Nets Bangalore", caption: "Children Safety Nets" },
  { image: "/images/pets.webp", alt: "Pet Safety Nets Bangalore", caption: "Pet Safety Nets" },
  { image: "/images/ductareanets.webp", alt: "Duct Area Safety Nets Bangalore", caption: "Duct Area Safety Nets" },
  { image: "/images/coconut.webp", alt: "Coconut Tree Safety Nets Bangalore", caption: "Coconut Tree Safety Nets" },
  { image: "/images/industrial.webp", alt: "Industrial Safety Nets Bangalore", caption: "Industrial Safety Nets" },
  { image: "/images/cricket.webp", alt: "Cricket Practice Nets Bangalore", caption: "Cricket Practice Nets" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoplay();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoplay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  return (
    <div
      className="hero-carousel"
      id="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="carousel-track-container" style={{ height: "100%" }}>
        <ul
          className="carousel-track"
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
            height: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`carousel-slide ${index === currentIndex ? "current-slide" : ""}`}
              style={{
                flex: "0 0 100%",
                minWidth: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Image with preloading on index 0 to avoid CLS */}
              <img
                src={slide.image}
                alt={slide.alt}
                width="640"
                height="360"
                loading={index === 0 ? "eager" : "lazy"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {/* Call-to-action buttons layer on every slide */}
              <div
                className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center p-4 text-center"
                style={{ zIndex: 10 }}
              >
                <span
                  className="px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider rounded-md mb-2 shadow-md"
                >
                  🛡️ SWATHI SAFETY NETS
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-4 font-heading tracking-tight drop-shadow-md">
                  {slide.caption}
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center">
                  <a
                    href="tel:+919000182240"
                    className="btn btn-call text-xs py-2 px-4 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-phone-alt"></i> Call Now
                  </a>
                  <a
                    href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp text-xs py-2 px-4 flex items-center justify-center gap-2"
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                  <a
                    href="https://wa.me/919000182240?text=Hi%2C%20I%20would%20like%20a%20free%20site%20inspection%20for%20safety%20net%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-inspection text-xs py-2 px-4 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-clipboard-check"></i> Free Inspection
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-btn carousel-btn-left" aria-label="Previous Slide" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-btn carousel-btn-right" aria-label="Next Slide" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="carousel-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? "current-slide" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              setCurrentIndex(index);
              startAutoplay();
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
