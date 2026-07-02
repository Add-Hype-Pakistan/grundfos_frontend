"use client";

export default function CustomerSupportHero() {
  return (
    <section className="relative w-full h-screen min-h-100 md:min-h-150 max-h-225 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/customer_support_hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content — centered below navbar */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <h1 className="text-[#F5FAFF] font-(family-name:--font-grundfos-sans-extd) font-bold text-3xl sm:text-4xl md:text-[48px] leading-none tracking-normal">
          SCALA2 Customer Support
        </h1>

        {/* Search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-xl gap-4"
        >
          <input
            type="text"
            placeholder="Search for your issue or question"
            className="flex-1 min-w-0 h-[48.44px] px-4 bg-white text-[#171717] text-[13.28px] leading-none placeholder:text-[#A3A3A3] outline-none rounded-sm"
          />
          <button
            type="submit"
            className="w-[174.22px] h-[48.44px] bg-[#126AF3] text-white text-[13.28px] font-normal leading-none rounded-sm hover:bg-[#0d5acc] transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
