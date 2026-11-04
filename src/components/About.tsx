import React from 'react';
import { CheckCircle2, Shield, Users, Layers, Zap, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const differentiators = [
    {
      title: 'Dedicated Cross-Functional Team',
      desc: 'Our software developers, creative designers, and growth marketers collaborate directly under one roof, keeping code, creative, and campaigns perfectly aligned.',
      icon: Users,
    },
    {
      title: 'Transparent Commercial Reporting',
      desc: 'No vanity metrics. We provide clear reporting on genuine business metrics: customer acquisition costs, qualified enquiries, conversion rates, and Core Web Vitals.',
      icon: Zap,
    },
    {
      title: 'Flexible Engagement Framework',
      desc: 'Whether launching a flagship web platform, scaling paid acquisition, or managing daily brand presence, our packages adapt to your stage and budget.',
      icon: Layers,
    },
    {
      title: 'Single Point of Accountability',
      desc: 'One dedicated lead coordinates your entire digital presence. You never have to referee between disconnected freelancers or competing agencies.',
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFBFD] relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            About Ignishun Tech
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-6">
            One agency. Every channel.{' '}
            <span className="text-[#0284C7]">Zero hand-offs.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ignishun Tech was founded on a straightforward observation: building and scaling a brand
            online shouldn't require managing five separate vendors. When designers don't understand
            engineering and ad buyers don't touch code, budgets get burned and momentum slows down.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed">
            <p className="text-base sm:text-lg">
              We operate as a complete digital partner for businesses seeking dependable execution.
              Instead of juggling an isolated web agency, a separate social freelancer, and a third
              media-buying group, Ignishun Tech unifies every touchpoint.
            </p>
            <p className="text-base sm:text-lg">
              Our engineers build fast, accessible web platforms engineered for conversion. Our growth
              marketers deploy targeted paid media to acquire high-intent customers. Our content and
              creator strategists cultivate authentic social engagement that compounds brand equity over
              time.
            </p>
            <p className="text-base sm:text-lg">
              Operating remote-first, we collaborate with clients worldwide, providing the responsive,
              direct communication of an agile in-house team paired with the technical breadth of a
              full-service agency.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-sky-800 transition-colors group"
              >
                <span>Discuss your growth goals with our team</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-7 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
              The Ignishun Standard
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Remote-First & Global</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Streamlined asynchronous workflows serving founders and marketing leaders globally.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">No Vendor Disconnects</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Your website code, ad tracking pixels, and creative assets are built in unison.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Transparent Communication</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Direct access to team leads, rapid response times, and clear weekly project updates.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0B192C]">Commercial Accountability</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Every deliverable is evaluated against measurable impact on lead velocity and brand growth.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-xs hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Pillar 0{index + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#0B192C] mb-2.5">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
