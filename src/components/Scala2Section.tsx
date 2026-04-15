export default function Scala2Section() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/scal2-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end gap-2 h-full px-5 py-8 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <span className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-lg md:text-xl lg:text-[24px] leading-none tracking-normal">
          SCALA2
        </span>
        <h2 className="font-bold text-lg md:text-xl lg:text-[24px] text-white leading-none tracking-normal">
          A Real Installation Story
        </h2>
        <p className="text-white text-sm md:text-base lg:text-[20px] font-normal leading-none tracking-normal">
          Ross - Villas with 3+ bedrooms
        </p>
      </div>
    </section>
  );
}
