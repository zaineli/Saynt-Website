import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import SolutionsCarousel from "./components/SolutionsCarousel";
import StrategySession from "./components/StrategySession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050818] font-sans">
      <Navbar />
      <HeroSection 
        title={
          <>
            <span className="block">Your Next Brilliant Move</span>
            <span className="block">Might <span className="font-bold">Involve AI</span> That Delivers</span>
          </>
        }
        description="You get a proven AI partner focused on your ROI goals. We help you automate workflows, accelerate execution, and achieve measurable growth. Stop spending on AI experiments. Start profiting from real business outcomes."
      />
      <Features />
      <SolutionsCarousel />
      <StrategySession />
      <Footer />
    </main>
  );
}
