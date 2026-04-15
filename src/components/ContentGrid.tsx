"use client";

import { RightOutlined } from "@ant-design/icons";

const gridItems = [
  {
    title: "Smart homes need smart water solutions",
    image: "/images/grid/smart-home.jpg",
    span: "lg:col-span-1",
  },
  {
    title: "Sustainable living starts with water",
    image: "/images/grid/sustainable-living.jpg",
    span: "lg:col-span-1",
  },
  {
    title: "Innovation in every detail",
    image: "/images/grid/innovation.jpg",
    span: "lg:col-span-1",
  },
  {
    title: "Built for the future",
    image: "/images/grid/future.jpg",
    span: "lg:col-span-1",
  },
];

export default function ContentGrid() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer aspect-[3/4] ${item.span}`}
            >
              <div className="absolute inset-0 bg-gray-600">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 mt-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <RightOutlined className="text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
