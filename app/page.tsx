import {
  Hero,
  ClientLogos,
  ValueProps,
  WhoWeServe,
  ServicesGrid,
  Stats,
  Testimonials,
  CTASection,
  QuickLinks,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Client Logos */}
      <ClientLogos />

      {/* Value Propositions */}
      <ValueProps />

      {/* Who We Serve */}
      <WhoWeServe />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Stats & Why Choose Us */}
      <Stats />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* Quick Links */}
      <QuickLinks />
    </>
  );
}
