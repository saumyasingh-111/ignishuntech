import React, { useState } from 'react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'Ignishun Tech rebuilt our website and took over our socials in the same month, and our online enquiries have never been higher. Having both under one team kept our messaging and conversion funnels completely synchronized.',
      author: 'Aisha Verma',
      role: 'Founder',
      company: 'Retail & Lifestyle Brand',
      focus: 'Web Rebuild & Social Growth',
    },
    {
      quote:
        'Finally an agency that handles everything end to end. No more juggling five different freelancers for one campaign. Their turnaround time and transparent commercial reporting are unmatched.',
      author: 'Rohan Malhotra',
      role: 'Marketing Lead',
      company: 'Growth-Stage Startup',
      focus: 'Paid Acquisition & Funnels',
    },
    {
      quote:
        'The influencer campaign they ran for our launch outperformed every projection we had. Communication was excellent throughout, and their team handled every creator contract and tracking link seamlessly.',
      author: 'Sara Khan',
      role: 'Co-founder',
      company: 'Consumer Venture',
      focus: 'Influencer & Creator Launch',
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#F3F5F6] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
            Client Voices
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#202B35] tracking-tight">
            What partners say about working with Ignishun.
          </h2>
        </div>

        {/* Large Editorial Quotation */}
        <div className="min-h-[260px] flex flex-col justify-between text-center max-w-3xl mx-auto">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-editorial italic font-normal text-[#202B35] leading-relaxed mb-8">
            "{testimonials[activeIndex].quote}"
          </blockquote>

          <div>
            <div className="text-sm font-semibold text-[#202B35]">
              {testimonials[activeIndex].author}
            </div>
            <div className="text-xs text-[#687580] mt-0.5">
              {testimonials[activeIndex].role}, {testimonials[activeIndex].company} • {testimonials[activeIndex].focus}
            </div>
          </div>
        </div>

        {/* Minimal switcher pills */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((t, idx) => (
            <button
              key={t.author}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-[#202B35]' : 'w-2 bg-[#D8DADC] hover:bg-[#687580]'
              }`}
              aria-label={`View testimonial from ${t.author}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
