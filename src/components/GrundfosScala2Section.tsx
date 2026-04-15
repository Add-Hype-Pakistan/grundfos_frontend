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
      <div className="absolute left-4 right-4 bottom-4 md:left-auto md:w-[60%] md:bottom-6 md:right-6 lg:w-162 lg:bottom-10.25 lg:right-16 rounded-[10px] bg-[#00000099] backdrop-blur-md p-5 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-xl md:text-2xl lg:text-[32px] leading-tight lg:leading-none tracking-normal">
          The Grundfos SCALA2
        </h2>
        <p className="text-white text-sm md:text-base lg:text-[20px] font-normal leading-snug lg:leading-none tracking-normal">
          The Grundfos SCALA2 pressure booster provides homeowners with consistent water pressure, ensuring a steady flow.
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2.5 w-46 h-11.75 py-3.25 bg-white text-[#126AF3] text-base font-normal leading-none rounded-sm no-underline hover:bg-gray-100 transition-colors mt-2"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
