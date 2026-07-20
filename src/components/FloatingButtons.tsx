"use client";

import React, { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="floating-buttons">
        <a
          href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
          className="float-btn float-btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          id="float-whatsapp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+919000182240" className="float-btn float-btn-call" aria-label="Call Now" id="float-call">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>

      <button
        className={`scroll-top ${scrollTopVisible ? "visible" : ""}`}
        id="scroll-top"
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
