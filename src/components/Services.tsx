import React, { useState } from 'react';
import { ArrowRight, Check, X, Layers } from 'lucide-react';
import { servicesData, type ServiceDetail } from '../data/services';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F0F6FA]/50 border-y border-slate-200/70">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Agency Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-6">
            Everything your brand needs,{' '}
            <span className="text-[#0284C7]">end to end.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No juggling five separate agencies or disjointed freelancers. We plan, design, engineer,
            launch, and scale your entire online presence under one roof with transparent metrics.
          </p>
        </div>

        {/* Services Grid: 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center text-sky-700 transition-colors group-hover:bg-[#0B192C] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Business Value Highlight */}
                  <div className="p-3.5 rounded-lg bg-slate-50/80 border border-slate-100 text-xs text-slate-600 mb-6">
                    <span className="font-semibold text-slate-800 block mb-1">
                      Business Value:
                    </span>
                    {service.businessValue}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>View Deliverables & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Deep Dive */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Close service details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    Service Scope & Deliverables
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B192C]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-100">
                {selectedService.shortDesc}
              </p>

              {/* Deliverables List */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#0B192C] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>Key Deliverables Included</span>
                </h4>
                <div className="space-y-2">
                  {selectedService.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Commercial Outcomes */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Target Outcomes
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                  {selectedService.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ideal for: {selectedService.idealFor}
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#0B192C] hover:bg-sky-700 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
