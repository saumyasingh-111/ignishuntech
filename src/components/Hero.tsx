import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-36 bg-[#FAFAF8] overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Centered Editorial Composition */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F5F6] border border-[#E8EAEC] text-[#687580] text-xs font-medium tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#526F87]" />
            <span>Digital Growth &amp; Technology Studio</span>
          </div>

          {/* Large, Expressive Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#202B35] leading-[1.08] mb-8">
            We build brands that{' '}
            <span className="font-editorial italic font-normal text-[#526F87]">
              command attention
            </span>{' '}
            and scale with precision.
          </h1>

          {/* Calm, readable supporting paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#687580] font-normal leading-relaxed max-w-2xl mb-10">
            Custom web engineering, performance acquisition, social media, and creator
            partnerships. Ignishun Tech unifies your entire digital presence under one roof with zero
            vendor hand-offs.
          </p>

          {/* Minimal CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#202B35] text-white hover:bg-[#151D24] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)] group focus-ring"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-white/70 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#202B35] bg-white border border-[#E8EAEC] hover:bg-[#F3F5F6] hover:border-[#D0D4D8] transition-all duration-200 focus-ring"
            >
              <span>Explore Services</span>
            </a>
          </div>

        </div>

        {/* Minimal Editorial Canvas: Wispr Flow Inspired Showcase */}
        <div className="mt-4 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#F3F5F6] border border-[#E8EAEC] p-8 sm:p-12 lg:p-14 overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E8EAEC]">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-2">
                  The Ignishun Operating Model
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-[#202B35] tracking-tight">
                  One agency. Every channel.{' '}
                  <span className="font-editorial italic text-[#526F87]">Zero friction.</span>
                </h2>
              </div>

              <div className="text-xs text-[#687580] max-w-xs">
                Designers, software engineers, and media strategists collaborating in direct sync.
              </div>
            </div>

            {/* 3 Core Pillars in Clean Editorial Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
              
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#526F87] font-semibold mb-3 block">01 / ENGINEERING</span>
                  <h3 className="text-lg font-medium text-[#202B35] mb-2">Code that converts</h3>
                  <p className="text-xs text-[#687580] leading-relaxed">
                    Custom web applications and headless storefronts built for sub-second speeds, flawless responsiveness, and maximum lead capture.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#E8EAEC]/70 text-[11px] font-medium text-[#202B35]">
                  React • TypeScript • Headless Web
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#526F87] font-semibold mb-3 block">02 / ACQUISITION</span>
                  <h3 className="text-lg font-medium text-[#202B35] mb-2">Demand that scales</h3>
                  <p className="text-xs text-[#687580] leading-relaxed">
                    Data-driven Google search, Meta ad funnels, and creator campaigns engineered to reduce customer acquisition costs and drive real pipeline.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#E8EAEC]/70 text-[11px] font-medium text-[#202B35]">
                  Paid Media • Funnels • Analytics
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#526F87] font-semibold mb-3 block">03 / BRAND &amp; SOCIAL</span>
                  <h3 className="text-lg font-medium text-[#202B35] mb-2">Equity that compounds</h3>
                  <p className="text-xs text-[#687580] leading-relaxed">
                    Consistent editorial calendars, high-craft brand design, and community management that turns passive viewers into loyal advocates.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#E8EAEC]/70 text-[11px] font-medium text-[#202B35]">
                  Brand Systems • Content • Community
                </div>
              </div>

            </div>

            {/* Quiet Footer Bar */}
            <div className="mt-12 pt-6 border-t border-[#E8EAEC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687580]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Remote-first • Collaborating with ambitious teams globally</span>
              </div>
              <a
                href="#about"
                className="inline-flex items-center gap-1 font-medium text-[#202B35] hover:text-[#526F87] transition-colors"
              >
                <span>Read our story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
