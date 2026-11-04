import React from 'react';
import { Search, Compass, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Align',
      subtitle: 'Understanding the commercial foundation',
      desc: 'We conduct a thorough audit of your current digital footprint, competitor positioning, target personas, and growth goals before proposing technical or creative architecture.',
      icon: Search,
      deliverables: ['Commercial objectives audit', 'Competitor benchmarking', 'Audience & tech stack review'],
    },
    {
      num: '02',
      title: 'Strategy & Roadmap',
      subtitle: 'Tailored cross-channel plan',
      desc: 'A synchronized strategy connecting your website architecture, paid acquisition budgets, social content cadence, and creator partnerships into one unified execution timeline.',
      icon: Compass,
      deliverables: ['Custom project roadmap', 'Channel budget allocation', 'Creative briefs & wireframe milestones'],
    },
    {
      num: '03',
      title: 'Execute & Launch',
      subtitle: 'High-cadence design and code',
      desc: 'Our integrated engineering and creative teams build, test, and deploy. Code is hardened for performance, campaigns are loaded, and tracking pixels are calibrated.',
      icon: Rocket,
      deliverables: ['Clean, responsive codebase', 'Live ad campaigns & pixel tracking', 'Active content publishing'],
    },
    {
      num: '04',
      title: 'Optimize & Compound',
      subtitle: 'Continuous data-driven growth',
      desc: 'We continuously monitor site speed, conversions, cost per lead, and engagement. Weekly data reviews and ongoing split tests ensure your digital presence compounds over time.',
      icon: TrendingUp,
      deliverables: ['Transparent weekly performance dashboards', 'Continuous A/B conversion tests', 'Quarterly growth reviews'],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F0F6FA]/50 border-y border-slate-200/70">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Working Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-6">
            A disciplined methodology, built for{' '}
            <span className="text-[#0284C7]">reliable outcomes.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Predictable results require structured execution. From day-one onboarding through ongoing
            scaling, here is how we work alongside your team with complete clarity.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-sky-700 tracking-tight">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B192C] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Outputs
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle className="w-3 h-3 text-sky-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Accountability Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Every phase is managed by your dedicated Ignishun project lead with regular check-ins and direct communication.
          </p>
        </div>

      </div>
    </section>
  );
};
