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
      <div className="absolute inset-0 z-10 grid place-items-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <h1 className="text-white text-center font-(family-name:--font-grundfos-sans-extd) font-black text-[28px] sm:text-[36px] md:text-[48px] leading-[1] tracking-[0em] max-w-3xl">
          Not all water pumps are built the same
        </h1>
      </div>
    </section>
  );
}
