import React from "react";
import Link from "next/link";
import { localitiesData, servicesData } from "@/lib/services";

export const metadata = {
  title: "Service Areas | Swathi Safety Nets Bangalore",
  description: "Browse Swathi Safety Nets service areas across Bangalore. We cover Whitefield, Marathahalli, HSR Layout, Electronic City, Koramangala, Hebbal, Indiranagar, JP Nagar, and all surrounding areas.",
};

export default function AreasPage() {
  const localities = Object.values(localitiesData);
  const services = Object.entries(servicesData);

  return (
    <div style={{ paddingTop: "calc(var(--header-height) + var(--topbar-height) + 40px)", background: "var(--gray-50)", minHeight: "100vh" }}>
      <section className="section">
        <div className="container">
          <div className="section-header reveal revealed">
            <span className="section-label">
              <i className="fas fa-map-location-dot"></i> Service Locations
            </span>
            <h2>Areas We Serve in Bangalore</h2>
            <p>
              We provide professional same-day safety net and invisible grill installation services across all major localities in Bangalore. Click any locality below to view local services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localities.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <i className="fas fa-location-dot text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-gray-800">{loc.name}</h3>
                    <p className="text-xs text-gray-500 capitalize">{loc.slug.replace("-", " ")} Area</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Professional installations serving {loc.features} with customized safety nets and invisible grills.
                </p>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Available Services:</h4>
                <ul className="space-y-2">
                  {services.slice(0, 8).map(([slug, srv]) => (
                    <li key={slug} className="text-sm">
                      <Link
                        href={`/services/${slug}/${loc.slug}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                      >
                        <i className="fas fa-chevron-right text-[10px] text-blue-400"></i>
                        {srv.title} in {loc.name}
                      </Link>
                    </li>
                  ))}
                  {/* Link to other services */}
                  <li className="text-sm border-t border-gray-100 pt-2 mt-2">
                    <Link
                      href={`/services/invisible-grills/${loc.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <i className="fas fa-chevron-right text-[10px]"></i>
                      Invisible Grills in {loc.name}
                    </Link>
                  </li>
                  <li className="text-sm">
                    <Link
                      href={`/services/cloth-hangers/${loc.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <i className="fas fa-chevron-right text-[10px]"></i>
                      Cloth Hangers in {loc.name}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
