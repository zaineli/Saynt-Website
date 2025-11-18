'use client';

export default function HeroSection() {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="bg-gray-800/50 rounded-full px-5 py-2.5 mb-10">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <span className="text-white">✱</span> AI-Powered Business Transformation
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="bg-gradient-to-r from-white to-[#BABABA] bg-clip-text text-transparent text-5xl md:text-6xl lg:text-8xl font-medium text-center mb-8">
          Your Next Brilliant Move<br />
          Might <span className="font-bold">Involve AI</span> That Delivers
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl font-normal text-center mb-12 max-w-3xl leading-relaxed">
          You get a proven AI partner focused on your ROI goals. We help you
          automate workflows, accelerate execution, and achieve measurable
          growth. Stop spending on AI experiments. Start profiting from real
          business outcomes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-[#45FFD0] to-[#05FFEE] text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Start Your AI Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors">
            See Your ROI Potential
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}