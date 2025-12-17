import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { HRACalculator } from '@/components/calculators/hra-calculator';

export const metadata: Metadata = {
  title: 'HRA Calculator | JDSS',
  description: 'Calculate House Rent Allowance (HRA) exemption for income tax. Month-wise HRA exemption calculator.',
};

export default function HRACalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              HRA Exemption Calculator
            </h1>
            <p className="text-xl text-secondary-600">
              Calculate your House Rent Allowance exemption for income tax purposes.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="xl">
          <HRACalculator />
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="bg-white rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              How HRA Exemption is Calculated
            </h2>
            <p className="text-secondary-600 mb-4">
              HRA exemption under Section 10(13A) is the minimum of the following three amounts:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">1. Actual HRA Received</h3>
                <p className="text-secondary-600 text-sm">
                  The HRA component received from your employer.
                </p>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">2. Rent Minus 10% Salary</h3>
                <p className="text-secondary-600 text-sm">
                  Actual rent paid minus 10% of basic salary.
                </p>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">3. 50% or 40% of Salary</h3>
                <p className="text-secondary-600 text-sm">
                  50% for metro cities (Delhi, Mumbai, Kolkata, Chennai) or 40% for others.
                </p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> The salary for HRA calculation includes Basic + Dearness Allowance
                (if forming part of retirement benefits). This calculator considers only Basic Salary.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
