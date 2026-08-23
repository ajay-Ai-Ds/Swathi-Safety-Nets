"use client";

import React from "react";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="container">
        <div className="topbar-left">
          <a href="tel:+919000182240" className="topbar-item" id="topbar-phone">
            <i className="fas fa-phone-alt"></i>
            <span>Primary: +91 9000182240</span>
          </a>
          <div className="topbar-divider"></div>
          <a
            href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
            className="topbar-item"
            target="_blank"
            rel="noopener noreferrer"
            id="topbar-whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <div className="topbar-divider"></div>
          <div className="topbar-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Bangalore, Karnataka</span>
          </div>
        </div>
        <div className="topbar-right">
          <a href="tel:+919666744700" className="topbar-item" id="topbar-phone-alt" style={{ marginRight: "12px", fontWeight: "600" }}>
            <i className="fas fa-phone-alt"></i>
            <span>Alternate: +91 9666744700</span>
          </a>
          <div className="topbar-social">
            <a href="https://www.facebook.com/swathisafetynets" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/swathisafetynets" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@swathisafetynets" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/919000182240" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
