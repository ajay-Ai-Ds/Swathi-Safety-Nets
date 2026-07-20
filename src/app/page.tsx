import React from "react";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import PriceEstimator from "@/components/PriceEstimator";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  const services = [
    {
      title: "Pigeon Safety Nets",
      icon: "fa-dove",
      image: "/images/pigeon.webp",
      desc: "Keep pigeons and birds away from your balconies, windows, and terraces with our durable pigeon safety nets. Hygienic, maintenance-free, and humane solution for your home.",
      benefits: ["UV-stabilized HDPE material", "Prevents bird droppings & diseases", "Nearly invisible installation"],
      slug: "pigeon-safety-nets",
    },
    {
      title: "Balcony Safety Nets",
      icon: "fa-building",
      image: "/images/net.webp",
      desc: "Secure your balconies with premium HDPE safety nets. Perfect for high-rise apartments to prevent accidents and ensure family safety.",
      benefits: ["High-rise apartment compatible", "Strong tensile strength", "Weather-resistant material"],
      slug: "balcony-safety-nets",
    },
    {
      title: "Children Safety Nets",
      icon: "fa-child-reaching",
      image: "/images/child.webp",
      desc: "Protect your children from balcony and window falls with our child-proof safety nets. Tested for maximum strength and reliability.",
      benefits: ["Holds up to 80 kg weight", "Non-toxic, child-friendly", "International safety standards"],
      slug: "children-safety-nets",
    },
    {
      title: "Construction Safety Nets",
      icon: "fa-helmet-safety",
      image: "/images/constructionnets.webp",
      desc: "Industrial-grade safety nets for construction sites. Fully compliant with safety standards and regulations.",
      benefits: ["Heavy-duty industrial grade", "Debris & fall protection", "Regulatory compliant"],
      slug: "construction-safety-nets",
    },
    {
      title: "Bird Protection Nets",
      icon: "fa-feather-pointed",
      image: "/images/bird.webp",
      desc: "Comprehensive bird protection for homes, offices, and agricultural areas. Humane and effective.",
      benefits: ["Humane bird deterrent", "Agricultural & residential", "Fine-mesh bird netting"],
      slug: "bird-protection-nets",
    },
    {
      title: "Anti Bird Safety Nets",
      icon: "fa-dove",
      image: "/images/antibirdnet.webp",
      desc: "Specialized anti-bird safety nets to prevent bird entry, nesting, and droppings on balconies, terraces, and open spaces. Durable, humane, and near-invisible installation for cleaner surroundings.",
      benefits: ["Humane bird exclusion system", "UV-stabilized, weatherproof mesh", "Clean and low-maintenance protection"],
      slug: "anti-bird-safety-nets",
    },
    {
      title: "Cricket Practice Nets",
      icon: "fa-baseball-bat-ball",
      image: "/images/cricket.webp",
      desc: "Professional-grade cricket practice nets for academies, clubs, and home setups. Durable and weather-resistant.",
      benefits: ["Professional-grade quality", "Impact-resistant netting", "Custom size available"],
      slug: "cricket-practice-nets",
    },
    {
      title: "Pet Safety Nets",
      icon: "fa-paw",
      image: "/images/pets.webp",
      desc: "Keep your pets safe on balconies and open areas with our sturdy pet safety nets. Strong enough to hold any pet securely while allowing fresh air flow.",
      benefits: ["Tear-proof strong material", "Pet-friendly mesh size", "Durable and long-lasting"],
      slug: "pet-safety-nets",
    },
    {
      title: "Pigeon Spikes",
      icon: "fa-shield",
      image: "/images/spikes.webp",
      desc: "Effective pigeon spikes to deter birds from roosting on ledges, pipes and rooftops. Durable stainless-steel spikes for humane bird control.",
      benefits: ["Stainless steel construction", "Long-lasting & low maintenance", "Easy retrofitting on ledges"],
      slug: "pigeon-spikes",
    },
    {
      title: "Mosquito Safety Net",
      icon: "fa-bug",
      image: "/images/mosquitonet.webp",
      desc: "Fine-mesh mosquito safety nets to protect against insects while maintaining airflow. Ideal for windows, doors, and balconies.",
      benefits: ["Ultra-fine insect mesh", "Breathable and durable", "Simple installation options"],
      slug: "mosquito-safety-net",
    },
    {
      title: "Duct Area Safety Nets",
      icon: "fa-fan",
      image: "/images/ductareanets.webp",
      desc: "Cover duct areas and shafts with our premium safety nets to prevent debris, pigeons, and accidents in residential complexes and commercial buildings.",
      benefits: ["Custom-fit installation", "Prevents bird nesting", "Easy maintenance access"],
      slug: "duct-area-safety-nets",
    },
    {
      title: "Coconut Tree Safety Nets",
      icon: "fa-tree",
      image: "/images/coconut.webp",
      desc: "Protect people and property from falling coconuts with our specialized coconut tree safety nets. Strong, long-lasting, and designed for tropical environments.",
      benefits: ["Heavy fruit-resistant design", "UV & weather resistant", "Easy coconut harvesting"],
      slug: "coconut-tree-safety-nets",
    },
    {
      title: "Industrial Safety Nets",
      icon: "fa-industry",
      image: "/images/industrial.webp",
      desc: "Heavy-duty safety nets for industrial facilities, warehouses, and factories. Meeting all industrial safety requirements and protecting your workforce.",
      benefits: ["Industrial-strength material", "Fire-retardant options", "Compliance certified"],
      slug: "industrial-safety-nets",
    },
    {
      title: "Monkey Safety Nets",
      icon: "fa-shield-halved",
      image: "/images/monkey.webp",
      desc: "Keep monkeys away from your home and garden with our specially designed monkey safety nets. Strong, tamper-proof, and built to withstand aggressive pulling.",
      benefits: ["Extra-strong mesh design", "Tamper-proof installation", "Full property coverage"],
      slug: "monkey-safety-nets",
    },
  ];

  const premiumServices = [
    {
      title: "Balcony Invisible Grills",
      icon: "fa-border-all",
      image: "/images/invisible-grill.webp",
      desc: "Secure your balcony with premium stainless steel invisible grills. 100% rustproof, ultra-strong safety setup without compromising your outdoor landscape views.",
      benefits: ["Marine-grade SS 316 wire", "100% view preservation", "Safety tested for high-rises"],
      link: "/invisible-grills",
    },
    {
      title: "Window Invisible Grills",
      icon: "fa-window-maximize",
      image: "/images/windowgrill.webp",
      desc: "A modern, elegant alternative to bulky iron window grills. Perfect for safety in apartments and villas, ensuring emergency exit capability.",
      benefits: ["Rust-free nylon coating", "Easy window maintenance", "Fire escape friendly"],
      link: "/invisible-grills",
    },
    {
      title: "Staircase Invisible Grills",
      icon: "fa-stairs",
      image: "/images/staircasegrill.webp",
      desc: "Prevent accidents and falls around staircases and high open handrail voids. Customized layout blending with home aesthetics.",
      benefits: ["High indoor fall safety", "Sleek architectural look", "Custom structural tracking"],
      link: "/invisible-grills",
    },
    {
      title: "Custom Invisible Grills",
      icon: "fa-cogs",
      image: "/images/in1.webp",
      desc: "Tailor-made wire spacing (2 to 4 inches) and frame designs. Perfect for special partition spaces, gardens, and custom toddler/pet proofing.",
      benefits: ["Fully customizable spacing", "Toddler & pet-friendly", "Multi-purpose partition"],
      link: "/invisible-grills",
    },
    {
      title: "Cloth Hangers",
      icon: "fa-shirt",
      image: "/images/clothhanger.webp",
      desc: "Maximize your balcony space with ceiling-mounted pulley clothes drying hangers. Heavy-duty, space-saving, and easy-to-operate drying systems.",
      benefits: ["Ceiling-mounted space saver", "Heavy-duty rustproof pipes", "Smooth individual pulley"],
      link: "/cloth-hangers",
    },
  ];

  const localities = [
    { name: "Whitefield", slug: "whitefield" },
    { name: "Marathahalli", slug: "marathahalli" },
    { name: "KR Puram", slug: "kr-puram" },
    { name: "HSR Layout", slug: "hsr-layout" },
    { name: "Electronic City", slug: "electronic-city" },
    { name: "Sarjapur Road", slug: "sarjapur-road" },
    { name: "Koramangala", slug: "koramangala" },
    { name: "Hebbal", slug: "hebbal" },
    { name: "Indiranagar", slug: "indiranagar" },
    { name: "Jayanagar", slug: "jayanagar" },
    { name: "BTM Layout", slug: "btm-layout" },
    { name: "JP Nagar", slug: "jp-nagar" },
    { name: "Bannerghatta Road", slug: "bannerghatta-road" },
    { name: "Yelahanka", slug: "yelahanka" },
    { name: "Rajajinagar", slug: "rajajinagar" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        <div className="hero-content w-full">
          <div className="container">
            <div className="hero-left">
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <i className="fas fa-star"></i>
                Rated 4.9/5 by 1250+ Customers
              </div>

              {/* Polished Auto-rotating Carousel component */}
              <HeroCarousel />

              <h2 className="hero-title mt-6">
                Protect Your Family With Bangalore's <span className="highlight">Trusted Safety Net Experts</span>
              </h2>

              <p className="hero-subtitle">
                Professional pigeon safety nets, balcony safety nets, children safety nets, and industrial safety net
                installations with same-day service across Bangalore.
              </p>

              <div className="hero-buttons">
                <a href="tel:+919000182240" className="btn btn-call" id="hero-call-btn">
                  <i className="fas fa-phone-alt"></i> Call Now
                </a>
                <a
                  href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20safety%20net%20installation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="hero-whatsapp-btn"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp Now
                </a>
                <a
                  href="https://wa.me/919000182240?text=Hi%2C%20I%20would%20like%20a%20free%20site%20inspection%20for%20safety%20net%20installation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-inspection"
                  id="hero-inspection-btn"
                >
                  <i className="fas fa-clipboard-check"></i> Free Site Inspection
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fas fa-shield-halved"></i>
                  </div>
                  <div className="trust-text">
                    <strong>Verified</strong>
                    Trusted Company
                  </div>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="trust-text">
                    <strong>Same Day</strong>
                    Installation
                  </div>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <div className="trust-text">
                    <strong>Free</strong>
                    Site Inspection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar (Polished Counters) */}
      <div className="stats-bar">
        <div className="container reveal revealed">
          <div className="stat-box">
            <div className="stat-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3>15,000+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <i className="fas fa-smile-beam"></i>
            </div>
            <h3>15,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>50+</h3>
            <p>Areas Covered</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-th-large"></i> Our Services
            </span>
            <h2>Professional Safety Net Solutions in Bangalore</h2>
            <p>
              We offer a complete range of safety net installation services with premium HDPE and nylon materials.
              Trusted by 15,000+ families across Bangalore.
            </p>
          </div>

          <div className="services-grid stagger-children">
            {services.map((service, index) => (
              <div key={index} className="service-card reveal revealed">
                <div className="service-card-icon">
                  <div className="service-icon-circle">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="font-heading font-bold text-gray-800">{service.title}</h3>
                </div>
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width="300"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="service-card-body">
                  <p>{service.desc}</p>
                </div>
                <ul className="service-card-benefits">
                  {service.benefits.map((benefit, idx) => (
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
                      service.title
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

      {/* Price Estimator Section */}
      <section
        className="calculator-section section"
        id="estimator"
        style={{
          background: "var(--gray-50)",
          borderTop: "1px solid var(--gray-200)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-calculator" style={{ color: "var(--blue-600)" }}></i> Price Estimator
            </span>
            <h2>Instant Cost Estimator</h2>
            <p>
              Get a quick, transparent cost range for your installation needs. Lock in your price and book a free site
              measurement today!
            </p>
          </div>

          <PriceEstimator />
        </div>
      </section>

      {/* Premium Solutions Section */}
      <section
        className="premium-services section"
        id="premium-services"
        style={{
          background: "var(--white)",
          padding: "80px 0",
          borderTop: "1px solid var(--gray-200)",
        }}
      >
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-star"></i> Premium Home Solutions
            </span>
            <h2>Invisible Grills & Cloth Hanger Installations</h2>
            <p>
              Enhance your home's safety, aesthetics, and space utilization with our premium stainless steel invisible
              grills and ceiling-mounted clothes drying systems.
            </p>
          </div>

          <div
            className="services-grid stagger-children"
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              justifyContent: "center",
              gap: "30px",
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {premiumServices.map((service, index) => (
              <div
                key={index}
                className="service-card reveal revealed"
                style={{ background: "var(--gray-50)", border: "1px solid var(--gray-200)" }}
              >
                <div className="service-card-icon">
                  <div className="service-icon-circle" style={{ background: "var(--blue-100)", color: "var(--blue-700)" }}>
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width="300"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="service-card-body">
                  <p>{service.desc}</p>
                </div>
                <ul className="service-card-benefits">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check" style={{ color: "var(--blue-600)" }}></i> {benefit}
                    </li>
                  ))}
                </ul>
                <div className="service-card-cta">
                  <Link href={service.link} className="btn btn-primary btn-sm">
                    <i className="fas fa-info-circle"></i> View Details
                  </Link>
                  <a
                    href={`https://wa.me/919000182240?text=Hi%2C%20I%20need%20${encodeURIComponent(
                      service.title
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

      {/* Projects Gallery */}
      <section className="gallery section" id="gallery">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-images"></i> Our Projects
            </span>
            <h2>Premium Safety Net Installations in Bangalore</h2>
            <p>Browse our portfolio of professional safety net installations across Bangalore.</p>
          </div>

          <GallerySection />
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews section" id="reviews">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-star"></i> Customer Reviews
            </span>
            <h2>What Our Customers Say About Us</h2>
            <p>Don't just take our word for it. Here's what our valued customers across Bangalore have to say.</p>
          </div>
          <div className="reviews-grid stagger-children">
            <div className="review-card reveal revealed">
              <span className="quote-icon">"</span>
              <div className="review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                Excellent service! Swathi Safety Nets installed pigeon nets on all 4 balconies. The quality is
                outstanding and the team was very professional. Highly recommend!
              </p>
              <div className="review-author">
                <div
                  className="review-avatar"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  RK
                </div>
                <div className="review-author-info">
                  <h4>Ramesh Kumar</h4>
                  <span>
                    <i className="fas fa-map-marker-alt"></i> Whitefield, Bangalore
                  </span>
                </div>
              </div>
            </div>
            <div className="review-card reveal revealed">
              <span className="quote-icon">"</span>
              <div className="review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                We needed children safety nets urgently. Swathi Safety Nets responded within hours and completed the
                installation same day. Peace of mind guaranteed!
              </p>
              <div className="review-author">
                <div
                  className="review-avatar"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  PS
                </div>
                <div className="review-author-info">
                  <h4>Priya Shankar</h4>
                  <span>
                    <i className="fas fa-map-marker-alt"></i> HSR Layout, Bangalore
                  </span>
                </div>
              </div>
            </div>
            <div className="review-card reveal revealed">
              <span className="quote-icon">"</span>
              <div className="review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                Great quality and affordable pricing. Got balcony safety nets installed in our apartment. The nets are
                almost invisible. Will definitely recommend.
              </p>
              <div className="review-author">
                <div
                  className="review-avatar"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  AM
                </div>
                <div className="review-author-info">
                  <h4>Arun Mehta</h4>
                  <span>
                    <i className="fas fa-map-marker-alt"></i> Koramangala, Bangalore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="areas section" id="areas">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-map-location-dot"></i> Service Areas
            </span>
            <h2>Safety Net Installation Across Bangalore</h2>
            <p>
              We provide professional safety net installation services across all major areas in Bangalore. Same-day
              service available in most locations.
            </p>
          </div>
          <div className="areas-grid stagger-children">
            {localities.map((loc) => (
              <Link key={loc.slug} href={`/services/pigeon-safety-nets/${loc.slug}`} className="area-card reveal revealed">
                <i className="fas fa-location-dot"></i>
                <h4>{loc.name}</h4>
                <p>Safety Nets in {loc.name}</p>
              </Link>
            ))}
            <Link
              href="/areas"
              className="area-card reveal revealed"
              style={{ background: "var(--blue-50)", borderColor: "var(--blue-200)" }}
            >
              <i className="fas fa-plus-circle" style={{ color: "var(--blue-600)" }}></i>
              <h4 style={{ color: "var(--blue-700)" }}>Other Areas</h4>
              <p>All Bangalore Covered</p>
            </Link>
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
            <h2>Frequently Asked Questions About Safety Nets</h2>
            <p>
              Find answers to the most common questions about safety net installation, materials, costs, and services
              in Bangalore.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container reveal revealed">
          <h2>Get Your Free Site Inspection Today!</h2>
          <p>
            Call us now or send a WhatsApp message for instant response. Our expert team will visit your location and
            provide a free detailed quotation.
          </p>
          <div className="cta-buttons">
            <a href="tel:+919000182240" className="btn btn-call" id="cta-call-btn">
              <i className="fas fa-phone-alt"></i> Call +91 9000182240
            </a>
            <a
              href="https://wa.me/919000182240?text=Hi%20Swathi%20Safety%20Nets%2C%20I%20need%20a%20free%20site%20inspection."
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

      {/* Footer Map Location */}
      <section className="footer-map" style={{ paddingBottom: "40px", background: "var(--gray-900)" }}>
        <div className="container">
          <div
            id="map-container"
            style={{
              width: "100%",
              height: "450px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8924083329067!2d77.632296!3d12.97828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a6bbbbbbbb%3A0xbbbbbbbbbbbbbbbb!2sSwathi%20Safety%20Nets!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swathi Safety Nets Bangalore Location"
              aria-label="Google Map showing Bangalore location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
