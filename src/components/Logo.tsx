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
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-[11px] tracking-[0.28em]',
    xl: 'text-[13px] tracking-[0.3em]',
  };

  // Original vector mark preserving exact geometrical paths & proportions
  const LogoMark = (
    <svg
      viewBox="90 45 130 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="Ignishun Tech Logo Mark"
    >
      {/* 'i' Dot */}
      <circle cx="118" cy="70" r="14" fill="#0284C7" />
      {/* 'i' Stem */}
      <rect x="106" y="100" width="24" height="140" rx="4" fill="#0284C7" />
      {/* 't' Stem */}
      <rect x="152" y="60" width="22" height="150" rx="4" fill="#64748B" />
      {/* 't' Crossbar */}
      <path
        d="M132 100 H206"
        stroke="#64748B"
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* 't' Bottom Curl */}
      <path
        d="M174 190 v10 a30 30 0 0 0 30 30 h6"
        stroke="#64748B"
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
          <span className={`font-extrabold tracking-tight text-[#0B192C] leading-none ${textSizes[size]}`}>
            IGNISHUN <span className="text-[#0284C7]">TECH</span>
          </span>
          <span className={`font-semibold uppercase text-slate-400 mt-1 ${subtextSizes[size]}`}>
            Digital Growth & Tech
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal lockup - prominent and modern
  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      <div className="relative p-1 rounded-xl bg-slate-50 border border-slate-200/60 shadow-xs transition-colors group-hover:border-sky-300 group-hover:bg-sky-50/40">
        {LogoMark}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-extrabold tracking-tight text-[#0B192C] leading-tight ${textSizes[size]}`}>
            IGNISHUN
          </span>
          <span className={`font-bold tracking-tight text-[#0284C7] leading-tight ${textSizes[size]}`}>
            TECH
          </span>
        </div>
        <span className={`font-semibold uppercase text-slate-400 -mt-0.5 ${subtextSizes[size]}`}>
          Digital Agency & Services
        </span>
      </div>
    </div>
  );
};
