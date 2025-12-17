import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { GSTCalculator } from '@/components/calculators/gst-calculator';

export const metadata: Metadata = {
  title: 'GST Calculator | JDSS',
  description: 'Calculate GST amounts with IGST, CGST, SGST, and Cess breakdown. Free GST calculator for inter-state and intra-state transactions.',
};

export default function GSTCalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              GST Calculator
            </h1>
            <p className="text-xl text-secondary-600">
              Calculate GST amounts with automatic CGST/SGST/IGST split based on transaction type.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="xl">
          <GSTCalculator />
        </Container>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="bg-white rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              GST Tax Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-secondary-900 mb-2">Inter-State Supply</h3>
                <p className="text-secondary-600 text-sm">
                  When goods/services are supplied between two different states,
                  IGST (Integrated GST) is applicable at the full rate.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-2">Intra-State Supply</h3>
                <p className="text-secondary-600 text-sm">
                  When goods/services are supplied within the same state,
                  CGST and SGST are applicable at half the rate each.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold text-secondary-900 mb-2">GST Rates</h3>
              <p className="text-secondary-600 text-sm">
                Standard GST rates: 0%, 0.25%, 3%, 5%, 12%, 18%, and 28%.
                Additional Cess may apply on certain goods like automobiles and tobacco products.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
