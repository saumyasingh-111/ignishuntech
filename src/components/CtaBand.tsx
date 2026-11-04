import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const CtaBand: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sky-900 via-[#0B192C] to-[#0B192C] text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #38BDF8 0%, transparent 50%), radial-gradient(circle at 80% 50%, #0284C7 0%, transparent 50%)`,
        }}
      />

      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-300 block mb-2">
              Ready to Accelerate Growth?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
              One agency. Every channel. Zero hand-offs.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Schedule an introductory scoping call. We'll outline how a unified design, engineering,
              and acquisition strategy can scale your brand efficiently.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-white hover:bg-sky-50 rounded-lg shadow-sm transition-colors focus-ring"
            >
              <MessageSquare className="w-4 h-4 text-sky-600" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </a>

            <a
              href="tel:+916386747596"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors focus-ring"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>Call +91 63867 47596</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
