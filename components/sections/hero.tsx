'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50">
      <Container size="xl" className="relative">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Headline */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-secondary-900 mb-6 leading-[1.1]">
                Empowering Businesses With Financial{' '}
                <span className="text-highlight">Clarity</span> &{' '}
                <span className="text-highlight">Growth</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-xl">
                Our accounting, finance, and advisory services give you peace of mind—so you can focus on what matters most: growing your business.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/services">Why JDSS</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative background blob */}
                <div className="absolute inset-0 bg-accent-peach/30 rounded-full blur-3xl transform scale-110" />

                {/* Hero Illustration */}
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/images/illustrations/hero-illustration.png"
                    alt="Financial clarity and growth illustration"
                    width={600}
                    height={500}
                    className="w-full h-auto max-w-[500px] mx-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
