import Link from "next/link";

const problems = [
  {
    image: "/images/Inconsistent-Water-Pressure.png",
    title: "Inconsistent Water Pressure",
    description:
      "Multiple taps running? Expect weak flow especially in multi-floor villas",
  },
  {
    image: "/images/Too-Noisy%20-Pump.png",
    title: "Too Noisy Pump",
    description: "Background noise that disrupts your comfort day and night.",
  },
  {
    image: "/images/High-Energy-Consumption.png",
    title: "High Energy Consumption",
    description: "Runs at maximum energy leading to high electricity costs",
  },
];

export default function PumpProblems() {
  return (
    <section className="w-full bg-white px-10 py-16 md:px-12 md:py-20 lg:px-16.25 lg:py-28.5">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[33.47px] leading-normal tracking-normal max-w-4xl lg:max-w-none lg:whitespace-nowrap mx-auto">
        Most Homeowners Don&rsquo;t Upgrade Their Pump &mdash; Until{" "}
        <br className="hidden lg:block" />
        It Becomes a Daily Problem
      </h2>
      <p className="mt-5 text-center text-[#092844] text-base md:text-lg lg:text-[20.92px] font-normal leading-normal tracking-normal max-w-3xl lg:max-w-none lg:whitespace-nowrap mx-auto">
        In fact, most people replace their pump for the same 3 reasons &mdash;
        issues that affect comfort every single day
      </p>

      <div className="mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-8 pb-16">
        {problems.map((problem) => (
          <div key={problem.title} className="group relative w-full">
            <div className="overflow-hidden">
              <img
                src={problem.image}
                alt={problem.title}
                className="w-full aspect-418/506 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 lg:-bottom-16 w-66 max-w-[calc(100%-2rem)] min-h-36 flex flex-col justify-between bg-black/80 rounded-sm p-4">
              <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-lg md:text-[21.46px] leading-normal tracking-normal">
                {problem.title}
              </h3>
              <p className="text-white text-xs md:text-[13.41px] font-normal leading-normal tracking-normal">
                {problem.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-[8.75px] w-[236.39px] h-[42.76px] py-[11.38px] bg-[#126AF3] text-white text-[15.17px] font-normal leading-normal tracking-normal rounded-[3.5px] no-underline hover:bg-[#0d5acc] transition-colors"
        >
          Why Water Pressure Drops
        </Link>
      </div>
    </section>
  );
}
