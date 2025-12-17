import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Calculator, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access financial calculators, important government links, and insights from JDSS & Co.',
};

const resources = [
  {
    title: 'Important Links',
    description: 'Quick access to government portals including Income Tax, GST, MCA, TRACES, and more.',
    icon: ExternalLink,
    href: '/resources/links',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Financial Calculators',
    description: 'Tools to help you calculate GST, TDS, EMI, HRA, and other financial metrics.',
    icon: Calculator,
    href: '/resources/calculators',
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Knowledge Bank',
    description: 'Downloadable reference documents including tax rules, acts, bulletins, and forms.',
    icon: BookOpen,
    href: '/resources/knowledge-bank',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Blog & Insights',
    description: 'Stay updated with the latest tax updates, compliance news, and financial insights.',
    icon: FileText,
    href: '/resources/blog',
    color: 'bg-purple-100 text-purple-700',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-secondary-600">
              Tools, links, and insights to help you stay informed and make better financial decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <Container size="lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-white rounded-2xl p-8 border border-border hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-xl ${resource.color} flex items-center justify-center mb-6`}>
                  <resource.icon className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {resource.title}
                </h2>
                <p className="text-secondary-600 mb-4">{resource.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary-700">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
