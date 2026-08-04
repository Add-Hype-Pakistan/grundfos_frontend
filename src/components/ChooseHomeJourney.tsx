const cards = [
  {
    image: "/images/Choose-The-Home-Journey-1.png",
    tag: "New Villa Owners",
    title: "Check the essentials before you move in and avoid pressure problems later.",
    linkText: "Download the Move-In Checklist",
    href: "/files/Grundfos_Guide_1_New_Villa_Move_In_Checklist.pdf",
  },
  {
    image: "/images/Choose-The-Home-Journey-2.png",
    tag: "Home Renovators",
    title: "Plan the water system before the finishes go in.",
    linkText: "Download the Renovation Planning Guide",
    href: "/files/Grundfos_Guide_2_Villa_Renovation_Planning_Guide.pdf",
  },
  {
    image: "/images/Choose-The-Home-Journey-3.png",
    tag: "Smart Home Upgrade",
    title: "Smart pressure boosting that adapts instantly to your home's water demand.",
    linkText: "Download the Smart Home Upgrade Guide",
    href: "/files/Grundfos_Guide_3_Smart_Home_Upgrade_Guide.pdf",
  },
];

export default function ChooseHomeJourney() {
  return (
    <section className="w-full bg-white p-10 md:p-12 lg:p-16.25">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-3xl md:text-4xl lg:text-5xl leading-none tracking-normal mb-4 md:mb-5">
        Better home comfort starts with the right water system
      </h2>
      <p className="text-center text-[#092844] text-base md:text-lg lg:text-xl font-normal leading-normal tracking-normal max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16">
        Whether you are moving into a new villa, renovating, or upgrading to a
        smarter home, choose your journey and get the guidance you need.
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

