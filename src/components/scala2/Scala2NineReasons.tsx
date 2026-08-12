import type { ReactNode } from "react";

type Reason = {
  icon: string;
  title: string;
  traditional: string;
  scala2: string;
};

const reasons: Reason[] = [
  {
    icon: "stable",
    title: "Stable water pressure",
    traditional: "Pressure gradually drops when more than one tap is opened.",
    scala2: "Stable pressure even with multiple taps in use, up to 8 at once.",
  },
  {
    icon: "noise",
    title: "Noise level",
    traditional: "Loud, over 85 dB, similar to a traditional vacuum cleaner.",
    scala2: "Very quiet at 44 dB, similar to a modern dishwasher.",
  },
  {
    icon: "power",
    title: "Power consumption",
    traditional: "Runs at full power constantly, resulting in high energy use.",
    scala2: "Smart motor saves power by operating only when needed.",
  },
  {
    icon: "dryrun",
    title: "Dry run protection",
    traditional: "Continues running without water, leading to damage.",
    scala2: "Stops automatically when water is cut off to avoid damage.",
  },
  {
    icon: "install",
    title: "Easy installation",
    traditional:
      "Requires additional equipment, tanks and professional installation.",
    scala2: "Compact design with flexible connections, easy to install.",
  },
  {
    icon: "maintenance",
    title: "Maintenance",
    traditional: "Frequent maintenance and manual priming required.",
    scala2: "Self priming and low maintenance.",
  },
  {
    icon: "error",
    title: "Error detection",
    traditional: "No alerts, a technician is needed to identify issues.",
    scala2: "Clear warning indicators, no need for a plumber.",
  },
  {
    icon: "pressure",
    title: "Pressure control",
    traditional: "No control over pressure levels.",
    scala2: "Customisable pressure settings between 1.5 and 5.5 bar.",
  },
  {
    icon: "leak",
    title: "Leak detection",
    traditional: "No leak detection in the system.",
    scala2: "Detects and alerts you if there is a water leak.",
  },
];

function ReasonIcon({ name }: { name: string }) {
  const p = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<string, ReactNode> = {
    stable: (
      <path d="M12 2.5S5 9.7 5 14.5a7 7 0 0 0 14 0C19 9.7 12 2.5 12 2.5z" />
    ),
    noise: (
      <>
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        <path d="M16.5 8.5a5 5 0 0 1 0 7" />
        <path d="M19 6a8.5 8.5 0 0 1 0 12" />
      </>
    ),
    power: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    dryrun: (
      <>
        <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    install: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </>
    ),
    maintenance: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.8-.7-.7-2.8 2.6-2.6z" />
      </>
    ),
    error: (
      <>
        <path d="M12 3 2 20h20L12 3z" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
    pressure: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12 15 9" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    leak: (
      <>
        <path d="M12 3S6 9 6 13.5A6 6 0 0 0 18 13.5C18 9 12 3 12 3z" />
        <path d="M12 10v3.5" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    ),
  };
  return <svg {...p}>{paths[name]}</svg>;
}

function StatusBadge({ ok }: { ok: boolean }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ok ? "#2E9E5B" : "#E5484D"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      {ok ? <path d="M8 12.5l2.5 2.5L16 9" /> : <path d="M15 9l-6 6M9 9l6 6" />}
    </svg>
  );
}

function CompareCard({
  ok,
  label,
  text,
}: {
  ok: boolean;
  label: string;
  text: string;
}) {
  return (
    <div className="flex flex-col rounded-xl bg-[#FBF1EC] p-5 md:p-6 min-h-[150px]">
      <StatusBadge ok={ok} />
      <div className="mt-6">
        <p className="font-bold text-[#092844] text-sm md:text-base mb-1">
          {label}
        </p>
        <p className="text-[#5b6b7b] text-xs md:text-sm leading-snug">{text}</p>
      </div>
    </div>
  );
}

export default function Scala2NineReasons() {
  return (
    <section
      id="nine-reasons"
      className="w-full scroll-mt-24 bg-[#092844] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24"
    >
      {/* Header */}
      <p className="text-[#E0A96D] text-sm md:text-base font-normal leading-none tracking-normal mb-3">
        Time to retire the old pump
      </p>
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-2xl md:text-3xl lg:text-[40px] leading-tight tracking-normal mb-4">
        Nine reasons the upgrade wins
      </h2>
      <p className="text-white/80 text-base md:text-lg font-normal leading-snug tracking-normal max-w-2xl mb-12 md:mb-16">
        The pump behind your taps has not changed in decades. Here is what
        changes when it does.
      </p>

      {/* Reason rows */}
      <div className="flex flex-col gap-8 md:gap-10">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
          >
            {/* Icon + title */}
            <div className="flex flex-col justify-center gap-3 text-[#E9D19A]">
              <ReasonIcon name={r.icon} />
              <h3 className="font-bold text-xl md:text-2xl leading-tight">
                {r.title}
              </h3>
            </div>

            <CompareCard ok={false} label="Traditional pump" text={r.traditional} />
            <CompareCard ok={true} label="Grundfos scala 2" text={r.scala2} />
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="mt-12 md:mt-16 rounded-xl bg-[#126AF3] px-6 py-6 md:px-10 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-2xl md:text-3xl leading-tight">
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
          className="inline-flex items-center justify-center bg-white text-[#126AF3] font-bold text-sm md:text-base uppercase tracking-wide px-8 h-13 rounded-full no-underline hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Upgrade your water system
        </a>
      </div>
    </section>
  );
}
