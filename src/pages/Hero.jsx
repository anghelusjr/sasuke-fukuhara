"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative w-screen min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[Playfair_Display] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight mb-6"
        >
          Where Confidence Meets Hair Art
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-[Montserrat] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 text-gray-200"
        >
          Your beauty, My passion. Rebonding, coloring, curls & more!
        </motion.p>

        <motion.button
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 px-10 rounded-2xl text-lg sm:text-xl shadow-lg hover:shadow-2xl transition-all duration-300 font-[Montserrat]"
        >
          Contact Me
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContact}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-4 bg-white mt-2 rounded"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}