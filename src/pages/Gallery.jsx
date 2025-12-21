import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import hairRebond from "../assets/hair-rebond.webp";
import gallery1 from "../assets/gallery-1.webp";
import gallery2 from "../assets/gallery-2.webp";
import gallery3 from "../assets/gallery-3.webp";
import gallery4 from "../assets/gallery-4.webp";
import gallery5 from "../assets/gallery-5.webp";

export default function Gallery() {
  const images = [
    gallery1, gallery2, gallery3
  ]

  const images2 = [
    gallery3, gallery4, gallery5
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    spacing: 15,
    loop: true,
    breakpoints: {
      "(min-width: 640px)": { slidesPerView: 2, spacing: 15 },
      "(min-width: 1024px)": { slidesPerView: 4, spacing: 20 },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Optional: Autoplay every 3s
  React.useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Gallery</h2>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="rounded-xl shadow-lg object-cover w-full h-96 md:h-[28rem] lg:h-[32rem]"
              />
            </div>
          ))}
        </div>

        {/* Pagination / Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider?.current?.moveToIdx(idx)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${currentSlide === idx ? "bg-gray-800" : "bg-gray-400 hover:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>

      <section className="py-20 bg-gray-50" id="gallery">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {images2.map((src, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>


    </section>
  );
}
