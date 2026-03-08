"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";
import gallery4 from "../assets/gallery-4.webp";
import gallery5 from "../assets/gallery-5.webp";
import gallery6 from "../assets/gallery-6.webp";
import gallery7 from "../assets/gallery-7.webp";
import gallery8 from "../assets/photo2.webp";
import gallery9 from "../assets/photo4.webp";
import gallery10 from "../assets/photo5.webp";
import gallery11 from "../assets/photo7.webp";
import gallery12 from "../assets/photo9.webp";
import gallery13 from "../assets/photo10.webp";

export default function Gallery() {
  // Background slider
  const sliderImages = [
    { src: gallery1, heading: "Elegant Styles" },
    { src: gallery2, heading: "Luxury Haircuts" },
    { src: gallery3, heading: "Premium Coloring" },
  ];

  // Secondary gallery
  const galleryImages = [gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10,gallery11, gallery12, gallery13 ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // KeenSlider
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    spacing: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Auto-play for background slider
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => slider.current.next(), 4000);
    return () => clearInterval(interval);
  }, [slider]);

  // Close lightbox on back button
  useEffect(() => {
    const handlePopState = () => {
      if (lightboxIndex !== null) setLightboxIndex(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [lightboxIndex]);

  const openLightbox = (i) => {
    window.history.pushState({ modal: true }, "");
    setLightboxIndex(i);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    window.history.back();
  };

  return (
    <>
      {/* Background slider */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden" id="gallery">
        <div ref={sliderRef} className="keen-slider h-full w-full">
          {sliderImages.map((img, i) => (
            <div key={i} className="keen-slider__slide relative h-full w-full">
              <motion.img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === i ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Overlay text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            {sliderImages[currentSlide].heading}
          </h2>
          <p className="text-gray-200 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Experience luxury hair transformations curated for elegance, style, and confidence.
          </p>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => slider?.current?.moveToIdx(idx)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                  currentSlide === idx ? "bg-white" : "bg-gray-400 hover:bg-gray-200"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Secondary gallery */}
      <section className="py-20 bg-gray-50" id="gallery-secondary">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            More Transformations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl shadow-2xl overflow-hidden cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 4}`}
                  className="w-full h-[20em] sm:h-[25em] md:h-[30em] lg:h-[35em] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-3xl font-bold text-white hover:text-gray-300 z-10"
                onClick={closeLightbox}
              >
                &times;
              </button>

              <img
                src={galleryImages[lightboxIndex]}
                alt={`Gallery ${lightboxIndex + 4}`}
                className="w-full object-contain max-h-[80vh] md:max-h-[90vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}