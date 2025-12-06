'use client';

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16 w-full">
          <h2 className="text-white text-4xl md:text-5xl font-medium mb-6">
            You need AI that works for your business
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">SAYNT is your strategic growth partner</span>. We help you identify high-impact AI opportunities and
            implement solutions that deliver tangible results. You achieve faster operations, lower costs, and
            a clear competitive edge.
          </p>
        </div>

        {/* How We Help You Win */}
        <div className="text-center mb-12">
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
            How We Help You <span className="text-[#00FFD2]">Win</span>
          </h3>
          <p className="text-gray-300 text-lg font-medium">
            Achieve Faster Execution and Predictable ROI
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex flex-col gap-16 w-full items-center">
          {/* First Row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <FeatureCard
              icon="/mind.svg"
              title="AI Strategy You Can Trust"
              description="You will discover exactly where to invest in AI for maximum return. We build your actionable AI roadmap so you can move forward with confidence."
              beforeHighlight="Gain a clear"
              highlightText="AI investment strategy with proven ROI modeling."
              circlePosition="bottom-right"
            />

            <FeatureCard
              icon="/scale.svg"
              title="De-Risk Your AI Projects"
              description="You can validate your AI ideas quickly. Our rapid prototyping delivers a working proof of concept in 2-3 weeks, proving value before you make a major investment."
              beforeHighlight="Eliminate"
              highlightText="uncertainty and accelerate your time to value."
              circlePosition="top-left"
            />

            <FeatureCard
              icon="/automation.svg"
              title="Scalable AI Systems"
              description="You will deploy and manage AI models that perform reliably. Our full lifecycle support ensures your AI systems scale with your business."
              beforeHighlight="Achieve"
              highlightText="robust model performance with continuous monitoring."
              circlePosition="bottom-right"
            />
          </div>

          {/* Second Row - 2 cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <FeatureCard
              icon="/automation.svg"
              title="Scalable AI Systems"
              description="You will deploy and manage AI models that perform reliably. Our full lifecycle support ensures your AI systems scale with your business."
              beforeHighlight="Achieve"
              highlightText="robust model performance with continuous monitoring."
              circlePosition="top-left"
            />
            <FeatureCard
              icon="/automation.svg"
              title="Scalable AI Systems"
              description="You will deploy and manage AI models that perform reliably. Our full lifecycle support ensures your AI systems scale with your business."
              beforeHighlight="Achieve"
              highlightText="robust model performance with continuous monitoring."
              circlePosition="bottom-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}