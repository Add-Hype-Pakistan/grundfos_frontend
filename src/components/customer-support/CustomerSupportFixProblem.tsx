const fixCards = [
  {
    image: "/images/Weak%20water%20pressure.png",
    title: "Weak water pressure",
    description: "Improve water pressure in showers, taps and multiple bathrooms",
    linkText: "Fix my water pressure issue",
    href: "#",
  },
  {
    image: "/images/System%20not%20working.png",
    title: "System not working",
    description: "SCALA2 not starting, alarm warning light on, or no water?",
    linkText: "Get help with your pump",
    href: "#",
  },
  {
    image: "/images/Energy%20consumption%20concerns.png",
    title: "Energy consumption concerns",
    description: "Understand SCALA2 power usage and how to optimize performance",
    linkText: "Check energy and performance",
    href: "#",
  },
];

export default function CustomerSupportFixProblem() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <p className="text-[#092844] text-lg md:text-xl lg:text-[29.11px] font-normal leading-snug tracking-normal max-w-2xl mb-10 md:mb-14">
        Quickly fix issues, learn how SCALA2 works, or get in touch with the
        right team
      </p>

      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[32px] leading-none tracking-normal mb-8 md:mb-10">
        Fix a problem
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {fixCards.map((card) => (
          <div
            key={card.title}
            className="relative aspect-417/499 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
              <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-lg md:text-xl lg:text-2xl leading-tight tracking-normal mb-2">
                {card.title}
              </h3>
              <p className="text-[#FFF6F6] text-sm md:text-base lg:text-[22px] font-normal leading-snug tracking-normal mb-3">
                {card.description}
              </p>
              <a
                href={card.href}
                className="inline-block text-[#FFF6F6] text-sm md:text-base lg:text-[20px] font-normal underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
