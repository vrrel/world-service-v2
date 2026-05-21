export type ServiceId = "builder" | "music" | "harvest";

export interface SiteService {
  id: ServiceId;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  highlights: string[];
  startingPrice: string;
  deliveryDays: string;
  ctaHref: string;
}

export interface PricingPlan {
  id: string;
  serviceId: ServiceId;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface ShowcaseItem {
  worldId: string;
  label: string;
  src: string;
  service: ServiceId;
  tags: string[];
  featured: boolean;
}

export interface CareerRole {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  ctaLabel: string;
}

export interface FaqItem {
  value: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
