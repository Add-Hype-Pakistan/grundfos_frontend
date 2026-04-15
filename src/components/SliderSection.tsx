"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/slider image 1.png",
    title: "Constant Water Pressure",
    description:
      "The SCALA2 is the ultimate solution for homeowners dealing with low or fluctuating water pressure in the home.",
  },
  {
    image: "/images/slider image 2.png",
    title: "Energy efficient",
    description:
      "SCALA2 automatically adjusts its power to match your home's water use, reducing energy waste while keeping water pressure steady and efficient.",
  },
  {
    image: "/images/slider image 3.png",
    title: "Quiet operation",
    description: "Very quiet operation similar to a modern dishwasher.",
  },
];

const AUTOPLAY_MS = 5000;

export default function SliderSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full aspect-video overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Content Card — 648×238 desktop, responsive on mobile */}
      <div
        className="absolute left-4 right-4 bottom-4 md:left-auto md:w-[70%] md:bottom-6 md:right-6 lg:w-162 lg:h-59.5 lg:bottom-10.25 lg:right-16 rounded-[10px] bg-[#00000099] backdrop-blur-md p-5 md:p-6 lg:p-8"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`transition-opacity duration-500 ease-in-out flex flex-col gap-3 lg:gap-4 ${
              i === index ? "opacity-100" : "hidden"
            }`}
          >
            <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-xl md:text-2xl lg:text-[32px] leading-tight lg:leading-none tracking-normal">
              {slide.title}
            </h3>
            <p className="text-white text-sm md:text-base lg:text-[20px] font-normal leading-snug lg:leading-none tracking-normal">
              {slide.description}
            </p>
          </div>
        ))}

        {/* Controls — 50×50 desktop, smaller on mobile */}
        <div className="flex items-center gap-3 mt-4 lg:mt-6">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-9 h-9 lg:w-12.5 lg:h-12.5 rounded-full bg-white/90 hover:bg-white text-[#126AF3] flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-9 h-9 lg:w-12.5 lg:h-12.5 rounded-full bg-[#126AF3] hover:bg-[#0d5acc] text-white flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
