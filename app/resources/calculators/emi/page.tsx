import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { EMICalculator } from '@/components/calculators/emi-calculator';

export const metadata: Metadata = {
  title: 'EMI Calculator | JDSS',
  description: 'Calculate your loan EMI, total interest, and payment breakdown. Free EMI calculator for home loans, car loans, and personal loans.',
};

export default function EMICalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              EMI Calculator
            </h1>
            <p className="text-xl text-secondary-600">
              Calculate your Equated Monthly Installment (EMI) for any loan amount.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="lg">
          <EMICalculator />
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="bg-white rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              How EMI is Calculated
            </h2>
            <p className="text-secondary-600 mb-4">
              EMI (Equated Monthly Installment) is calculated using the following formula:
            </p>
            <div className="bg-secondary-50 p-4 rounded-lg mb-4 font-mono text-sm">
              EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
            </div>
            <ul className="space-y-2 text-secondary-600">
              <li><strong>P</strong> = Principal loan amount</li>
              <li><strong>r</strong> = Monthly interest rate (Annual rate / 12 / 100)</li>
              <li><strong>n</strong> = Loan tenure in months</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
