const comparisonRows = [
  {
    feature: "Noise Level",
    traditional: "Very Noisy 80 Db(a)",
    scala2: "Whisper Quiet",
  },
  {
    feature: "Energy Efficiency",
    traditional: "Poor",
    scala2: "Eco - Friendly",
  },
  {
    feature: "Water Pressure",
    traditional: "Inconsistent",
    scala2: "Constant",
  },
  {
    feature: "Number of taps",
    traditional: "At most 1 or 2",
    scala2: "Upto 8 Taps",
  },
];

export default function Scala2Comparison() {
  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-24 lg:px-30.25 lg:py-35">
      {/* Heading */}
      <h2 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#11497B] text-[22px] md:text-[28px] lg:text-[32px] leading-[2] tracking-[0em] mb-4">
        SCALA2 VS Traditional Pumps
      </h2>
      <p className="font-normal text-[#171717] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] tracking-[0em] mb-10 max-w-2xl">
        While traditional pumps are loud and inconsistent, the SCALA2 adapts
        to your needs, providing constant pressure, whisper-quiet operation,
        and significant energy savings in one sleek, compact unit.
      </p>

      {/* Table */}
      <div className="w-full overflow-x-auto border border-white/20">
        <table className="w-full text-white border-separate border-spacing-0">
            <thead>
            <tr className="bg-black">
              <th className="text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[1] tracking-[0em] text-center py-5 px-4 w-1/3 border-b-2 border-white">
              Features
              </th>
              <th className="text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[1] tracking-[0em] text-center py-5 px-4 w-1/3 border-b-2 border-b-white">
              Traditional Pump
              </th>
              <th className="text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[1] tracking-[0em] text-center py-5 px-4 w-1/3 border-b-2 border-b-white">
              SCALA2
              </th>
            </tr>
            </thead>
            <tbody className="bg-[#1a1a1a]">
            {comparisonRows.map((row, i) => (
              <tr key={i}>
              <td className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[1] tracking-[0em] text-center text-white py-9 px-4">
                {row.feature}
              </td>
              <td className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[1] tracking-[0em] text-center text-white py-9 px-4">
                {row.traditional}
              </td>
              <td className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[1] tracking-[0em] text-center text-white py-9 px-4">
                {row.scala2}
              </td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    </section>
  );
}
