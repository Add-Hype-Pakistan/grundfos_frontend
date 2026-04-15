"use client";

import { Button } from "antd";

export default function WaterPressureSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image Side */}
        <div className="relative aspect-square lg:aspect-auto bg-gray-800">
          <img
            src="/images/water-pressure.jpg"
            alt="Constant Water Pressure - Shower head"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Content Side */}
        <div className="bg-[#1a1a2e] flex items-center px-8 lg:px-16 py-16">
          <div className="space-y-6">
            <p className="text-sm text-[#0068b4] font-semibold uppercase tracking-wide">
              Grundfos SCALA2
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Constant Water Pressure
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Enjoy constant water pressure throughout your home. The Grundfos
              SCALA2 automatically adjusts its performance based on your
              household water demand, ensuring consistent pressure at every tap.
            </p>
            <Button
              type="primary"
              size="large"
              className="px-8 h-12 text-base font-semibold rounded"
            >
              Discover more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
