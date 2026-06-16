"use client";

import { useRef, useState } from "react";

const tabs = [
  {
    id: "water",
    label: "Water Pressure",
    heading: "Water Pressure",
    description:
      "Using traditional pumps leads to water pressure dropping when more taps are opened, whereas if you are using Grundfos SCALA2, the water pressure stays constant",
    traditional: {
      image: "/images/water-pressure-left.png",
      caption: "Traditional Pump: Water pressure drops",
    },
    scala2: {
      image: "/images/water-pressure-right.mp4",
      caption: "SCALA2: Water pressure remains consistent",
    },
  },
  {
    id: "sound",
    label: "Sound",
    heading: "Noise Levels",
    description:
      "A traditional pump is always loud and a nuisance in the house, whereas Grundfos SCALA2 is so silent that you don't even notice it running",
    traditional: {
      image: "/images/sound-left.png",
      caption: "Traditional Pump: Loud and distracting",
      audio: "/images/water-pump-running-01.mp3",
    },
    scala2: {
      image: "/images/sound-right.png",
      caption: "SCALA2: Silent and integrated into the lifestyle",
      audio: "/images/water-pump-running-01.mp3",
    },
  },
  {
    id: "energy",
    label: "Energy Efficiency",
    heading: "Energy Efficiency",
    description:
      "While traditional pump runs at maximum capacity at all times Grundfos SCALA2 optimizes its energy consumption depending on the outlets being used",
    traditional: {
      image: "/images/energy-eff-left.png",
      caption: "Traditional Pumps Fluctuation in water pressure",
    },
    scala2: {
      image: "/images/energy-eff-right.png",
      caption: "SCALA2: Adjusting energy consumption in real time",
    },
  },
];

export default function Scala2PumpComparison() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tab = tabs[active];

  const stopAudio = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setPlaying(null);
  };

  const toggleAudio = (src: string) => {
    if (playing === src) {
      stopAudio();
      return;
    }
    audioRef.current?.pause();
    const audio = new Audio(src);
    audio.onended = () => setPlaying(null);
    audioRef.current = audio;
    audio.play();
    setPlaying(src);
  };

  const selectTab = (i: number) => {
    stopAudio();
    setActive(i);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      {/* Heading */}
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[48px] leading-normal tracking-normal">
        Traditional pump vs SCALA2
      </h2>
      <p className="mt-4 text-center text-[#092844] text-base md:text-lg lg:text-[24px] font-semibold leading-normal tracking-normal max-w-3xl mx-auto">
        While traditional pumps are loud and inconsistent, the SCALA2 adapts to
        your needs, providing constant pressure, whisper-quiet operation, and
        significant energy savings in one sleek, compact unit
      </p>

      {/* Tabs */}
      <div className="mt-10 flex justify-center">
        <div className="flex items-center justify-between w-full max-w-180.75 p-[9.79px] rounded-2xl bg-[#F5F6F8]">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTab(i)}
              className={`px-5 py-[9.79px] rounded-[33.29px] text-sm md:text-base leading-none transition-colors ${
                i === active
                  ? "bg-white text-[#171717] font-medium shadow-sm"
                  : "text-[#737373] hover:text-[#171717]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active tab content */}
      <div className="mt-10">
        <h3 className="font-extrabold text-[#092844] text-lg md:text-xl lg:text-[23.5px] leading-normal tracking-normal mb-3">
          {tab.heading}
        </h3>
        <p className="text-[#092844] text-base md:text-lg lg:text-[23.5px] font-semibold leading-normal tracking-normal mb-6 max-w-4xl">
          {tab.description}
        </p>

        {/* Image / video panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[tab.traditional, tab.scala2].map((panel) => (
            <div
              key={panel.caption}
              className="relative w-full h-72 md:h-96 lg:h-117.5 overflow-hidden rounded-[10px]"
            >
              {panel.image.endsWith(".mp4") ? (
                <video
                  src={panel.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={panel.image}
                  alt={panel.caption}
                  className="w-full h-full object-cover"
                />
              )}

              {panel.audio && (
                <button
                  type="button"
                  onClick={() => toggleAudio(panel.audio!)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label={`Play ${panel.caption}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white/35 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      {playing === panel.audio ? (
                        <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                      ) : (
                        <path className="translate-x-px" d="M8 5v14l11-7z" />
                      )}
                    </svg>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Captions (centered under each media) + centered download button */}
        <div className="relative mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            <span className="justify-self-center text-center inline-block bg-[#F5F6F8] text-black text-sm md:text-base font-normal leading-normal px-3 py-1.5 rounded">
              {tab.traditional.caption}
            </span>
            <span className="justify-self-center text-center inline-block bg-[#F5F6F8] text-black text-sm md:text-base font-normal leading-normal px-3 py-1.5 rounded">
              {tab.scala2.caption}
            </span>
          </div>
          <div className="mt-4 flex justify-center lg:mt-0 lg:absolute lg:inset-0 lg:items-center lg:pointer-events-none">
            <a
              href="/files/Grundfos_SCALA2_Brochure_Option_B.pdf"
              download
              className="inline-flex items-center justify-center gap-[7.72px] px-5 py-2.5 bg-[#126AF3] text-white text-xs md:text-sm font-normal leading-normal rounded-[3.09px] no-underline hover:bg-[#0d5acc] transition-colors lg:pointer-events-auto"
            >
              Download the technical Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
