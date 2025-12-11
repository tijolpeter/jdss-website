import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingUp,
  Calculator,
  Shield,
  BarChart3,
  Building2,
  ClipboardCheck,
  Scale,
  Settings,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { services, getServiceBySlug } from '@/data/services';
import { CTASection } from '@/components/sections/cta-section';

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

const illustrationMap: Record<string, string> = {
  'cfo-advisory': '/images/illustrations/services-advisory.png',
  'taxation': '/images/illustrations/tax-planning.png',
  'assurance': '/images/illustrations/compliance-audit.png',
  'startup-services': '/images/illustrations/startup-growth.png',
  'company-law': '/images/illustrations/compliance-audit.png',
  'business-setup': '/images/illustrations/startup-growth.png',
  'legal-services': '/images/illustrations/compliance-audit.png',
  'financial-systems': '/images/illustrations/tech-powered.png',
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || TrendingUp;

  // Get related services (excluding current)
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center text-sm text-secondary-600 hover:text-primary-700 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Services
              </Link>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary-700" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-secondary-600">{service.shortDescription}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">{service.cta}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+914842704040">Call Us Now</Link>
                </Button>
              </div>
            </div>
            {illustrationMap[slug] && (
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={illustrationMap[slug]}
                  alt={`${service.title} illustration`}
                  width={450}
                  height={380}
                  className="w-full h-auto max-w-[350px] lg:max-w-[400px]"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Description Section */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Overview</h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                What We Offer
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-primary-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-secondary-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-primary-100">
                  <Button className="w-full" asChild>
                    <Link href="/contact">{service.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-secondary-50">
        <Container size="xl">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => {
              const RelatedIcon = iconMap[relatedService.icon] || TrendingUp;
              return (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="group bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-700 transition-colors">
                    <RelatedIcon className="w-6 h-6 text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {relatedService.shortTitle}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-3">
                    {relatedService.shortDescription.split('.')[0]}.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary-700">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to get started with ${service.shortTitle}?`}
        description="Let's discuss your requirements and create a tailored solution for your business."
        primaryCTA={{ text: service.cta, href: '/contact' }}
      />
    </>
  );
}
