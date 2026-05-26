/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SystemService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Commercial' | 'Industrial' | 'Residential' | 'Hospitality' | 'Retail';
  image: string;
}

export interface Brand {
  name: string;
  logoUrl?: string;
  isSpecialty?: boolean;
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectSize: string; // e.g., Sq Ft or tonnage
  urgency: 'Routine' | 'Urgent' | 'Emergency';
  details: string;
}
