"use client";

import { useRef, useState } from "react";

const tabs = [
  {
    id: "water",
    label: "Water Pressure",
    heading: "Constant Pressure",
    traditional: {
      image: "/images/water-pressure-left.jpeg",
      caption: "Traditional pump: Pressure drops as more taps open.",
    },
    scala2: {
      image: "/images/water-pressure-right.mp4",
      caption:
        "SCALA2: Automatically adjusts to maintain steady pressure across up to 8 taps.",
    },
  },
  {
    id: "sound",
    label: "Sound",
    heading: "Ultra-Quiet Operation",
    traditional: {
      image: "/images/sound-left.png",
      caption: "Traditional pump: Loud operation and vibration can disturb the home.",
      audio: "/images/water-pump-running-01.mp3",
      volume: 1,
    },
    scala2: {
      image: "/images/sound-right.png",
      caption:
        "SCALA2: Typical noise level of 44 dB(A), designed to operate quietly in everyday use.",
      audio: "/images/Scala_2_Motor.mp3",
      volume: 1,
    },
  },
  {
    id: "energy",
    label: "Energy Efficiency",
    heading: "Smarter Energy Use",
    traditional: {
      image: "/images/energy-eff-left.png",
      caption:
        "Traditional pump: Fixed-speed operation can use more power than the moment requires.",
    },
    scala2: {
      image: "/images/energy-eff-right.png",
      caption:
        "SCALA2: Adjusts output to demand, helping reduce energy consumption by up to 40%.",
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

  const toggleAudio = (key: string, src: string, volume = 1) => {
    if (playing === key) {
      stopAudio();
      return;
    }
    audioRef.current?.pause();
    const audio = new Audio(src);
    audio.volume = volume;
    audio.onended = () => setPlaying(null);
    audioRef.current = audio;
    audio.play();
    setPlaying(key);
  };

  const selectTab = (i: number) => {
    stopAudio();
    setActive(i);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      {/* Heading */}
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[48px] leading-normal tracking-normal">
        See the difference in everyday home use
      </h2>
      <p className="mt-4 text-center text-[#092844] text-base md:text-lg lg:text-[24px] font-semibold leading-normal tracking-normal max-w-3xl mx-auto">
        Traditional pumps operate at a fixed speed. SCALA2 adapts to real-time
        demand to deliver constant pressure, ultra-quiet operation, and up to 40%
        energy savings in one compact unit.
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
        <h3 className="font-extrabold text-[#092844] text-lg md:text-xl lg:text-[23.5px] leading-normal tracking-normal mb-6">
          {tab.heading}
        </h3>

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
                  onClick={() =>
                    toggleAudio(panel.caption, panel.audio!, panel.volume ?? 1)
                  }
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label={`Play ${panel.caption}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 group-hover:bg-white/35 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      {playing === panel.caption ? (
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

        {/* Captions (centered under each media) */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            <span className="justify-self-center text-center inline-block bg-[#F5F6F8] text-black text-sm md:text-base font-normal leading-normal px-3 py-1.5 rounded">
              {tab.traditional.caption}
            </span>
            <span className="justify-self-center text-center inline-block bg-[#F5F6F8] text-black text-sm md:text-base font-normal leading-normal px-3 py-1.5 rounded">
              {tab.scala2.caption}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
