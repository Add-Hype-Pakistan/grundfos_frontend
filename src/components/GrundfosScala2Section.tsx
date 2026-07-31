"use client";

import { useState } from "react";
import VideoLightbox from "@/components/VideoLightbox";

export default function GrundfosScala2Section() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-80 md:h-120 lg:h-153 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/thid section bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Card — bottom-right, responsive */}
      <div className="absolute left-4 right-4 bottom-4 md:left-auto md:w-[60%] md:bottom-6 md:right-6 lg:w-[506px] lg:min-h-59.5 lg:bottom-28 lg:right-16 rounded-[20px] border-y border-white bg-[#280B12]/20 backdrop-blur-md px-6 py-6 lg:px-8 flex flex-col justify-center gap-4 lg:gap-6.25">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-xl md:text-2xl lg:text-[32px] leading-normal tracking-normal">
          Meet SCALA2
        </h2>
        <p className="text-white text-sm md:text-base lg:text-[24px] font-normal leading-normal tracking-normal">
          A smart, all-in-one water pressure system that adapts to your
          villa&rsquo;s demand&mdash;delivering constant pressure, quiet
          operation, and efficient performance.
        </p>
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="inline-flex w-fit items-center gap-2 text-white text-base lg:text-[24px] font-normal leading-normal tracking-normal underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch SCALA2 in Action
        </button>
      </div>

      {/* Video Lightbox */}
      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="https://www.youtube.com/watch?v=ajBwKI9kTo0"
      />
    </section>
  );
}
