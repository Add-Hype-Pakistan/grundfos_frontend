import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WorldEnvironmentDay from "@/components/WorldEnvironmentDay";
import Scala2Section from "@/components/Scala2Section";
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
        {/* <WorldEnvironmentDay /> */}
        {/* <Scala2Section /> */}
        {/* <WaterPressureSection /> */}
        {/* <ContentGrid /> */}
        {/* <CareerSection /> */}
        <ReadyToBuy />
      </main>
      <Footer />
    </>
  );
}
