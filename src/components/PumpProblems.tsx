const problems = [
  {
    image: "/images/Inconsistent-Water-Pressure.jpg",
    title: "Inconsistent Water Pressure",
    description:
      "Open a second tap and the flow weakens—especially on upper floors.",
  },
  {
    image: "/images/domestic_pump.jpeg",
    title: "Loud Pump Noise",
    description:
      "Constant humming and vibration can disturb your comfort, day and night.",
  },
  {
    image: "/images/High%20Energy%20Consumption.jpeg",
    title: "High Energy Consumption",
    description:
      "Traditional pumps can run at full power even when demand is low, increasing electricity costs.",
  },
];

export default function PumpProblems() {
  return (
    <section className="w-full bg-white px-10 py-16 md:px-12 md:py-20 lg:px-16.25 lg:py-28.5">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[33.47px] leading-normal tracking-normal max-w-4xl lg:max-w-none lg:whitespace-nowrap mx-auto">
        Most homeowners upgrade their pump for the same 3 reasons
      </h2>

      <div className="mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="group relative w-full overflow-hidden rounded-sm"
          >
            <img
              src={problem.image}
              alt={problem.title}
              className="w-full aspect-418/506 max-h-125 lg:max-h-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-lg md:text-[21.46px] leading-normal tracking-normal whitespace-pre-line">
                {problem.title}
              </h3>
              <p className="mt-2 text-white text-xs md:text-[13.41px] font-normal leading-normal tracking-normal">
                {problem.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-14 lg:mt-16 flex justify-center">
        <a
          href="/files/Guide_3_Why_Pressure_Drops_V2_Option_A.pdf"
          download
          className="inline-flex items-center justify-center gap-[8.75px] h-11.75 py-3.25 px-6 bg-[#126AF3] text-white text-base font-normal leading-normal tracking-normal rounded-[3.5px] no-underline hover:bg-[#0d5acc] transition-colors"
        >
          Diagnose Your Water Pressure Drop
        </a>
      </div>
    </section>
  );
}
