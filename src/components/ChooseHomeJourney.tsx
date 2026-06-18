const cards = [
  {
    image: "/images/Choose-The-Home-Journey-1.png",
    tag: "New Villa Owner",
    title: "Start with the right water pressure from day one",
    description: "Avoid weak showers and pressure issues after moving in",
    linkText: "See Your Move-in Checklist",
    href: "/files/Grundfos_SCALA2_Brochure.pdf",
  },
  {
    image: "/images/Choose-The-Home-Journey-2.png",
    tag: "Home Renovators",
    title:
      "Water Pressure. Right From the Start or Why Water Pressure Should Never Be an Afterthought",
    description: "Plan your water system before renovation starts",
    linkText: "Get the Planning Guide",
    href: "/files/Grundfos_SCALA2_Technical_Brochure_1.pdf",
  },
  {
    image: "/images/Choose-The-Home-Journey-3.png",
    tag: "Smart Home Enthusiasts",
    title: "Upgrade to a Smarter Water System",
    description:
      "Smart control, steady pressure, and energy savings—without complexity",
    linkText: "Upgrade Your Water System",
    href: "/files/Grundfos_SCALA2_Technical_Brochure_Option_B.pdf",
  },
];

export default function ChooseHomeJourney() {
  return (
    <section className="w-full bg-white p-10 md:p-12 lg:p-16.25">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-3xl md:text-4xl lg:text-5xl leading-none tracking-normal mb-4 md:mb-5">
        Every Villa Has A Different Need. Find Yours
      </h2>
      <p className="text-center text-[#092844] text-base md:text-lg lg:text-xl font-normal leading-normal tracking-normal max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16">
        New villa. Open walls. Smart home. Every path leads to the same place,
        pressure that never fails, a pump you never hear.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card) => (
          <div key={card.tag} className="flex flex-col">
            <div className="group relative w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.tag}
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <h3 className="absolute bottom-6.75 left-3.5 font-bold text-white text-2xl md:text-[28px] lg:text-[32px] leading-none tracking-normal">
                {card.tag}
              </h3>
            </div>
            <h4 className="mt-5 font-normal text-[#092844] text-lg md:text-xl lg:text-2xl leading-normal tracking-normal">
              {card.title}
            </h4>
            <p className="mt-3 text-[#092844] text-[15px] font-normal leading-[0.99] tracking-normal">
              {card.description}
            </p>
            <a
              href={card.href}
              download
              className="mt-4 inline-block w-fit text-[#092844] text-[15px] font-normal underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              {card.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
// end line

