"use client";

import { useState } from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const slides = [
  {
    image: "/images/user%20manual.png",
    heading: "Download Guides & Resources",
    subheading: "For installers or advanced homeowners",
    buttonLabel: "Download PDF",
    href: "#",
  },
  {
    image: "/images/operating%20manual.png",
    heading: "Download Guides & Resources",
    subheading: "Technical Datasheet",
    buttonLabel: "Download PDF",
    href: "#",
  },
  {
    image: "/images/owner%20manual%20guide.png",
    heading: "Download Guides & Resources",
    subheading: "Comparison guide",
    buttonLabel: "Download PDF",
    href: "#",
  },
  {
    image: "/images/Frame%20288.png",
    heading: "How to install SCALA2",
    subheading: "How to set SCALA2 precharge pressure",
    buttonLabel: "Download guide",
    href: "#",
  },
];

const socials = [
  { label: "Facebook", href: "#", Icon: FacebookFilled },
  { label: "X", href: "#", Icon: null },
  { label: "Instagram", href: "#", Icon: InstagramOutlined },
  { label: "LinkedIn", href: "#", Icon: LinkedinFilled },
  { label: "YouTube", href: "#", Icon: YoutubeFilled },
];

export default function DownloadGuides() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="relative w-full h-105 md:h-120 lg:h-130 rounded-2xl overflow-hidden">
        {/* Slides (crossfade) */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={s.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
              <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-white text-3xl md:text-4xl lg:text-[38.63px] leading-tight tracking-normal max-w-2xl">
                {s.heading}
              </h2>
              <p className="mt-4 text-white text-base md:text-lg lg:text-[22px] font-normal leading-none tracking-normal">
                {s.subheading}
              </p>
              <a
                href={s.href}
                download
                className="mt-6 inline-flex items-center justify-center px-8 h-11.75 bg-[#126AF3] text-white text-[12px] font-normal leading-none tracking-normal rounded-sm no-underline hover:bg-[#0d5acc] transition-colors"
              >
                {s.buttonLabel}
              </a>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-5 text-white text-xl">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    {Icon ? (
                      <Icon />
                    ) : (
                      // X (Twitter) logo
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Nav arrows */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-white/80 text-[#126AF3] flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-[#126AF3] text-white flex items-center justify-center hover:bg-[#0d5acc] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
