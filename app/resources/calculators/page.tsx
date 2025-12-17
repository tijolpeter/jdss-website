import { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, Percent, DollarSign, TrendingUp, Building2, FileText, Home, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Financial Calculators',
  description: 'Free financial calculators for GST, TDS, EMI, HRA, tax estimation, and more.',
};

const calculators = [
  {
    title: 'EMI Calculator',
    description: 'Calculate loan EMI, total interest, and payment breakdown for any loan amount.',
    icon: DollarSign,
    href: '/resources/calculators/emi',
    status: 'active',
  },
  {
    title: 'GST Calculator',
    description: 'Calculate GST amounts with CGST/SGST/IGST split for multiple transactions.',
    icon: Percent,
    href: '/resources/calculators/gst',
    status: 'active',
  },
  {
    title: 'TDS Calculator',
    description: 'Calculate TDS for various payment types with FY 2025-26 rates.',
    icon: FileText,
    href: '/resources/calculators/tds',
    status: 'active',
  },
  {
    title: 'GST Rate Calculator',
    description: 'Determine applicable GST rate during rate transitions based on transaction dates.',
    icon: TrendingUp,
    href: '/resources/calculators/gst-rate',
    status: 'active',
  },
  {
    title: 'HRA Calculator',
    description: 'Calculate House Rent Allowance exemption for income tax purposes.',
    icon: Home,
    href: '/resources/calculators/hra',
    status: 'active',
  },
  {
    title: 'Income Tax Calculator',
    description: 'Estimate your income tax liability under old and new tax regimes.',
    icon: Calculator,
    status: 'coming-soon',
  },
  {
    title: 'Business Valuation',
    description: 'Get a preliminary estimate of your business value using common valuation methods.',
    icon: Building2,
    status: 'coming-soon',
  },
];

export default function CalculatorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Financial Calculators
            </h1>
            <p className="text-xl text-secondary-600">
              Free tools to help you make quick financial calculations.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculators Grid */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => {
              const content = (
                <>
                  {calc.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-600">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                    <calc.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">{calc.description}</p>
                  {calc.status === 'active' && (
                    <span className="inline-flex items-center text-sm font-medium text-primary-700">
                      Open Calculator
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </>
              );

              if (calc.status === 'active' && calc.href) {
                return (
                  <Link
                    key={calc.title}
                    href={calc.href}
                    className="group bg-white rounded-xl p-6 border border-border relative overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={calc.title}
                  className="group bg-white rounded-xl p-6 border border-border relative overflow-hidden opacity-75"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              Need a specific calculation done? Our team can help.
            </p>
            <a
              href="/contact"
              className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              Contact us for personalized assistance →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
