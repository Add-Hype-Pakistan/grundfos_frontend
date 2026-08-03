import Link from "next/link";

// Link columns hidden for now
// const footerColumns = [
//   {
//     title: "SCALA2",
//     links: ["Help me choose", "Future Proof Homes", "New Home Owner", "Smart Home"],
//   },
//   {
//     title: "Support",
//     links: ["Support Center", "FAQ", "How to", "Contact Service"],
//   },
//   {
//     title: "Learn",
//     links: ["SCALA2 Documentation", "Case Study"],
//   },
//   {
//     title: "About us",
//     links: ["Who We Are", "Our Purpose", "Our Purpose", "What We Do", "About SCALA2"],
//   },
//   {
//     title: "Where to buy",
//     links: ["SCALA2 Locations", "Contact"],
//   },
//   {
//     title: "Quick Links",
//     links: ["Grundfos.com", "MyGrundfos"],
//   },
// ];

const bottomLinks = [
  "Legal",
  "Privacy Policy",
  "General Terms and Conditions of Sale",
  "Use of cookies",
  "Safety notices",
  "Contact Grundfos",
  "Newsletter",
];

export default function Footer() {
  return (
    <footer className="bg-[#092844] text-white px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-11.25 flex flex-col gap-2.5">
      {/* Tagline */}
      <div>
        <h2 className="font-(family-name:--font-grundfos-sans-extd) font-black text-2xl md:text-[28px] lg:text-[32px] text-[#F7EDDB] leading-none tracking-normal mb-8 lg:mb-[41px]">
          Possibility in every Drop
        </h2>
      </div>

      {/* Link Columns hidden for now
      <div className="border-t border-[#D9D9D9]" />

      <div className="py-8 md:py-10 lg:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-normal text-lg lg:text-xl text-white leading-none tracking-normal mb-4">{col.title}</h4>
            <ul className="space-y-4 lg:space-y-5 list-none p-0 m-0">
              {col.links.map((link, i) => (
                <li key={`${link}-${i}`}>
                  <Link
                    href="#"
                    className="text-sm lg:text-base font-normal text-[#BFD3E3] leading-none tracking-normal hover:text-white transition-colors no-underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      */}

      {/* Divider */}
      <div className="border-t border-[#D9D9D9]" />

      {/* Address + Social Icons */}
      <div className="py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-sm lg:text-base font-normal text-white leading-none tracking-normal flex flex-col gap-2">
          <p>Grundfos Gulf Distribution</p>
          <p>Jebel Ali Free Zone North Street 407</p>
          <p>P.O. Box 16768, (+971) 4 881 5166</p>
          <p>Dubai (U.A.E.)</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8 md:gap-10 lg:gap-15">
          {/* Facebook */}
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
            </svg>
          </Link>
          {/* X (Twitter) */}
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          {/* Instagram */}
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </Link>
          {/* LinkedIn */}
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          {/* YouTube */}
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D9D9D9]" />

      {/* Bottom Links */}
      <div className="py-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-10">
        {bottomLinks.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-sm lg:text-base font-normal text-[#BFD3E3] leading-none tracking-normal hover:text-white transition-colors no-underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </footer>
  );
}
