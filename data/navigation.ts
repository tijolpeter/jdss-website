import { NavItem, NavSection } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'CFO & Advisory',
        href: '/services/cfo-advisory',
        description: 'Strategic financial leadership on demand',
      },
      {
        title: 'Taxation',
        href: '/services/taxation',
        description: 'End-to-end tax planning and compliance',
      },
      {
        title: 'Assurance',
        href: '/services/assurance',
        description: 'Audit services that build trust',
      },
      {
        title: 'Valuation',
        href: '/services/valuation',
        description: 'Business and asset valuation services',
      },
      {
        title: 'Corporate Services',
        href: '/services/corporate',
        description: 'Entity formation to governance',
      },
      {
        title: 'Compliance',
        href: '/services/compliance',
        description: 'Stay compliant, stress-free',
      },
      {
        title: 'Litigation',
        href: '/services/litigation',
        description: 'Tax and legal dispute resolution',
      },
      {
        title: 'Process Review',
        href: '/services/process-review',
        description: 'Optimize your operations',
      },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    children: [
      {
        title: 'Startups',
        href: '/industries/startups',
        description: 'Build your financial foundation',
      },
      {
        title: 'SMEs',
        href: '/industries/smes',
        description: 'Scale with confidence',
      },
      {
        title: 'Corporates',
        href: '/industries/corporates',
        description: 'Enterprise-grade advisory',
      },
      {
        title: 'HNIs',
        href: '/industries/hnis',
        description: 'Protect and grow your wealth',
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Resources',
    href: '/resources',
    children: [
      {
        title: 'Blog',
        href: '/resources/blog',
        description: 'Insights and updates',
      },
      {
        title: 'Important Links',
        href: '/resources/links',
        description: 'Government portals and resources',
      },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation: NavSection[] = [
  {
    title: 'Services',
    items: [
      { title: 'CFO & Advisory', href: '/services/cfo-advisory' },
      { title: 'Taxation', href: '/services/taxation' },
      { title: 'Assurance', href: '/services/assurance' },
      { title: 'Valuation', href: '/services/valuation' },
      { title: 'Corporate Services', href: '/services/corporate' },
      { title: 'Compliance', href: '/services/compliance' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Team', href: '/team' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Blog', href: '/resources/blog' },
      { title: 'Important Links', href: '/resources/links' },
    ],
  },
];

export const servicesMenuSections = {
  primary: [
    {
      title: 'CFO & Advisory',
      href: '/services/cfo-advisory',
      description: 'Strategic financial leadership on demand',
      items: [
        'Fractional CFO',
        'Financial Planning',
        'MIS & Reporting',
        'Fundraising Support',
        'Cash Flow Management',
      ],
    },
    {
      title: 'Taxation',
      href: '/services/taxation',
      description: 'End-to-end tax planning and compliance',
      items: [
        'Direct Tax',
        'GST Advisory',
        'Transfer Pricing',
        'International Tax',
        'TDS Compliance',
      ],
    },
    {
      title: 'Assurance',
      href: '/services/assurance',
      description: 'Audit services that build trust',
      items: [
        'Statutory Audit',
        'Internal Audit',
        'Tax Audit',
        'Due Diligence',
        'IFRS Reporting',
      ],
    },
  ],
  secondary: [
    { title: 'Valuation', href: '/services/valuation' },
    { title: 'Corporate Services', href: '/services/corporate' },
    { title: 'Compliance', href: '/services/compliance' },
    { title: 'Litigation', href: '/services/litigation' },
    { title: 'Process Review', href: '/services/process-review' },
  ],
};
