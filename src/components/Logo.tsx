import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG matching logo.png */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeStyles[size]}`}>
        <svg
          viewBox="0 0 160 140"
          className="h-full w-auto drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chimney / Vents Accent */}
          <path
            d="M58 35 V24 H72 V48 Z"
            fill="#0284C7"
          />

          {/* Roof Ridge Outline */}
          <path
            d="M80 8 L146 64 L134 76 L80 30 L26 76 L14 64 Z"
            fill="url(#roofGradient)"
          />

          {/* Inner Curved Accent Swoosh */}
          <path
            d="M36 70 C52 50 108 50 124 70 C104 60 56 60 36 70 Z"
            fill="url(#swooshGradient)"
          />

          {/* Glowing Water Droplet */}
          <path
            d="M108 20 C108 20 126 48 126 62 C126 72 118 80 108 80 C98 80 90 72 90 62 C90 48 108 20 108 20 Z"
            fill="url(#dropletGradient)"
          />
          {/* Water droplet shine reflection */}
          <path
            d="M102 52 C104 46 112 40 114 42 C114 44 108 56 104 58 C102 58 101 55 102 52 Z"
            fill="#BAE6FD"
            opacity="0.9"
          />

          {/* Base foundation line */}
          <path
            d="M20 84 H140 V90 H20 Z"
            fill="#0284C7"
            opacity="0.5"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="roofGradient" x1="14" y1="8" x2="146" y2="76" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" />
              <stop offset="0.5" stopColor="#0369A1" />
              <stop offset="1" stopColor="#0B2F64" />
            </linearGradient>
            <linearGradient id="swooshGradient" x1="36" y1="60" x2="124" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="dropletGradient" x1="108" y1="20" x2="108" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.6" stopColor="#0284C7" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight font-black text-xl md:text-2xl leading-none">
            <span className="text-[#0B2F64] dark:text-sky-300 font-extrabold tracking-wider">INTER</span>
            <span className="text-[#0084D6] dark:text-sky-400 font-black tracking-wider">SEAL</span>
          </div>
          <div className="bg-[#0B2F64] text-white px-2 py-0.5 rounded-xs mt-1 text-[9px] md:text-[10.5px] font-bold tracking-widest text-center uppercase shadow-xs">
            WATERPROOFING
          </div>
        </div>
      )}
    </div>
  );
};
