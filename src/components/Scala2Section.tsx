"use client";

import { Button } from "antd";

export default function Scala2Section() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              The Grundfos SCALA2
            </h2>
            <p className="text-base text-[#666666] leading-relaxed">
              The fully integrated water booster pump that provides perfect
              water pressure in every tap. Compact design, intelligent pump
              control, and easy installation make SCALA2 the ideal choice for
              your home.
            </p>
            <Button
              type="primary"
              size="large"
              className="px-8 h-12 text-base font-semibold rounded"
            >
              Learn more
            </Button>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/scala2-product.png"
                alt="Grundfos SCALA2"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
