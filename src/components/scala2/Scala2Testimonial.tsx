"use client";

import { useState } from "react";
import Link from "next/link";
import VideoLightbox from "@/components/VideoLightbox";

export default function Scala2Testimonial() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full min-h-125 md:min-h-150 lg:h-163 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/infact.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-125 md:min-h-150 lg:min-h-163 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <blockquote className="text-white text-xl md:text-2xl lg:text-[32px] font-normal leading-snug tracking-normal max-w-4xl">
          Infact we have completely forgotten that we have a pump at all which I
          think is the biggest statement of all. It&rsquo;s so nice to be able to
          just open the tap, and the water comes out as if it were on mains
          pressure. Whereas before you&rsquo;d open the tap, wait a few seconds
          for the burst, then adjust the tap and so on. Also we can now have
          multiple showers running at the same time, or have a shower whilst the
          gardener is watering etc, which was always problematic before as the
          pressure would fluctuate a lot.
        </blockquote>

        <p className="mt-8 text-white/80 text-sm md:text-base font-normal leading-normal tracking-normal">
          Nial , Villa homeowner At Arabian ranches &mdash; UAE
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm hover:bg-white hover:text-[#11497B] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch SCALA2 in Action
          </button>
          <Link
            href="https://www.amazon.ae/SCALA2-Smart-Water-Pump-Villas-Grundfos/dp/B089T47194/ref=sr_1_2?crid=2J4KTASRR8AEP&dib=eyJ2IjoiMSJ9.sA4Qstv6E2qPDccCtmmaaTFFY8yJ2eWCDBiMTX5HFMrr47L3axk9q-cLSM93iUXkGKEHrEbvoXOuPETNPqkUdWQJX4FpmDzE46msC1Pm5vwVs2pj0wf7h5gDOWjRmPrcHThkld21z5ilCaJ36qlXShTMIdoAToLp0YB_-Vv0TP4TQKkdFEegMx7tA-JG1ktqmv4dtOwHI2KE8TojxUbVhyteToI6nYIm68XTtAYYl-8.4SnQZ5Y-VtjTarClniFh_jBagNteWMT5B1YVb73hksU&dib_tag=se&keywords=SCALA2&qid=1779434125&sprefix=scala%2Caps%2C206&sr=8-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white text-base font-normal leading-none tracking-normal no-underline hover:opacity-80 transition-opacity"
          >
            Get SCALA2 Now
          </Link>
        </div>
      </div>

      <VideoLightbox
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        src="/images/Scala2_Website_video.mp4"
      />
    </section>
  );
}
