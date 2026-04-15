import Image from "next/image";

const panels = [
  {
    label: "Traditional Pump",
    description: "Fluctuation in water pressure causes rise in energy bills",
    image: "/images/scala2/energy-efficient-traditional.png",
    alt: "Traditional pump energy inefficiency",
  },
  {
    label: "SCALA 2",
    description: "Automatically adjusts its power to match your home's water use",
    image: "/images/scala2/energy-efficient-scala2.jpg",
    alt: "SCALA2 energy efficient operation",
  },
];

export default function Scala2EnergyEfficient() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px] md:min-h-[600px] lg:min-h-[800px]">
      {/* Left panel */}
      <div className="relative flex-1 flex flex-col overflow-hidden min-h-[350px] md:min-h-0">
        <Image
          src={panels[0].image}
          alt={panels[0].alt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col flex-1 px-6 py-10 md:px-10 md:py-14 lg:px-30.25 lg:py-24 justify-between">
          <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-[22px] md:text-[26px] lg:text-[32px] leading-[1] tracking-[0em]">
            Energy Efficient
          </h2>
          <div>
            <p className="font-(family-name:--font-grundfos-sans) font-bold text-white text-[15px] md:text-[17px] lg:text-[20px] leading-[1] tracking-[0em] mb-2">
              {panels[0].label}
            </p>
            <p className="text-white/80 text-[12px] md:text-[13px] lg:text-sm leading-relaxed max-w-[260px]">
              {panels[0].description}
            </p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="relative flex-1 flex flex-col overflow-hidden min-h-[350px] md:min-h-0">
        <Image
          src={panels[1].image}
          alt={panels[1].alt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col flex-1 px-6 py-10 md:px-10 md:py-14 lg:px-30.25 lg:py-24 justify-end">
          <p className="font-(family-name:--font-grundfos-sans) font-bold text-white text-[15px] md:text-[17px] lg:text-[20px] leading-[1] tracking-[0em] mb-2">
            {panels[1].label}
          </p>
          <p className="text-white/80 text-[12px] md:text-[13px] lg:text-sm leading-relaxed max-w-[260px]">
            {panels[1].description}
          </p>
        </div>
      </div>
    </section>
  );
}
