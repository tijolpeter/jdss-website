'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Calculator, Shield, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/container';

const serviceHighlights = [
  {
    title: 'CFO & Advisory',
    description: 'Strategic financial leadership including planning, analysis, budgeting, and investor-ready reporting for growing businesses.',
    icon: TrendingUp,
    href: '/services/cfo-advisory',
  },
  {
    title: 'Taxation',
    description: 'Comprehensive tax planning and compliance services covering income tax, GST, transfer pricing, and international taxation.',
    icon: Calculator,
    href: '/services/taxation',
  },
  {
    title: 'Audit & Assurance',
    description: 'Statutory audits, internal audits, and due diligence services that provide clarity and build stakeholder confidence.',
    icon: Shield,
    href: '/services/assurance',
  },
  {
    title: 'Corporate Services',
    description: 'End-to-end support for entity formation, secretarial compliance, FEMA regulations, and corporate restructuring.',
    icon: Building2,
    href: '/services/corporate',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary-50">
      <Container size="xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Comprehensive professional services to support your business at every stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceHighlights.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>

                <h3 className="font-semibold text-secondary-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
