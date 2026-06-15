import Link from "next/link";

export default function WarrantySection() {
  return (
    <section className="relative w-full h-120 sm:h-140 md:h-194.5 overflow-hidden bg-[#11497B]">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/2%20year%20warranty.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/2-year-warranty.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-10 md:pb-24 lg:px-16 lg:pb-35.75">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-xl md:text-2xl text-white leading-none tracking-normal mb-3.25">
          2-year warranty
        </h2>
        <p className="text-white text-xl md:text-2xl font-bold leading-tight tracking-normal max-w-md mb-3.25">
          Tested &amp; Trusted by UAE <br />
          Homeowners
        </p>
        <Link
          href="https://www.amazon.ae/SCALA2-Smart-Water-Pump-Villas-Grundfos/dp/B089T47194/ref=sr_1_2?crid=2J4KTASRR8AEP&dib=eyJ2IjoiMSJ9.sA4Qstv6E2qPDccCtmmaaTFFY8yJ2eWCDBiMTX5HFMrr47L3axk9q-cLSM93iUXkGKEHrEbvoXOuPETNPqkUdWQJX4FpmDzE46msC1Pm5vwVs2pj0wf7h5gDOWjRmPrcHThkld21z5ilCaJ36qlXShTMIdoAToLp0YB_-Vv0TP4TQKkdFEegMx7tA-JG1ktqmv4dtOwHI2KE8TojxUbVhyteToI6nYIm68XTtAYYl-8.4SnQZ5Y-VtjTarClniFh_jBagNteWMT5B1YVb73hksU&dib_tag=se&keywords=SCALA2&qid=1779434125&sprefix=scala%2Caps%2C206&sr=8-2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-46 h-11.75 py-3.25 border border-white text-white text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-white hover:text-[#11497B] transition-colors"
        >
          Buy Now
        </Link>
      </div>
    </section>
  );
}
