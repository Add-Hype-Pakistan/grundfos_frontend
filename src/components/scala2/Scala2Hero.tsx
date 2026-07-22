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
          Not all water pumps are build the same
        </h1>
        {/* <a
          href="/files/Grundfos_SCALA2_Technical_Brochure_1.pdf"
          download
          className="mt-7 inline-flex items-center justify-center px-6 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-white hover:text-[#11497B] transition-colors"
        >
          Discover Your Solution
        </a> */}
      </div>
    </section>
  );
}
