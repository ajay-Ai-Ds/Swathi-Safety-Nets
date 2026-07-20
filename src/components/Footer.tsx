"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
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
    }
  };

  const topServices = [
    { label: "Pigeon Safety Nets", slug: "pigeon-safety-nets" },
    { label: "Balcony Safety Nets", slug: "balcony-safety-nets" },
    { label: "Children Safety Nets", slug: "children-safety-nets" },
    { label: "Pet Safety Nets", slug: "pet-safety-nets" },
    { label: "Construction Safety Nets", slug: "construction-safety-nets" },
    { label: "Bird Protection Nets", slug: "bird-protection-nets" },
    { label: "Invisible Grills", link: "/invisible-grills" },
    { label: "Cloth Hangers", link: "/cloth-hangers" },
  ];

  const topLocalities = [
    { name: "Whitefield", slug: "whitefield" },
    { name: "Marathahalli", slug: "marathahalli" },
    { name: "HSR Layout", slug: "hsr-layout" },
    { name: "Electronic City", slug: "electronic-city" },
    { name: "Koramangala", slug: "koramangala" },
    { name: "Indiranagar", slug: "indiranagar" },
    { name: "Hebbal", slug: "hebbal" },
    { name: "JP Nagar", slug: "jp-nagar" },
    { name: "BTM Layout", slug: "btm-layout" },
    { name: "Yelahanka", slug: "yelahanka" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <i className="fas fa-shield-halved" style={{ marginRight: "8px" }}></i>
              Swathi Safety Nets
            </h3>
            <p>
              Bangalore's trusted safety net installation experts with 15+ years of experience. Professional pigeon
              nets, balcony nets, children safety nets, pet safety nets, construction nets, and all types of safety net
              solutions across Bangalore.
            </p>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+919000182240">+91 9000182240</a> <span className="text-xs text-blue-300">(Primary)</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+919666744700">+91 9666744700</a> <span className="text-xs text-gray-400">(Alternate)</span>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info.swathisafetynets@gmail.com">info.swathisafetynets@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="footer-social">
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

          <div>
            <h4>Our Services</h4>
            <ul className="footer-links">
              {topServices.map((service) => (
                <li key={service.label}>
                  <Link href={service.link || `/services/${service.slug}`}>
                    <i className="fas fa-chevron-right"></i> {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#services" onClick={(e) => handleLinkClick(e, "#services")}>
                  <i className="fas fa-chevron-right"></i> All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Localities We Serve</h4>
            <ul className="footer-links">
              {topLocalities.map((loc) => (
                <li key={loc.name}>
                  <Link href={`/services/pigeon-safety-nets/${loc.slug}`}>
                    <i className="fas fa-chevron-right"></i> Safety Nets in {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas">
                  <i className="fas fa-chevron-right"></i> <strong>All Service Areas</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Swathi Safety Nets, Bangalore. All Rights Reserved. | Professional Safety
            Net Installation Services in Bangalore, Karnataka.
          </p>
        </div>
      </div>
    </footer>
  );
}
