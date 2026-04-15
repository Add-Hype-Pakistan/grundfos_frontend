"use client";

export default function Scala2WaterPressure() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[800px] overflow-hidden">
      {/* Background video */}
      <video
        src="/videos/scala2/water-pressure-shower.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 py-12 md:px-10 md:py-16 lg:px-30.25 lg:py-24 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Heading top-left */}
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-[22px] md:text-[26px] lg:text-[32px] leading-[1] tracking-[0em] mb-auto">
          Water Pressure
        </h2>

        {/* Two columns at the bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-auto pt-10 md:pt-16 lg:pt-20">
          <div>
            <p className="font-(family-name:--font-grundfos-sans) font-bold text-white text-[15px] md:text-[17px] lg:text-[20px] leading-[1] tracking-[0em] mb-2">
              Traditional Pump
            </p>
            <p className="text-white/80 text-[12px] md:text-[13px] lg:text-sm leading-relaxed">
              Water pressure gradually drops when more than one tap is opened
            </p>
          </div>
            <div className="flex flex-col items-left px-0 md:px-8 lg:px-30">
            <p className="font-(family-name:--font-grundfos-sans) font-bold text-white text-[15px] md:text-[17px] lg:text-[20px] leading-[1] tracking-[0em] mb-2">
              SCALA 2
            </p>
            <p className="text-white/80 text-[12px] md:text-[13px] lg:text-sm leading-relaxed max-w-[280px]">
              Stable pressure even when multiple taps are used at the same time
              (up to 8 taps)
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
