  import React, { useState } from "react";
  import { useKeenSlider } from "keen-slider/react";
  import "keen-slider/keen-slider.min.css";
  import hairRebond from "../assets/hair-rebond.webp";

  export default function Gallery() {
    const images = [
      hairRebond,hairRebond,hairRebond,hairRebond,hairRebond
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
                  className="rounded-xl shadow-lg object-cover w-full h-64 md:h-72 lg:h-80"
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
      </section>
    );
  }
