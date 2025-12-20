import sasuke from "../assets/sasuke-fukuhara.webp";
import award from "../assets/sasuke-award.webp";
import { useState, useEffect } from "react";

export default function AboutSalon() {
  const [showFull, setShowFull] = useState(false);

  // 🔥 HANDLE PHONE BACK BUTTON
  useEffect(() => {
    if (showFull) {
      // push fake state para hindi mag-back page
      window.history.pushState({ modal: true }, "");
    }

    const handleBack = (event) => {
      if (showFull) {
        event.preventDefault();
        setShowFull(false);
      }
    };

    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, [showFull]);

  // ❗ Optional: disable scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showFull ? "hidden" : "auto";
  }, [showFull]);

  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={sasuke}
            alt="Sasuke Fukuhara"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sasuke Fukuhara
          </h2>
          <p className="text-gray-600 mb-4">
            I’m <strong>Sasuke Fukuhara</strong> a hairstylist with 12 years of experience, and yes... I’ve seen things.
            I’ve survived rebond fails, orange hair disasters, DIY bleach experiments, and bangs that should’ve never existed and through all of it, I stayed committed to one mission:
            fix your hair, save your confidence, and give you a reason to take selfies again.
          </p>
          <p className="text-gray-600 mb-4">
            Want hair straighter than your life decisions?
            <strong> Rebond!</strong>
          </p>
          <p className="text-gray-600 mb-4">
            Need hair smooth even if your week was rough?
            <strong> Keratin!</strong>
          </p>
          <p className="text-gray-600 mb-4">
            Want curl-by-iron so your personality finally pops?
            <strong> Say no more!</strong>
          </p>
          <p className="text-gray-600 mb-4">
            After 12 years, trust me your hair is safe, your confidence is going up, and most importantly… I’m not turning you into a meme!
          </p>

          {/* Award Thumbnail */}
          <div className="md:w-1/2">
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-lg mt-10 cursor-pointer">
              <img
                src={award}
                alt="Sasuke Fukuhara"
                onClick={() => setShowFull(true)}
                className="transform transition duration-500 hover:scale-105"
              />
            </div>

            {/* Fullscreen Modal */}
            {showFull && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
                onClick={() => setShowFull(false)}
              >
                <div
                  className="relative max-w-4xl w-full px-6"
                  onClick={(e) => e.stopPropagation()} // prevent close pag cliniclick ang image area
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold"
                    onClick={() => setShowFull(false)}
                  >
                    &times;
                  </button>

                  {/* Image */}
                  <img
                    src={award}
                    alt="Sasuke Fukuhara"
                    className="w-full max-h-[90vh] object-contain rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
