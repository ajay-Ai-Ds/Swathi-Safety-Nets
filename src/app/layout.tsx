import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#1e3a8a",
};

export const metadata: Metadata = {
  title: "Safety Nets Bangalore | #1 Pigeon, Balcony & Bird Safety Net Installation - Swathi Safety Nets",
  description: "Swathi Safety Nets Bangalore - Professional installation of pigeon safety nets, balcony safety nets, children safety nets, pet safety nets, bird protection nets & more. 15+ years experience. Call +91 9000182240 for free site inspection.",
  keywords: "safety nets bangalore, pigeon safety nets bangalore, balcony safety nets bangalore, child safety nets bangalore, pet safety nets bangalore, bird protection nets bangalore, construction safety nets, cricket practice nets, coconut tree safety nets, industrial safety nets, monkey safety nets, safety net installation bangalore",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.swathisafetynets.com/",
  },
  openGraph: {
    type: "website",
    title: "Safety Nets Bangalore | Swathi Safety Nets - Professional Installation",
    description: "Bangalore's trusted safety net experts. Professional installation of pigeon, balcony, children, pet & bird safety nets. 15+ years experience. Free site inspection.",
    url: "https://www.swathisafetynets.com/",
    siteName: "Swathi Safety Nets",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        {/* Font Awesome 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Google Ads conversion helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                      'send_to': 'AW-18236873107/RJ49CLCm6cgcEJOzgvhD',
                      'value': 1.0,
                      'currency': 'INR',
                      'event_callback': callback
                  });
                } else {
                  callback();
                }
                return false;
              }
            `,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18236873107"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18236873107');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Topbar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
