"use client";

import Image from "next/image";
import { Tooltip } from "antd";

const hotspots = [
  {
    id: 1,
    x: 65,
    y: 29.5,
    targetX: 52.5,
    icon: "/images/1.svg",
    label: "Constant Water Pressure",
    description:
      "The SCALA2 is the ultimate solution for homeowners dealing with low or fluctuating water pressure in the home.",
  },
  {
    id: 2,
    x: 18,
    y: 41,
    targetX: 28,
    icon: "/images/2.svg",
    label: "Quiet operation",
    description:
      "Very quiet operation similar to a modern dishwasher.",
  },
  {
    id: 3,
    x: 67,
    y: 50,
    targetX: 55.5,
    icon: "/images/3.svg",
    label: "Upto 8 Taps",
    description:
      "SCALA2 is designed to power up to eight outlets simultaneously without a single drop in pressure.",
  },
  {
    id: 4,
    x: 54,
    y: 73,
    targetX: 44,
    icon: "/images/4.svg",
    label: "Energy Efficient",
    description: "SCALA2 automatically adjusts its power to match your home's water use, reducing energy waste while keeping water pressure steady and efficient.",
  },
];

export default function ExploreScala2() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block w-full h-auto"
      >
        <source src="/images/illustrated%20ellivation_Main_3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Connecting lines */}
      {hotspots.map((spot) => {
        const lineStart = Math.min(spot.x, spot.targetX);
        const lineWidth = Math.abs(spot.x - spot.targetX);
        return (
          <div
            key={`line-${spot.id}`}
            style={{
              left: `${lineStart}%`,
              top: `${spot.y}%`,
              width: `${lineWidth}%`,
              backgroundImage: "url(/images/line.svg)",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "left center",
            }}
            className="absolute z-10 h-0.5 -translate-y-1/2 pointer-events-none"
          />
        );
      })}

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <Tooltip
          key={spot.id}
          color="white"
          placement="top"
          styles={{
            root: { maxWidth: "none" },
            container: { maxWidth: "none" },
          }}
          title={
            <div className="p-1 text-black w-90">
              <div className="font-(family-name:--font-grundfos-sans-extd) font-bold text-base mb-1">
                {spot.label}
              </div>
              <div className="text-sm font-light leading-snug">
                {spot.description}
              </div>
            </div>
          }
        >
          <button
            type="button"
            aria-label={spot.label}
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer hover:scale-110 transition-transform"
          >
            
            <Image
              src={spot.icon}
              alt=""
              width={40}
              height={40} //height
              className="w-full h-full"
            />
          </button>
        </Tooltip>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 md:gap-3 lg:gap-3.5 px-5 py-6 md:px-10 md:py-16 lg:px-16 lg:py-20 pointer-events-none">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-lg md:text-xl lg:text-[24px] leading-none tracking-normal">
          Explore SCALA2
        </h2>
        <p className="text-white text-sm md:text-base lg:text-[20px] font-light leading-none tracking-normal">
          Hover on the points to learn more about SCALA2
        </p>
      </div>
    </section>
  );
}
