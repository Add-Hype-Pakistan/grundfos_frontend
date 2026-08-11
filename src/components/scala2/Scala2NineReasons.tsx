const reasons = [
  {
    title: "Stable water pressure",
    traditional: "Pressure gradually drops when more than one tap is opened.",
    scala2: "Stable pressure even with multiple taps in use, up to 8 at once.",
  },
  {
    title: "Noise level",
    traditional: "Loud, over 85 dB, similar to a traditional vacuum cleaner.",
    scala2: "Very quiet at 44 dB, similar to a modern dishwasher.",
  },
  {
    title: "Power consumption",
    traditional: "Runs at full power constantly, resulting in high energy use.",
    scala2: "Smart motor saves power by operating only when needed.",
  },
  {
    title: "Dry run protection",
    traditional: "Continues running without water, leading to damage.",
    scala2: "Stops automatically when water is cut off to avoid damage.",
  },
  {
    title: "Easy installation",
    traditional:
      "Requires additional equipment, tanks and professional installation.",
    scala2: "Compact design with flexible connections, easy to install.",
  },
  {
    title: "Maintenance",
    traditional: "Frequent maintenance and manual priming required.",
    scala2: "Self priming and low maintenance.",
  },
  {
    title: "Error detection",
    traditional: "No alerts, a technician is needed to identify issues.",
    scala2: "Clear warning indicators, no need for a plumber.",
  },
  {
    title: "Pressure control",
    traditional: "No control over pressure levels.",
    scala2: "Customisable pressure settings between 1.5 and 5.5 bar.",
  },
  {
    title: "Leak detection",
    traditional: "No leak detection in the system.",
    scala2: "Detects and alerts you if there is a water leak.",
  },
];

export default function Scala2NineReasons() {
  return (
    <section
      id="nine-reasons"
      className="w-full scroll-mt-24 bg-[#092844] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24"
    >
      {/* Header */}
      <p className="text-[#8FB4DE] text-sm md:text-base font-normal leading-none tracking-normal mb-3">
        Time to retire the old pump
      </p>
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-2xl md:text-3xl lg:text-[40px] leading-tight tracking-normal mb-4">
        Nine reasons the upgrade wins
      </h2>
      <p className="text-white/80 text-base md:text-lg font-normal leading-snug tracking-normal max-w-2xl mb-10 md:mb-12">
        The pump behind your taps has not changed in decades. Here is what
        changes when it does.
      </p>

      {/* Reason cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-lg bg-white p-5 md:p-6">
            <h3 className="font-bold text-[#092844] text-base md:text-lg leading-snug mb-4">
              {r.title}
            </h3>
            <div className="mb-4">
              <p className="font-bold text-[#092844] text-sm mb-1">
                Traditional pump
              </p>
              <p className="text-[#4a5b6b] text-sm leading-snug">
                {r.traditional}
              </p>
            </div>
            <div>
              <p className="font-bold text-[#092844] text-sm mb-1">
                Grundfos scala 2
              </p>
              <p className="text-[#4a5b6b] text-sm leading-snug">{r.scala2}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="mt-8 md:mt-10 rounded-lg bg-[#126AF3] px-6 py-6 md:px-10 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-bold text-white text-xl md:text-2xl leading-tight">
            Make the switch
          </h3>
          <p className="text-white/90 text-sm md:text-base mt-1">
            Upgrade to intelligent water pressure.
          </p>
        </div>
        <a
          href="https://www.amazon.ae/Grundfos-SCALA2-Water-Booster-93013322/dp/B08MBTNLGK/ref=pd_sbs_d_sccl_2_1/257-8815241-3123604?pd_rd_w=GXS6z&content-id=amzn1.sym.89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_p=89a2354c-2e54-4295-a00e-33a1227533af&pf_rd_r=E90VKS2P44JYVCNE4F8C&pd_rd_wg=ctZF3&pd_rd_r=d4b29169-9332-4a9c-9133-82894dd3f72c&pd_rd_i=B08MBTNLGK&psc=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#126AF3] font-bold text-sm md:text-base uppercase tracking-wide px-6 h-12 rounded-md no-underline hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Upgrade your water system
        </a>
      </div>
    </section>
  );
}
