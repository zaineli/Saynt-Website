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
            <span className="block">Efficiency and Growth</span>
          </>
        }
        subtitle="Get AI Consulting Services That Make Execution 100% Faster"
        description="You receive end-to-end AI expertise focused on your bottom line goals. We help you automate processes, build scalable systems, and accelerate product development to achieve measurable ROI."
        primaryButtonText="Discover Your AI Opportunities"
        secondaryButtonText=""
        showButtons={true}
      />

      <h1 className="text-7xl font-medium text-white text-center mb-6">Services</h1>

      {/* AI Strategy and Discovery */}
      <AIStrategyDesign 
        title="AI Strategy and Discovery"
        subtitle="Build Your Confident AI Investment Plan"
        description="We will pinpoint the AI opportunities that deliver the highest return. Our strategy workshop gives you a clear, business-focused roadmap and actionable ROI model."
        items={[
          { icon: BarChart3, text: "Your clear AI investment strategy" },
          { icon: Coins, text: "Your data-driven AI ROI model" },
          { icon: Lightbulb, text: "Your prioritized plan for AI implementation" }
        ]}
      />
      
      {/* AI Prototyping and Proof of Concept - Reversed */}
      <AIStrategyDesign 
        title="AI Prototyping and Proof of Concept"
        subtitle="Validate Your AI Ideas In 2-3 Weeks, Not Months"
        description="You can de-risk your AI projects with a working prototype. Our discovery sprint proves the value of your concept quickly, saving you time and resources"
        items={[
          { icon: Cpu, text: "Your validated AI concept with working proof" },
          { icon: CheckCircle2, text: "Reducing project risk for you" },
          { icon: TrendingUp, text: "A faster path towards implementation" }
        ]}
        reverse={true}
      />
      
      {/* Managed AI and MLOps */}
      <AIStrategyDesign 
        title="Managed AI and MLOps"
        subtitle="Keep Your AI Running at Peak Performance"
        description="We handle the ongoing management, monitoring, and optimization of your AI systems. Focus on your business while we ensure your models stay accurate, efficient, and compliant."
        items={[
          { icon: Settings, text: "24/7 model monitoring and maintenance" },
          { icon: Zap, text: "Automated retraining and updates" },
          { icon: Workflow, text: "Complete MLOps pipeline management" }
        ]}
      />
      
      {/* AI Workflow Automation - Reversed */}
      <AIStrategyDesign 
        title="AI Workflow Automation"
        subtitle="Eliminate Repetitive Tasks, Accelerate Operations"
        description="Transform manual processes into intelligent automated workflows. We integrate AI into your existing systems to save time, reduce errors, and free your team for strategic work."
        items={[
          { icon: Workflow, text: "Custom AI workflow integration" },
          { icon: Zap, text: "Process automation that learns and improves" },
          { icon: TrendingUp, text: "Measurable time and cost savings" }
        ]}
        reverse={true}
      />
      
      {/* AI MVP Development for Startups */}
      <AIStrategyDesign 
        title="AI MVP Development for Startups"
        subtitle="Launch Your AI Product Fast"
        description="Build and deploy your AI-powered MVP in weeks, not months. Get to market quickly with a production-ready solution that validates your concept and attracts investors."
        items={[
          { icon: Code, text: "Full-stack AI product development" },
          { icon: Rocket, text: "Fast deployment and iteration cycles" },
          { icon: Target, text: "Investor-ready demos and documentation" }
        ]}
      />
      
      <StrategySession />
      <Footer />
    </main>
  );
}
