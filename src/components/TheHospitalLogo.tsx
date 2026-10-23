import React from 'react';
import emblemImg from '@/src/assets/images/the_hospital_emblem.png';
import wordmarkImg from '@/src/assets/images/the_hospital_wordmark.png';
import wordmarkWhiteImg from '@/src/assets/images/the_hospital_wordmark_white.png';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  showSubtitle?: boolean;
  variant?: 'light' | 'dark';
  layout?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
}

export const TheHospitalLogo: React.FC<LogoProps> = ({
  className = '',
  showWordmark = true,
  showSubtitle = true,
  variant = 'light',
  layout = 'horizontal',
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 md:w-12 md:h-12',
    lg: 'w-16 h-16 md:w-20 md:h-20'
  };

  const wordmarkHeights = {
    sm: 'h-4',
    md: 'h-5 md:h-6',
    lg: 'h-8 md:h-9'
  };

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        <img
          src={emblemImg}
          alt="The Hospital Emblem"
          className={`${emblemSizes[size]} object-contain`}
          loading="eager"
        />
        {showWordmark && (
          <img
            src={isDark ? wordmarkWhiteImg : wordmarkImg}
            alt="The Hospital"
            className={`${wordmarkHeights[size]} object-contain mt-2.5`}
            loading="eager"
          />
        )}
        {showSubtitle && (
          <span
            className={`text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase mt-1 ${
              isDark ? 'text-slate-300' : 'text-[#6D6E71]'
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Plastic &amp; Cosmetic Surgery
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src={emblemImg}
        alt="The Hospital Emblem"
        className={`${emblemSizes[size]} object-contain shrink-0`}
        loading="eager"
      />

      {showWordmark && (
        <div className="flex flex-col text-left leading-none">
          <img
            src={isDark ? wordmarkWhiteImg : wordmarkImg}
            alt="The Hospital"
            className={`${wordmarkHeights[size]} object-contain object-left`}
            loading="eager"
          />
          {showSubtitle && (
            <span
              className={`text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase mt-1 ${
                isDark ? 'text-slate-300' : 'text-[#6D6E71]'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plastic &amp; Cosmetic Surgery
            </span>
          )}
        </div>
      )}
    </div>
  );
};
