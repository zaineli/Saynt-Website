'use client';

interface HeroSectionProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
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
    <section className="w-full md:min-h-screen flex items-center justify-center px-8 mb:px-4 py-20 md:py-0 md:-mt-20 md:pt-20 ">
      <div className="w-full flex flex-col items-center justify-center text-center">
        {/* Badge */}
        {badge && (
          <div className="bg-gray-800/50 rounded-full px-3 md:px-5 py-2 md:py-2.5 mb-6 md:mb-10">
            <span className="text-gray-400 text-xs md:text-sm flex items-center gap-2">
              {badge}
            </span>
          </div>
        )}

        {/* Main Heading */}
        <h1 
          className="text-[36px] md:text-6xl lg:text-[96px] font-medium text-center mb-5 md:mb-8 leading-[36px] md:leading-tight tracking-[-1.4px] md:tracking-normal bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(85.88deg, #FFFFFF 72.98%, rgba(186, 186, 186, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </h1>

        {/* Subheading */}
        <p className="text-white text-[14px] md:text-lg lg:text-2xl font-normal text-center mb-8 md:mb-16 max-w-4xl leading-[18px] md:leading-relaxed">
          {subtitle}
        </p>

        {/* Description */}
        {description && (
          <p 
            className="text-gray-300 font-normal text-center mb-8 md:mb-12 max-w-6xl mt-6 md:mt-12 text-[14px] md:text-[29.19px] leading-[18px] md:leading-[37.95px]"
          >
            {description}
          </p>
        )}

        {!description && <div className="mb-4 md:mb-6" />}

        {/* CTA Buttons */}
        {showButtons && (
          <div className="flex flex-row gap-3 md:gap-4 flex-wrap justify-center">
            <button 
              className="text-black font-medium rounded-full flex items-center justify-center gap-1.5 md:gap-2 hover:opacity-90 transition-opacity text-sm md:text-base px-4 md:px-8 py-2.5 md:py-4 whitespace-nowrap"
              style={{
                background: 'linear-gradient(90deg, #45FFD1 0%, #05FFEE 100%)',
                borderRadius: '24.83px',
              }}
            >
              {primaryButtonText}
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {secondaryButtonText && (
              <button 
                className="bg-white hover:bg-gray-100 text-black font-semibold rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-colors text-sm md:text-base px-4 md:px-8 py-2.5 md:py-4 whitespace-nowrap"
                style={{
                  borderRadius: '24.83px',
                }}
              >
                {secondaryButtonText}
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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