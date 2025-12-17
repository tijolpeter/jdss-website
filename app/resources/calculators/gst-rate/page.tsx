import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { GSTRateCalculator } from '@/components/calculators/gst-rate-calculator';

export const metadata: Metadata = {
  title: 'GST Rate Calculator | JDSS',
  description: 'Determine applicable GST rate during rate transitions based on invoice, supply, and payment dates.',
};

export default function GSTRateCalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              GST Rate Transition Calculator
            </h1>
            <p className="text-xl text-secondary-600">
              Determine the applicable GST rate when rates change during a transaction period.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="lg">
          <GSTRateCalculator />
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="bg-white rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              GST Rate Transition Rules
            </h2>
            <p className="text-secondary-600 mb-4">
              When GST rates change, the applicable rate depends on when key transaction events occur:
            </p>
            <ul className="space-y-3 text-secondary-600">
              <li className="flex gap-3">
                <span className="font-semibold text-primary-700 flex-shrink-0">Rule 1:</span>
                If at least two of three events (Invoice, Supply, Payment) occur before the rate change date, the OLD rate applies.
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-700 flex-shrink-0">Rule 2:</span>
                If fewer than two events occur before the rate change date, the NEW rate applies.
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> This calculator helps determine which rate applies based on the
                transitional provisions under GST law. For complex situations, consult with a tax professional.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
