import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Web Design' | 'Social Media' | 'Paid Ads' | 'Influencer Marketing';
  clientType: string;
  summary: string;
  image: string;
  metric: string;
  metricLabel: string;
  highlights: string[];
  scope: string;
}

const projectsData: Project[] = [
  {
    id: 'ecom-revamp',
    title: 'E-Commerce Platform Re-engineering',
    category: 'Web Design',
    clientType: 'Retail & Lifestyle Brand',
    summary:
      'A complete architectural overhaul of an online storefront, migrating to a high-speed headless frontend, streamlining checkout funnels, and optimizing Core Web Vitals.',
    image: '/assets/ecom.png',
    metric: '99/100',
    metricLabel: 'Lighthouse Performance Score',
    highlights: [
      'Sub-second page load times across mobile devices',
      'Frictionless multi-step checkout reducing cart abandonment',
      'Fully responsive, accessible design system',
    ],
    scope: 'Custom UI/UX, Frontend Engineering, Mobile Optimization, Speed Hardening',
  },
  {
    id: 'social-growth',
    title: 'Multi-Channel Social Presence & Content Engine',
    category: 'Social Media',
    clientType: 'Direct-to-Consumer Brand',
    summary:
      'Engineered an authoritative brand voice across Instagram and LinkedIn with consistent editorial calendars, motion graphics, and active community engagement.',
    image: '/assets/socmed.png',
    metric: '3×',
    metricLabel: 'Monthly Engagement Growth',
    highlights: [
      'Daily scheduled content production and high-grade visual assets',
      'Active moderation turning commenters into brand advocates',
      'Compounding follower growth without vanity giveaways',
    ],
    scope: 'Content Strategy, Visual Assets, Community Management, Analytics',
  },
  {
    id: 'perf-ads',
    title: 'Cross-Platform Performance Advertising Rollout',
    category: 'Paid Ads',
    clientType: 'B2B & High-Ticket Services',
    summary:
      'Restructured paid search and Meta advertising funnels with high-intent audience segmentation, dynamic creative testing, and server-side tracking calibration.',
    image: '/assets/mkt.png',
    metric: '−30%',
    metricLabel: 'Customer Acquisition Cost',
    highlights: [
      'Eliminated wasted spend on non-converting search queries',
      'High-converting landing page variants with clear attribution',
      'Predictable, scalable customer pipeline month over month',
    ],
    scope: 'Google Search Ads, Meta Campaigns, Conversion Tracking, A/B Testing',
  },
  {
    id: 'creator-launch',
    title: 'Coordinated Creator Partnership Product Launch',
    category: 'Influencer Marketing',
    clientType: 'Consumer Tech Brand',
    summary:
      'Vetted, contracted, and managed targeted creator activations across TikTok, Instagram, and YouTube for a synchronized flagship product launch.',
    image: '/assets/creatorpart.png',
    metric: '1.8M+',
    metricLabel: 'Verified Organic Campaign Reach',
    highlights: [
      'Authentic creator alignment with zero generic sponsored scripts',
      'Trackable custom affiliate links and conversion promo codes',
      'Repurposable high-performing UGC for ongoing paid ad creative',
    ],
    scope: 'Creator Vetting, Rate Negotiation, Campaign Briefs, Sales Attribution',
  },
];

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Web Design', 'Social Media', 'Paid Ads', 'Influencer Marketing'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAFBFD]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200/60 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
              Selected Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C] leading-tight mb-4">
              Proven results across{' '}
              <span className="text-[#0284C7]">every channel.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A snapshot of how we combine engineering rigor, brand aesthetics, and media buying to
              deliver measurable commercial impact for our clients.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 2 columns with editorial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-200/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-xs text-[#0B192C] shadow-xs border border-slate-200/80">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-[#0B192C]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  {project.metric} {project.metricLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {project.clientType}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3 group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope & Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Scope: <strong className="text-slate-700">{project.scope}</strong>
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900 group/link shrink-0 ml-3"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#0B192C]">
              Need a bespoke scope for your brand?
            </h4>
            <p className="text-xs text-slate-500">
              We design custom proposals covering design, development, media buying, or all three.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0B192C] hover:bg-sky-700 rounded-lg transition-colors shrink-0"
          >
            Request Custom Case Studies
          </a>
        </div>

      </div>
    </section>
  );
};
