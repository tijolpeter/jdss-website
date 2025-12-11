import { Metadata } from 'next';
import Link from 'next/link';
import { Rocket, TrendingUp, Building2, Wallet, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Tailored financial solutions for startups, SMEs, corporates, and high-net-worth individuals.',
};

const industries = [
  {
    slug: 'startups',
    title: 'Startups',
    description: 'Build your financial foundation right from day one. Strategic guidance tailored to early-stage businesses.',
    longDescription: 'From incorporation to fundraising, we help startups navigate the financial complexities of building a company. Our services are designed to scale with your growth.',
    icon: Rocket,
    highlights: ['Fundraising support & financial modeling', 'MIS & dashboard setup', 'Compliance automation', 'ESOP structuring', 'Investor reporting'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    slug: 'smes',
    title: 'SMEs',
    description: 'Scale with confidence. Expert guidance to navigate complexity as you grow.',
    longDescription: 'Small and medium enterprises face unique challenges. We provide the expertise and support you need to optimize operations, manage taxes efficiently, and prepare for the next stage of growth.',
    icon: TrendingUp,
    highlights: ['Tax optimization strategies', 'Audit readiness', 'Process improvement', 'Working capital management', 'Business restructuring'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    slug: 'corporates',
    title: 'Corporates',
    description: 'Enterprise-grade advisory with personalized attention. Strategic partnership for complex needs.',
    longDescription: 'Large organizations require sophisticated financial strategies. We bring Big Four expertise with boutique firm attention to help you navigate complex regulatory environments and optimize your financial operations.',
    icon: Building2,
    highlights: ['Transfer pricing', 'M&A support', 'Regulatory compliance', 'Internal audit', 'Risk management'],
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    slug: 'hnis',
    title: 'High Net-Worth Individuals',
    description: 'Protect and grow your wealth. Comprehensive planning for individuals and families.',
    longDescription: 'Wealth management goes beyond investment advice. We help HNIs with tax-efficient structuring, succession planning, and comprehensive financial strategies tailored to preserve and grow family wealth.',
    icon: Wallet,
    highlights: ['Tax planning & optimization', 'Succession planning', 'Investment structuring', 'Family office services', 'Estate planning'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-secondary-600">
              Tailored financial solutions for every stage of your journey.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <Container size="xl">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-14 h-14 rounded-xl ${industry.bgColor} flex items-center justify-center mb-6`}>
                    <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">{industry.title}</h2>
                  <p className="text-lg text-secondary-600 mb-6">{industry.longDescription}</p>
                  <ul className="space-y-3 mb-8">
                    {industry.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-secondary-700">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className={`${industry.bgColor} rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-xl bg-white/50 flex items-center justify-center">
                    <industry.icon className={`w-24 h-24 ${industry.iconColor} opacity-50`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Not sure which category fits you?"
        description="Every business is unique. Let's discuss your specific needs and create a tailored solution."
      />
    </>
  );
}
