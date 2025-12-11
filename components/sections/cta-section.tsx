'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title = "Ready to Level-Up Your Business's Financial Operations?",
  description = "Partner with us to simplify your back-office and focus on what matters most: growing your business.",
  primaryCTA = {
    text: 'Schedule a Discovery Call',
    href: '/contact',
  },
}: CTASectionProps) {
  return (
    <section className="bg-brush-texture section-padding text-white relative overflow-hidden">
      <Container size="lg" className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Calendar className="w-8 h-8 text-accent-orange" />
          </div>

          {/* Headline */}
          <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Button */}
          <Button size="lg" asChild>
            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
