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
        <source src="/images/Explore SCALA2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end gap-2 md:gap-3 lg:gap-3.5 px-5 py-6 md:px-10 md:py-16 lg:px-16 lg:py-20">
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
