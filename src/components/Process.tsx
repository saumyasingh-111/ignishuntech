import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Align',
      desc: 'We conduct a thorough audit of your current digital footprint, audience personas, and commercial targets before proposing technical architecture.',
      deliverable: 'Commercial Audit & Architecture Brief',
    },
    {
      num: '02',
      title: 'Strategy & Roadmap',
      desc: 'A synchronized plan connecting your web engineering, ad spend, and social content cadence into one unified execution timeline.',
      deliverable: 'Unified Multi-Channel Roadmap',
    },
    {
      num: '03',
      title: 'Execute & Launch',
      desc: 'Our integrated engineering and creative teams build, test, and deploy. Code is hardened for speed, and tracking pixels are calibrated.',
      deliverable: 'High-Speed Web Platform & Active Funnels',
    },
    {
      num: '04',
      title: 'Optimize & Compound',
      desc: 'We continuously track conversion velocity, page performance, and cost per acquisition, iterating weekly to compound growth.',
      deliverable: 'Weekly Performance & Optimization Reviews',
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 lg:py-40 bg-[#F3F5F6] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#202B35] tracking-tight leading-[1.12] mb-6">
            A disciplined methodology, built for{' '}
            <span className="font-editorial italic text-[#526F87]">
              predictable growth.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#687580] font-normal leading-relaxed">
            Predictable outcomes require structured execution. Here is how we collaborate with your
            in-house team from day-one onboarding through ongoing scale.
          </p>
        </div>

        {/* Minimal Numbered Sequence with Hairline Dividers (Zero bulky cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-6 border-t border-[#E8EAEC]">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs font-semibold text-[#526F87] block mb-4">
                  STEP {step.num}
                </span>
                <h3 className="text-xl font-medium text-[#202B35] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#687580] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8EAEC] text-[11px] text-[#687580]">
                Output: <strong className="text-[#202B35] font-medium">{step.deliverable}</strong>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
