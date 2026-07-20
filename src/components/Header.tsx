"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
        const topbar = document.getElementById("topbar");
        if (topbar) {
          topbar.style.transform = "translateY(-100%)";
          topbar.style.transition = "transform 0.3s ease";
        }
      } else {
        setScrolled(false);
        const topbar = document.getElementById("topbar");
        if (topbar) {
          topbar.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const headerHeight = document.getElementById("main-header")?.offsetHeight || 0;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Allow default Next.js routing to the homepage hash
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", hash: "#home", path: "/" },
    { label: "Services", hash: "#services", path: "/#services" },
    { label: "Gallery", hash: "#gallery", path: "/#gallery" },
    { label: "Reviews", hash: "#reviews", path: "/#reviews" },
    { label: "FAQ", hash: "#faq", path: "/#faq" },
    { label: "Contact", hash: "#contact", path: "/#contact" },
  ];

  return (
    <>
      <header className={`main-header ${scrolled ? "scrolled" : ""}`} id="main-header">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="logo-group" aria-label="Swathi Safety Nets Home">
            <img
              src="/images/swathilogo1.webp"
              alt="Swathi Safety Nets Logo"
              className="logo-img"
              width="80"
              height="80"
              style={{ objectFit: "contain" }}
            />
            <div className="logo-text">
              <h1>Swathi Safety Nets</h1>
              <span>Bangalore's Trusted Safety Experts</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={pathname === "/" ? link.hash : link.path}
                    onClick={(e) => handleLinkClick(e, link.hash)}
                    className={pathname === "/" && link.hash === "#home" ? "active" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header CTA */}
          <div className="header-cta">
            <a
              href="tel:+919000182240"
              className="btn btn-call"
              id="header-call-btn"
            >
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a
              href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            id="hamburger"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "visible" : ""}`}
        id="mobile-overlay"
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Nav Panel */}
      <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`} id="mobile-nav" aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <div className="mobile-nav-logo">
            <img src="/images/swathilogo1.webp" alt="Logo" width="60" height="60" />
            <div className="mobile-nav-logo-text">
              <h3>Swathi Safety Nets</h3>
              <span>Safety Experts</span>
            </div>
          </div>
          <button
            className="mobile-nav-close"
            id="mobile-nav-close"
            aria-label="Close Menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={pathname === "/" ? link.hash : link.path}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className={pathname === "/" && link.hash === "#home" ? "active" : ""}
            >
              <i className={
                link.hash === "#home" ? "fas fa-home" :
                link.hash === "#services" ? "fas fa-th-large" :
                link.hash === "#gallery" ? "fas fa-images" :
                link.hash === "#reviews" ? "fas fa-star" :
                link.hash === "#faq" ? "fas fa-circle-question" :
                "fas fa-envelope"
              }></i> {link.label}
            </Link>
          ))}
        </div>

        <div className="mobile-nav-cta">
          <a href="tel:+919000182240" className="btn btn-call">
            <i className="fas fa-phone-alt"></i> Call Now
          </a>
          <a
            href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp Now
          </a>
        </div>

        <div className="mobile-nav-contact">
          <div className="mobile-nav-contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>+91 9000182240</span>
          </div>
          <div className="mobile-nav-contact-item">
            <i className="fas fa-envelope"></i>
            <span>info.swathisafetynets@gmail.com</span>
          </div>
          <div className="mobile-nav-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Bangalore, Karnataka</span>
          </div>
          <div className="mobile-nav-social">
            <a href="https://www.facebook.com/swathisafetynets" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/swathisafetynets" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@swathisafetynets" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
