import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Unified Cross-Disciplinary Team',
      desc: 'Our developers, designers, and growth marketers work together daily under one roof. Code, creative, and paid media move in identical lockstep.',
    },
    {
      num: '02',
      title: 'Commercial Metric Transparency',
      desc: 'We track what impacts your balance sheet: cost per acquisition, qualified leads, and conversion velocity, rather than vanity impressions.',
    },
    {
      num: '03',
      title: 'Agile Turnaround Without Friction',
      desc: 'Landing page iterations, campaign creatives, and analytics pixels are deployed seamlessly without the delay of third-party coordination.',
    },
    {
      num: '04',
      title: 'Single Point of Accountability',
      desc: 'One dedicated lead coordinates your entire digital roadmap. You never have to referee between disconnected freelancers.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF8] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Editorial Heading & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-4">
              About Ignishun Tech
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#202B35] tracking-tight leading-[1.14]">
              Growing a brand online shouldn’t mean managing{' '}
              <span className="font-editorial italic text-[#526F87]">
                five separate agencies.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#687580] text-base sm:text-lg font-normal leading-relaxed pt-2">
            <p>
              Ignishun Tech was built to eliminate the frustration of vendor fragmentation. When web
              developers don't understand paid media, and ad buyers don't touch code, budgets burn
              and growth stalls.
            </p>
            <p>
              We operate as a unified, full-service technology and digital growth studio. Our team of
              software engineers, creative designers, performance marketers, and creator strategists
              works in tight coordination, delivering your website, paid search, social media, and
              influencer campaigns under a single accountable roof.
            </p>
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#202B35] hover:text-[#526F87] transition-colors group"
              >
                <span>Explore how we support your brand</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Editorial Principles (Hairline list, not heavy boxed cards) */}
        <div className="border-t border-[#E8EAEC] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {principles.map((item) => (
              <div key={item.num} className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#526F87] font-semibold mb-4 block">
                    {item.num}
                  </span>
                  <h3 className="text-lg font-medium text-[#202B35] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687580] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
