"use client";

import React from "react";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" id="mobile-sticky-cta">
      <div className="mobile-sticky-cta-inner">
        <a href="tel:+919000182240" className="btn btn-call">
          <i className="fas fa-phone-alt"></i> Call Now
        </a>
        <a
          href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20nets."
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
}
