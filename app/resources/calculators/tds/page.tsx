import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { TDSCalculator } from '@/components/calculators/tds-calculator';

export const metadata: Metadata = {
  title: 'TDS Calculator | JDSS',
  description: 'Calculate TDS (Tax Deducted at Source) for various payment types. Updated TDS rates for FY 2025-26.',
};

export default function TDSCalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              TDS Calculator
            </h1>
            <p className="text-xl text-secondary-600">
              Calculate TDS for various payment types with updated rates for FY 2025-26.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="lg">
          <TDSCalculator />
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="bg-white rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              About TDS
            </h2>
            <p className="text-secondary-600 mb-4">
              Tax Deducted at Source (TDS) is a method of collecting income tax where
              the payer deducts tax at specified rates before making the payment.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2">Without PAN</h3>
                <p className="text-amber-800 text-sm">
                  If the payee does not quote their PAN, TDS is deducted at a higher rate
                  (typically 20% or the prescribed rate, whichever is higher) under Section 206AA.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">With PAN</h3>
                <p className="text-green-800 text-sm">
                  When PAN is quoted, TDS is deducted at the rates specified in the
                  Income Tax Act for the respective section.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
