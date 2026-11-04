import React from 'react';
import { Globe, Share2, TrendingUp, Users, Palette, Search } from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  businessValue: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  outcomes: string[];
  idealFor: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-dev',
    title: 'Web Design & Development',
    shortDesc:
      'Custom, responsive websites and web applications built for speed, conversion, and effortless maintainability on any device.',
    businessValue:
      'Elevates enterprise credibility, drives conversion rates, and ensures sub-second page loads that satisfy users and search engines.',
    icon: Globe,
    deliverables: [
      'Custom UI/UX interface design and wireframes',
      'Modern responsive frontend engineering (React, Next.js, HTML5/CSS3)',
      'E-commerce & CMS integration (Shopify, Webflow, custom backends)',
      'Core Web Vitals optimization and speed hardening',
      'Clean accessibility standards and cross-browser testing',
    ],
    outcomes: [
      'Sub-second page loading speed',
      'Higher visitor-to-lead conversion rates',
      'Seamless mobile and desktop user experience',
    ],
    idealFor: 'Businesses requiring a modern, high-converting digital presence or full platform redesign.',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDesc:
      'Structured content calendars, daily publishing, platform strategy, and active community engagement that nurtures an engaged audience.',
    businessValue:
      'Converts passive social channels into active organic communities that cultivate brand loyalty and constant brand recall.',
    icon: Share2,
    deliverables: [
      'Monthly editorial content calendars & theme planning',
      'High-fidelity graphic design and video assets',
      'Native copywriting tailored to Instagram, LinkedIn, and X',
      'Active community management, comments and direct messaging',
      'Monthly growth analytics and sentiment reports',
    ],
    outcomes: [
      'Consistent, polished brand voice across channels',
      'Compounding organic reach and follower growth',
      'Higher comment and share interaction rates',
    ],
    idealFor: 'Brands looking to establish consistent, authoritative authority across social ecosystems.',
  },
  {
    id: 'paid-ads',
    title: 'Digital Marketing & Advertising',
    shortDesc:
      'Data-driven paid search, social advertising, and multi-channel performance campaigns engineered to lower CAC and scale revenue.',
    businessValue:
      'Drives a predictable pipeline of qualified buyers while optimizing ad spend to protect margins and scale profitably.',
    icon: TrendingUp,
    deliverables: [
      'Google Search, Display & Performance Max setup',
      'Meta (Instagram & Facebook) paid funnel architecture',
      'Audience segmentation, retargeting & lookalike pools',
      'Conversion tracking, pixel calibration & server-side events',
      'A/B creative testing & cost-per-acquisition optimization',
    ],
    outcomes: [
      'Measurable reduction in cost per lead/acquisition',
      'Predictable ROAS and commercial scaling',
      'Complete visibility into campaign spend and returns',
    ],
    idealFor: 'Companies ready to turn paid media into a consistent, measurable customer acquisition channel.',
  },
  {
    id: 'influencer',
    title: 'Influencer & Creator Marketing',
    shortDesc:
      'End-to-end creator partnerships and campaign management that place your product in front of high-trust, targeted audiences.',
    businessValue:
      'Bypasses ad fatigue by tapping into genuine creator trust, generating social proof and driving high-converting product discovery.',
    icon: Users,
    deliverables: [
      'Creator identification, audience vetting & fraud screening',
      'Contract negotiation, deliverables scheduling & compliance',
      'Creative briefing & product seeding coordination',
      'UTM tracking links & promo code attribution',
      'Post-campaign reach, engagement & sales attribution analysis',
    ],
    outcomes: [
      'Authentic brand advocacy from respected voices',
      'High-engagement user-generated content for repurposing',
      'Verified sales and direct referral traffic',
    ],
    idealFor: 'Product launches, e-commerce scale-ups, and brands aiming for rapid social proof.',
  },
  {
    id: 'branding',
    title: 'Branding & Creative Identity',
    shortDesc:
      'Comprehensive visual identities, typography frameworks, logo design, and brand guidelines that give your business unmistakable presence.',
    businessValue:
      'Creates instant visual credibility, differentiates your offering in crowded markets, and ensures brand consistency across every medium.',
    icon: Palette,
    deliverables: [
      'Visual identity systems and logo design / refinement',
      'Color palette, typography and iconography guidelines',
      'Brand style guide and digital design tokens',
      'Marketing collateral, business cards & presentation decks',
      'Social media template libraries and creative toolkits',
    ],
    outcomes: [
      'Instant professional credibility with enterprise clients',
      'Unified aesthetic across digital and print touchpoints',
      'Turnkey guidelines that simplify asset production',
    ],
    idealFor: 'New ventures launching from scratch or established firms requiring a modern visual refresh.',
  },
  {
    id: 'seo-content',
    title: 'SEO & Content Strategy',
    shortDesc:
      'Technical search optimization, search-intent keyword mapping, and evergreen content architecture that ranks on Google and compounds.',
    businessValue:
      'Establishes defensible organic search dominance, reducing reliance on paid advertising and attracting high-intent search traffic.',
    icon: Search,
    deliverables: [
      'Comprehensive technical SEO audit and crawl health fixes',
      'Keyword research, competitor gap analysis & intent mapping',
      'On-page metadata, schema markup & internal link structure',
      'High-intent content strategy and authoritative article outlines',
      'Google Search Console monitoring & monthly ranking reports',
    ],
    outcomes: [
      'Improved rankings for primary commercial keywords',
      'Compounding month-over-month organic search volume',
      'Lower long-run blended customer acquisition costs',
    ],
    idealFor: 'Businesses aiming to build long-term organic authority and capture inbound search demand.',
  },
];
