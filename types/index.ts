import { LucideIcon } from 'lucide-react';
import { ObjectId } from 'mongodb';

// Resource/Blog Types
export type ResourceCategory = 'webinar' | 'qa' | 'tool-demo' | 'guide' | 'blog';

export type PostStatus = 'draft' | 'published';

export interface CategoryConfig {
  value: ResourceCategory | 'all';
  label: string;
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'outline';
}

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
  _id?: ObjectId;
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: ResourceCategory;
  tags: string[];
  image?: string;
  readTime?: number;
  status: PostStatus;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: ResourceCategory;
  tags: string[];
  image?: string;
  status: PostStatus;
  featured?: boolean;
}

export interface GetPostsOptions {
  status?: PostStatus | 'all';
  category?: ResourceCategory | 'all';
  limit?: number;
  offset?: number;
  featured?: boolean;
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

// Office Address Types
export interface OfficeAddress {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}

// Company Info Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  offices: OfficeAddress[];
  phone: string;
  email: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}
