"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DEFAULT_VIDEO = "/images/2-year-warranty.mp4";

type WarrantySectionProps = {
  /** One or more background videos. Multiple videos crossfade as a carousel. */
  videos?: string[];
};

export default function WarrantySection({ videos }: WarrantySectionProps) {
  const sources = videos && videos.length > 0 ? videos : [DEFAULT_VIDEO];
  const isCarousel = sources.length > 1;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);

  // Play the active video from the start; pause the others.
  useEffect(() => {
    sources.forEach((_, i) => {
      const v = videoRefs.current[i];
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.muted = muted;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const toggleMuted = () => {
    const v = videoRefs.current[current];
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  const handleEnded = () => {
    if (isCarousel) setCurrent((c) => (c + 1) % sources.length);
  };

  const goPrev = () =>
    setCurrent((c) => (c - 1 + sources.length) % sources.length);
  const goNext = () => setCurrent((c) => (c + 1) % sources.length);

  return (
    <section className="relative w-full h-120 sm:h-140 md:h-194.5 overflow-hidden bg-[#11497B]">
      {/* Background Video(s) */}
      <div className="absolute inset-0">
        {sources.map((src, i) => (
          <video
            key={src}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            autoPlay={i === 0}
            muted
            loop={!isCarousel}
            playsInline
            preload="auto"
            poster="/images/2%20year%20warranty.png"
            onEnded={handleEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Mute / Unmute toggle */}
      <button
        type="button"
        onClick={toggleMuted}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 text-white border border-white/40 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer"
      >
        {muted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.59 3l2.7-2.7-1.41-1.41-2.7 2.7-2.7-2.7-1.41 1.41 2.7 2.7-2.7 2.7 1.41 1.41 2.7-2.7 2.7 2.7 1.41-1.41-2.7-2.7z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.5 4.5 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z" />
          </svg>
        )}
      </button>

      {/* Carousel arrows */}
      {isCarousel && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous video"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 text-white border border-white/40 backdrop-blur-sm hover:bg-black/55 transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next video"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/30 text-white border border-white/40 backdrop-blur-sm hover:bg-black/55 transition-colors cursor-pointer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Slide indicators (only for carousel) */}
      {isCarousel && (
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center gap-2">
          {sources.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Show video ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-10 md:pb-24 lg:px-16 lg:pb-35.75">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-xl md:text-2xl text-white leading-none tracking-normal mb-3.25">
          2-year warranty
        </h2>
        <p className="text-white text-xl md:text-2xl font-bold leading-tight tracking-normal max-w-md mb-3.25">
          Tested &amp; Trusted by UAE <br />
          Homeowners
        </p>
        <Link
          href="https://www.amazon.ae/Grundfos-SCALA2-Water-Booster-93013322/dp/B08MBTNLGK/ref=pd_sbs_d_sccl_2_1/257-8815241-3123604?pd_rd_w=GXS6z&content-id=amzn1.sym.89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_p=89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_r=E90VKS2P44JYVCNE4F8C&pd_rd_wg=ctZF3&pd_rd_r=d4b29169-9332-4a9c-9133-82894dd3f72c&pd_rd_i=B08MBTNLGK&psc=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-46 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-white hover:text-[#11497B] transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </section>
  );
}
