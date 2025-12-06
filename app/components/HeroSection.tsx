'use client';

interface HeroSectionProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showButtons?: boolean;
}

export default function HeroSection({
  badge = "✱ AI-Powered Business Transformation",
  title,
  subtitle,
  description,
  primaryButtonText = "Start Your AI Assessment",
  secondaryButtonText = "See Your ROI Potential",
  showButtons = true
}: HeroSectionProps) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 -mt-20 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Badge */}
        {badge && (
          <div className="bg-gray-800/50 rounded-full px-5 py-2.5 mb-10">
            <span className="text-gray-400 text-sm flex items-center gap-2">
              {badge}
            </span>
          </div>
        )}

        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-6xl lg:text-[80px] font-medium text-center mb-8 leading-tight bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(85.88deg, #FFFFFF 72.98%, rgba(186, 186, 186, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-2xl font-normal text-center mb-6 max-w-4xl leading-relaxed">
          {subtitle}
        </p>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-base md:text-lg font-normal text-center mb-12 max-w-4xl leading-relaxed">
            {description}
          </p>
        )}

        {!description && <div className="mb-12" />}

        {/* CTA Buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              {primaryButtonText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {secondaryButtonText && (
              <button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                {secondaryButtonText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}