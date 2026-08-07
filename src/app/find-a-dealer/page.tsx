import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FindDealer from "@/components/find-a-dealer/FindDealer";

export const metadata = {
  title: "Find a Dealer - Grundfos SCALA2",
  description:
    "Find an official Grundfos SCALA2 dealer or showroom near you across the UAE.",
};

export default function FindADealerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen px-6 pt-40 pb-20 md:px-10 md:pt-52 md:pb-28 lg:px-16 lg:pt-60 lg:pb-32">
        <h1 className="font-(family-name:--font-grundfos-sans-extd) font-black text-[#11497B] text-3xl md:text-4xl lg:text-[48px] leading-none tracking-normal mb-6">
          Find a dealer
        </h1>
        <p className="text-[#171717] text-base md:text-lg lg:text-[20px] font-normal leading-snug mb-10 md:mb-12 lg:mb-16">
          Locate an official Grundfos SCALA2 dealer or showroom near you.
        </p>
        <FindDealer />
      </main>
      <Footer />
    </>
  );
}
