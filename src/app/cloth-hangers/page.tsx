import React from "react";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Cloth Hangers Bangalore | Ceiling Mounted & Balcony Clothes Drying Hangers - Swathi Safety Nets",
  description: "Swathi Safety Nets Bangalore - Space-saving ceiling mounted clothes drying hangers, pulley-operated hanging systems & balcony clothes dryers. Rust-free stainless steel rods. Call +91 9000182240 for free installation.",
  keywords: "cloth hangers bangalore, ceiling clothes hanger bangalore, balcony cloth drying hangers, pulley clothes hanger, ceiling mounted drying system, clothes drying rack bangalore",
  alternates: {
    canonical: "https://www.swathisafetynets.com/cloth-hangers.html",
  },
};

export default function ClothHangersPage() {
  const hangerModels = [
    {
      title: "Ceiling Mounted Pulley Hangers",
      icon: "fa-chevron-up",
      image: "/images/clothhanger.webp",
      desc: "Our flagship model. Mounts directly to the concrete ceiling. Contains 4, 6, or 8 stainless steel tubes (custom lengths from 4ft to 8ft). High-grade metal double pulleys ensure extremely smooth lifting operation.",
      benefits: ["4, 6, or 8 pipe options", "High load capacity (up to 35kg total)", "Thick, UV-resistant nylon cords"],
    },
    {
      title: "Balcony Wall-Mounted Dryers",
      icon: "fa-align-justify",
      image: "/images/clothhanger.webp",
      desc: "Perfect for homes with false ceilings where concrete ceiling mounting is not feasible. Installs securely on the side walls of your balcony. Includes high-durability ropes and space-saving mechanisms.",
      benefits: ["Ideal for false ceilings", "Wall-to-wall custom spacing", "Strong metal wall anchors"],
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
                <i className="fas fa-house-laptop"></i> Modern Smart Home Accessories
              </div>
              <h1 className="hero-title font-heading text-white font-extrabold text-5xl mb-6">
                Ceiling Mounted <span className="highlight">Cloth Hangers</span>
              </h1>
              <p className="hero-subtitle text-lg mb-8 opacity-95">
                Say goodbye to cluttered balcony floors. Our premium ceiling-mounted clothes drying systems feature
                independent pulley-driven ropes and heavy-duty, rust-proof stainless steel rods for effortless clothes drying.
              </p>
              <div className="hero-buttons" style={{ justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
                <a href="tel:+919000182240" className="btn btn-call" id="hero-call-btn">
                  <i className="fas fa-phone-alt"></i> Call +91 9000182240
                </a>
                <a
                  href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20ceiling%20cloth%20hangers%20installation."
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

      {/* Specifications / Details */}
      <section className="section" style={{ background: "var(--white)", padding: "60px 0" }}>
        <div className="container">
          <div className="section-header reveal revealed" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="section-label">
              <i className="fas fa-cogs"></i> Technical Details
            </span>
            <h2>Why Choose Our Ceiling Cloth Hangers?</h2>
            <p>Expertly crafted to fit any balcony layout, saving space while holding maximum load capacity.</p>
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
                <i className="fas fa-ruler-combined" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                Space Saving Design
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Utilizes the empty overhead ceiling space in your balcony, leaving 100% of your floor area free for plants,
                seating, or movement.
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
                <i className="fas fa-grip-lines" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                Independent Rod Operation
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Features individual nylon pulley strings so you can lower only one pipe at a time to load/unload clothes,
                then lift it back up effortlessly.
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
                <i className="fas fa-shield-virus" style={{ color: "var(--blue-600)", fontSize: "32px" }}></i>
              </div>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "var(--gray-900)" }}>
                Rustproof SS Rods
              </h4>
              <p style={{ color: "var(--gray-600)", fontSize: "14px" }}>
                Constructed from high-grade stainless steel pipes that will never stain or rust, keeping your white clothes
                completely clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Range */}
      <section className="services section" style={{ background: "var(--gray-50)" }} id="variants">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-box-open"></i> Hanger Models
            </span>
            <h2>Our Popular Cloth Hanger Configurations</h2>
            <p>Choose the configuration that best matches your balcony width and laundry volume.</p>
          </div>

          <div
            className="services-grid stagger-children"
            style={{ maxWidth: "900px", margin: "0 auto", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}
          >
            {hangerModels.map((model, index) => (
              <div key={index} className="service-card reveal revealed">
                <div className="service-card-icon">
                  <div className="service-icon-circle">
                    <i className={`fas ${model.icon}`}></i>
                  </div>
                  <h3 className="font-heading font-bold text-gray-800">{model.title}</h3>
                </div>
                <div className="service-card-image">
                  <img
                    src={model.image}
                    alt={model.title}
                    loading="lazy"
                    width="400"
                    height="250"
                    style={{ objectFit: "cover", filter: index === 1 ? "hue-rotate(45deg)" : "none" }}
                  />
                </div>
                <div className="service-card-body">
                  <p>{model.desc}</p>
                </div>
                <ul className="service-card-benefits">
                  {model.benefits.map((benefit, idx) => (
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
                      model.title
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

      {/* FAQ Section */}
      <section className="faq section" id="faq">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-circle-question"></i> FAQ
            </span>
            <h2>Cloth Hangers FAQ</h2>
            <p>Find answers to common questions about ceiling-mounted drying hanger installations and configurations.</p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container reveal revealed">
          <h2>Get Free Installation on Ceiling Hangers Today!</h2>
          <p>
            Call or WhatsApp us to book a free measurement service. We provide 100% free home delivery and expert
            installation across all areas in Bangalore.
          </p>
          <div className="cta-buttons">
            <a href="tel:+919000182240" className="btn btn-call" id="cta-call-btn">
              <i className="fas fa-phone-alt"></i> Call +91 9000182240
            </a>
            <a
              href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20a%20free%20site%20inspection%20for%20cloth%20hangers."
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
