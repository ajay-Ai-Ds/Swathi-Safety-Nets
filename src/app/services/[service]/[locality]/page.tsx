import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { servicesData, localitiesData, generateLocalityContent } from "@/lib/services";

interface PageProps {
  params: Promise<{ service: string; locality: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];
  const locality = localitiesData[resolvedParams.locality];

  if (!service || !locality) {
    return {
      title: "Page Not Found - Swathi Safety Nets",
    };
  }

  return {
    title: `${service.title} in ${locality.name} | #1 Safety Net Installation - Swathi Safety Nets`,
    description: `Best ${service.title} in ${locality.name}, Bangalore. Professional installation of pigeon nets, balcony safety nets, and invisible grills with 15+ years experience. Call +91 9000182240 today.`,
    alternates: {
      canonical: `https://www.swathisafetynets.com/services/${resolvedParams.service}/${resolvedParams.locality}`,
    },
  };
}

export default async function LocalityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { service: serviceSlug, locality: localitySlug } = resolvedParams;

  const service = servicesData[serviceSlug];
  const locality = localitiesData[localitySlug];

  if (!service || !locality) {
    redirect("/areas");
  }

  const content = generateLocalityContent(serviceSlug, localitySlug);
  const paragraphs = content.split("\n\n");

  // Determine correct parent link
  let parentLink = `/services/${serviceSlug}`;
  if (serviceSlug === "invisible-grills") {
    parentLink = "/invisible-grills";
  } else if (serviceSlug === "cloth-hangers") {
    parentLink = "/cloth-hangers";
  }

  // Get nearby localities data
  const nearbyLocs = locality.nearby
    .map((slug) => localitiesData[slug])
    .filter(Boolean);

  // JSON-LD LocalBusiness Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Swathi Safety Nets ${locality.name}`,
    "image": "https://www.swathisafetynets.com/images/swathilogo1.webp",
    "@id": `https://www.swathisafetynets.com/services/${serviceSlug}/${localitySlug}`,
    "url": `https://www.swathisafetynets.com/services/${serviceSlug}/${localitySlug}`,
    "telephone": "+919000182240",
    "email": "info.swathisafetynets@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${locality.name}`,
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    },
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${locality.name}, Bangalore`
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you offer same-day ${service.title} installation in ${locality.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Swathi Safety Nets offers completely free site measurement and same-day installation for ${service.title} in ${locality.name}. Call +91 9000182240 to book a slot.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the cost of ${service.title} in ${locality.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost of ${service.title} depends on the dimensions of your balcony or open areas. We use only premium materials with free inspection and quotation. Contact us for an accurate custom price quote.`
        }
      }
    ]
  };

  return (
    <div style={{ paddingTop: "calc(var(--header-height) + var(--topbar-height) + 40px)", background: "var(--gray-50)", minHeight: "100vh" }}>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main Content Area */}
      <section className="section">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/areas" className="hover:text-blue-600">Areas</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href={parentLink} className="hover:text-blue-600">{service.title}</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-gray-800 font-medium">{locality.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column: Unique Text & CTAs */}
            <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-6">
                Premium {service.title} Installation in {locality.name}
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-base mb-8">
                {paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Call-to-actions */}
              <div className="flex flex-wrap gap-4 border-t border-gray-150 pt-8">
                <a href="tel:+919000182240" className="btn btn-call">
                  <i className="fas fa-phone-alt"></i> Call +91 9000182240
                </a>
                <a
                  href={`https://wa.me/919000182240?text=Hi%2C%20I%20need%20${encodeURIComponent(
                    service.title
                  )}%20installation%20in%20${encodeURIComponent(locality.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp Now
                </a>
              </div>
            </div>

            {/* Right Column: Navigation & Location Hub */}
            <div className="lg:w-1/3 space-y-6">
              {/* Parent Service Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-heading font-bold text-gray-800 text-lg mb-4">Parent Service</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Learn more about the general specifications, warranty options, and rates for this service.
                </p>
                <Link
                  href={parentLink}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <i className="fas fa-circle-arrow-left"></i> View Parent {service.title} Page
                </Link>
              </div>

              {/* Nearby Localities linking */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-heading font-bold text-gray-800 text-lg mb-4">Nearby Localities</h3>
                <p className="text-sm text-gray-500 mb-4">
                  We also serve residential communities and commercial setups in nearby neighborhoods:
                </p>
                <div className="space-y-3">
                  {nearbyLocs.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/services/${serviceSlug}/${loc.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <i className="fas fa-location-arrow text-xs text-blue-500"></i>
                      {service.title} in {loc.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* General Trust details */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-6 rounded-2xl text-white shadow-md">
                <h3 className="font-heading font-bold text-lg mb-3">Swathi Safety Nets</h3>
                <ul className="space-y-2.5 text-sm text-blue-100">
                  <li><i className="fas fa-check-circle text-blue-400 mr-2"></i> 15+ Years Experience</li>
                  <li><i className="fas fa-check-circle text-blue-400 mr-2"></i> 15,000+ Happy Clients</li>
                  <li><i className="fas fa-check-circle text-blue-400 mr-2"></i> 5-Year Warranty on HDPE Nets</li>
                  <li><i className="fas fa-check-circle text-blue-400 mr-2"></i> Same-day Free Inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
