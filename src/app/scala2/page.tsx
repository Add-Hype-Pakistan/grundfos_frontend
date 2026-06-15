import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadyToBuy from "@/components/ReadyToBuy";
import Scala2Hero from "@/components/scala2/Scala2Hero";
import Scala2PumpComparison from "@/components/scala2/Scala2PumpComparison";
import Scala2Comparison from "@/components/scala2/Scala2Comparison";
import Scala2SoundLevels from "@/components/scala2/Scala2SoundLevels";
import Scala2EnergyEfficient from "@/components/scala2/Scala2EnergyEfficient";
import Scala2WaterPressure from "@/components/scala2/Scala2WaterPressure";
import Scala2Testimonial from "@/components/scala2/Scala2Testimonial";
import Scala2Section from "@/components/Scala2Section";
import WarrantySection from "@/components/WarrantySection";
// import Scala2InstallationStory from "@/components/scala2/Scala2InstallationStory";

export const metadata = {
  title: "SCALA2 - Grundfos",
  description:
    "Discover the Grundfos SCALA2 — whisper-quiet, eco-friendly, and delivers constant water pressure to up to 8 taps simultaneously.",
};

export default function Scala2Page() {
  return (
    <>
      <Navbar />
      <main>
        <Scala2Hero />
        <Scala2PumpComparison />
        <WarrantySection/>
        <Scala2Testimonial />
        <ReadyToBuy />
      </main>
      <Footer />
    </>
  );
}
