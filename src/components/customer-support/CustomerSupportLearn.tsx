const learnCards = [
  {
    image: "/images/For%20homeowners.png",
    title: "For homeowners",
    items: ["Maintenance guide", "Product usage tips"],
  },
  {
    image: "/images/For%20prospects%20%26%20buyers.png",
    title: "For prospects & buyers",
    items: [
      "Product questions",
      "Comparison with other boosting solutions",
      "Pre-purchase clarity (e.g. 2-year warranty)",
    ],
  },
  {
    image: "/images/For%20existing%20customers.png",
    title: "For existing customers",
    items: ["Warranty overview", "Service requests", "Maintenance guide"],
  },
];

export default function CustomerSupportLearn() {
  return (
    <section className="w-full bg-white px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#092844] text-center text-2xl md:text-3xl lg:text-[32px] leading-none tracking-normal mb-8 md:mb-10">
        Learn how SCALA2 works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {learnCards.map((card) => (
          <div
            key={card.title}
            className="relative aspect-481/845 overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
              <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-xl md:text-2xl lg:text-[30px] leading-tight tracking-normal mb-3">
                {card.title}
              </h3>
              <ul className="min-h-18.5 md:min-h-22.5 lg:min-h-28.75 space-y-2 text-[#FFF6F6] text-sm md:text-lg lg:text-2xl font-normal leading-snug tracking-normal">
                {card.items.map((item) => (
                  <li key={item}>&middot; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
