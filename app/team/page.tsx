import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the expert team of Chartered Accountants, Company Secretaries, and consultants at JDSS & Co.',
};

// Placeholder team data - in production, this would come from a data file
const teamMembers = [
  {
    id: '1',
    name: 'Partner Name',
    role: 'Managing Partner',
    designation: 'CA, CPA',
    bio: 'Over 20 years of experience in audit, taxation, and business advisory. Specializes in helping startups and SMEs with strategic financial planning.',
    qualifications: ['Chartered Accountant', 'Certified Public Accountant'],
    image: null,
  },
  {
    id: '2',
    name: 'Partner Name',
    role: 'Senior Partner',
    designation: 'CA, LLB',
    bio: 'Expert in corporate law and taxation with extensive experience in M&A transactions and regulatory compliance.',
    qualifications: ['Chartered Accountant', 'Bachelor of Laws'],
    image: null,
  },
  {
    id: '3',
    name: 'Partner Name',
    role: 'Partner - Tax',
    designation: 'CA',
    bio: 'Specializes in direct and indirect taxation, transfer pricing, and international tax advisory.',
    qualifications: ['Chartered Accountant'],
    image: null,
  },
  {
    id: '4',
    name: 'Partner Name',
    role: 'Partner - Audit',
    designation: 'CA',
    bio: 'Leads the audit practice with expertise in statutory audits, internal audits, and risk assessment.',
    qualifications: ['Chartered Accountant'],
    image: null,
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

      {/* Team Grid */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all text-center"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>

                <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-700 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-secondary-500 text-sm mb-4">{member.designation}</p>

                <p className="text-secondary-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
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
