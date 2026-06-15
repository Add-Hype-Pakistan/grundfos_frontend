import Link from "next/link";

export default function Scala2Testimonial() {
  return (
    <section className="relative w-full min-h-125 md:min-h-150 lg:h-163 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/infact.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-125 md:min-h-150 lg:min-h-163 px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <blockquote className="text-white text-xl md:text-2xl lg:text-[32px] font-normal leading-snug tracking-normal max-w-4xl">
          Infact we have completely forgotten that we have a pump at all which I
          think is the biggest statement of all. It&rsquo;s so nice to be able to
          just open the tap, and the water comes out as if it were on mains
          pressure. Whereas before you&rsquo;d open the tap, wait a few seconds
          for the burst, then adjust the tap and so on. Also we can now have
          multiple showers running at the same time, or have a shower whilst the
          gardener is watering etc, which was always problematic before as the
          pressure would fluctuate a lot.
        </blockquote>

        <p className="mt-8 text-white/80 text-sm md:text-base font-normal leading-normal tracking-normal">
          Nial , Villa homeowner At Arabian ranches &mdash; UAE
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-white hover:text-[#11497B] transition-colors"
          >
            Watch SCALA2 in Action
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center text-white text-base font-normal leading-none tracking-normal no-underline hover:opacity-80 transition-opacity"
          >
            Get SCALA2 Now
          </Link>
        </div>
      </div>
    </section>
  );
}
