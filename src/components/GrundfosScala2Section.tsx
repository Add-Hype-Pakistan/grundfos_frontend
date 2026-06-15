import Link from "next/link";

export default function GrundfosScala2Section() {
  return (
    <section className="relative w-full h-80 md:h-120 lg:h-153 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/thid section bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Card — bottom-right, responsive */}
      <div className="absolute left-4 right-4 bottom-4 md:left-auto md:w-[60%] md:bottom-6 md:right-6 lg:w-[506px] lg:h-[238px] lg:bottom-28 lg:right-16 rounded-[20px] border-y border-white bg-[#280B12]/20 backdrop-blur-md px-6 py-6 lg:px-8 flex flex-col justify-center gap-4 lg:gap-6.25">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-xl md:text-2xl lg:text-[32px] leading-normal tracking-normal">
          The Grundfos SCALA2
        </h2>
        <p className="text-white text-sm md:text-base lg:text-[24px] font-normal leading-normal tracking-normal">
          Modern homes need a smarter water solution not just another pump
        </p>
        <Link
          href="#"
          className="inline-block w-fit text-white text-base lg:text-[24px] font-normal leading-normal tracking-normal underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Get the Guide
        </Link>
      </div>
    </section>
  );
}
