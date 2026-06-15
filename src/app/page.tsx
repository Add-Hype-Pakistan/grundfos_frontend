import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WorldEnvironmentDay from "@/components/WorldEnvironmentDay";
import Scala2Section from "@/components/Scala2Section";
import ExploreScala2 from "@/components/ExploreScala2";
import SliderSection from "@/components/SliderSection";
import GrundfosScala2Section from "@/components/GrundfosScala2Section";
import WaterPressureSection from "@/components/WaterPressureSection";
import ContentGrid from "@/components/ContentGrid";
import CareerSection from "@/components/CareerSection";
import ReadyToBuy from "@/components/ReadyToBuy";
import WarrantySection from "@/components/WarrantySection";
import InteractiveVillaExperience from "@/components/InteractiveVillaExperience";
import ChooseHomeJourney from "@/components/ChooseHomeJourney";
import PumpProblems from "@/components/PumpProblems";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Sections render top-to-bottom in this order. Move a line to reorder; */}
        {/* wrap a line in a JSX comment to hide it (see commented sections below). */}
        <HeroSection />
        <PumpProblems />
          <GrundfosScala2Section />
           <ChooseHomeJourney />
                 <ExploreScala2 />
 <InteractiveVillaExperience />


       
       
        <WarrantySection />
      </main>
      <Footer />
    </>
  );
}
