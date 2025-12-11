import type { Metadata } from 'next';
import { Inter, Bitter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'JDSS & Co | Chartered Accountants & CFO Advisory',
    template: '%s | JDSS & Co',
  },
  description:
    'Strategic finance partners for growing businesses. CFO advisory, taxation, audit, and compliance services for startups, SMEs, and corporates in India.',
  keywords: [
    'chartered accountants',
    'CA firm',
    'CFO services',
    'tax advisory',
    'audit services',
    'GST consultant',
    'tax planning',
    'Kochi',
    'Kerala',
    'India',
  ],
  authors: [{ name: 'JDSS & Co' }],
  creator: 'JDSS & Co',
  publisher: 'JDSS & Co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jdss.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jdss.in',
    siteName: 'JDSS & Co',
    title: 'JDSS & Co | Chartered Accountants & CFO Advisory',
    description:
      'Strategic finance partners for growing businesses. CFO advisory, taxation, audit, and compliance services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JDSS & Co - Chartered Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDSS & Co | Chartered Accountants & CFO Advisory',
    description:
      'Strategic finance partners for growing businesses. CFO advisory, taxation, audit, and compliance services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bitter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
