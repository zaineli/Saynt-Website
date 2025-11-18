import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlightText: string;
  beforeHighlight: string;
  afterHighlight?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  highlightText,
  beforeHighlight,
  afterHighlight 
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[380px]">
      {/* Main Card */}
      <div 
        className="flex flex-col relative p-6 min-h-[380px]"
        style={{
          borderRadius: '20px',
          padding: '28px',
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
        {/* Icon */}
        <div className="size-[72px] relative z-10 mb-8">
          <Image 
            src={icon} 
            alt={title} 
            width={72}
            height={72}
            className="object-contain size-[72px]" 
          />
        </div>
        
        {/* Title */}
        <h3 className="text-white text-2xl md:text-3xl mb-5 font-semibold leading-tight relative z-10">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed relative z-10 mt-auto">
          {description}
        </p>
      </div>

      {/* Secondary Card */}
      <div 
        className="relative overflow-hidden flex items-center min-h-[90px]"
        style={{
          borderRadius: '16px',
          padding: '24px 20px',
          background: '#181924',
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
        <div className="absolute -right-[15%] -bottom-[50%] w-32 h-32 opacity-15">
          <Image
            src="/circle.png"
            alt="Wave Decoration"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}