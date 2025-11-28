import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { quickLinks } from '@/data/company';

export const metadata: Metadata = {
  title: 'Important Links',
  description: 'Quick access to important government portals including Income Tax, GST, MCA, TRACES, and more.',
};

const linkCategories = [
  {
    title: 'Tax Portals',
    links: [
      { title: 'Income Tax E-Filing', href: 'https://www.incometax.gov.in/', description: 'File returns, view status, and manage your income tax account' },
      { title: 'GST Portal', href: 'https://www.gst.gov.in/', description: 'GST registration, returns, and e-way bills' },
      { title: 'TRACES', href: 'https://www.tdscpc.gov.in/', description: 'TDS/TCS reconciliation and certificate download' },
      { title: 'E-Way Bill System', href: 'https://ewaybillgst.gov.in/', description: 'Generate and manage e-way bills' },
      { title: 'TIN-NSDL', href: 'https://www.tin-nsdl.com/', description: 'PAN/TAN applications and online tax payment' },
    ],
  },
  {
    title: 'Corporate & Legal',
    links: [
      { title: 'MCA Portal', href: 'https://www.mca.gov.in/', description: 'Company registration, filings, and compliance' },
      { title: 'EPFO', href: 'https://www.epfindia.gov.in/', description: 'Provident fund services and claims' },
      { title: 'ESIC', href: 'https://www.esic.gov.in/', description: 'Employee State Insurance services' },
      { title: 'RBI', href: 'https://www.rbi.org.in/', description: 'Reserve Bank of India' },
      { title: 'SEBI', href: 'https://www.sebi.gov.in/', description: 'Securities and Exchange Board of India' },
    ],
  },
  {
    title: 'Professional Bodies',
    links: [
      { title: 'ICAI', href: 'https://www.icai.org/', description: 'Institute of Chartered Accountants of India' },
      { title: 'ICSI', href: 'https://www.icsi.edu/', description: 'Institute of Company Secretaries of India' },
      { title: 'ICMAI', href: 'https://www.icmai.in/', description: 'Institute of Cost Accountants of India' },
    ],
  },
  {
    title: 'State Portals',
    links: [
      { title: 'Kerala Commercial Taxes', href: 'https://www.keralataxes.gov.in/', description: 'Kerala state tax department' },
      { title: 'Kerala e-District', href: 'https://edistrict.kerala.gov.in/', description: 'Government services and certificates' },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Important Links
            </h1>
            <p className="text-xl text-secondary-600">
              Quick access to essential government portals and resources.
            </p>
          </div>
        </Container>
      </section>

      {/* Links Grid */}
      <section className="section-padding">
        <Container size="xl">
          <div className="space-y-12">
            {linkCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                  {category.title}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary-200 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">
                          {link.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-secondary-400 group-hover:text-primary-700 transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-sm text-secondary-600">{link.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
