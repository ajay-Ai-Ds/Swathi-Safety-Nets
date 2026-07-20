import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { servicesData, localitiesData } from "@/lib/services";
import FAQSection from "@/components/FAQSection";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];

  if (!service) {
    return {
      title: "Service Not Found - Swathi Safety Nets",
    };
  }

  return {
    title: `${service.title} Installation Bangalore | Swathi Safety Nets`,
    description: `${service.desc} Professional installation, weather resistant materials, free measurements. Call +91 9000182240.`,
  };
}

export default async function ServiceParentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceSlug = resolvedParams.service;

  // Handle redirects for premium services to keep original urls active
  if (serviceSlug === "invisible-grills") {
    redirect("/invisible-grills");
  }
  if (serviceSlug === "cloth-hangers") {
    redirect("/cloth-hangers");
  }

  const service = servicesData[serviceSlug];

  if (!service) {
    redirect("/#services");
  }

  const localities = Object.values(localitiesData);
  // Pick top 5 localities to display linking
  const topLocalities = localities.slice(0, 5);
  const otherLocalities = localities.slice(5);

  return (
    <div style={{ paddingTop: "calc(var(--header-height) + var(--topbar-height) + 40px)", background: "var(--gray-50)", minHeight: "100vh" }}>
      {/* Service Details Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="section-label inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                <i className={`fas ${service.icon}`}></i> {service.title}
              </span>
              <h2 className="text-4xl font-heading font-extrabold text-gray-900 mb-6">{service.title} Installation</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
              <h4 className="font-heading font-bold text-gray-800 mb-4">Key Benefits & Features:</h4>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919000182240" className="btn btn-call">
                  <i className="fas fa-phone-alt"></i> Call +91 9000182240
                </a>
                <a
                  href={`https://wa.me/919000182240?text=Hi%2C%20I%20need%20${encodeURIComponent(
                    service.title
                  )}%20installation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                width="600"
                height="400"
                className="rounded-2xl shadow-lg border border-gray-100 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Localities Link Section */}
      <section className="section bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="section-header reveal revealed text-center mb-12">
            <span className="section-label">
              <i className="fas fa-map-location-dot"></i> Local SEO Areas
            </span>
            <h2>Local Installation Areas for {service.title}</h2>
            <p>Select your locality in Bangalore to see dedicated pricing, client reviews, and custom installation details.</p>
          </div>

          {/* Top Localities Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-heading font-bold text-gray-800 text-lg mb-6 text-center">Top Served Areas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {topLocalities.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${serviceSlug}/${loc.slug}`}
                  className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-blue-600 font-semibold"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Other Localities Grid */}
          <div className="max-w-4xl mx-auto border-t border-gray-200 pt-10">
            <h3 className="font-heading font-bold text-gray-800 text-lg mb-6 text-center">Other Service Locations:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {otherLocalities.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${serviceSlug}/${loc.slug}`}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 bg-white rounded-lg border border-gray-150 shadow-sm"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section bg-white border-t border-gray-200">
        <div className="container">
          <div className="section-header reveal revealed text-center">
            <span className="section-label">
              <i className="fas fa-circle-question"></i> FAQ
            </span>
            <h2>{service.title} FAQs</h2>
            <p>Common questions answered about materials, sizes, pricing, and timing.</p>
          </div>

          <FAQSection />
        </div>
      </section>
    </div>
  );
}
