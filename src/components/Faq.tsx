import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does the single point of contact model work?',
      answer:
        'When you partner with Ignishun Tech, you are assigned a dedicated project lead who understands both technical engineering and commercial marketing. You never have to repeat yourself or mediate between separate developers, designers, or ad managers. Your lead orchestrates the entire cross-disciplinary team and provides clear, unified progress updates.',
    },
    {
      question: 'Can we hire Ignishun Tech for web development only, or do we need marketing too?',
      answer:
        'You can engage us for individual services or our full-service suite. Many clients start with a flagship website redesign or technical build, and subsequently expand into ongoing paid advertising and social media management once their digital foundation is established.',
    },
    {
      question: 'What is the typical timeline for a web design and development project?',
      answer:
        'Depending on complexity, a bespoke brand website typically requires 3 to 6 weeks from initial discovery through design approval, frontend development, content population, and launch. Custom e-commerce platforms or web applications with extensive integrations may take 6 to 10 weeks with structured milestone deliverables.',
    },
    {
      question: 'How do you measure and report marketing campaign performance?',
      answer:
        'We report on commercial business metrics rather than vanity metrics. You receive weekly/monthly performance summaries detailing cost per acquisition (CAC), conversion rates, qualified lead volume, return on ad spend (ROAS), and organic reach growth. We maintain complete transparency with shared dashboard access.',
    },
    {
      question: 'How do you select influencers and creators for campaigns?',
      answer:
        'We screen creators using rigorous data vetting: audience authenticity, engagement health, audience demographic alignment, and previous sponsored performance. We handle contract negotiations, rate benchmarks, product seeding, creative briefs, and conversion tracking.',
    },
    {
      question: 'Where is Ignishun Tech based, and how do you handle remote communication?',
      answer:
        'Ignishun Tech operates as a remote-first agency serving clients worldwide. We communicate through Slack, email, and scheduled video conferences, structured around clear weekly sprint cycles that accommodate your timezone.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F0F6FA]/50 border-t border-slate-200/70">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about partnering with Ignishun Tech for design, code, and growth.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-ring"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#0B192C]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
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
