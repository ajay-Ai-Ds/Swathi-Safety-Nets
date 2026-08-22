"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const BUSINESS = {
  name: "Swathi Safety Nets",
  phone: "+91 9000182240",
  phoneDisplay: "+91 90001 82240",
  phoneHref: "tel:+919000182240",
  whatsapp:
    "https://wa.me/919000182240?text=Hello%2C%20I%20need%20professional%20safety%20net%20services.%20%0ACan%20you%20provide%20a%20quotation%3F",
  email: "info.swathisafetynets@gmail.com",
};

const SERVICES = [
  { slug: "services/balcony-safety-nets", title: "Balcony Safety Nets" },
  { slug: "invisible-grills", title: "Invisible Grills" },
  { slug: "services/pigeon-safety-nets", title: "Pigeon Safety Nets" },
  { slug: "services/children-safety-nets", title: "Children Safety Nets" },
  { slug: "services/pet-safety-nets", title: "Pet Safety Nets" },
  { slug: "services/duct-area-safety-nets", title: "Duct Area Safety Nets" },
  { slug: "services/construction-safety-nets", title: "Construction Safety Nets" },
  { slug: "services/cricket-practice-nets", title: "Cricket Practice Nets" },
  { slug: "services/monkey-safety-nets", title: "Monkey Safety Nets" },
  { slug: "cloth-hangers", title: "Ceiling Cloth Hangers" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setMenuOpen(false);
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 border-b border-gray-100 ${
        scrolled ? "shadow-md py-0" : "shadow-sm py-0"
      }`}
    >
      {/* Balanced, generous horizontal padding across all viewport sizes */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-18 md:h-20" : "h-22 md:h-24"
          }`}
        >
          {/* ── 1. LOGO + BRAND NAME (Shifted Right for comfortable positioning) ── */}
          <Link
            href="/"
            className="flex items-center gap-3.5 sm:gap-4 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded-2xl ml-3 sm:ml-6 md:ml-8 lg:ml-10"
            aria-label="Swathi Safety Nets Home"
          >
            {/* Logo Image */}
            <div
              className={`relative shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? "w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14"
                  : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              }`}
            >
              <Image
                src="/images/swathilogo.jpg"
                alt="Swathi Safety Nets Logo"
                fill
                priority
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                className="object-contain p-0.5"
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col justify-center select-none">
              <span
                className={`font-black text-green-700 leading-none tracking-tight transition-all duration-300 ${
                  scrolled ? "text-2xl sm:text-2xl md:text-3xl" : "text-2xl sm:text-3xl md:text-3xl"
                }`}
              >
                Swathi
              </span>
              <span
                className={`font-bold text-gray-500 uppercase tracking-widest leading-none mt-1 transition-all duration-300 ${
                  scrolled ? "text-[11px] sm:text-xs" : "text-xs sm:text-xs md:text-sm"
                }`}
              >
                Safety Nets
              </span>
            </div>
          </Link>

          {/* ── 2. CENTER NAVIGATION LINKS (Balanced spacing) ── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base font-bold text-gray-700">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "#home")}
              className={`relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/" ? "text-green-700 font-extrabold" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="relative flex items-center gap-1.5 py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full cursor-pointer focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Services menu"
              >
                <span>Services</span>
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-68 grid grid-cols-1 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="px-3.5 py-2 rounded-xl hover:bg-green-50 hover:text-green-700 transition-colors text-sm font-semibold text-gray-700 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/invisible-grills"
              className={`relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/invisible-grills" ? "text-green-700 font-extrabold" : ""
              }`}
            >
              Invisible Grills
            </Link>

            <Link
              href={pathname === "/" ? "#gallery" : "/#gallery"}
              onClick={(e) => handleLinkClick(e, "#gallery")}
              className="relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </Link>

            <Link
              href={pathname === "/" ? "#reviews" : "/#reviews"}
              onClick={(e) => handleLinkClick(e, "#reviews")}
              className="relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Reviews
            </Link>

            <Link
              href={pathname === "/" ? "#faq" : "/#faq"}
              onClick={(e) => handleLinkClick(e, "#faq")}
              className="relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              FAQ
            </Link>

            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="relative py-2 hover:text-green-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* ── 3. RIGHT SIDE CTA BUTTONS (Symmetrically aligned) ── */}
          <div className="hidden lg:flex items-center gap-3.5 shrink-0 mr-3 sm:mr-6 md:mr-8 lg:mr-10">
            {/* WhatsApp Button */}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 font-bold text-sm border border-green-200 hover:bg-green-100 transition-all hover:scale-105 shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-4.5 h-4.5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Call Now Button */}
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-extrabold text-sm transition-all shadow-md shadow-green-600/30 hover:scale-105 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
              </svg>
              <span>Call Now</span>
            </a>
          </div>

          {/* ── 4. MOBILE: Quick Call Icon + Hamburger Button ── */}
          <div className="flex lg:hidden items-center gap-3 mr-2 sm:mr-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white shadow-md hover:bg-green-700 transition-colors"
              aria-label="Call Swathi Safety Nets"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
              </svg>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5.5 h-5.5 flex flex-col justify-center gap-1.5 relative">
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── 5. MOBILE NAVIGATION DRAWER ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[600px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100 pt-3 space-y-1">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors cursor-pointer"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 space-y-1 pb-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/invisible-grills"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              Invisible Grills
            </Link>

            <Link
              href={pathname === "/" ? "#gallery" : "/#gallery"}
              onClick={(e) => handleLinkClick(e, "#gallery")}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              Gallery
            </Link>

            <Link
              href={pathname === "/" ? "#reviews" : "/#reviews"}
              onClick={(e) => handleLinkClick(e, "#reviews")}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              Reviews
            </Link>

            <Link
              href={pathname === "/" ? "#faq" : "/#faq"}
              onClick={(e) => handleLinkClick(e, "#faq")}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              FAQ
            </Link>

            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="block px-4 py-2.5 rounded-xl text-gray-800 hover:bg-green-50 hover:text-green-700 font-bold text-base transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Bottom CTA Buttons */}
            <div className="pt-3 flex gap-3 px-2">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-green-50 text-green-700 font-extrabold text-sm border border-green-200 hover:bg-green-100 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 text-center py-2.5 rounded-xl bg-green-600 text-white font-extrabold text-sm shadow-md hover:bg-green-700 transition-colors"
              >
                Call: {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
