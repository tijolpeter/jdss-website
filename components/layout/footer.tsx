import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { footerNavigation } from '@/data/navigation';
import { companyInfo, quickLinks } from '@/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-200">
      {/* Quick Links Bar */}
      <div className="bg-primary-800 py-4">
        <Container size="xl">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="text-sm text-primary-400">Quick Links:</span>
            {quickLinks.slice(0, 5).map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-300 hover:text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center">
                    <span className="text-primary-900 font-serif font-bold text-sm">J</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold text-white italic">JDSS & Co</span>
                    <span className="text-[10px] text-primary-400 -mt-1 tracking-wide">CHARTERED ACCOUNTANTS</span>
                  </div>
                </div>
              </Link>
              <p className="text-primary-300 mb-6 max-w-sm">
                {companyInfo.description}
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
                <div className="flex items-start gap-3 text-primary-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {companyInfo.address.line1}, {companyInfo.address.line2}
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.state} - {companyInfo.address.pincode}
                  </span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {companyInfo.socialLinks.linkedin && (
                  <a
                    href={companyInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-primary-400 hover:bg-accent-orange hover:text-primary-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {companyInfo.socialLinks.twitter && (
                  <a
                    href={companyInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-primary-400 hover:bg-accent-orange hover:text-primary-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-primary-400 hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800 py-6">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-500">
              &copy; {currentYear} JDSS & Co. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
