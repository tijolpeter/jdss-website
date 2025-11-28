'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

// Placeholder logos - in production, these would be actual client logos
const clients = [
  { name: 'TechStart Solutions', initial: 'TS' },
  { name: 'Kerala Exports', initial: 'KE' },
  { name: 'Healthcare Ventures', initial: 'HV' },
  { name: 'Manufacturing Corp', initial: 'MC' },
  { name: 'EduTech Startup', initial: 'ET' },
  { name: 'Pillai Traders', initial: 'PT' },
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-secondary-50 border-y border-border">
      <Container size="xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-secondary-500 font-medium uppercase tracking-wider">
            Trusted by ambitious businesses
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center gap-2 text-secondary-400 hover:text-secondary-600 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary-200 flex items-center justify-center text-sm font-bold text-secondary-600">
                {client.initial}
              </div>
              <span className="font-medium text-sm hidden sm:inline">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
