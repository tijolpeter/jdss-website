import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    company: 'TechStart Solutions',
    quote: 'JDSS has been instrumental in our growth journey. Their CFO advisory services helped us raise our Series A successfully. They understand startups and deliver real value beyond just compliance.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Menon',
    role: 'Managing Director',
    company: 'Kerala Exports Ltd',
    quote: 'We\'ve been working with JDSS for over 5 years now. Their proactive approach to tax planning has saved us significant money while keeping us fully compliant. True partners in every sense.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anil Sharma',
    role: 'CFO',
    company: 'Manufacturing Corp',
    quote: 'The audit team at JDSS goes beyond tick-boxes. They helped us identify control weaknesses and provided practical recommendations. Professional, thorough, and responsive.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Dr. Lakshmi Nair',
    role: 'Director',
    company: 'Healthcare Ventures',
    quote: 'Setting up our healthcare business was complex, but JDSS made it seamless. From entity structuring to ongoing compliance—they handle everything professionally.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Suresh Pillai',
    role: 'Business Owner',
    company: 'Pillai Traders',
    quote: 'As a family business, we needed advisors who understand our unique needs. JDSS has helped us with succession planning and wealth management. Highly trustworthy.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Meera Krishnan',
    role: 'Co-founder',
    company: 'EduTech Startup',
    quote: 'Their fractional CFO service was exactly what we needed. We got CFO-level thinking without the CFO-level cost. They helped us build a solid financial foundation.',
    rating: 5,
  },
];

export const getFeaturedTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials.slice(0, count);
};
