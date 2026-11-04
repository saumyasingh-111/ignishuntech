import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck, Zap, Users, LineChart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparisonItems = [
    {
      factor: 'Agency Coordination',
      fragmented: 'Managing 3 to 5 separate agencies and freelance contractors simultaneously.',
      ignishun: 'One unified team handling development, paid media, socials, and creators.',
    },
    {
      factor: 'Accountability & Ownership',
      fragmented: 'Finger-pointing when ads do not convert or site updates break campaign tracking.',
      ignishun: 'Complete end-to-end ownership. Developers and marketers work in direct sync.',
    },
    {
      factor: 'Execution Speed',
      fragmented: 'Simple landing page changes take weeks of back-and-forth between teams.',
      ignishun: 'Rapid turnaround. Code changes, tracking pixels, and creative iterate seamlessly.',
    },
    {
      factor: 'Commercial Transparency',
      fragmented: 'Confusing vanity reports with disparate attribution models and hidden markups.',
      ignishun: 'Direct, clear metrics: actual customer acquisition cost, conversion rate, and revenue.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAFBFD]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            The Ignishun Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-6">
            Why growing companies choose{' '}
            <span className="text-[#0284C7]">a unified partner.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Eliminate the costly inefficiency of vendor fragmentation. Here is how partnering with
            Ignishun Tech transforms your day-to-day operations.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Left: Traditional Approach */}
            <div className="md:col-span-5 p-7 sm:p-9 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Traditional Fragmented Approach
                </h3>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item) => (
                  <div key={item.factor} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-700 mb-0.5">
                        {item.factor}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.fragmented}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Ignishun Model */}
            <div className="md:col-span-7 p-7 sm:p-9 bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-sky-800">
                    The Ignishun Tech Unified Model
                  </h3>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  Recommended
                </span>
              </div>

              <div className="space-y-6">
                {comparisonItems.map((item) => (
                  <div key={item.factor} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#0B192C] mb-0.5">
                        {item.factor}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.ignishun}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars summary strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Zap className="w-5 h-5 text-sky-600 mb-3" />
            <div className="text-sm font-bold text-[#0B192C] mb-1">Faster Go-to-Market</div>
            <p className="text-xs text-slate-500">Launch campaigns and web features in days rather than waiting across weeks.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <ShieldCheck className="w-5 h-5 text-sky-600 mb-3" />
            <div className="text-sm font-bold text-[#0B192C]">No Finger-Pointing</div>
            <p className="text-xs text-slate-500">When your engineering and ads share one team, accountability is absolute.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <LineChart className="w-5 h-5 text-sky-600 mb-3" />
            <div className="text-sm font-bold text-[#0B192C]">Compounding Returns</div>
            <p className="text-xs text-slate-500">Every channel reinforces the others, building sustainable commercial momentum.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
            <Users className="w-5 h-5 text-sky-600 mb-3" />
            <div className="text-sm font-bold text-[#0B192C]">Direct Lead Access</div>
            <p className="text-xs text-slate-500">Communicate directly with senior specialists rather than account gatekeepers.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
