// Label positions are percentages of the image cluster (top-left anchor).
// Tweak x / y to move a label; `reveal` ties it to the image it appears for.
const labels = [
  {
    id: "bath",
    x: -15,
    y: 18,
    align: "text-left",
    items: "items-start",
    reveal: "peer-hover/bath:opacity-100",
    line: "w-60 h-10 border-b border-l", // bottom-left corner; widen w-* to lengthen the line (runs right toward the shower)
    title: "Bathroom",
    description: "Enjoy powerful showers with steady water pressure every time.",
  },
  {
    id: "garden",
    x: 112,
    y: 8,
    align: "text-right",
    items: "items-end",
    reveal: "peer-hover/garden:opacity-100",
    line: "w-60 h-10 border-b border-r", // bottom-right corner; widen w-* to lengthen the line (runs left toward the garden)
    title: "Garden",
    description:
      "Water your garden smoothly without pressure drops or interruptions.",
  },
  {
    id: "kitchen",
    x: 78,
    y: 69,
    align: "text-right",
    items: "items-end",
    reveal: "peer-hover/kitchen:opacity-100",
    line: "w-[440px] h-20 border-b border-r", // ┘ : h-* = vertical drop, w-* = horizontal reach left toward the kitchen
    title: "Kitchen",
    description: "Run multiple taps and appliances without losing water pressure.",
  },
];

export default function InteractiveVillaExperience() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Interactive-Villa-Experience-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-center text-3xl md:text-4xl lg:text-5xl leading-none tracking-normal mb-10 md:mb-14 lg:mb-16">
          Explore your villa. See how SCALA2 improves everyday comfort.
        </h2>
        <div className="relative w-full max-w-[800px] aspect-[4/3]">
          {/* ── Images (peers drive their own label) ── */}

          {/* Shower — center (middle) */}
          <div className="peer/bath group absolute left-[20%] top-[10%] z-20 w-[55%] hover:z-40">
            <img
              src="/images/2.png"
              alt="Shower with steady water pressure"
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.25]"
            />
          </div>

          {/* Garden watering — top-right (front) */}
          <div className="peer/garden group absolute right-0 top-0 z-30 w-[42%] hover:z-40">
            <img
              src="/images/3.png"
              alt="Watering the villa garden"
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.25]"
            />
          </div>

          {/* Kitchen — bottom-left (back) */}
          <div className="peer/kitchen group absolute bottom-0 left-0 z-10 w-[40%] hover:z-40">
            <img
              src="/images/1.png"
              alt="Modern villa kitchen"
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.25]"
            />
          </div>

          {/* ── Labels (positioned by x/y %, revealed on matching image hover) ── */}
          {labels.map((label) => (
            <div
              key={label.id}
              style={{ left: `${label.x}%`, top: `${label.y}%` }}
              className={`pointer-events-none absolute z-40 hidden xl:flex flex-col w-40 md:w-44 ${label.items} ${label.align} opacity-0 ${label.reveal} transition-opacity duration-300`}
            >
              <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                {label.title}
              </h3>
              <p className="mt-1 text-white/90 text-xs md:text-sm leading-snug">
                {label.description}
              </p>
              <div
                className={`mt-3 border-dotted border-white/70 ${label.line}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
