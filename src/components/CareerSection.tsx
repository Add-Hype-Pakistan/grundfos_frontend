"use client";

import { RightOutlined } from "@ant-design/icons";

const people = [
  {
    name: "Sarah Jensen",
    role: "Engineer",
    image: "/images/careers/person1.jpg",
  },
  {
    name: "Ahmed Hassan",
    role: "Technician",
    image: "/images/careers/person2.jpg",
  },
  {
    name: "Maria Santos",
    role: "Designer",
    image: "/images/careers/person3.jpg",
  },
];

export default function CareerSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Find your path to a better future
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gray-500">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-medium opacity-80">
                  {person.role}
                </p>
                <h3 className="text-white text-xl font-bold mt-1">
                  {person.name}
                </h3>
                <div className="flex items-center gap-2 mt-3 text-white text-sm">
                  Read their story{" "}
                  <RightOutlined className="text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
