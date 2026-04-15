export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-100 md:min-h-150 max-h-225 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content — centered below navbar */}
      <div className="absolute inset-0 z-10 grid place-items-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <h1 className="text-white text-center font-(family-name:--font-grundfos-sans-extd) font-black text-3xl sm:text-4xl md:text-[48px] leading-none tracking-normal">
          Possibility in every Drop
        </h1>
      </div>
    </section>
  );
}
