import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';
import { servicesData, type ServiceDetail } from '../data/services';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('web-dev');

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-[#F3F5F6] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
              Capabilities &amp; Scope
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#202B35] tracking-tight leading-[1.12]">
              Everything your brand needs,{' '}
              <span className="font-editorial italic text-[#526F87]">
                end to end.
              </span>
            </h2>
          </div>

          <p className="text-base text-[#687580] max-w-md leading-relaxed">
            No juggling multiple disconnected vendors. We plan, design, engineer, and scale your
            entire online presence under one roof with transparent metrics.
          </p>
        </div>

        {/* Minimal Editorial Service List (Hairline rows, zero heavy cards) */}
        <div className="border-t border-[#E8EAEC]">
          {servicesData.map((service: ServiceDetail, index: number) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="border-b border-[#E8EAEC] transition-colors duration-200"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                  className="w-full py-8 sm:py-10 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus-ring group"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-[#526F87] font-semibold shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#202B35] group-hover:text-[#526F87] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 justify-between md:justify-end pl-12 md:pl-0">
                    <span className="text-xs text-[#687580] hidden lg:inline-block max-w-xs truncate">
                      {service.shortDesc}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E8EAEC] bg-white flex items-center justify-center text-[#202B35] group-hover:border-[#526F87] group-hover:text-[#526F87] transition-colors shrink-0">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Editorial Content */}
                {isExpanded && (
                  <div className="pb-10 pl-0 sm:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-fadeIn">
                    
                    <div className="lg:col-span-5 space-y-4">
                      <p className="text-sm sm:text-base text-[#687580] leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-[#E8EAEC] text-xs text-[#687580]">
                        <span className="font-semibold text-[#202B35] block mb-1">
                          Commercial Value:
                        </span>
                        {service.businessValue}
                      </div>

                      <div className="pt-2">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#202B35] hover:text-[#526F87] transition-colors"
                        >
                          <span>Enquire about this capability</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#687580] block mb-3">
                        Included Deliverables
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-[#202B35] p-2.5 rounded-lg bg-white/70 border border-[#E8EAEC]/70"
                          >
                            <Check className="w-3.5 h-3.5 text-[#526F87] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
