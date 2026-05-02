import type {
  HeroSlide, SiteStat, ClientLogo, Award, CaseStudy,
  PressRelease, InsightPost, ServicePage, IndustryPage,
  PartnerPage, AboutPage, LeaderProfile, JobListing,
} from './types';

// WordPress.com public REST API — works without authentication for public posts
const SITE = process.env.WP_SITE || 'compu81.wordpress.com';
const BASE = process.env.WP_API_URL || `https://public-api.wordpress.com/wp/v2/sites/${SITE}`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .trim();
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

// Category IDs from compu81.wordpress.com — avoids extra round-trip
const CAT_IDS: Record<string, number> = {
  'hero-slide':     80814421,
  'stat':           125685,
  'client':         124397,
  'award':          41209,
  'case-study':     15241,
  'press-release':  6672,
  'insights':       25761,
  'blog':           25761,  // map "blog" → existing insights category
};

async function getPostsByCategory(categorySlug: string, perPage = 20): Promise<WPPost[]> {
  const catId = CAT_IDS[categorySlug];
  if (catId) {
    // Fast path: use known ID directly
    const posts = await wpFetch<WPPost[]>(
      `/posts?categories=${catId}&per_page=${perPage}&_embed`
    );
    return posts || [];
  }
  // Slow path: resolve slug first (for future categories)
  const cats = await wpFetch<{ id: number }[]>(
    `/categories?slug=${categorySlug}&per_page=1`
  );
  if (!cats || cats.length === 0) return [];
  const posts = await wpFetch<WPPost[]>(
    `/posts?categories=${cats[0].id}&per_page=${perPage}&_embed`
  );
  return posts || [];
}

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  meta?: Record<string, unknown>;
  acf?: Record<string, unknown>;
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text: string }[];
  };
}

function featuredImage(post: WPPost) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return {
    url: media?.source_url ?? '',
    alt: media?.alt_text ?? stripHtml(post.title.rendered),
  };
}

// ─── Home page data — all fetched via category (WordPress.com compatible) ─────

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const posts = await getPostsByCategory('hero-slide', 5);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      headline: stripHtml(p.title.rendered),
      subheadline: stripHtml(p.excerpt.rendered),
      ctaLabel: 'Start Your Journey',
      ctaHref: '/contact',
      secondaryCtaLabel: 'Explore Services',
      secondaryCtaHref: '/services/talent',
      image: featuredImage(p),
    }));
  }
  return DEFAULTS.heroSlides;
}

export async function getSiteStats(): Promise<SiteStat[]> {
  const posts = await getPostsByCategory('stat', 10);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      // Title format expected: "30+ | Years in Business"
      value: stripHtml(p.title.rendered).split('|')[0]?.trim() || stripHtml(p.title.rendered),
      label: stripHtml(p.title.rendered).split('|')[1]?.trim() || stripHtml(p.excerpt.rendered),
      icon: '',
    }));
  }
  return DEFAULTS.stats;
}

export async function getClientLogos(): Promise<ClientLogo[]> {
  const posts = await getPostsByCategory('client', 20);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      name: stripHtml(p.title.rendered),
      logo: featuredImage(p),
    }));
  }
  return DEFAULTS.clients;
}

export async function getAwards(): Promise<Award[]> {
  const posts = await getPostsByCategory('award', 10);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      title: stripHtml(p.title.rendered),
      year: new Date(p.date).getFullYear().toString(),
      image: featuredImage(p),
      description: stripHtml(p.excerpt.rendered),
    }));
  }
  return DEFAULTS.awards;
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies(limit = 6): Promise<CaseStudy[]> {
  const posts = await getPostsByCategory('case-study', limit);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      industry: '',
      service: '',
      image: featuredImage(p),
      results: [],
      content: p.content.rendered,
    }));
  }
  return DEFAULTS.caseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?slug=${slug}&categories=${CAT_IDS['case-study']}&_embed`
  );
  if (!posts || posts.length === 0) return null;
  const p = posts[0];
  return {
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    excerpt: stripHtml(p.excerpt.rendered),
    industry: '',
    service: '',
    image: featuredImage(p),
    results: [],
    content: p.content.rendered,
  };
}

// ─── Press Releases ───────────────────────────────────────────────────────────

export async function getPressReleases(limit = 6): Promise<PressRelease[]> {
  const posts = await getPostsByCategory('press-release', limit);
  if (posts && posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      date: p.date,
      image: featuredImage(p),
    }));
  }
  return DEFAULTS.pressReleases;
}

// ─── Insights (Blog) ──────────────────────────────────────────────────────────

export async function getInsightPosts(
  type: string = 'blog',
  limit = 9
): Promise<InsightPost[]> {
  const posts = await getPostsByCategory(type, limit);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered),
      category: type,
      date: p.date,
      image: featuredImage(p),
      content: p.content.rendered,
    }));
  }
  return DEFAULTS.insights.filter((i) => i.category === type || type === 'blog');
}

export async function getInsightBySlug(
  slug: string
): Promise<InsightPost | null> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?slug=${slug}&_embed`
  );
  if (!posts || posts.length === 0) return null;
  const p = posts[0];
  return {
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title.rendered),
    excerpt: stripHtml(p.excerpt.rendered),
    category: 'blog',
    date: p.date,
    image: featuredImage(p),
    content: p.content.rendered,
  };
}

// ─── Services / Industries / Leaders / Jobs ───────────────────────────────────
// WordPress.com doesn't support custom post types, so these fall back to
// hardcoded defaults. Add categories on compu81.wordpress.com to override.

export async function getServicePage(_slug: string): Promise<ServicePage | null> {
  return null; // served by hardcoded page components
}

export async function getIndustryPage(_slug: string): Promise<IndustryPage | null> {
  return null; // served by hardcoded page components
}

export async function getLeadershipTeam(): Promise<LeaderProfile[]> {
  return DEFAULTS.leaders;
}

export async function getJobListings(limit = 20): Promise<JobListing[]> {
  const posts = await getPostsByCategory('jobs', limit);
  if (posts.length > 0) {
    return posts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      location: '',
      type: 'Full-time',
      department: '',
      excerpt: stripHtml(p.excerpt.rendered),
      content: p.content.rendered,
      postedDate: p.date,
    }));
  }
  return DEFAULTS.jobs;
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export async function getPartnerPage(_slug: string): Promise<PartnerPage | null> {
  return null; // served by hardcoded page components
}

// ─── Static fallback data ─────────────────────────────────────────────────────

const DEFAULTS = {
  heroSlides: [
    {
      id: 1,
      headline: 'Tomorrow happens here, where people, ideas, and AI converge.',
      subheadline:
        'Built on empathy, strengthened by expertise, and powered by AI innovation, Compunnel helps enterprises stay confident, resilient, and ready for what\'s next.',
      ctaLabel: 'Start Your Journey',
      ctaHref: '/contact',
      secondaryCtaLabel: 'Explore Services',
      secondaryCtaHref: '/services/talent',
      image: { url: '', alt: 'Compunnel Hero' },
    },
  ] as HeroSlide[],

  stats: [
    { id: 1, value: '30+', label: 'Years in Business', icon: 'calendar' },
    { id: 2, value: '23%', label: 'Fortune 500 Clients', icon: 'building2' },
    { id: 3, value: '1,000+', label: 'Digital Solutions Delivered', icon: 'layers' },
    { id: 4, value: '6,000+', label: 'Global Professionals', icon: 'users' },
    { id: 5, value: '500,000+', label: 'Hires Delivered', icon: 'briefcase' },
    { id: 6, value: '12×', label: 'Inc. 5000 Recognition', icon: 'award' },
  ] as SiteStat[],

  clients: [
    { id: 1, name: 'Microsoft', logo: { url: '', alt: 'Microsoft' } },
    { id: 2, name: 'Amazon', logo: { url: '', alt: 'Amazon' } },
    { id: 3, name: 'UiPath', logo: { url: '', alt: 'UiPath' } },
    { id: 4, name: 'Adobe', logo: { url: '', alt: 'Adobe' } },
  ] as ClientLogo[],

  awards: [
    { id: 1, title: 'Inc. 5000', year: '2024', image: { url: '', alt: 'Inc 5000' }, description: '12× Recognition' },
    { id: 2, title: 'Great Place to Work', year: '2024', image: { url: '', alt: 'GPTW' } },
    { id: 3, title: 'ISO 9001:2015', year: '2024', image: { url: '', alt: 'ISO' } },
    { id: 4, title: 'MBE Certified', year: '2024', image: { url: '', alt: 'MBE' } },
  ] as Award[],

  caseStudies: [
    {
      id: 1, slug: 'azure-microservices-recruitment',
      title: 'Azure Microservices Recruitment Solution',
      excerpt: 'Reduced time-to-fill by 50% for a Fortune 500 client using AI-powered talent matching.',
      industry: 'Banking & Financial', service: 'Talent',
      image: { url: '', alt: 'Case Study' },
      results: ['50% faster time-to-fill', '30% cost-per-hire reduction', '25% lower attrition'],
    },
    {
      id: 2, slug: 'healthcare-cloud-migration',
      title: 'Healthcare Cloud Migration Partnership',
      excerpt: 'Migrated mission-critical EHR systems to Azure with zero downtime.',
      industry: 'Healthcare', service: 'Digital',
      image: { url: '', alt: 'Case Study' },
      results: ['Zero downtime migration', '40% infra cost reduction', 'HIPAA compliance maintained'],
    },
    {
      id: 3, slug: 'banking-security-testing',
      title: 'Banking Security Testing Implementation',
      excerpt: 'Secured 200+ applications for a major BFSI client with end-to-end security testing.',
      industry: 'Banking & Financial', service: 'Cybersecurity',
      image: { url: '', alt: 'Case Study' },
      results: ['1,000+ vulnerabilities remediated', 'GDPR & SOC2 compliant', '60% reduced risk exposure'],
    },
  ] as CaseStudy[],

  pressReleases: [
    {
      id: 1, slug: 'compunnel-inc5000-2024',
      title: 'Compunnel Named to Inc. 5000 List for 12th Time',
      excerpt: 'Recognized for consistent revenue growth and innovation in enterprise services.',
      date: '2024-09-01',
    },
    {
      id: 2, slug: 'eximius-ai-launch',
      title: 'Compunnel Launches Eximius: The AI Hiring Co-Pilot',
      excerpt: 'New AI platform reduces hiring time by 50% and improves candidate quality.',
      date: '2024-06-15',
    },
  ] as PressRelease[],

  insights: [
    {
      id: 1, slug: 'mlops-enterprise-app-development',
      title: 'MLOps Can Transform Enterprise App Development',
      excerpt: 'Discover how MLOps practices are reshaping how enterprises build and deploy AI-powered applications.',
      category: 'blog', date: '2024-10-01',
      image: { url: '', alt: 'MLOps Blog' },
    },
    {
      id: 2, slug: 'cloud-devops-bfsi',
      title: 'Embracing Cloud-Based DevOps in BFSI',
      excerpt: 'How banking and financial institutions are accelerating digital transformation through DevOps.',
      category: 'blog', date: '2024-09-15',
      image: { url: '', alt: 'DevOps Blog' },
    },
    {
      id: 3, slug: 'data-driven-organization-dataops',
      title: 'How to Create a Data-Driven Organization with DataOps',
      excerpt: 'A strategic guide for CIOs looking to operationalize data at enterprise scale.',
      category: 'whitepaper', date: '2024-08-01',
      image: { url: '', alt: 'DataOps Whitepaper' },
    },
  ] as InsightPost[],

  leaders: [
    { id: 1, name: 'Andy Gaur', title: 'CEO & Founder', bio: 'Founded Compunnel in 1994. $550M+ annual sales. Featured 11× in Inc. 5000.', photo: { url: '', alt: 'Andy Gaur' } },
    { id: 2, name: 'Rakesh Shah', title: 'President & CFO', bio: '30 years at Compunnel. Computer Science degree. Led Fortune 500 consulting.', photo: { url: '', alt: 'Rakesh Shah' } },
    { id: 3, name: 'Karthik Natarajan', title: 'Chief Technology Officer', bio: '30+ years IT experience. Specializes in enterprise architecture and emerging tech.', photo: { url: '', alt: 'Karthik Natarajan' } },
    { id: 4, name: 'Sakshi Porwal', title: 'CISO', bio: '15+ years cybersecurity expertise. Governs data security, privacy, cloud & application security.', photo: { url: '', alt: 'Sakshi Porwal' } },
    { id: 5, name: 'Prema Roddam', title: 'General Counsel', bio: 'Advises across IT, healthcare, pharma. 2025 NJBiz Leaders in Law Award recipient.', photo: { url: '', alt: 'Prema Roddam' } },
    { id: 6, name: 'Shubhra Sinha', title: 'VP, Marketing', bio: '18+ years B2B marketing. Demand generation and ABM specialist. IIM alumna.', photo: { url: '', alt: 'Shubhra Sinha' } },
  ] as LeaderProfile[],

  jobs: [
    { id: 1, slug: 'sr-cloud-architect', title: 'Senior Cloud Architect', location: 'Princeton, NJ', type: 'Full-time', department: 'Digital', excerpt: 'Lead cloud architecture for Fortune 500 clients on Azure and AWS.', postedDate: '2024-10-01' },
    { id: 2, slug: 'cybersecurity-analyst', title: 'Cybersecurity Analyst', location: 'Remote', type: 'Full-time', department: 'Cybersecurity', excerpt: 'Join our SOC team protecting enterprise applications 24/7.', postedDate: '2024-10-05' },
    { id: 3, slug: 'ai-ml-engineer', title: 'AI/ML Engineer', location: 'New York, NY', type: 'Full-time', department: 'Talent - AI/ML', excerpt: 'Build AI-powered matching algorithms for Eximius hiring platform.', postedDate: '2024-10-10' },
  ] as JobListing[],
};
