import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join JDSS & Co and build your career with one of Kerala\'s leading chartered accountancy firms. Explore current openings.',
};

const benefits = [
  'Competitive compensation',
  'Professional development opportunities',
  'Work-life balance',
  'Collaborative team environment',
  'Exposure to diverse clients',
  'Mentorship from senior professionals',
];

const openPositions = [
  {
    id: '1',
    title: 'Articleship',
    department: 'All Departments',
    location: 'Kochi / Trivandrum / Chennai',
    type: 'Articleship',
    description: 'Candidates with qualification as specified by ICAI',
  },
  {
    id: '2',
    title: 'Trainee',
    department: 'All Departments',
    location: 'Kochi / Trivandrum / Chennai',
    type: 'Training',
    description: 'Candidates undergoing training as part of studies or candidates with nil experience',
  },
  {
    id: '3',
    title: 'Analyst',
    department: 'Advisory & Consulting',
    location: 'Kochi / Trivandrum / Chennai',
    type: 'Full-time',
    description: 'UG or PG holders in relevant discipline with experience',
  },
  {
    id: '4',
    title: 'Consultant',
    department: 'All Departments',
    location: 'Kochi / Trivandrum / Chennai',
    type: 'Full-time',
    description: 'CA with or without experience',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Build your career with a firm that values growth, learning, and work-life balance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#openings">View Open Positions</a>
              </Button>
              <a
                href="mailto:hr@jdss.in"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-primary-200 text-primary-700 font-medium hover:bg-primary-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Resume to hr@jdss.in
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Why Join JDSS & Co?</h2>
              <p className="text-secondary-600 mb-8">
                At JDSS & Co, we believe our people are our greatest asset. We're committed to creating an environment where talented professionals can thrive, learn, and grow their careers.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-secondary-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
              <p className="text-primary-200 mb-6">
                We foster a culture of continuous learning, collaboration, and professional growth. Our team works together to deliver quality client service while maintaining healthy work-life boundaries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Diverse Projects</div>
                    <div className="text-sm text-primary-300">Work with startups to corporates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Flexible Hours</div>
                    <div className="text-sm text-primary-300">Balance work and life</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding bg-secondary-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Current Openings</h2>
            <p className="text-lg text-secondary-600">
              Find the right opportunity for your career growth.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-secondary-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-secondary-500">
                      {position.description}
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href={`/contact?position=${encodeURIComponent(position.title)}`}>
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-secondary-600 mb-4">
              Don't see a suitable position? Send us your resume anyway.
            </p>
            <Button variant="ghost" asChild>
              <a href="mailto:hr@jdss.in">
                <Mail className="w-4 h-4 mr-2" />
                Send Resume to hr@jdss.in
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
