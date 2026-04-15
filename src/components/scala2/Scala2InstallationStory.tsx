"use client";

export default function Scala2InstallationStory() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src="/images/scala2/installation-story.png"
        alt="Ross - Real installation story"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content — bottom left */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[400px] md:min-h-[500px] px-6 py-10 md:px-10 lg:px-16">
        <p className="text-white text-sm font-semibold mb-1">SCALA2</p>
        <p className="text-white text-base md:text-lg font-bold mb-1">
          A Real Installation Story
        </p>
        <p className="text-white/70 text-xs md:text-sm mb-6">
          Ross - Villas with 3+ bedrooms
        </p>

        {/* Quote — right side on desktop */}
        <div className="md:absolute md:bottom-10 md:right-16 lg:right-24">
          <p className="text-white text-lg md:text-2xl lg:text-3xl font-light italic max-w-xs md:max-w-sm">
            &ldquo;Previously, we used to hear the pump&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
