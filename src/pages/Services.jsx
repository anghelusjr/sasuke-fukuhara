import React, { useState, useEffect } from "react";
import hairRebond from "../assets/hair-rebond.webp";
import hairColor from "../assets/hair-color.webp";
import hairTreatment from "../assets/hair-treatment.webp";
import hairCurly from "../assets/hair-curly.webp";

export default function Services() {
  const services = [
    {
      title: "Hair Rebonding",
      desc: "Achieve sleek, straight, and smooth hair through an advanced rebonding process that restructures frizz-prone strands. Ideal for unruly or wavy hair, this service delivers a polished finish that stays manageable for months.",
      price: "₱3,500",
      img: hairRebond,
    },
    {
      title: "Hair Coloring",
      desc: "Transform your look with professional hair coloring designed to enhance your style, cover gray strands, or create a bold new shade. From subtle highlights to full-head color, we ensure vibrant results while protecting your hair’s health.",
      price: "₱1,500",
      img: hairColor,
    },
    {
      title: "Curly Hair Setting",
      desc: "Add natural-looking waves or defined curls with long-lasting curl-setting technology. This service creates volume, body, and movement—perfect for clients who want effortless, styled curls every day.",
      price: "₱1,200",
      img: hairCurly,
    },
    {
      title: "Hair Treatments",
      desc: "Revitalize dry or damaged hair with nourishing treatments that restore shine, softness, and strength. Whether it’s keratin, hydration, or protein care, our treatments repair the hair fiber and improve overall manageability.",
      price: "₱1,800",
      img: hairTreatment,
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Handle browser back button to close modal
  useEffect(() => {
    const handlePopState = () => {
      // If modal is open, close it
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [lightboxIndex]);

  const openLightbox = (i) => {
    window.history.pushState({ modal: true }, ""); // add history layer
    setLightboxIndex(i);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    window.history.back(); // remove the history layer cleanly
  };

  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-80 object-cover rounded-lg mb-4 hover:scale-102 transition-all ease-in duration-150"
              />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-400 font-medium">View more</p>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-3xl font-bold text-amber-50 hover:text-gray-500 cursor-pointer"
                onClick={closeLightbox}
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={services[lightboxIndex].img}
                alt={services[lightboxIndex].title}
                className="w-full object-cover max-h-96"
              />

              {/* Description & Price */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  {services[lightboxIndex].title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {services[lightboxIndex].desc}
                </p>
                <p className="font-bold">{services[lightboxIndex].price}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
