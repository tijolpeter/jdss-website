'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Building2, Wallet, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';

const industries = [
  {
    slug: 'startups',
    title: 'Startups',
    description: 'Build your financial foundation right from day one. CFO-level guidance without the CFO price tag.',
    highlights: ['Fundraising support', 'MIS setup', 'Compliance automation'],
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    slug: 'smes',
    title: 'SMEs',
    description: 'Scale with confidence. Expert guidance to navigate complexity as you grow.',
    highlights: ['Tax optimization', 'Audit readiness', 'Process improvement'],
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    slug: 'corporates',
    title: 'Corporates',
    description: 'Enterprise-grade advisory with personalized attention. Strategic partnership for complex needs.',
    highlights: ['Transfer pricing', 'M&A support', 'Regulatory compliance'],
    icon: Building2,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    slug: 'hnis',
    title: 'HNIs',
    description: 'Protect and grow your wealth. Comprehensive planning for individuals and families.',
    highlights: ['Tax planning', 'Succession planning', 'Investment structuring'],
    icon: Wallet,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export function WhoWeServe() {
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
            Financial Solutions Tailored to Your Stage
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Whether you're just starting out or scaling to new heights, we have the expertise to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group block h-full p-6 rounded-2xl bg-white border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                    industry.bgColor
                  )}
                >
                  <industry.icon className={cn('w-6 h-6', industry.iconColor)} />
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {industry.title}
                </h3>

                <p className="text-secondary-600 text-sm mb-4">{industry.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {industry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs text-secondary-500 flex items-center gap-2"
                    >
                      <span className={cn('w-1.5 h-1.5 rounded-full bg-gradient-to-r', industry.color)} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center text-sm font-medium text-primary-700 group-hover:text-primary-800">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
