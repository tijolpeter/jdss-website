'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'dark';
}

export function CTASection({
  title = 'Ready to transform your financial operations?',
  description = "Let's discuss how we can help you achieve your goals. Schedule a consultation with our team.",
  primaryCTA = {
    text: 'Schedule a Consultation',
    href: '/contact',
  },
  secondaryCTA = {
    text: 'Call Us Now',
    href: 'tel:+914842704040',
  },
  variant = 'gradient',
}: CTASectionProps) {
  const bgClasses = {
    default: 'bg-white border-y border-border',
    gradient: 'bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white',
    dark: 'bg-secondary-900 text-white',
  };

  const textClasses = {
    default: 'text-secondary-900',
    gradient: 'text-white',
    dark: 'text-white',
  };

  const subTextClasses = {
    default: 'text-secondary-600',
    gradient: 'text-primary-100',
    dark: 'text-secondary-300',
  };

  return (
    <section className={`section-padding ${bgClasses[variant]} relative overflow-hidden`}>
      {/* Background decoration for gradient variant */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal rounded-full filter blur-3xl" />
        </div>
      )}

      <Container size="lg" className="relative">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClasses[variant]}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${subTextClasses[variant]}`}>{description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant={variant === 'default' ? 'primary' : 'secondary'}
              asChild
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant={variant === 'default' ? 'outline' : 'ghost'}
              className={variant !== 'default' ? 'text-white hover:text-white hover:bg-white/10' : ''}
              asChild
            >
              <Link href={secondaryCTA.href}>
                <Phone className="w-5 h-5 mr-2" />
                {secondaryCTA.text}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
