"use client";

import React, { useState, useEffect } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/balcony.webp", alt: "Balcony safety net installation Bangalore - Swathi Safety Nets", title: "Balcony Safety Net" },
  { src: "/images/invisiblegrill.webp", alt: "Invisible grill installation Bangalore - Swathi Safety Nets", title: "Invisible Grill Installation" },
  { src: "/images/pigeon-safety-nets.webp", alt: "Pigeon safety net installation Bangalore - Swathi Safety Nets", title: "Pigeon Safety Net" },
  { src: "/images/childrensafetynet.webp", alt: "Children safety net installation Bangalore - Swathi Safety Nets", title: "Children Safety Net" },
  { src: "/images/petsafetynet.webp", alt: "Pet safety net installation Bangalore - Swathi Safety Nets", title: "Pet Safety Net" },
  { src: "/images/ductarea1.webp", alt: "Duct area safety net Bangalore - Swathi Safety Nets", title: "Duct Area Safety Net" },
  { src: "/images/monkey.webp", alt: "Monkey safety net Bangalore - Swathi Safety Nets", title: "Monkey Safety Net" },
  { src: "/images/sports.jpg", alt: "Cricket practice sports net Bangalore - Swathi Safety Nets", title: "Cricket & Sports Net" },
  { src: "/images/clothhanger.jpg", alt: "Ceiling cloth drying hanger Bangalore - Swathi Safety Nets", title: "Ceiling Cloth Hanger" },
];

export default function GallerySection() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const handleImageClick = (src: string, alt: string) => {
    setLightboxImg(src);
    setLightboxAlt(alt);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="gallery-grid stagger-children">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item reveal revealed" onClick={() => handleImageClick(item.src, item.alt)}>
            <img src={item.src} alt={item.alt} width="600" height="450" loading="lazy" style={{ objectFit: "cover" }} />
            <div className="gallery-overlay">
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div className="lightbox active" role="dialog" aria-label="Image Lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" role="button" aria-label="Close lightbox" onClick={closeLightbox}>
            &times;
          </span>
          <img src={lightboxImg} alt={lightboxAlt} style={{ pointerEvents: "auto" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
