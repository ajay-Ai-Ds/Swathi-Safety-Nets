import React from "react";
import Link from "next/link";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";

// Invisible Grills Specific Gallery Items
const invisibleGrillGallery = [
  { src: "/images/invisible-grill.webp", alt: "Balcony Invisible Grill Installation", title: "Balcony Invisible Grill" },
  { src: "/images/windowgrill.webp", alt: "Window Invisible Grill Installation", title: "Window Invisible Grill" },
  { src: "/images/childrengrill.webp", alt: "Children Safety Invisible Grill", title: "Children Safety Grill" },
  { src: "/images/staircasegrill.webp", alt: "Staircase Invisible Grill", title: "Staircase Custom Grill" },
  { src: "/images/terracegrill.webp", alt: "Terrace Invisible Grill Installation", title: "Terrace & Open Area Grill" },
  { src: "/images/in1.webp", alt: "Modern Balcony Invisible Grill", title: "Modern Balcony Grill" },
  { src: "/images/balconnybharathi.webp", alt: "Residential Balcony Invisible Grill", title: "Residential Balcony Grill" },
  { src: "/images/4.webp", alt: "Premium Stainless Steel Invisible Grill", title: "Premium SS 316 Grill" },
];

export const metadata = {
  title: "Invisible Grills Bangalore | Balcony & Window Invisible Grill Installation - Swathi Safety Nets",
  description: "Swathi Safety Nets Bangalore - Premium stainless steel (SS 316) invisible grills for balconies, windows, staircases, and terraces. High durability, child & pet proof, 100% view. Call +91 9000182240 for a free quote.",
  keywords: "invisible grills bangalore, balcony invisible grill, window invisible grill, children safety invisible grill, staircase invisible grill, terrace invisible grill, ss 316 invisible grill installation",
  alternates: {
    canonical: "https://www.swathisafetynets.com/invisible-grills.html",
  },
};

export default function InvisibleGrillsPage() {
  const grillTypes = [
    {
      title: "Balcony Invisible Grills",
      icon: "fa-building",
      image: "/images/invisible-grill.webp",
      desc: "Secure high-rise apartment balconies cleanly. These grills provide absolute safety for your family while keeping the outdoor scenery, air, and natural light completely unobstructed.",
      benefits: ["High-tensile SS 316 core", "Heavy-duty structural base", "Modern design layout"],
    },
    {
      title: "Window Invisible Grills",
      icon: "fa-window-maximize",
      image: "/images/windowgrill.webp",
      desc: "An elegant replacement for traditional, heavy iron window grills. Perfect for modern villas and apartments. Maintenance-free, rust-proof, and fire-escape friendly.",
      benefits: ["Nylon/Teflon protective coating", "Emergency quick-cut design", "Easy window cleaning access"],
    },
    {
      title: "Children Safety Invisible Grills",
      icon: "fa-child-reaching",
      image: "/images/childrengrill.webp",
      desc: "Specially customized with 2-inch close wire spacing to prevent children or pets from getting their hands or heads stuck. Extensively safety-tested to absorb heavy impact.",
      benefits: ["2-inch safe spacing config", "Extra tensile rope locking", "Holds up to 400kg+ impact"],
    },
    {
      title: "Staircase Custom Grills",
      icon: "fa-stairs",
      image: "/images/staircasegrill.webp",
      desc: "Ensure safety along open stairwells, staircases, and handrails. Custom-tailored structure fitting the architectural curves of your staircase, presenting a clean design.",
      benefits: ["Custom angle structural tracks", "Prevents indoor fall hazards", "Seamless architectural fit"],
    },
    {
      title: "Terrace & Open Area Grills",
      icon: "fa-border-top-left",
      image: "/images/terracegrill.webp",
      desc: "Ideal for open terraces, penthouses, and large ventilation areas. Provides solid perimeter protection against accidental falls while maintaining breeze and view.",
      benefits: ["Heavy-duty outdoor tracks", "Full weather resistance", "Safe perimeter barrier"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        id="home"
        style={{
          paddingTop: "calc(var(--header-height) + var(--topbar-height) + 40px)",
          paddingBottom: "80px",
          minHeight: "auto",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        <div className="hero-content">
          <div className="container">
            <div className="hero-left" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div className="hero-badge" style={{ margin: "0 auto 20px" }}>
                <div className="hero-badge-dot"></div>
                <i className="fas fa-star"></i> Rated 4.9/5 by 1250+ Customers
              </div>
              <h1 className="hero-title font-heading text-white font-extrabold text-5xl mb-6">
                Premium Stainless Steel <span className="highlight">Invisible Grills</span>
              </h1>
              <p className="hero-subtitle text-lg mb-8 opacity-95">
                Upgrade your home safety without blocking your beautiful view. Our high-tensile SS 316 invisible grills
                are rust-proof, extremely strong, and ideal for high-rise balconies, windows, staircases, and terraces.
              </p>
              <div className="hero-buttons" style={{ justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
                <a href="tel:+919000182240" className="btn btn-call" id="hero-call-btn">
                  <i className="fas fa-phone-alt"></i> Call +91 9000182240
                </a>
                <a
                  href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20invisible%20grills%20installation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="hero-whatsapp-btn"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section" style={{ background: "var(--white)", padding: "60px 0" }}>
        <div className="container">
          <div className="section-header reveal revealed" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-label">
              <i className="fas fa-cogs"></i> Technical Details
            </span>
            <h2>Technical Specifications of Invisible Grills</h2>
            <p>Built with marine-grade materials to guarantee safety, transparency, and lifetime durability.</p>
          </div>

          <div
            className="reveal revealed"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              marginTop: "30px",
            }}
          >
            <div
              className="stat-box"
              style={{
                background: "var(--gray-50)",
                border: "1px solid var(--gray-200)",
                padding: "30px",
                borderRadius: "var(--radius-lg)",
                textAlign: "left",
              }}
            >
              <div className="stat-icon" style={{ marginBottom: "15px" }}>
                <i className="fas fa-shield-halved" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                SS 316 Marine Grade
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Made from premium 316 stainless steel wires, providing maximum tensile strength and resistance against rust
                and outdoor corrosion.
              </p>
            </div>
            <div
              className="stat-box"
              style={{
                background: "var(--gray-50)",
                border: "1px solid var(--gray-200)",
                padding: "30px",
                borderRadius: "var(--radius-lg)",
                textAlign: "left",
              }}
            >
              <div className="stat-icon" style={{ marginBottom: "15px" }}>
                <i className="fas fa-eye-slash" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                100% Clear View
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Featuring thin 2.5mm to 3.5mm wires spaced 2 to 4 inches apart, offering total security while remaining
                virtually invisible from a distance.
              </p>
            </div>
            <div
              className="stat-box"
              style={{
                background: "var(--gray-50)",
                border: "1px solid var(--gray-200)",
                padding: "30px",
                borderRadius: "var(--radius-lg)",
                textAlign: "left",
              }}
            >
              <div className="stat-icon" style={{ marginBottom: "15px" }}>
                <i className="fas fa-weight-hanging" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                High Load Capacity
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Engineered to support heavy pressure (up to 400kg+ tensile weight per wire setup), keeping children, pets,
                and adults absolutely safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grill types range */}
      <section className="services section" style={{ background: "var(--gray-50)" }} id="variants">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-th-large"></i> Grill Types
            </span>
            <h2>Explore Our Invisible Grill Range</h2>
            <p>Custom-fitted invisible grill installations for every corner of your home.</p>
          </div>

          <div className="services-grid stagger-children">
            {grillTypes.map((type, index) => (
              <div key={index} className="service-card reveal revealed">
                <div className="service-card-icon">
                  <div className="service-icon-circle">
                    <i className={`fas ${type.icon}`}></i>
                  </div>
                  <h3 className="font-heading font-bold text-gray-800">{type.title}</h3>
                </div>
                <div className="service-card-image">
                  <img
                    src={type.image}
                    alt={type.title}
                    loading="lazy"
                    width="300"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="service-card-body">
                  <p>{type.desc}</p>
                </div>
                <ul className="service-card-benefits">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i> {benefit}
                    </li>
                  ))}
                </ul>
                <div className="service-card-cta">
                  <a href="tel:+919000182240" className="btn btn-call btn-sm">
                    <i className="fas fa-phone-alt"></i> Call Now
                  </a>
                  <a
                    href={`https://wa.me/919000182240?text=Hi%2C%20I%20need%20${encodeURIComponent(
                      type.title
                    )}%20installation.`}
                    className="btn btn-whatsapp btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section
        className="gallery section"
        id="gallery"
        style={{
          background: "var(--white)",
          padding: "80px 0",
          borderTop: "1px solid var(--gray-200)",
        }}
      >
        <div className="container">
          <div className="section-header reveal revealed" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-label">
              <i className="fas fa-images"></i> Work Portfolio
            </span>
            <h2>Our Invisible Grill Installations</h2>
            <p>Take a look at some of our actual premium invisible grill installations across Bangalore.</p>
          </div>

          <div className="gallery-grid stagger-children">
            {invisibleGrillGallery.map((item, index) => (
              <div key={index} className="gallery-item reveal revealed">
                <img src={item.src} alt={item.alt} width="600" height="450" loading="lazy" style={{ objectFit: "cover" }} />
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section" id="faq">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-circle-question"></i> FAQ
            </span>
            <h2>Invisible Grills FAQ</h2>
            <p>Get answers to common queries about invisible grill safety, installation, maintenance, and durability.</p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container reveal revealed">
          <h2>Get a Free Invisible Grill Site Inspection Today!</h2>
          <p>
            Call us or send a WhatsApp message to book a free inspection. Our experts will bring samples, measure your
            space, and provide an instant custom quote.
          </p>
          <div className="cta-buttons">
            <a href="tel:+919000182240" className="btn btn-call" id="cta-call-btn">
              <i className="fas fa-phone-alt"></i> Call +91 9000182240
            </a>
            <a
              href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20a%20free%20site%20inspection%20for%20invisible%20grills."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="cta-whatsapp-btn"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
