import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlightText: string;
  beforeHighlight: string;
  afterHighlight?: string;
  circlePosition?: 'bottom-right' | 'top-left';
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  highlightText,
  beforeHighlight,
  afterHighlight,
  circlePosition = 'bottom-right'
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[420px]">
      {/* Main Card */}
      <div 
        className="flex flex-col relative p-6 min-h-[440px]"
        style={{
          borderRadius: '8px',
          padding: '32px',
          background: '#181924',
        }}
      >
        {/* Icon */}
        <div className="size-[80px] relative z-10 mb-24">
          <Image 
            src={icon} 
            alt={title} 
            width={80}
            height={80}
            className="object-contain size-[80px]" 
          />
        </div>
        
        {/* Title */}
        <h3 className="text-white text-[48px] md:text-[32px] font-medium leading-tight relative z-10">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-[15px] md:text-[16px] leading-[1.6] relative z-10 mt-auto">
          {description}
        </p>
      </div>

      {/* Secondary Card */}
      <div 
        className="relative overflow-hidden flex items-center min-h-[90px]"
        style={{
          borderRadius: '16px',
          padding: '24px 20px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: '1px solid',
          borderImageSource: 'linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'blur(39px)',
          boxShadow: `
            0px 15px 32px 0px rgba(0, 0, 0, 0.2),
            0px 59px 59px 0px rgba(0, 0, 0, 0.17),
            0px 133px 80px 0px rgba(0, 0, 0, 0.1),
            0px 236px 95px 0px rgba(0, 0, 0, 0.03),
            0px 369px 103px 0px rgba(0, 0, 0, 0)
          `
        }}
      >
        {/* Text with gradient highlights */}
        <p className="text-white text-sm md:text-base leading-relaxed relative z-10">
          {beforeHighlight}{' '}
          <span className="bg-gradient-to-l from-white via-[#05FFEE] via-[#05FFEE] to-[#05FFEE] bg-clip-text text-transparent font-medium">
            {highlightText}
          </span>
          {afterHighlight && (
            <>
              {' '}{afterHighlight}
            </>
          )}
        </p>
        
        {/* Circle decoration */}
        <div className={`absolute w-32 h-32 opacity-50 ${
          circlePosition === 'top-left' 
            ? '-right-[15%] -top-[60%]' 
            : '-right-[15%] -bottom-[60%]'
        }`}>
          <Image
            src="/circle.png"
            alt="Wave Decoration"
            width={128}
            height={128}
            className="object-contain brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
}