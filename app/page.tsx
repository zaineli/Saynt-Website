import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import SolutionsCarousel from "./components/SolutionsCarousel";
import StrategySession from "./components/StrategySession";
import Footer from "./components/Footer";
import AIStrategyDesign from "./components/AIStrategyDesign";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050818] font-sans">
      <Navbar />
      <HeroSection />
      <Features />
      <SolutionsCarousel />
      <StrategySession />
      <AIStrategyDesign />
      <Footer />

    </main>
  );
}
