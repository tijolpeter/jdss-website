'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

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

const services = [
  {
    slug: 'cfo-advisory',
    title: 'CFO & Advisory',
    description: 'Strategic financial leadership on demand. Get CFO-level guidance without the CFO price tag.',
    icon: 'TrendingUp',
    featured: true,
  },
  {
    slug: 'taxation',
    title: 'Taxation',
    description: 'End-to-end tax planning and compliance. Keep more of what you earn.',
    icon: 'Calculator',
    featured: true,
  },
  {
    slug: 'assurance',
    title: 'Assurance',
    description: 'Audit services that build trust and deliver real insights.',
    icon: 'Shield',
    featured: true,
  },
  {
    slug: 'valuation',
    title: 'Valuation',
    description: 'Accurate business and asset valuations for informed decisions.',
    icon: 'BarChart3',
    featured: true,
  },
  {
    slug: 'corporate',
    title: 'Corporate Services',
    description: 'Entity formation to governance—complete corporate solutions.',
    icon: 'Building2',
    featured: false,
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    description: 'Stay compliant, stress-free. We handle it all.',
    icon: 'ClipboardCheck',
    featured: false,
  },
  {
    slug: 'litigation',
    title: 'Litigation',
    description: 'Tax and legal dispute resolution with expert support.',
    icon: 'Scale',
    featured: false,
  },
  {
    slug: 'process-review',
    title: 'Process Review',
    description: 'Optimize your operations for better performance.',
    icon: 'Settings',
    featured: false,
  },
];

export function ServicesGrid() {
  const featuredServices = services.filter((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  return (
    <section className="section-padding">
      <Container size="xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Comprehensive Services Under One Roof
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            From strategic advisory to day-to-day compliance, we've got you covered.
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition-colors">
                    <Icon className="w-7 h-7 text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-3">{service.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary-700">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Other Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {otherServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 group-hover:text-primary-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-secondary-500">{service.description.split('.')[0]}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
