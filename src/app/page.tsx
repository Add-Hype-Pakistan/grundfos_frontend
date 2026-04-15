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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductCategories />
          <GrundfosScala2Section />
         <SliderSection />
        {/* <WorldEnvironmentDay /> */}
           <ExploreScala2 />
            <WaterPressureSection />
        <Scala2Section />
      
        {/* <ContentGrid /> */}
        {/* <CareerSection /> */}
        <ReadyToBuy />
      </main>
      <Footer />
    </>
  );
}
