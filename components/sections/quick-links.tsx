'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { quickLinks } from '@/data/company';

export function QuickLinks() {
  return (
    <section className="py-8 bg-secondary-100 border-y border-border">
      <Container size="xl">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-secondary-600">
            Quick Access:
          </span>
          {quickLinks.slice(0, 6).map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-sm text-secondary-700 hover:text-primary-700 hover:shadow-sm transition-all border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {link.title}
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
