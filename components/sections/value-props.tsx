'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function ValueProps() {
  return (
    <section className="section-padding bg-secondary-50">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Label */}
            <p className="section-label mb-4">
              <span className="text-primary-700">A Modern,</span>{' '}
              <span className="text-accent-orange">Strategic Approach</span>
            </p>

            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              Tech-Powered, Hand-Crafted Financials
            </h2>

            {/* Description */}
            <p className="text-lg text-secondary-600 mb-8">
              Our unique approach combines cutting-edge financial technology with personalized, expert advisory services. Get the real-time insights you need, backed by strategic advice from our team of specialists.
            </p>

            {/* CTA */}
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">Browse Our Services</Link>
            </Button>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative isolate"
          >
            {/* Decorative background */}
            <div className="absolute inset-4 bg-primary-100 rounded-3xl -rotate-3 -z-10" />

            {/* Tech-Powered Illustration */}
            <div className="flex items-center justify-center p-4">
              <Image
                src="/images/illustrations/tech-powered.png"
                alt="Tech-powered financial services illustration"
                width={600}
                height={500}
                className="w-full h-auto max-w-[500px] mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
