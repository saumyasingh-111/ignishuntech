import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  clientType: string;
  summary: string;
  image: string;
  metric: string;
  metricLabel: string;
  scope: string;
}

const projectsData: Project[] = [
  {
    id: 'ecom-revamp',
    title: 'E-Commerce Platform Re-engineering',
    category: 'Web Design & Engineering',
    clientType: 'Retail & Consumer Lifestyle',
    summary:
      'A complete architectural rebuild of an online storefront, migrating to a high-speed headless frontend, eliminating checkout drop-offs, and optimizing Core Web Vitals.',
    image: '/assets/ecom.png',
    metric: '99/100',
    metricLabel: 'Lighthouse Performance Score',
    scope: 'Custom Frontend, Mobile Optimization, Speed Hardening',
  },
  {
    id: 'social-growth',
    title: 'Multi-Channel Social Presence & Content Engine',
    category: 'Social Media Strategy',
    clientType: 'Direct-to-Consumer Brand',
    summary:
      'Engineered a consistent brand voice across Instagram and LinkedIn with structured editorial calendars, motion graphics, and active community conversation management.',
    image: '/assets/socmed.png',
    metric: '3×',
    metricLabel: 'Monthly Engagement Lift',
    scope: 'Content Strategy, Visual Assets, Community Moderation',
  },
  {
    id: 'perf-ads',
    title: 'Performance Acquisition & Paid Media Rollout',
    category: 'Paid Search & Meta Ads',
    clientType: 'B2B & High-Ticket Services',
    summary:
      'Restructured multi-platform ad funnels with high-intent search audience segmentation, dynamic creative testing, and calibrated server-side conversion tracking.',
    image: '/assets/mkt.png',
    metric: '−30%',
    metricLabel: 'Customer Acquisition Cost',
    scope: 'Google Search Ads, Meta Campaigns, Conversion Tracking',
  },
  {
    id: 'creator-launch',
    title: 'Synchronized Creator Partnership Launch',
    category: 'Influencer Marketing',
    clientType: 'Consumer Tech Venture',
    summary:
      'Vetted, contracted, and coordinated authentic creator partnerships across TikTok, Instagram, and YouTube for a coordinated product release with verified referral attribution.',
    image: '/assets/creatorpart.png',
    metric: '1.8M+',
    metricLabel: 'Verified Organic Reach',
    scope: 'Creator Vetting, Rate Benchmarking, Campaign Briefs',
  },
];

export const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects =
    activeTab === 'all'
      ? projectsData
      : projectsData.filter((p) => p.id === activeTab);

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF8] border-t border-[#E8EAEC]">
      <div className="w-full px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#687580] block mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#202B35] tracking-tight leading-[1.12]">
              Case studies &amp;{' '}
              <span className="font-editorial italic text-[#526F87]">
                commercial results.
              </span>
            </h2>
          </div>

          {/* Minimal Tab Selectors */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-[#F3F5F6] border border-[#E8EAEC]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#202B35] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                  : 'text-[#687580] hover:text-[#202B35]'
              }`}
            >
              All Work
            </button>
            {projectsData.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hidden sm:inline-block ${
                  activeTab === p.id
                    ? 'bg-white text-[#202B35] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                    : 'text-[#687580] hover:text-[#202B35]'
                }`}
              >
                {p.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Editorial Showcases */}
        <div className="space-y-24 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Preview */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="rounded-3xl overflow-hidden border border-[#E8EAEC] bg-[#F3F5F6] aspect-[16/10] relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#526F87] block mb-2">
                      {project.category} • {project.clientType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#202B35] tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#687580] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Clean Metric Callout */}
                  <div className="py-4 border-y border-[#E8EAEC] flex items-baseline gap-3">
                    <span className="text-3xl font-normal text-[#202B35] tracking-tight">
                      {project.metric}
                    </span>
                    <span className="text-xs text-[#687580] uppercase tracking-wider font-medium">
                      {project.metricLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#687580]">
                      Scope: <strong className="text-[#202B35] font-medium">{project.scope}</strong>
                    </span>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#202B35] hover:text-[#526F87] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
