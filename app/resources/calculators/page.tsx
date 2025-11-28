import { Metadata } from 'next';
import { Calculator, Percent, DollarSign, TrendingUp, Building2, FileText } from 'lucide-react';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Financial Calculators',
  description: 'Free financial calculators for GST, TDS, EMI, tax estimation, and more.',
};

const calculators = [
  {
    title: 'GST Calculator',
    description: 'Calculate GST amounts, reverse calculate, and determine CGST/SGST/IGST splits.',
    icon: Percent,
    status: 'coming-soon',
  },
  {
    title: 'TDS Calculator',
    description: 'Calculate TDS for various payment types including salary, rent, and professional fees.',
    icon: FileText,
    status: 'coming-soon',
  },
  {
    title: 'EMI Calculator',
    description: 'Calculate loan EMI, total interest, and payment schedule for any loan amount.',
    icon: DollarSign,
    status: 'coming-soon',
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
    icon: TrendingUp,
    status: 'coming-soon',
  },
  {
    title: 'Depreciation Calculator',
    description: 'Calculate depreciation using various methods - SLM, WDV, and more.',
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
            {calculators.map((calc) => (
              <div
                key={calc.title}
                className="bg-white rounded-xl p-6 border border-border relative overflow-hidden"
              >
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
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {calc.title}
                </h3>
                <p className="text-secondary-600 text-sm">{calc.description}</p>
              </div>
            ))}
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
