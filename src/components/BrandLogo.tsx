import React from 'react';
import { IMAGES } from '../assets/images';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'light',
  showTagline = true,
  className = '',
  onClick
}) => {
  const isDark = variant === 'dark';

  const avatarSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16'
  };

  const titleSizes = {
    sm: 'text-base font-bold tracking-tight',
    md: 'text-lg sm:text-xl font-bold tracking-wider',
    lg: 'text-2xl sm:text-3xl font-extrabold tracking-widest'
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.22em]',
    lg: 'text-xs tracking-[0.28em]'
  };

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Royal Crest / Logo Image Badge */}
      <div className={`relative ${avatarSizes[size]} rounded-full overflow-hidden shrink-0 p-0.5 bg-gradient-to-br from-[#E0AC3C] via-[#8B1E1E] to-[#C9972E] shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF9F5] border border-amber-200/50 flex items-center justify-center">
          <img
            src={IMAGES.vanNienLuaLogo}
            alt="Logo VÂN NIÊN LỤA"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to public path if needed
              (e.currentTarget as HTMLImageElement).src = '/images/van_nien_lua_logo.jpg';
            }}
          />
        </div>
        {/* Subtle royal highlight ring */}
        <div className="absolute inset-0 rounded-full border border-amber-300/30 pointer-events-none" />
      </div>

      {/* Typography Unit */}
      <div className="flex flex-col justify-center min-w-0">
        <span 
          className={`font-serif-royal font-bold uppercase transition-colors whitespace-nowrap text-base sm:text-lg md:text-xl tracking-wide sm:tracking-wider ${
            isDark 
              ? 'text-white group-hover:text-amber-200' 
              : 'text-[#8B1E1E] group-hover:text-[#6e1616]'
          }`}
        >
          VÂN NIÊN LỤA
        </span>
        {showTagline && (
          <span 
            className={`font-sans uppercase font-medium mt-0.5 whitespace-nowrap ${taglineSizes[size]} ${
              isDark ? 'text-amber-300/90' : 'text-[#A67C1E]'
            } hidden sm:block`}
          >
            Việt Phục & Di Sản Lụa
          </span>
        )}
      </div>
    </div>
  );
};
