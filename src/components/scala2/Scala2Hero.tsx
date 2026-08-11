export default function Scala2Hero() {
  return (
    <section className="relative w-full h-screen min-h-100 md:min-h-150 max-h-225 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/thid section bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content — centered */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <h1 className="text-white font-(family-name:--font-grundfos-sans-extd) font-black text-[28px] sm:text-[36px] md:text-[48px] leading-none tracking-[0em] max-w-3xl">
          Not all water pumps are built the same
        </h1>
        <a
          href="#nine-reasons"
          className="mt-7 inline-flex items-center justify-center gap-[7.72px] px-5 py-2.5 h-11.75 bg-[#126AF3] text-white text-sm md:text-base font-normal leading-none tracking-normal rounded-[3.09px] no-underline hover:bg-[#0d5acc] transition-colors"
        >
          Compare SCALA2 with a Traditional Pump
        </a>
      </div>
    </section>
  );
}
