import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const comparisons = [
    {
      area: 'Coordination',
      traditional: 'Managing 3 to 5 separate agencies and freelance contractors with conflicting advice.',
      ignishun: 'One unified team managing web development, paid ads, and social media under one roof.',
    },
    {
      area: 'Accountability',
      traditional: 'Finger-pointing when ads fail to convert or site updates break analytics tracking.',
      ignishun: 'Complete end-to-end ownership. Developers and media buyers work in direct sync.',
    },
    {
      area: 'Speed to Market',
      traditional: 'Minor landing page changes take weeks of back-and-forth between disparate teams.',
      ignishun: 'Rapid turnaround. New pages, tracking pixels, and ad creatives deploy in days.',
    },
    {
      area: 'Measurement',
      traditional: 'Vanity impression reports with disconnected attribution and hidden agency markups.',
      ignishun: 'Commercial clarity: cost per acquisition, conversion rate, and revenue impact.',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF8] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
            The Ignishun Model
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#202B35] tracking-tight leading-[1.12] mb-6">
            The difference between fragmented vendors and{' '}
            <span className="font-editorial italic text-[#526F87]">
              unified execution.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#687580] font-normal leading-relaxed">
            Eliminate the costly inefficiency of vendor fragmentation. Here is how partnering with
            Ignishun Tech transforms your day-to-day operations.
          </p>
        </div>

        {/* Minimal Editorial Comparison Table (Zero bulky cards) */}
        <div className="border-t border-[#E8EAEC]">
          <div className="hidden md:grid grid-cols-12 py-4 text-xs uppercase tracking-wider font-semibold text-[#687580] border-b border-[#E8EAEC]">
            <div className="col-span-3">Dimension</div>
            <div className="col-span-4 text-[#687580]">Fragmented Model</div>
            <div className="col-span-5 text-[#202B35]">The Ignishun Tech Unified Model</div>
          </div>

          <div className="divide-y divide-[#E8EAEC]">
            {comparisons.map((row) => (
              <div
                key={row.area}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-3">
                  <span className="text-sm font-semibold text-[#202B35]">{row.area}</span>
                </div>

                <div className="md:col-span-4 text-xs sm:text-sm text-[#687580] leading-relaxed">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#687580] block md:hidden mb-1">
                    Fragmented:
                  </span>
                  {row.traditional}
                </div>

                <div className="md:col-span-5 text-xs sm:text-sm text-[#202B35] font-medium leading-relaxed">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#526F87] block md:hidden mb-1">
                    Ignishun:
                  </span>
                  {row.ignishun}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
