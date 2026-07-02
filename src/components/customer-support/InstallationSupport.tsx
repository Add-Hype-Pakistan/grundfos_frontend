"use client";

import { useState } from "react";

const tabs = [
  {
    id: "contact",
    label: "Contact support",
    heading: "Still need help? We'll connect you to the right team",
    subtext: "Get help with your pump",
    groupLabel: "Question type",
    chips: ["Product selection", "Comparison", "Pre-purchase"],
    submitLabel: "Submit",
  },
  {
    id: "installation",
    label: "Installation support",
    heading: "Installer Support",
    subtext: "Dedicated help for installation or system setup",
    groupLabel: "Project type",
    chips: ["New installation", "Replacement", "Other"],
    submitLabel: "Talk to an expert",
  },
  {
    id: "warranty",
    label: "Warranty & service",
    heading: "Warranty & Service",
    subtext: "Submit a warranty claim or request service",
    groupLabel: "",
    chips: ["Proof of purchase info", "Date of installation or purchase", "issue description"],
    submitLabel: "Request service support",
  },
  {
    id: "fix",
    label: "Fix a problem",
    heading: "Technical Support (Fix an issue / troubleshooting)",
    subtext: "For alarms, noise, low pressure or system issues",
    groupLabel: "Problem Category",
    chips: ["Low pressure", "No water", "Noise", "Alarm", "Other"],
    submitLabel: "Get technical support",
  },
];

const fieldClass =
  "w-full h-12 px-4 bg-[#F3F3F3] text-[#171717] text-sm placeholder:text-gray-400 outline-none rounded-sm focus:ring-1 focus:ring-[#126AF3]";
const labelClass = "block text-base font-normal text-black leading-none mb-2";

export default function InstallationSupport() {
  const [active, setActive] = useState(0);
  const [chip, setChip] = useState(0);
  const tab = tabs[active];

  const selectTab = (i: number) => {
    setActive(i);
    setChip(0);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left column */}
        <div>
          <h2 className="font-(family-name:--font-grundfos-sans-extd) font-black text-[#11497B] text-3xl md:text-4xl lg:text-[48px] leading-none tracking-normal mb-6">
            Installation support
          </h2>
          <p className="text-[#171717] text-base md:text-lg lg:text-[20px] font-normal leading-snug mb-5">
            Get step-by-step guidance for installing and setting up your SCALA2
          </p>
          <p className="text-[#171717] text-base md:text-lg font-normal leading-snug mb-3">
            How to install SCALA2 (link to the How-to install SCALA2 guide)
          </p>
          <p className="text-[#171717] text-base md:text-lg font-normal leading-snug mb-6">
            How To Set
          </p>
          <a
            href="tel:+97148815166"
            className="inline-flex items-center justify-center px-6 h-11.75 bg-[#126AF3] text-white text-base font-normal leading-none rounded-sm no-underline hover:bg-[#0d5acc] transition-colors"
          >
            Talk to an expert
          </a>
        </div>

        {/* Right column — tabbed form */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => selectTab(i)}
                className={`flex items-center justify-center text-center w-[96.5px] h-[31px] rounded-[3.77px] text-[10.33px] leading-[0.78] border transition-colors ${
                  i === active
                    ? "bg-[#126AF3] text-[#FFF9F9] border-[#126AF3]"
                    : "bg-white text-[#9E9E9E] border-gray-300 hover:border-[#126AF3]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <h3 className="font-bold text-[#092844] text-[18.4px] leading-tight tracking-normal mb-2">
            {tab.heading}
          </h3>
          <p className="text-[#092844] text-[18.4px] font-[350] leading-none tracking-normal mb-6">
            {tab.subtext}
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" placeholder="Full Name" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" placeholder="+971 4XXX XXXX" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder="Name@gmail.com" className={fieldClass} />
            </div>
            <div>
              <label className={labelClass}>Country</label>
              <input type="text" placeholder="Enter Country" className={fieldClass} />
            </div>

            <div>
              {tab.groupLabel && <label className={labelClass}>{tab.groupLabel}</label>}
              <div className="flex flex-wrap gap-3">
                {tab.chips.map((c, i) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setChip(i)}
                    className={`px-4 py-2 text-xs leading-tight rounded border transition-colors ${
                      i === chip
                        ? "bg-[#126AF3] text-white border-[#126AF3]"
                        : "bg-white text-[#737373] border-gray-300 hover:border-[#126AF3]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Message...."
              rows={4}
              className="w-full px-4 py-3 bg-[#F3F3F3] text-[#171717] text-sm placeholder:text-gray-400 outline-none rounded-sm focus:ring-1 focus:ring-[#126AF3] resize-none"
            />

            <button
              type="submit"
              className="self-start inline-flex items-center justify-center gap-2.5 h-11.75 px-6 py-3.25 bg-[#126AF3] text-white text-base font-normal leading-none rounded-sm hover:bg-[#0d5acc] transition-colors"
            >
              {tab.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
