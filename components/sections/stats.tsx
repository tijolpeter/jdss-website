'use client';

import { motion } from 'framer-motion';
import { Users, Laptop, Lightbulb, UserCheck } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { stats, whyChooseUs } from '@/data/company';

const iconMap: Record<string, typeof Users> = {
  Users,
  Laptop,
  Lightbulb,
  UserCheck,
};

export function Stats() {
  return (
    <section className="section-padding bg-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-orange rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <Container size="xl" className="relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">The JDSS Advantage</h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Our practice at a glance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-orange mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-200">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
