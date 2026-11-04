import React from 'react';
import { ArrowRight, CheckCircle2, Layers, Code, Megaphone, Users, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#FAFBFD] to-[#F0F6FA]/50"
    >
      {/* Subtle background geometry - restrained, low-opacity corporate pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0B192C 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-sky-800 text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
              <span>Full-Service Digital Growth Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B192C] leading-[1.12] mb-6">
              We build brands that{' '}
              <span className="text-[#0284C7] underline decoration-sky-200 decoration-wavy decoration-2 underline-offset-8">
                command attention
              </span>{' '}
              and drive growth.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              From custom web applications to targeted digital advertising, organic social growth,
              and creator partnerships — <strong className="text-[#0B192C] font-semibold">Ignishun Tech</strong>{' '}
              manages your entire online presence under one roof with zero hand-off friction.
            </p>

            {/* Actions / CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#0B192C] hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus-ring group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-sky-300 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-lg shadow-2xs hover:border-slate-300 transition-all duration-200 focus-ring"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>

            {/* Core Value Commitments */}
            <div className="pt-8 border-t border-slate-200/70 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Single Agency</div>
                  <div className="text-xs text-slate-500">Zero vendor fragmentation</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Full-Funnel Scope</div>
                  <div className="text-xs text-slate-500">Design, code & media</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Remote-First</div>
                  <div className="text-xs text-slate-500">Serving clients globally</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Agency Operational Blueprint */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-100 to-slate-100 opacity-60 blur-xs" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-7">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                        Ignishun Delivery Model
                      </div>
                      <div className="text-sm font-bold text-[#0B192C]">
                        Unified Digital Engine
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active Sync
                  </span>
                </div>

                {/* 4 Pillars Grid */}
                <div className="space-y-3">
                  
                  {/* Pillar 1: Web & Dev */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0">
                          <Code className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0B192C]">
                            Web Design & Development
                          </div>
                          <div className="text-xs text-slate-500">
                            Fast, responsive, conversion-focused websites
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">01</span>
                    </div>
                  </div>

                  {/* Pillar 2: Paid Acquisition */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0">
                          <Megaphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0B192C]">
                            Digital Marketing & Paid Ads
                          </div>
                          <div className="text-xs text-slate-500">
                            Search, Meta & video performance funnels
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">02</span>
                    </div>
                  </div>

                  {/* Pillar 3: Social & Content */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0B192C]">
                            Social Media Management
                          </div>
                          <div className="text-xs text-slate-500">
                            Daily publishing & community engagement
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">03</span>
                    </div>
                  </div>

                  {/* Pillar 4: Influencer & Creators */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0B192C]">
                            Influencer & Creator Marketing
                          </div>
                          <div className="text-xs text-slate-500">
                            Vetted partnerships for authentic brand reach
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">04</span>
                    </div>
                  </div>

                </div>

                {/* Footer guarantee bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>Single accountable agency</span>
                  </div>
                  <span className="font-semibold text-slate-700">100% End-to-End</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
