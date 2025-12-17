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
    designation: 'FCA, MBA, Registered Valuer (IBBI)',
    bio: 'Fellow Chartered Accountant with MBA and registered valuer for Securities & Financial Assets. Over 10+ years of experience including tenure with Big Four in International Tax and Regulatory Services. Expertise in transaction structuring, due diligence, and corporate structuring with focus on international holding company formation.',
    qualifications: ['Fellow Chartered Accountant', 'MBA', 'Registered Valuer (IBBI)'],
    email: 'sivakumar@jdss.in',
    phone: '+91 9809040447',
    expertise: ['International Tax', 'Transaction Structuring', 'Due Diligence', 'Valuation', 'Corporate Structuring'],
  },
  {
    id: '2',
    name: 'Deepak Jose',
    role: 'Partner',
    designation: 'FCA, CISA',
    bio: 'Fellow Chartered Accountant and Certified Information Systems Auditor (CISA) from ISACA USA. 10+ years of experience across financial auditing, investment banking, and international tax services including Big Four consulting. Specializes in business growth consulting, systems implementation, and M&A advisory.',
    qualifications: ['Fellow Chartered Accountant', 'CISA (ISACA USA)'],
    email: 'deepakjose@jdss.in',
    phone: '+91 9496825458',
    expertise: ['Business Growth Consulting', 'Systems Implementation', 'Enterprise Risk Management', 'M&A Advisory'],
  },
  {
    id: '3',
    name: 'Abhilash B',
    role: 'Chartered Accountant',
    designation: 'FCA, DISA',
    bio: 'Chartered Accountant with extensive experience in the BFSI sector. Prior to entering practice, he headed the Corporate Compliance function of a Regional Rural Bank, where he was responsible for regulatory compliance, governance frameworks, and risk-related matters. He specializes in internal audit and taxation, with a strong focus on banking and financial institutions. He has also completed the ICAI Certificate Course on Concurrent Audit of Banks, equipping him with practical insight into banking operations and control systems.',
    qualifications: ['Fellow Chartered Accountant', 'DISA'],
    email: 'abhilash@jdss.in',
    expertise: ['Internal Audit', 'Taxation', 'Banking & BFSI', 'Regulatory Compliance', 'Concurrent Audit'],
  },
  {
    id: '4',
    name: 'Amritaranjini M',
    role: 'Chartered Accountant',
    designation: 'ACA',
    bio: 'Chartered Accountant with strong experience in Assurance, including audits of listed companies and large corporate entities. She has worked with leading audit firms in Mumbai, gaining exposure to complex statutory audits and regulatory compliance. She brings a structured and detail-oriented approach to delivering reliable and high-quality assurance services.',
    qualifications: ['Associate Chartered Accountant'],
    email: 'amrita@jdss.in',
    expertise: ['Statutory Audit', 'Assurance', 'Listed Company Audits', 'Regulatory Compliance'],
  },
  {
    id: '5',
    name: 'Ajay R Pillai',
    role: 'Chartered Accountant',
    designation: 'ACA',
    bio: 'Chartered Accountant with a focused practice in taxation and regulatory compliance, with particular emphasis on tax litigation. He is actively involved in assisting clients in matters before various tax authorities and appellate forums. His work includes handling assessments, appeals, and advisory on contentious tax issues, combining technical clarity with a practical approach to dispute resolution.',
    qualifications: ['Associate Chartered Accountant'],
    email: 'ajay@jdss.in',
    expertise: ['Tax Litigation', 'Direct Tax', 'Assessments & Appeals', 'Regulatory Compliance'],
  },
  {
    id: '6',
    name: 'Mohammed Fahiz',
    role: 'Chartered Accountant',
    designation: 'ACA',
    bio: 'Chartered Accountant with a focus on financial modelling and advisory services. He works closely with businesses to develop structured financial models, evaluate strategic options, and support informed decision-making. His experience includes assisting clients with budgeting, forecasting, project viability analysis, and financial planning.',
    qualifications: ['Associate Chartered Accountant'],
    email: 'fahiz@jdss.in',
    expertise: ['Financial Modelling', 'Advisory Services', 'Budgeting & Forecasting', 'Project Viability Analysis'],
  },
  {
    id: '7',
    name: 'Ann Mary',
    role: 'Finance Professional',
    designation: 'MBA, ACCA',
    bio: 'Finance professional with an MBA and ACCA qualification, specializing in business valuations and financial modelling. She works on valuation assignments, financial projections, and analytical models that support strategic, investment, and transaction-related decisions. Her approach combines strong analytical skills with a practical understanding of business drivers.',
    qualifications: ['MBA', 'ACCA'],
    email: 'ann@jdss.in',
    expertise: ['Business Valuations', 'Financial Modelling', 'Financial Projections', 'Investment Analysis'],
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

      {/* Team Section */}
      <section className="section-padding">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Team</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              A multidisciplinary team with Big Four experience and deep domain expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-sm text-secondary-600 hover:text-primary-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  )}
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
