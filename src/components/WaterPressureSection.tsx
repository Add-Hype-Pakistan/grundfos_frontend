import Link from "next/link";

const cards = [
  {
    image: "/images/New Villa Owners.png",
    title: "New Villa Owners",
    description: "A pump that grows with your family.",
  },
  {
    image: "/images/Home Renovators.png",
    title: "Home Renovators",
    description: "Breathe new life into your home.",
  },
  {
    image: "/images/Smart Home Enthusiasts.png",
    title: "Smart Home Enthusiasts",
    description: "Upgrade to an intelligent pump.",
  },
];

export default function WaterPressureSection() {
  return (
    <section className="w-full bg-white pt-16 pb-10 px-6 md:pt-24 md:pb-14 md:px-10 lg:pt-35 lg:pb-20 lg:px-30.5">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#11497B] text-2xl md:text-[28px] lg:text-[32px] leading-none tracking-normal mb-6 md:mb-8 lg:mb-10">
        Find your path to a better home
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card) => (
          <div key={card.title} className="flex flex-col gap-3.5">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover"
            />
            <h3 className="font-bold text-[#121212] text-xl md:text-[22px] lg:text-[24px] leading-none tracking-normal">
              {card.title}
            </h3>
            <p className="text-[#121212] text-base md:text-lg lg:text-[20px] font-normal leading-tight tracking-normal">
              {card.description}
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 w-46 h-11.75 py-3.25 bg-[#126AF3] text-white text-base font-normal leading-none rounded-sm no-underline hover:bg-[#0d5acc] transition-colors"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
