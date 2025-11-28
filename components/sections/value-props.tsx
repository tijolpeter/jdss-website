'use client';

import { motion } from 'framer-motion';
import { Target, BarChart2, Handshake } from 'lucide-react';
import { Container } from '@/components/ui/container';

const valueProps = [
  {
    icon: Target,
    title: 'Strategic Advisory',
    description:
      "Beyond compliance to growth. We don't just file your returns—we help you make smarter financial decisions.",
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Insights',
    description:
      'Real-time visibility into your numbers. Make informed decisions with clarity, not guesswork.',
  },
  {
    icon: Handshake,
    title: 'Partner Approach',
    description:
      "Your success is our success. We're invested in your growth, not just your compliance.",
  },
];

export function ValueProps() {
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
            Why Businesses Choose Us
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We combine technical expertise with strategic thinking to deliver real value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="text-center p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-100 flex items-center justify-center">
                <prop.icon className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-secondary-600">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
