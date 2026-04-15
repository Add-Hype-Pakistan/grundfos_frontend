"use client";

import { RightOutlined } from "@ant-design/icons";

export default function WorldEnvironmentDay() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <p className="text-sm text-[#0068b4] font-semibold uppercase tracking-wide">
              World Environment & Water Day
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
              Rising tide: why water is everyone&apos;s business
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#0068b4] font-semibold hover:underline no-underline"
            >
              Read more <RightOutlined className="text-xs" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
            <img
              src="/images/environment-day.jpg"
              alt="World Environment & Water Day"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
