export interface KnowledgeBankDocument {
  id: string;
  title: string;
  description: string;
  filename: string;
  fileSize?: string;
}

export interface KnowledgeBankCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  documents: KnowledgeBankDocument[];
}

export const knowledgeBankCategories: KnowledgeBankCategory[] = [
  {
    id: 'rules',
    title: 'Rules',
    description: 'Direct and indirect tax rules, GST rules, and corporate law rules',
    icon: 'Scale',
    documents: [
      {
        id: 'tax-rules',
        title: 'Tax Rules Compilation',
        description: 'Comprehensive compilation of direct tax, indirect tax, GST, and corporate law rules',
        filename: 'rules.pdf',
        fileSize: '637 KB',
      },
    ],
  },
  {
    id: 'acts',
    title: 'Acts',
    description: 'Legislative acts and statutes',
    icon: 'BookOpen',
    documents: [
      {
        id: 'tax-acts',
        title: 'Tax Acts Compilation',
        description: 'Income Tax Act, GST Acts, and other relevant legislation',
        filename: 'acts.pdf',
        fileSize: '637 KB',
      },
    ],
  },
  {
    id: 'bulletins',
    title: 'Bulletins',
    description: 'Latest tax bulletins, circulars, and updates',
    icon: 'Bell',
    documents: [
      {
        id: 'tax-bulletins',
        title: 'Tax Bulletins',
        description: 'CBDT circulars, notifications, and important updates',
        filename: 'bulletins.pdf',
        fileSize: '650 KB',
      },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Tax and compliance forms reference',
    icon: 'ClipboardList',
    documents: [
      {
        id: 'tax-forms',
        title: 'Tax Forms Reference',
        description: 'ITR forms, TDS forms, and other compliance forms',
        filename: 'forms.pdf',
        fileSize: '643 KB',
      },
    ],
  },
  {
    id: 'links',
    title: 'Quick Reference Links',
    description: 'Important government portals and resources',
    icon: 'Link2',
    documents: [
      {
        id: 'portal-links',
        title: 'Government Portal Links',
        description: 'Quick reference for tax portals, MCA, EPFO, and other resources',
        filename: 'links.pdf',
        fileSize: '636 KB',
      },
    ],
  },
  {
    id: 'utilities',
    title: 'Utilities',
    description: 'Reference tables, rate charts, and calculation aids',
    icon: 'Wrench',
    documents: [
      {
        id: 'tax-utilities',
        title: 'Tax Utilities',
        description: 'TDS rates, surcharge tables, and other useful references',
        filename: 'utilities.pdf',
        fileSize: '647 KB',
      },
    ],
  },
];
