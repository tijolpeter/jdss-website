import { CompanyInfo, Stat, QuickLink } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'JDSS & Co',
  tagline: 'Chartered Accountants',
  description: 'Strategic finance partners helping ambitious businesses navigate complexity, unlock growth, and build lasting value.',
  address: {
    line1: '1st Floor, JDSS Enclave',
    line2: 'Surabhi Road, Edapally',
    city: 'Kochi',
    state: 'Kerala',
    pincode: '682024',
  },
  phone: '+91 484 XXX XXXX',
  email: 'info@jdss.in',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/jdss',
    twitter: 'https://twitter.com/jdss_ca',
  },
  workingHours: {
    weekdays: '9:30 AM - 6:30 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
};

export const stats: Stat[] = [
  {
    value: '15+',
    label: 'Years in Practice',
    description: 'Serving businesses since 2009',
  },
  {
    value: '500+',
    label: 'Clients Served',
    description: 'Across diverse industries',
  },
  {
    value: '8',
    label: 'Service Verticals',
    description: 'Comprehensive professional services',
  },
  {
    value: '4',
    label: 'Industry Segments',
    description: 'Startups, SMEs, Corporates & HNIs',
  },
];

export const quickLinks: QuickLink[] = [
  {
    title: 'Income Tax Portal',
    href: 'https://www.incometax.gov.in/',
    description: 'E-filing portal for income tax',
  },
  {
    title: 'GST Portal',
    href: 'https://www.gst.gov.in/',
    description: 'GST registration and filing',
  },
  {
    title: 'TRACES',
    href: 'https://www.tdscpc.gov.in/',
    description: 'TDS reconciliation and certificates',
  },
  {
    title: 'E-Way Bill',
    href: 'https://ewaybillgst.gov.in/',
    description: 'Generate and manage e-way bills',
  },
  {
    title: 'MCA Portal',
    href: 'https://www.mca.gov.in/',
    description: 'Ministry of Corporate Affairs',
  },
  {
    title: 'EPFO',
    href: 'https://www.epfindia.gov.in/',
    description: 'Provident fund services',
  },
  {
    title: 'ESIC',
    href: 'https://www.esic.gov.in/',
    description: 'Employee State Insurance',
  },
  {
    title: 'RBI',
    href: 'https://www.rbi.org.in/',
    description: 'Reserve Bank of India',
  },
];

export const valuePropositions = [
  {
    title: 'Strategic Advisory',
    description: 'Beyond compliance to growth. We don\'t just file your returns—we help you make smarter financial decisions.',
    icon: 'Target',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Real-time visibility into your numbers. Make informed decisions with clarity, not guesswork.',
    icon: 'BarChart2',
  },
  {
    title: 'Partner Approach',
    description: 'Your success is our success. We\'re invested in your growth, not just your compliance.',
    icon: 'Handshake',
  },
];

export const industries = [
  {
    slug: 'startups',
    title: 'Startups',
    description: 'Build your financial foundation right from day one. Strategic guidance tailored to early-stage businesses.',
    icon: 'Rocket',
    highlights: ['Fundraising support', 'MIS setup', 'Compliance automation'],
  },
  {
    slug: 'smes',
    title: 'SMEs',
    description: 'Scale with confidence. Expert guidance to navigate complexity as you grow.',
    icon: 'TrendingUp',
    highlights: ['Tax optimization', 'Audit readiness', 'Process improvement'],
  },
  {
    slug: 'corporates',
    title: 'Corporates',
    description: 'Enterprise-grade advisory with personalized attention. Strategic partnership for complex needs.',
    icon: 'Building2',
    highlights: ['Transfer pricing', 'M&A support', 'Regulatory compliance'],
  },
  {
    slug: 'hnis',
    title: 'HNIs',
    description: 'Protect and grow your wealth. Comprehensive planning for individuals and families.',
    icon: 'Wallet',
    highlights: ['Tax planning', 'Succession planning', 'Investment structuring'],
  },
];

export const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'CAs, lawyers & consultants with deep domain expertise',
    icon: 'Users',
  },
  {
    title: 'Technology-Enabled',
    description: 'Modern tools for real-time visibility and efficiency',
    icon: 'Laptop',
  },
  {
    title: 'Proactive Approach',
    description: 'We anticipate challenges, not just react to them',
    icon: 'Lightbulb',
  },
  {
    title: 'Single Point of Contact',
    description: 'One relationship manager for all your needs',
    icon: 'UserCheck',
  },
];
