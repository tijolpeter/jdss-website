import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Rocket,
  TrendingUp,
  Building2,
  Wallet,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { industries, getIndustryBySlug } from '@/data/industries';
import { getServiceBySlug } from '@/data/services';
import { CTASection } from '@/components/sections/cta-section';

const iconMap: Record<string, typeof Rocket> = {
  Rocket,
  TrendingUp,
  Building2,
  Wallet,
};

const colorMap: Record<string, { gradient: string; bg: string; icon: string; border: string }> = {
  startups: {
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'border-blue-200',
  },
  smes: {
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
    icon: 'text-green-600',
    border: 'border-green-200',
  },
  corporates: {
    gradient: 'from-purple-500 to-violet-500',
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
  },
  hnis: {
    gradient: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-200',
  },
};

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} | Industries We Serve`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon] || Building2;
  const colors = colorMap[slug] || colorMap.corporates;

  // Get related services details
  const relatedServices = industry.services
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  // Get other industries (excluding current)
  const otherIndustries = industries.filter((i) => i.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className={`section-padding ${colors.bg}`}>
        <Container size="xl">
          <div className="max-w-4xl">
            <Link
              href="/industries"
              className="inline-flex items-center text-sm text-secondary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Industries
            </Link>
            <div className="flex items-start gap-6 mb-6">
              <div className={`w-16 h-16 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-8 h-8 ${colors.icon}`} />
              </div>
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                  {industry.title}
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Common Challenges</h2>
              </div>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100"
                  >
                    <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-secondary-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">How We Help</h2>
              </div>
              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-secondary-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Relevant Services */}
      <section className="section-padding bg-secondary-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Services for {industry.title}
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Tailored solutions to address your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => {
              if (!service) return null;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-4">
                    {service.shortDescription}
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

      {/* Other Industries */}
      <section className="section-padding">
        <Container size="xl">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">Other Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherIndustries.map((otherIndustry) => {
              const OtherIcon = iconMap[otherIndustry.icon] || Building2;
              const otherColors = colorMap[otherIndustry.slug] || colorMap.corporates;
              return (
                <Link
                  key={otherIndustry.slug}
                  href={`/industries/${otherIndustry.slug}`}
                  className="group p-6 rounded-xl border border-border hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg ${otherColors.bg} flex items-center justify-center mb-4`}>
                    <OtherIcon className={`w-6 h-6 ${otherColors.icon}`} />
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {otherIndustry.title}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {otherIndustry.description.split('.')[0]}.
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to work with a partner who understands ${industry.title.toLowerCase()}?`}
        description="Let's discuss your specific needs and create a tailored solution for your business."
        primaryCTA={{ text: 'Schedule a Consultation', href: '/contact' }}
      />
    </>
  );
}
