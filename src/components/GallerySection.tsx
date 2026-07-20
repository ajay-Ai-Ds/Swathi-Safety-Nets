"use client";

import React, { useState, useEffect } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/pigeon.webp", alt: "Pigeon safety net installation", title: "Pigeon Safety Net" },
  { src: "/images/net.webp", alt: "Balcony safety net installation", title: "Balcony Safety Net" },
  { src: "/images/child.webp", alt: "Children safety net", title: "Children Safety Net" },
  { src: "/images/constructionnets.webp", alt: "Construction safety net", title: "Construction Safety Net" },
  { src: "/images/bird.webp", alt: "Bird protection net", title: "Bird Protection Net" },
  { src: "/images/cricket.webp", alt: "Cricket practice net", title: "Cricket Practice Net" },
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
