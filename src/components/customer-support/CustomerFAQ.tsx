"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is SCALA2 compatible with water tanks and municipal water?",
    a: "Yes, in most cases the SCALA2 will drastically improve pressure even with old pipes. However, we always recommend checking for major scale blockages first.",
  },
  {
    q: "Is SCALA2 suitable for villas?",
    a: "Significantly. Because it is water-cooled, it eliminates the loud fan noise and vibration typical of older UAE pumps. It is about as quiet as a modern dishwasher.",
  },
  {
    q: "Does SCALA2 require regular maintenance?",
    a: "It is designed to maintain constant pressure even if up to 8 taps are open at the same time, making it perfect for large villas and busy families.",
  },
  {
    q: "What is the warranty on SCALA2?",
    a: "No, it is incredibly compact. By removing your old, bulky pressure tank and replacing it with the all-in-one SCALA2, you will actually gain storage space.",
  },
];

export default function CustomerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#11497B] text-2xl md:text-3xl lg:text-[33.1px] leading-none tracking-normal mb-10 md:mb-12">
        Customer FAQ Library
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className="border border-[#092844] rounded-md">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-bold text-[#092844] text-base md:text-lg lg:text-[20.69px] leading-tight">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-2xl leading-none text-[#092844]">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm md:text-base text-[#171717] leading-snug">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/Illustrations.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
}
