import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  // Proportions and dimensions based on size
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-14 w-14',
    xl: 'h-18 w-18',
  };

  const textSizes = {
    sm: 'text-base font-bold',
    md: 'text-xl font-bold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight',
    xl: 'text-3xl font-extrabold tracking-tight',
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.24em]',
    lg: 'text-[11px] tracking-[0.28em]',
    xl: 'text-[12px] tracking-[0.3em]',
  };

  // Original vector mark preserving exact geometrical paths & proportions
  const LogoMark = (
    <svg
      viewBox="90 45 130 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-[1.03]`}
      aria-label="Ignishun Tech Logo"
    >
      {/* 'i' Dot */}
      <circle cx="118" cy="70" r="14" fill="#526F87" />
      {/* 'i' Stem */}
      <rect x="106" y="100" width="24" height="140" rx="4" fill="#526F87" />
      {/* 't' Stem */}
      <rect x="152" y="60" width="22" height="150" rx="4" fill="#687580" />
      {/* 't' Crossbar */}
      <path
        d="M132 100 H206"
        stroke="#687580"
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* 't' Bottom Curl */}
      <path
        d="M174 190 v10 a30 30 0 0 0 30 30 h6"
        stroke="#687580"
        strokeWidth="22"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoMark}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 group ${className}`}>
        {LogoMark}
        <div className="flex flex-col items-center text-center">
          <span className={`text-[#202B35] leading-none ${textSizes[size]}`}>
            IGNISHUN <span className="text-[#526F87]">TECH</span>
          </span>
          <span className={`uppercase font-medium text-[#687580] mt-1 ${subtextSizes[size]}`}>
            Digital Growth &amp; Technology
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal lockup: spacious, clean, prominent
  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      <div className="relative p-1.5 rounded-xl bg-white border border-[#E8EAEC] shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors group-hover:border-[#D0D4D8]">
        {LogoMark}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-[#202B35] leading-none ${textSizes[size]}`}>
            IGNISHUN
          </span>
          <span className={`text-[#526F87] leading-none ${textSizes[size]}`}>
            TECH
          </span>
        </div>
        <span className={`uppercase font-medium text-[#687580] mt-1.5 ${subtextSizes[size]}`}>
          Digital Growth Studio
        </span>
      </div>
    </div>
  );
};
