import React from 'react';
import { Code2, BarChart3, Palette, MonitorCheck } from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackCategories = [
    {
      title: 'Web & Engineering',
      icon: Code2,
      desc: 'Modern, scalable frontend frameworks and headless architectures.',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Webflow', 'Node.js', 'Vite'],
    },
    {
      title: 'Paid Media & Advertising',
      icon: BarChart3,
      desc: 'Precision ad platforms calibrated for low-CAC and high-ROAS acquisition.',
      tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'TikTok Ads', 'YouTube Ads'],
    },
    {
      title: 'Analytics & Measurement',
      icon: MonitorCheck,
      desc: 'First-party tracking infrastructure and transparent conversion dashboards.',
      tools: ['Google Analytics 4', 'Google Tag Manager', 'Search Console', 'Looker Studio', 'PostHog', 'Hotjar'],
    },
    {
      title: 'Creative & Design Systems',
      icon: Palette,
      desc: 'High-craft design tokens, wireframing tools, and motion asset suites.',
      tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro'],
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/70">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Technology & Platforms
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-3">
            Built on proven, modern industry standards.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We use established, maintainable technologies and enterprise-grade platforms to ensure
            your systems are resilient, fast, and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-[#FAFBFD] rounded-xl border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-700 mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B192C] mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
