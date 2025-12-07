import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutContent from "../components/AboutContent";
import SAYNTDifference from "../components/SAYNTDifference";
import StrategySession from "../components/StrategySession";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050818] font-sans">
      <Navbar />
      <HeroSection 
        badge=""
        title={
          <>
            <span className="block">Your AI Growth and</span>
            <span className="block">Consulting Partner</span>
          </>
        }
        subtitle="We Believe in Making Your Vision Meet AI-Powered Execution"
        description="You need a partner who delivers real results. SAYNT provides the strategic guidance and practical AI solutions that drive your efficiency, growth, and competitive advantage"
        showButtons={false}
      />
      
      {/* About Content Section */}
      <AboutContent />
      
      {/* SAYNT Difference Section */}
      {/* <SAYNTDifference /> */}
      
      <StrategySession />
      <Footer />
    </main>
  );
}
