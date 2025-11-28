import { Metadata } from 'next';
import Link from 'next/link';
import {
  TrendingUp,
  Calculator,
  Shield,
  BarChart3,
  Building2,
  ClipboardCheck,
  Scale,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { services } from '@/data/services';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive financial services including CFO advisory, taxation, audit & assurance, valuation, corporate services, compliance, and more.',
};

const iconMap: Record<string, typeof TrendingUp> = {
  TrendingUp,
  Calculator,
  Shield,
  BarChart3,
  Building2,
  ClipboardCheck,
  Scale,
  Settings,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-600">
              Comprehensive financial services under one roof. From strategic advisory to day-to-day compliance, we've got you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || TrendingUp;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition-colors">
                      <Icon className="w-8 h-8 text-primary-700 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {service.shortTitle}
                      </h2>
                      <p className="text-secondary-600 mb-4">{service.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-600"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 4 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-600">
                            +{service.features.length - 4} more
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center text-sm font-medium text-primary-700">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Not sure which service you need?"
        description="Schedule a free consultation and we'll help you identify the right solutions for your business."
        primaryCTA={{ text: 'Get Free Consultation', href: '/contact' }}
      />
    </>
  );
}
