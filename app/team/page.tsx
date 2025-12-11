import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the expert team of Chartered Accountants, Company Secretaries, and consultants at JDSS & Co.',
};

const teamMembers = [
  {
    id: '1',
    name: 'S Sivakumar',
    role: 'Partner',
    designation: 'CA, MBA, Registered Valuer (IBBI)',
    bio: 'Chartered Accountant with MBA and registered valuer for Securities & Financial Assets. Over 7 years experience including 3+ years with Big Four in International Tax and Regulatory Services. Expertise in transaction structuring, due diligence, and corporate structuring with focus on international holding company formation.',
    qualifications: ['Chartered Accountant', 'MBA', 'Registered Valuer (IBBI)'],
    email: 'sivakumar@jdss.in',
    phone: '+91 9809040447',
    expertise: ['International Tax', 'Transaction Structuring', 'Due Diligence', 'Valuation', 'Corporate Structuring'],
  },
  {
    id: '2',
    name: 'Deepak Jose',
    role: 'Partner',
    designation: 'CA, CISA',
    bio: 'Chartered Accountant and Certified Information Systems Auditor (CISA) from ISACA USA. 6+ years experience across financial auditing, investment banking, and international tax services including Big Four consulting. Specializes in business growth consulting, systems implementation, and M&A advisory.',
    qualifications: ['Chartered Accountant', 'CISA (ISACA USA)'],
    email: 'deepakjose@jdss.in',
    phone: '+91 9496825458',
    expertise: ['Business Growth Consulting', 'Systems Implementation', 'Enterprise Risk Management', 'M&A Advisory'],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-secondary-600">
              Meet the experts behind JDSS & Co. A multidisciplinary team committed to your success.
            </p>
          </div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="section-padding">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Partners</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Leadership with Big Four experience and entrepreneurial vision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-700 font-medium mb-1">{member.role}</p>
                    <p className="text-secondary-500 text-sm">{member.designation}</p>
                  </div>
                </div>

                <p className="text-secondary-600 mb-6">{member.bio}</p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-secondary-50">
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals who share our commitment to quality. Explore career opportunities at JDSS & Co.
            </p>
            <Button asChild>
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
