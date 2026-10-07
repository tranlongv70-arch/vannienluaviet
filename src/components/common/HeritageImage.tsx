import React, { useState } from 'react';

interface HeritageImageProps {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const HeritageImage: React.FC<HeritageImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const effectiveSrc = hasError && fallbackSrc ? fallbackSrc : (src || fallbackSrc);

  if (!effectiveSrc || (hasError && !fallbackSrc)) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#2D1B1B] to-[#1A1817] text-amber-200 overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E0AC3C_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="w-12 h-12 rounded-xl border border-[#E0AC3C]/40 bg-[#8B1E1E]/80 flex flex-col items-center justify-center text-white text-[10px] font-serif font-bold shadow-md">
          <span>VIỆT</span>
          <span>PHỤC</span>
        </div>
        <span className="text-[11px] font-serif-royal text-amber-100/90 mt-2 px-3 text-center line-clamp-1">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
          <span className="text-xs text-stone-400 font-serif">Đang tải di sản...</span>
        </div>
      )}
      <img
        src={effectiveSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError && fallbackSrc && effectiveSrc !== fallbackSrc) {
            setHasError(true);
          } else {
            setHasError(true);
          }
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
