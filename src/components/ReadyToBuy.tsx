"use client";

import { useState } from "react";
import Link from "next/link";
import ConsultationFormModal from "@/components/ConsultationFormModal";

export default function ReadyToBuy() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="relative w-full h-auto md:h-154.25 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/ready-to-buy-bg.png"
          alt="Ready to buy background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-44.25">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-white leading-none tracking-normal mb-5">
          Ready to Buy?
        </h2>
        <p className="text-white text-base md:text-xl lg:text-2xl font-normal leading-normal tracking-normal max-w-lg mb-5">
          Your comfort is our priority. That is why every SCALA2 comes with a 2-year warranty, giving you total peace of mind from day one.
        </p>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link
            href="/customer-support#installation-support"
            className="inline-flex items-center justify-center px-6 h-11.75 py-3.25 bg-white text-[#126AF3] text-base font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-gray-100 transition-colors"
          >
            Find a dealer near you
          </Link>
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center justify-center text-white text-base font-normal leading-none tracking-normal hover:opacity-80 transition-opacity"
          >
            Book Home Consultation
          </button>
        </div>
      </div>

      <ConsultationFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </section>
  );
}
