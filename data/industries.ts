import { Industry } from '@/types';

export const industries: Industry[] = [
  {
    slug: 'startups',
    title: 'Startups',
    description: 'Build your financial foundation right from day one. We understand the unique challenges of early-stage businesses—tight budgets, rapid iteration, and the need to move fast while staying compliant. Our startup-focused services are designed to scale with you, from incorporation to your first major funding round and beyond.',
    icon: 'Rocket',
    challenges: [
      'Setting up proper financial systems from day one',
      'Understanding compliance requirements and deadlines',
      'Preparing for investor scrutiny and due diligence',
      'Managing cash flow with limited runway',
      'Structuring ESOPs and equity correctly',
      'Balancing growth speed with financial controls',
    ],
    solutions: [
      'Streamlined incorporation and entity setup',
      'Automated compliance calendar and reminders',
      'Investor-ready financial statements and MIS',
      'Cash flow forecasting and runway planning',
      'ESOP design, valuation, and documentation',
      'Fractional CFO support for strategic decisions',
    ],
    services: ['cfo-advisory', 'taxation', 'corporate', 'compliance', 'valuation'],
  },
  {
    slug: 'smes',
    title: 'Small & Medium Enterprises',
    description: 'Scale with confidence. As your business grows, so does the complexity. We help SMEs navigate the transition from entrepreneurial hustle to structured operations—optimizing taxes, strengthening controls, and preparing for the next stage of growth without losing the agility that got you here.',
    icon: 'TrendingUp',
    challenges: [
      'Managing increasing regulatory complexity',
      'Optimizing tax structures as revenue grows',
      'Maintaining audit readiness year-round',
      'Improving processes without disrupting operations',
      'Finding working capital for growth',
      'Making data-driven financial decisions',
    ],
    solutions: [
      'Comprehensive compliance management',
      'Tax optimization and planning strategies',
      'Year-round audit support and preparation',
      'Process review and SOP development',
      'Working capital optimization advisory',
      'MIS and dashboard implementation',
    ],
    services: ['taxation', 'assurance', 'compliance', 'cfo-advisory', 'process-review'],
  },
  {
    slug: 'corporates',
    title: 'Corporates',
    description: 'Enterprise-grade advisory with personalized attention. Large organizations require sophisticated financial strategies and deep technical expertise. We bring Big Four caliber thinking with boutique firm responsiveness—helping you navigate complex regulatory environments, optimize cross-border structures, and drive strategic initiatives.',
    icon: 'Building2',
    challenges: [
      'Managing complex group structures and consolidation',
      'Navigating transfer pricing regulations',
      'Handling M&A transactions efficiently',
      'Maintaining compliance across multiple jurisdictions',
      'Managing internal audit and risk functions',
      'Dealing with regulatory scrutiny and litigation',
    ],
    solutions: [
      'Group consolidation and reporting',
      'Transfer pricing documentation and planning',
      'M&A due diligence and transaction support',
      'Multi-jurisdictional compliance management',
      'Internal audit and risk assessment',
      'Litigation support and representation',
    ],
    services: ['assurance', 'taxation', 'litigation', 'valuation', 'corporate', 'process-review'],
  },
  {
    slug: 'hnis',
    title: 'High Net-Worth Individuals',
    description: 'Protect and grow your wealth. Wealth management goes beyond investment advice. We help HNIs and families with tax-efficient structuring, succession planning, and comprehensive financial strategies—ensuring your wealth is preserved and transferred according to your wishes while minimizing tax leakage.',
    icon: 'Wallet',
    challenges: [
      'Optimizing personal and business income taxation',
      'Planning for wealth transfer and succession',
      'Structuring investments tax-efficiently',
      'Managing family office operations',
      'Handling international assets and residency',
      'Estate planning and wealth preservation',
    ],
    solutions: [
      'Personal tax planning and optimization',
      'Succession and estate planning',
      'Investment structuring advisory',
      'Family office setup and management',
      'FEMA and international tax compliance',
      'Trust and estate advisory services',
    ],
    services: ['taxation', 'valuation', 'compliance', 'corporate', 'cfo-advisory'],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

export const getIndustryTitle = (slug: string): string => {
  const industry = getIndustryBySlug(slug);
  return industry?.title || slug;
};
