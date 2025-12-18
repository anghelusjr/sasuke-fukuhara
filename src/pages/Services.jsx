import React, { useState } from "react";
import awardImg from "../assets/sasuke-award.webp";
import hairRebond from "../assets/hair-rebond.webp"

export default function Services() {
  const services = [
    {
      title: "Hair Rebonding",
      desc: "Smooth, straight, and shiny hair.",
      price: "₱3,500",
      img: hairRebond,
    },
    {
      title: "Hair Coloring",
      desc: "Vibrant colors and highlights.",
      price: "₱1,500",
      img: hairRebond,
    },
    {
      title: "Curly Hair Setting",
      desc: "Beautiful curls for any occasion.",
      price: "₱1,200",
      img: hairRebond,
    },
    {
      title: "Hair Treatments",
      desc: "Nourishing treatments for healthy hair.",
      price: "₱1,800",
      img: hairRebond,
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-3xl font-bold text-gray-700 hover:text-black"
                onClick={() => setLightboxIndex(null)}
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
