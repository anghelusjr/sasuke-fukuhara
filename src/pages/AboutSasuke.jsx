"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sasuke from "../assets/sasuke-fukuhara.webp";
import award from "../assets/sasuke-award.webp";

export default function AboutModernFull() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showFull ? "hidden" : "auto";
  }, [showFull]);

  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const stats = [
    { number: 12, label: "Years Experience", color: "from-pink-500 to-pink-400" },
    { number: 500, label: "Happy Clients", color: "from-purple-500 to-purple-400" },
    { number: 50, label: "Awards & Recognitions", color: "from-indigo-500 to-indigo-400" },
  ];

  return (
    <section className="relative w-dvw bg-gray-950 text-gray-900 overflow-hidden">

      {/* ===== Split Section: Photo Left, Content Right ===== */}
      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row h-full min-h-screen "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeSlide}
      >
        {/* Left: Full Height Photo */}
        <motion.div
          className="md:w-1/2 h-screen md:h-auto flex-shrink-0"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={sasuke}
            alt="Kuya Mage / Sasuke Fukuhara"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300">Sasuke Fukuhara</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            I’m <strong>Sasuke Fukuhara</strong>, a hairstylist with 12 years of experience.
            I’ve survived rebond fails, orange hair disasters, DIY bleach experiments, and bangs that should’ve never existed.
            My mission? Fix your hair, save your confidence, and give you a reason to take selfies again.
          </p>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            After 12 years, your hair is safe, your confidence is going up, and most importantly… I won’t turn you into a meme!
          </p>

          {/* Award */}
          <motion.div
            className="w-36 mt-4 cursor-pointer rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowFull(true)}
          >
              <img src={award} alt="Award" className="w-full h-auto object-cover" />
          </motion.div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5 } }}
                viewport={{ once: true }}
              >
                <h3 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  {stat.number}+
                </h3>
                <p className="mt-2 text-gray-700 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal for Award */}
      <AnimatePresence>
        {showFull && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setShowFull(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setShowFull(false)}
              >
                &times;
              </button>
              <img
                src={award}
                alt="Award Full"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}