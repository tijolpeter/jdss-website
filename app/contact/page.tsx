'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input, Textarea, Select } from '@/components/ui/input';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';

const serviceOptions = [
  { value: '', label: 'Select a service' },
  ...services.map((s) => ({ value: s.slug, label: s.shortTitle })),
  { value: 'other', label: 'Other / Not sure' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Let's Talk
              </h1>
              <p className="text-xl text-secondary-600">
                Ready to transform your financial operations? We're here to help.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/illustrations/contact-cta.png"
                alt="Contact us illustration"
                width={450}
                height={380}
                className="w-full h-auto max-w-[350px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Your company name"
                      />
                    </div>
                    <Select
                      label="Service Interest"
                      name="service"
                      options={serviceOptions}
                    />
                    <Textarea
                      label="Message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                    />
                    <Button type="submit" size="lg" isLoading={isSubmitting}>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct Contact */}
              <div className="bg-primary-900 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-300">Email</div>
                      <div className="font-medium">{companyInfo.email}</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-300">Phone</div>
                      <div className="font-medium">{companyInfo.phone}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Addresses */}
              {companyInfo.offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-2">{office.name}</h3>
                      <p className="text-secondary-600">
                        {office.line1}
                        <br />
                        {office.line2}
                        <br />
                        {office.city}, {office.state} - {office.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
