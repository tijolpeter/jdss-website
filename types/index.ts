import { LucideIcon } from 'lucide-react';

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Service Types
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  cta: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

// Team Types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  bio: string;
  image?: string;
  qualifications: string[];
  linkedin?: string;
  email?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
}

// Industry Types
export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  services: string[];
}

// Statistics Types
export interface Stat {
  value: string;
  label: string;
  description?: string;
}

// Quick Links Types
export interface QuickLink {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

// Blog/Resource Types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readTime?: number;
}

// Calculator Types
export interface Calculator {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

// Page Metadata Types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Company Info Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  phone: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
