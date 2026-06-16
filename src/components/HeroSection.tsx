"use client";

import { useState } from "react";
import Link from "next/link";
import VideoLightbox from "@/components/VideoLightbox";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-100 md:min-h-150 max-h-225 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-new-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content — centered below navbar */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <h1 className="text-white font-(family-name:--font-grundfos-sans-extd) font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-normal">
          Tired of Weak Water Pressure and <br />
          Noisy Pumps?
        </h1>
        <p className="mt-5 text-white text-base md:text-lg lg:text-xl font-normal leading-normal tracking-normal max-w-2xl lg:max-w-none lg:whitespace-nowrap">
          Enjoy quiet, steady water pressure throughout your villa while reducing
          energy waste
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-white hover:text-[#11497B] transition-colors"
          >
            Discover Your Solution
          </Link>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center gap-2 text-white text-base font-normal leading-none tracking-normal hover:opacity-80 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch SCALA2 in Action
          </button>
        </div>
      </div>

      {/* Video Lightbox */}
      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="/images/thid section bg.mp4"
      />
    </section>
  );
}
