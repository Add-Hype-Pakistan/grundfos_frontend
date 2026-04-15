const reasons = [
  {
    title: "Inconsistent Water Pressure",
    description: 'The "too many taps" struggle',
    image: "/images/section-2-image-1.png",
  },
  {
    title: "Malfunctions",
    description: "Another leak, another repair",
    image: "/images/section-2-image-2.png",
  },
  {
    title: "Too Noisy",
    description: "Annoying background noise",
    image: "/images/section-2-image-3.png",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-10 lg:py-35 lg:px-30.25">
      <h2 className="mb-8 md:mb-10 max-w-2xl font-(family-name:--font-grundfos-sans-extd) font-bold text-2xl md:text-[28px] lg:text-[32px] leading-normal tracking-normal text-[#11497B]">
        Most Homeowners Replace Their Pump for the Same 3 Reasons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <div key={reason.title}>
            <div className="overflow-hidden">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-60 sm:h-72 md:h-80 lg:h-105 object-cover"
              />
            </div>
            <h3 className="text-[#121212] text-lg md:text-xl lg:text-2xl font-bold leading-none tracking-normal mt-4">
              {reason.title}
            </h3>
            <p className="text-[#121212] text-base md:text-lg lg:text-xl font-normal leading-none tracking-normal mt-3.5">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
