"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hairRebond from "../assets/hair-rebond.webp";
import hairColor from "../assets/hair-color.webp";
import hairTreatment from "../assets/hair-treatment.webp";
import hairCurly from "../assets/hair-curly.webp";

export default function Services() {
  const services = [
    {
      title: "Hair Rebonding",
      desc: "Achieve sleek, straight, and smooth hair through an advanced rebonding process that restructures frizz-prone strands.",
      price: "₱3,500",
      img: hairRebond,
    },
    {
      title: "Hair Coloring",
      desc: "Transform your look with professional hair coloring designed to enhance your style, cover gray strands, or create a bold new shade.",
      price: "₱1,500",
      img: hairColor,
    },
    {
      title: "Curly Hair Setting",
      desc: "Add natural-looking waves or defined curls with long-lasting curl-setting technology.",
      price: "₱1,200",
      img: hairCurly,
    },
    {
      title: "Hair Treatments",
      desc: "Revitalize dry or damaged hair with nourishing treatments that restore shine, softness, and strength.",
      price: "₱1,800",
      img: hairTreatment,
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  // Variants for sliding in both image and text
  const slideVariants = {
    left: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } },
    right: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } },
  };

  return (
    <section className="bg-gray-100 py-24" id="services">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
          My Services
        </h2>

        <div className="flex flex-col gap-24">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            const variant = isEven ? slideVariants.left : slideVariants.right;

            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                } gap-8 md:gap-12`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Image slides in */}
                <motion.div
                  className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openLightbox(i)}
                  variants={variant}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-80 md:h-[400px] object-cover rounded-xl"
                  />
                </motion.div>

                {/* Text slides in */}
                <motion.div
                  className="md:w-1/2 space-y-4 text-left"
                  variants={variant}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                  <p className="text-gray-900 font-extrabold text-lg">{s.price}</p>
                  <button
                    className="mt-2 text-gray-800 hover:text-gray-900 underline font-semibold"
                    onClick={() => openLightbox(i)}
                  >
                    View Image
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-3xl font-bold text-gray-800 hover:text-gray-900 cursor-pointer z-10"
                  onClick={closeLightbox}
                >
                  &times;
                </button>
                <img
                  src={services[lightboxIndex].img}
                  alt={services[lightboxIndex].title}
                  className="w-full object-cover max-h-96"
                />
                <div className="p-6 text-left text-gray-800">
                  <h3 className="text-2xl font-bold mb-2">{services[lightboxIndex].title}</h3>
                  <p className="text-gray-700 mb-2">{services[lightboxIndex].desc}</p>
                  <p className="font-extrabold text-gray-900">{services[lightboxIndex].price}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}