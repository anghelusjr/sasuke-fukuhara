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
  const [formStatus, setFormStatus] = useState("");

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
    setFormStatus(""); // reset form status each time modal opens
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFormStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xvzwgblj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Message sent! Thank you.");
        e.target.reset();
      } else {
        setFormStatus("Oops! There was a problem.");
      }
    } catch (error) {
      setFormStatus("Oops! There was a problem.");
    }
  };

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
                className={`flex flex-col md:flex-row items-center ${isEven ? "" : "md:flex-row-reverse"} gap-8 md:gap-12`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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

                <motion.div className="md:w-1/2 space-y-4 text-left" variants={variant}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                  <p className="text-gray-900 font-extrabold text-lg">{s.price}</p>
                  <button
                    className="cursor-pointer mt-2 text-gray-800 hover:text-gray-900 underline font-semibold"
                    onClick={() => openLightbox(i)}
                  >
                    View More
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox with Form */}
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
                className="relative w-full max-w-3xl rounded-2xl overflow-auto shadow-2xl bg-white my-12 md:my-24"
                style={{ maxHeight: "90vh" }}
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
                  <p className="font-extrabold text-gray-900 mb-4">{services[lightboxIndex].price}</p>

                  {/* Form */}
                  {!formStatus.startsWith("Message sent") ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="Service" value={services[lightboxIndex].title} />
                      <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          name="Name"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="Email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="Phone"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">Message</label>
                        <textarea
                          name="Message"
                          rows="3"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900"
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <p className="text-green-600 font-bold text-lg">{formStatus}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}