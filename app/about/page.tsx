import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutContent from "../components/AboutContent";
import SAYNTDifference from "../components/SAYNTDifference";
import StrategySession from "../components/StrategySession";
import Footer from "../components/Footer";
import FocusSection from "../components/FocusSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050818] font-sans">
      <Navbar />
      <HeroSection
        badge=""
        title={
          <>
            <span className="block">Your AI Growth and</span>
            <span className="block font-bold">Consulting Partner</span>
          </>
        }
        subtitle="We Believe in Making Your Vision Meet AI-Powered Execution"
        descriptionBold={true}
        showButtons={false}
      />

      {/* About Content Section */}
      <AboutContent />

      {/* Focus Section */}
      <FocusSection />

      {/* SAYNT Difference Section */}
      {/* <SAYNTDifference /> */}
      <SAYNTDifference />

      
      
          <StrategySession
          title={
            <>
              Let Us Help You Build the<br className="hidden md:block" />
              <span className="text-[#45FFD0]">Future of Your Business</span>
            </>
        }
            description=""
          />
          
      <Footer />
    </main>
  );
}
