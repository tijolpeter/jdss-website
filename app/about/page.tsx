import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Users, Award, Target, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { stats } from '@/data/company';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about JDSS & Co, a chartered accountancy firm built for the ambitions of modern Indian businesses. 15+ years in practice serving startups, SMEs, and corporates.',
};

const philosophy = [
  {
    icon: Users,
    title: 'Partners, Not Providers',
    description: 'We succeed when you succeed. Every engagement is a partnership built on shared goals.',
  },
  {
    icon: Target,
    title: 'Proactive, Not Reactive',
    description: "We don't wait for problems. We anticipate challenges and create opportunities.",
  },
  {
    icon: Award,
    title: 'Strategic, Not Just Technical',
    description: 'Compliance is the baseline. We add strategic value that impacts your bottom line.',
  },
  {
    icon: Lightbulb,
    title: 'Technology-Enabled',
    description: 'Modern tools and systems that give you real-time visibility and efficiency.',
  },
];

const expertise = [
  'Chartered Accountants (ICAI)',
  'Company Secretaries (ICSI)',
  'Cost Accountants (ICMAI)',
  'Legal Professionals',
  'Business Consultants',
  'Tax Specialists',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                About JDSS & Co
              </h1>
              <p className="text-xl text-secondary-600">
                A new-age chartered accountancy firm built for the ambitions of modern Indian businesses.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/team-about.png"
                alt="JDSS team collaboration"
                width={500}
                height={400}
                className="w-full h-auto max-w-[400px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  JDSS & Co was founded with a simple belief: businesses deserve financial partners who think like owners, not service providers.
                </p>
                <p>
                  While traditional CA firms focus on compliance, we focus on outcomes. While others react, we anticipate. While many generalize, we specialize.
                </p>
                <p>
                  Today, we serve over 500 clients—from early-stage startups to established corporates—across India. Our team combines deep technical expertise with practical business acumen, delivering solutions that actually move the needle.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/team">
                    Meet Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4">
                    <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Expertise</h2>
              <p className="text-secondary-600 mb-8">
                Our multidisciplinary team brings together professionals from diverse backgrounds, ensuring comprehensive solutions for all your financial and business needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">ICAI Member Firm</h3>
              <p className="text-primary-200 mb-6">
                We are a registered member firm of the Institute of Chartered Accountants of India (ICAI), adhering to professional ethics and technical standards.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-200" />
                </div>
                <div>
                  <div className="font-semibold">15+ Years</div>
                  <div className="text-sm text-primary-300">in Practice</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to partner with us?"
        description="Let's discuss how we can help you achieve your financial goals."
      />
    </>
  );
}
