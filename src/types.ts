export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'waterproofing' | 'roofing' | 'gutters' | 'painting-plastering' | 'site-services';
  features: string[];
  image?: string;
  popular?: boolean;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email?: string;
  location: string;
  services: string[];
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Complex / Body Corporate';
  urgentNeed: boolean;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  service: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}
