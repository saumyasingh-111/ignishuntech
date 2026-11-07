import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
        'When you partner with Ignishun Tech, you are paired with a dedicated project lead who understands both software engineering and growth marketing. You never have to referee between separate developers, designers, or ad managers. Your lead orchestrates the entire cross-disciplinary team and provides clear, unified progress updates.',
    },
    {
      question: 'Can we hire Ignishun Tech for web development only, or do we need marketing too?',
      answer:
        'You can engage us for individual services or our full-service suite. Many clients start with a flagship website rebuild or technical build, and subsequently expand into ongoing paid advertising and social media management once their digital foundation is established.',
    },
    {
      question: 'What is the typical timeline for a web design and engineering project?',
      answer:
        'Depending on complexity, a bespoke brand website typically requires 3 to 6 weeks from initial discovery through design approval, frontend development, content population, and launch. Custom e-commerce platforms or web applications with extensive integrations may take 6 to 10 weeks with structured milestone deliverables.',
    },
    {
      question: 'How do you measure and report marketing campaign performance?',
      answer:
        'We report on commercial business metrics rather than vanity impressions. You receive weekly performance summaries detailing cost per acquisition (CAC), conversion rates, qualified lead volume, return on ad spend (ROAS), and organic reach growth. We maintain complete transparency with direct access.',
    },
    {
      question: 'How do you select influencers and creators for campaigns?',
      answer:
        'We screen creators using rigorous data vetting: audience authenticity, engagement health, demographic alignment, and previous sponsored performance. We handle contract negotiations, rate benchmarks, product seeding, creative briefs, and conversion tracking.',
    },
    {
      question: 'Where is Ignishun Tech based, and how do you handle remote communication?',
      answer:
        'Ignishun Tech operates as a remote-first agency serving clients worldwide. We communicate through Slack, email, and scheduled video conferences, structured around clear weekly sprint cycles that accommodate your timezone.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF8] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#202B35] tracking-tight leading-[1.14]">
            Good questions.{' '}
            <span className="font-editorial italic text-[#526F87]">
              Clear answers.
            </span>
          </h2>
        </div>

        {/* Minimal Accordion with Hairline Dividers (Zero bulky cards) */}
        <div className="border-t border-[#E8EAEC] divide-y divide-[#E8EAEC]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-6 sm:py-8">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer focus-ring group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-normal text-[#202B35] group-hover:text-[#526F87] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#E8EAEC] bg-[#F3F5F6] flex items-center justify-center text-[#202B35] group-hover:border-[#526F87] group-hover:text-[#526F87] transition-colors shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-sm sm:text-base text-[#687580] leading-relaxed">
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
