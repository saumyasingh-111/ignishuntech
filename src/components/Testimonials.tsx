import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Ignishun Tech rebuilt our website and took over our socials in the same month, and our online enquiries have never been higher. Having both under one team kept everything consistent.',
      author: 'Aisha Verma',
      role: 'Founder',
      company: 'Retail & Brand Partner',
      initials: 'AV',
      focus: 'Web Redesign & Social Growth',
    },
    {
      quote:
        'Finally an agency that handles everything end to end. No more juggling five different freelancers for one campaign. Their turnaround time and transparent reporting are unmatched.',
      author: 'Rohan Malhotra',
      role: 'Marketing Lead',
      company: 'Growth-Stage Startup',
      initials: 'RM',
      focus: 'Paid Acquisition & Funnel Optimization',
    },
    {
      quote:
        'The influencer campaign they ran for our launch outperformed every projection we had. Communication was excellent throughout, and their team handled every creator contract seamlessly.',
      author: 'Sara Khan',
      role: 'Co-founder',
      company: 'Consumer Brand',
      initials: 'SK',
      focus: 'Influencer & Creator Launch',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFBFD]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-4">
            What partners say about{' '}
            <span className="text-[#0284C7]">working with us.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from founders and marketing executives who rely on Ignishun Tech to manage
            their digital footprint.
          </p>
        </div>

        {/* Testimonials Grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-sky-200 mb-6" />
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B192C]">
                      {t.author}
                    </div>
                    <div className="text-xs text-slate-500">
                      {t.role}, <span className="text-slate-400">{t.company}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200 hidden sm:inline-block">
                  {t.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
