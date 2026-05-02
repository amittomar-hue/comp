// ─── Shared primitives ────────────────────────────────────────────────────────

export interface WPImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface WPLink {
  label: string;
  href: string;
}

// ─── Home page ────────────────────────────────────────────────────────────────

export interface HeroSlide {
  id: number;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image: WPImage;
}

export interface SiteStat {
  id: number;
  value: string;
  label: string;
  icon?: string;
}

export interface ClientLogo {
  id: number;
  name: string;
  logo: WPImage;
  href?: string;
}

export interface Award {
  id: number;
  title: string;
  year: string;
  image: WPImage;
  description?: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  industry: string;
  service: string;
  image: WPImage;
  results: string[];
  content?: string;
}

export interface PressRelease {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: WPImage;
}

export interface InsightPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  image?: WPImage;
  content?: string;
  tags?: string[];
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePage {
  id: number;
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubtext: string;
  stats: SiteStat[];
  features: ServiceFeature[];
  benefits: ServiceFeature[];
  howItWorks: { step: number; title: string; description: string }[];
  subServices: { title: string; href: string; description: string }[];
  caseStudies: CaseStudy[];
}

// ─── Industries ───────────────────────────────────────────────────────────────

export interface IndustryPage {
  id: number;
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubtext: string;
  stats: SiteStat[];
  challenges: ServiceFeature[];
  solutions: ServiceFeature[];
  caseStudies: CaseStudy[];
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface PartnerPage {
  id: number;
  slug: string;
  name: string;
  logo: WPImage;
  heroHeadline: string;
  heroSubtext: string;
  offerings: ServiceFeature[];
  certifications: string[];
}

// ─── About ────────────────────────────────────────────────────────────────────

export interface LeaderProfile {
  id: number;
  name: string;
  title: string;
  bio: string;
  photo: WPImage;
  linkedin?: string;
}

export interface AboutPage {
  heroHeadline: string;
  heroSubtext: string;
  story: string;
  stats: SiteStat[];
  values: ServiceFeature[];
  differentiators: ServiceFeature[];
  leaders: LeaderProfile[];
}

// ─── Careers / Jobs ───────────────────────────────────────────────────────────

export interface JobListing {
  id: number;
  slug: string;
  title: string;
  location: string;
  type: string;
  department: string;
  excerpt: string;
  content?: string;
  postedDate: string;
}

// ─── Insights resource types ──────────────────────────────────────────────────

export type InsightType =
  | 'blog'
  | 'case-study'
  | 'ebook'
  | 'whitepaper'
  | 'video'
  | 'webinar'
  | 'press-release'
  | 'infographic'
  | 'event';
