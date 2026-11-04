import React from 'react';
import { Globe, Share2, TrendingUp, Users, Palette, Search, ShieldCheck, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { label: 'Web Design & Development', icon: Globe },
    { label: 'Social Media Management', icon: Share2 },
    { label: 'Paid Search & Meta Ads', icon: TrendingUp },
    { label: 'Influencer Marketing', icon: Users },
    { label: 'Branding & Identity', icon: Palette },
    { label: 'SEO & Content Strategy', icon: Search },
    { label: 'Conversion Optimization', icon: Zap },
    { label: 'End-to-End Governance', icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/80 py-6">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Agency Capabilities
            </span>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <span className="text-xs font-semibold text-[#0B192C]">
              All core channels under one roof
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 hover:text-sky-900 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{cap.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};
