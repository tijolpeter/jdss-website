'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Building2, Wallet } from 'lucide-react';
import { Container } from '@/components/ui/container';

const industries = [
  { name: 'Startups', icon: Rocket },
  { name: 'SMEs', icon: TrendingUp },
  { name: 'Corporates', icon: Building2 },
  { name: 'HNIs', icon: Wallet },
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
            Industries We Serve
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                className="flex items-center gap-2 text-secondary-500 hover:text-secondary-700 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-secondary-600" />
                </div>
                <span className="font-medium text-sm">{industry.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
