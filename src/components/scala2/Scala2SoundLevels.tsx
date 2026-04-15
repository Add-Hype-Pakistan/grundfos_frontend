"use client";

import { useState } from "react";
import Image from "next/image";

const soundCards = [
  {
    label: "Traditional Pump",
    description: "Loud noise (over 85 dB), similar to a traditional vacuum cleaner",
    image: "/images/scala2/traditional-pump-sound.jpg",
    video: "/videos/scala2/traditional-pump-sound.mp4",
    alt: "Traditional pump making loud noise",
  },
  {
    label: "SCALA 2",
    description: "Very quiet operation (44 dB) similar to a modern dishwasher",
    image: "/images/scala2/scala2-sound.png",
    video: "/videos/scala2/scala2-sound.mp4",
    alt: "SCALA2 quiet operation",
    labelColor: "text-[#126AF3]",
  },
];

export default function Scala2SoundLevels() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 pb-16 md:px-10 md:pb-24 lg:px-30.25 lg:pb-35">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#11497B] text-[22px] md:text-[28px] lg:text-[32px] leading-[1.5] tracking-[0em] mb-4">
        Sound Levels
      </h2>
      <p className="font-normal text-[#171717] text-[16px] md:text-[18px] lg:text-[20px] leading-[1] tracking-[0em] mb-5 max-w-2xl">
        End the loud vibrations with smart pump that&apos;s as quiet as a whisper
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {soundCards.map((card, i) => (
          <div key={card.label}>
            {/* Thumbnail / Video */}
            <div className="relative w-full h-[588px] bg-gray-800 overflow-hidden rounded-sm">
              {playingIndex === i ? (
                <video
                  src={card.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  onEnded={() => setPlayingIndex(null)}
                />
              ) : (
                <>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Play button overlay */}
                  <button
                    onClick={() => setPlayingIndex(i)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label={`Play ${card.label} sound`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white/35 transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                  {/* Sound icon bottom-left */}
                  <div className="absolute bottom-3 left-3 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.8">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  </div>
                </>
              )}
            </div>

            {/* Card label + description */}
            <div className="mt-4">
              <p className={` font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[1] tracking-[0em] mb-2 ${card.labelColor ?? "text-[#171717]"}`}>
                {card.label}
              </p>
              <p className="font-normal text-[#121212] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.4] tracking-[0em]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
