import { type Plan, type Service } from './constants';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export interface NavbarProps {
  plans: Plan[];
}

export interface FooterProps {
  plans: Plan[];
}

export interface ServiceCardProps {
  service: Service;
  planSlug: string;
}

export interface PlanCardProps {
  plan: Plan;
}
