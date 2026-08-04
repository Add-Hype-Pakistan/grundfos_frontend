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
          {/* <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm hover:bg-white hover:text-[#11497B] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch SCALA2 in Action
          </button> */}
          <Link
            href="https://www.amazon.ae/Grundfos-SCALA2-Water-Booster-93013322/dp/B08MBTNLGK/ref=pd_sbs_d_sccl_2_1/257-8815241-3123604?pd_rd_w=GXS6z&content-id=amzn1.sym.89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_p=89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_r=E90VKS2P44JYVCNE4F8C&pd_rd_wg=ctZF3&pd_rd_r=d4b29169-9332-4a9c-9133-82894dd3f72c&pd_rd_i=B08MBTNLGK&psc=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-white items-center justify-center text-white text-base font-normal leading-none tracking-normal no-underline hover:opacity-80 transition-opacity px-6 h-11.75 py-3.25"
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
