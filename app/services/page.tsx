import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AIStrategyDesign from "../components/AIStrategyDesign";
import StrategySession from "../components/StrategySession";
import Footer from "../components/Footer";
import { BarChart3, Coins, Lightbulb, Cpu, Zap, Settings, Workflow, CheckCircle2, TrendingUp, Code, Rocket, Target } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050818] font-sans">
      <Navbar />
      <HeroSection 
        badge=""
        title={
          <>
            <span className="block">AI Services That Drive</span>
            <span className="block font-bold">Efficiency and Growth</span>
          </>
        }
        subtitle="Get AI Consulting Services That Make Execution 100% Faster"
        description="You receive end-to-end AI expertise focused on your bottom line goals. We help you automate processes, build scalable systems, and accelerate product development to achieve measurable ROI."
        primaryButtonText=""
        secondaryButtonText="Discover Your AI Opportunities"
        showButtons={true}
      />

      <h2 className="text-4xl lg:text-6xl font-medium text-center text-white">Services</h2>

      {/* AI Strategy and Discovery */}
      <AIStrategyDesign 
        title="AI Strategy and Discovery"
        subtitle="Build Your Confident AI Investment Plan"
        description="We will pinpoint the AI opportunities that deliver the highest return. Our strategy workshop gives you a clear, business-focused roadmap and actionable ROI model."
        items={[
          { icon: "/services/1.svg", text: "Your clear AI investment strategy" },
          { icon: "/services/2.svg", text: "Your data-driven AI ROI model" },
          { icon: "/services/3.svg", text: "Your prioritized plan for AI implementation" }
        ]}
      />
      
      {/* AI Prototyping and Proof of Concept - Reversed */}
      <AIStrategyDesign 
        title="AI Prototyping and Proof of Concept"
        subtitle="Validate Your AI Ideas In 2-3 Weeks, Not Months"
        description="You can de-risk your AI projects with a working prototype. Our discovery sprint proves the value of your concept quickly, saving you time and resources"
        items={[
          { icon: "/services/4.svg", text: "Your validated AI concept with working proof" },
          { icon: "/services/5.svg", text: "Reducing project risk for you" },
          { icon: "/services/6.svg", text: "A faster path towards implementation" }
        ]}
        reverse={true}
      />
      
      {/* Managed AI and MLOps */}
      <AIStrategyDesign 
        title="Managed AI and MLOps"
        subtitle="Keep Your AI Running at Peak Performance"
        description="We handle the ongoing management, monitoring, and optimization of your AI systems. Focus on your business while we ensure your models stay accurate, efficient, and compliant."
        items={[
          { icon: "/services/7.svg", text: "Your production-ready AI systems" },
          { icon: "/services/8.svg", text: "Your reliable model performance" },
          { icon: "/services/9.svg", text: "Your managed AI infrastructure" }
        ]}
      />
      
      {/* AI Workflow Automation - Reversed */}
      <AIStrategyDesign 
        title="AI Workflow Automation"
        subtitle="Eliminate Repetitive Tasks, Accelerate Operations"
        description="Transform manual processes into intelligent automated workflows. We integrate AI into your existing systems to save time, reduce errors, and free your team for strategic work."
        items={[
          { icon: "/services/10.svg", text: "Your automated enterprise workflows" },
          { icon: "/services/11.svg", text: "Your reduced processing time and errors" },
          { icon: "/services/12.svg", text: "Your lower operational costs" }
        ]}
        reverse={true}
      />
      
      {/* AI MVP Development for Startups */}
      <AIStrategyDesign 
        title="AI MVP Development for Startups"
        subtitle="Launch Your AI Product Fast"
        description="Build and deploy your AI-powered MVP in weeks, not months. Get to market quickly with a production-ready solution that validates your concept and attracts investors."
        items={[
          { icon: "/services/13.svg", text: "Your market-ready AI product" },
          { icon: "/services/14.svg", text: "Your accelerated time to market" },
          { icon: "/services/15.svg", text: "Your clear product roadmap" }
        ]}
      />
      
      <StrategySession
  title={
    <>
      Identify Your Most Valuable <br className="hidden md:block" />
      <span className="text-[#45FFD0]">AI Opportunity</span>
    </>
  }
  description="Our AI Readiness Assessment pinpoints your best path to efficiency and growth"
/>

      <Footer />
    </main>
  );
}
