const API_URL = process.env.WORDPRESS_API_URL || 'https://compu81.wordpress.com/wp-json';

// WordPress.com REST API v2 base
const WP_API = `${API_URL}/wp/v2`;

// Generic fetch with error handling
async function fetchAPI<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) return fallback;
    return res.json();
  } catch {
    return fallback;
  }
}

// Helper to strip HTML tags from rendered content
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Helper to get featured image URL from embedded data
function getFeaturedImageUrl(post: WordPressPost): string {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return '';
}

// ─── WordPress Standard Types ─────────────────────────────────────────────────

interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

interface WordPressPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: { rendered: string };
}

// ─── App Types ────────────────────────────────────────────────────────────────

export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_image_url?: string;
  categories: number[];
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  bg_image: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_image_url?: string;
}

export interface PressRelease {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_image_url?: string;
  date: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  cta_text?: string;
  cta_url?: string;
  bg_image: string;
}

export interface Stat {
  number: string;
  label: string;
  icon?: string;
}

export interface ClientLogo {
  name: string;
  logo_url: string;
}

export interface Award {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

// ─── Category Slugs (Create these categories in WordPress) ────────────────────
// Go to: https://wordpress.com/posts/compu81.wordpress.com -> Categories
// Create categories with these exact slugs:

const CATEGORY_SLUGS = {
  insights: 'insights',           // For blog posts/insights
  pressReleases: 'press-releases', // For press releases
  caseStudies: 'case-studies',    // For case studies/success stories
  services: 'services',           // For service descriptions
};

// ─── Default fallback data (used when WordPress has no content) ───────────────

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Talent',
    subtitle: 'One partner to build, protect, and scale what\'s next.',
    cta_text: 'Explore Services',
    cta_url: '/services/talent',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17093035/slide-1-poster-img.webp',
  },
  {
    id: 2,
    title: 'Ranked Top 50',
    subtitle: 'Powered by AI. Driven by People. Built for Impact.',
    cta_text: 'Learn More',
    cta_url: '/about-us',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091657/slide-2-poster.webp',
  },
  {
    id: 3,
    title: 'Stop Counting Hires,',
    subtitle: 'Get the ROI Playbook',
    cta_text: 'Download Now',
    cta_url: '/whitepapers/turn-talent-spend-into-measurable-roi',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091650/slide-3-poster.webp',
  },
  {
    id: 4,
    title: 'The Future of Cybersecurity',
    subtitle: 'Risk and Spend Dynamics 2026',
    cta_text: 'Download the Report',
    cta_url: '/report/state-of-cybersecurity-2026',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091653/slide-4-poster.webp',
  },
];

export const defaultStats: Stat[] = [
  { number: '200+', label: 'Enduring client partnerships', icon: 'handshake' },
  { number: '23%', label: 'Of Fortune enterprises trust us', icon: 'building' },
  { number: '100+', label: 'Successful digital transformations', icon: 'rocket' },
  { number: '1200+', label: 'Leadership workshops annually', icon: 'graduation-cap' },
];

export const defaultClients: ClientLogo[] = [
  { name: 'Cognizant', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122212/Cognizant_logo.svg' },
  { name: 'Manulife', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122210/Manulife_logo.svg' },
  { name: 'NRG Energy', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122208/NRG_Energy_logo.svg' },
  { name: 'L3Harris Technologies', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122205/L3Harris_Technologies_logo.svg' },
  { name: 'Morgan Stanley', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122202/morgan-stanley-1.svg' },
  { name: 'NetApp', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130652/net-app-logo.svg' },
  { name: 'DuPont', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122158/dupont-logo.svg' },
  { name: 'Cox', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/12122156/cox-logo.svg' },
  { name: 'Colgate Palmolive', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130619/Colgate-Palmolive_logo.svg' },
  { name: 'PepsiCo', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130701/PepsiCo_logo.svg' },
  { name: 'BNY Mellon', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130614/BNY_Mellon-logo.svg' },
  { name: 'CVS Health', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094220/cvs-health-logo-stacked.webp' },
  { name: 'Cummins', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130624/Cummins_logo.svg' },
  { name: 'World Bank', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130709/The_World_Bank_logo.svg' },
  { name: 'Jacobs Engineering', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130638/Jacobs_Engineering_Group_2019_logo.svg' },
  { name: 'Mapfre', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130644/Mapfre_logo.svg' },
];

export const defaultAwards: Award[] = [
  {
    id: 1,
    title: 'SIA 2025: Top 50 Largest Staffing Firms',
    description: '10 consecutive years on SIA\'s Largest Staffing Firms in the US list.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09093040/SIA_2025_ListLogos_LargestStaffingFirms_US.webp',
  },
  {
    id: 2,
    title: 'Great Place to Work - Best Workplaces for Women',
    description: 'Named a Best Workplaces for Women, honoring inclusive culture and fair growth paths.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094502/gptw-footer-logo.webp',
  },
  {
    id: 3,
    title: 'Great Place to Work Certified',
    description: 'Certified for trust-led, inclusive culture with strong learning focus.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094500/gptw-footer-logo2.webp',
  },
  {
    id: 4,
    title: 'Brandon Hall Group - Gold Excellence Award',
    description: 'Gold honor for service excellence and measurable outcomes across complex programs.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/04/22070806/bh-gold-2021-footer.svg',
  },
  {
    id: 5,
    title: 'USPAACC Fast 100 Honoree',
    description: 'Named to Fast 100 list of high-growth Asian American-owned businesses in the US.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/06/11103613/uspaac-logo.svg',
  },
  {
    id: 6,
    title: '12-time Inc. 5000 Honoree',
    description: 'America\'s Fastest-Growing Private Companies - consistent recognition for sustained growth.',
    image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/08/29120446/INC-5000-01.svg',
  },
];

export const defaultServices: Service[] = [
  {
    id: 1,
    slug: 'talent',
    title: 'Talent',
    description: 'Built for speed, shaped by insight: our talent solutions deliver the right people, precisely when needed.',
    icon: 'Users',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/05/02063633/talent-bg-services.webp',
  },
  {
    id: 2,
    slug: 'digital',
    title: 'Digital',
    description: 'Turn complexity into clarity: our digital services help you evolve, automate, and lead.',
    icon: 'Monitor',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/05/02063645/digital-bg-services.webp',
  },
  {
    id: 3,
    slug: 'learning',
    title: 'Learning',
    description: 'Empower your workforce: our learning solutions build capability, confidence, and continuous growth.',
    icon: 'GraduationCap',
    bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/05/02063652/learning-bg-services.webp',
  },
];

export const defaultCaseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: '5b-financial-organization-cybersecurity',
    title: { rendered: '$5B+ Financial Organization Strengthened Its Cybersecurity Framework' },
    excerpt: { rendered: 'Our cybersecurity staffing expertise enabled a leading financial services organization to overcome staffing hurdles and accelerate project timelines.' },
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/03/13075529/side-view-hacker-desktop-using-computers-with-glowing-dollar-hologram-lines-blurry-office-interior-background-ecommerce-online-banking-cryptocurrency-finance-concept-double-exposure-300x200.jpg',
  },
  {
    id: 2,
    slug: 'state-agency-scalable-workforce',
    title: { rendered: 'State Agency Builds a Scalable Workforce with Tailored Solutions' },
    excerpt: { rendered: 'A major U.S. state agency partnered with Compunnel to overcome staffing gaps across IT, engineering, and administrative functions.' },
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/10/11104519/State-Agency-Builds-a-Scalable-Workforce-with-Compunnels-Tailored-Solutions-300x193.png',
  },
];

export const defaultPressReleases: PressRelease[] = [
  {
    id: 1,
    slug: 'compunnel-earns-aws-ec2-badge',
    title: { rendered: 'Compunnel Earns AWS EC2 Windows Server Badge, Unlocks 30% Cloud Cost Savings' },
    excerpt: { rendered: 'Compunnel has earned the AWS EC2 Windows Server Badge, demonstrating expertise in cloud optimization.' },
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/09092229/AWS1-card-img.webp',
    date: '2025-08-09',
  },
  {
    id: 2,
    slug: 'compunnel-ranked-top-50-sia',
    title: { rendered: 'Compunnel Ranked Among the Top 50 Largest US Staffing Firms by SIA' },
    excerpt: { rendered: 'Staffing Industry Analysts (SIA) has ranked Compunnel among the top 50 largest staffing firms in the US.' },
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/09092432/Artboard-4-100.webp',
    date: '2025-09-09',
  },
];

export const defaultInsights: Post[] = [
  {
    id: 1,
    slug: 'is-your-organization-truly-secure',
    title: { rendered: 'Is your organization truly secure? How to use AI to answer this question?' },
    excerpt: { rendered: 'Cybersecurity today isn\'t just about keeping hackers at bay-it\'s about continuously evolving in an environment where threats adapt faster than traditional defenses.' },
    content: { rendered: '' },
    date: '2025-04-01',
    featured_image_url: '',
    categories: [1],
  },
  {
    id: 2,
    slug: 'ai-governance-with-ai-innovation',
    title: { rendered: 'Keeping Your AI Governance in Step with AI Innovation' },
    excerpt: { rendered: 'Artificial intelligence is changing how industries work, sparking new ideas and reshaping how businesses operate.' },
    content: { rendered: '' },
    date: '2025-04-29',
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/04/29195303/Banner-160425_3-A%404x-300x200.png',
    categories: [2],
  },
  {
    id: 3,
    slug: 'building-ai-focused-healthcare-product-engineering',
    title: { rendered: 'Building an AI-Focused Product Engineering Team in Healthcare Tech' },
    excerpt: { rendered: 'The traditional product development approaches are no longer sufficient in today\'s fast-growing healthcare industry.' },
    content: { rendered: '' },
    date: '2025-03-21',
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/03/21185517/healthcare-software-product-engineering-300x200.png',
    categories: [1],
  },
  {
    id: 4,
    slug: 'ai-cybersecurity-double-edged-sword',
    title: { rendered: 'AI in Cybersecurity: A Double-Edged Sword for CISOs in 2025' },
    excerpt: { rendered: 'Artificial intelligence is rapidly transforming cybersecurity, presenting both significant advantages and complex challenges.' },
    content: { rendered: '' },
    date: '2025-02-26',
    featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/02/26050235/AI-in-Cybersecurity-A-Double-Edged-Sword-for-CISOs-in-2025-300x157.jpg',
    categories: [3],
  },
];

// ─── Category ID Cache ────────────────────────────────────────────────────────

let categoryCache: Map<string, number> | null = null;

async function getCategoryIdBySlug(slug: string): Promise<number | null> {
  if (!categoryCache) {
    const categories = await fetchAPI<WordPressCategory[]>(`${WP_API}/categories?per_page=100`, []);
    categoryCache = new Map(categories.map(cat => [cat.slug, cat.id]));
  }
  return categoryCache.get(slug) || null;
}

// ─── API Fetchers ─────────────────────────────────────────────────────────────

// Hero Slides - Fetched from Pages with slug "hero-slide-1", "hero-slide-2", etc.
// Or from a single page "hero" with content formatted as JSON in the content
export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    // Try to fetch from a page with slug "hero-settings"
    const pages = await fetchAPI<WordPressPage[]>(`${WP_API}/pages?slug=hero-settings&_embed`, []);
    if (pages.length > 0 && pages[0].content.rendered) {
      // Parse JSON from page content (between <pre> tags or raw)
      const content = stripHtml(pages[0].content.rendered);
      try {
        return JSON.parse(content);
      } catch {
        // Content is not valid JSON
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultHeroSlides;
}

// Stats - Fetched from a page with slug "site-stats"
export async function getSiteStats(): Promise<Stat[]> {
  try {
    const pages = await fetchAPI<WordPressPage[]>(`${WP_API}/pages?slug=site-stats&_embed`, []);
    if (pages.length > 0 && pages[0].content.rendered) {
      const content = stripHtml(pages[0].content.rendered);
      try {
        return JSON.parse(content);
      } catch {
        // Content is not valid JSON
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultStats;
}

// Client Logos - Fetched from a page with slug "client-logos"
export async function getClientLogos(): Promise<ClientLogo[]> {
  try {
    const pages = await fetchAPI<WordPressPage[]>(`${WP_API}/pages?slug=client-logos&_embed`, []);
    if (pages.length > 0 && pages[0].content.rendered) {
      const content = stripHtml(pages[0].content.rendered);
      try {
        return JSON.parse(content);
      } catch {
        // Content is not valid JSON
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultClients;
}

// Awards - Fetched from a page with slug "awards"
export async function getAwards(): Promise<Award[]> {
  try {
    const pages = await fetchAPI<WordPressPage[]>(`${WP_API}/pages?slug=awards&_embed`, []);
    if (pages.length > 0 && pages[0].content.rendered) {
      const content = stripHtml(pages[0].content.rendered);
      try {
        return JSON.parse(content);
      } catch {
        // Content is not valid JSON
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultAwards;
}

// Services - Fetched from posts in "services" category
export async function getServices(): Promise<Service[]> {
  try {
    const categoryId = await getCategoryIdBySlug(CATEGORY_SLUGS.services);
    if (categoryId) {
      const posts = await fetchAPI<WordPressPost[]>(
        `${WP_API}/posts?categories=${categoryId}&per_page=10&_embed`,
        []
      );
      if (posts.length > 0) {
        return posts.map((post, index) => ({
          id: post.id,
          slug: post.slug,
          title: stripHtml(post.title.rendered),
          description: stripHtml(post.excerpt.rendered),
          icon: index === 0 ? 'Users' : index === 1 ? 'Monitor' : 'GraduationCap',
          bg_image: getFeaturedImageUrl(post) || defaultServices[index % defaultServices.length]?.bg_image || '',
        }));
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultServices;
}

// Case Studies - Fetched from posts in "case-studies" category
export async function getCaseStudies(limit = 4): Promise<CaseStudy[]> {
  try {
    const categoryId = await getCategoryIdBySlug(CATEGORY_SLUGS.caseStudies);
    if (categoryId) {
      const posts = await fetchAPI<WordPressPost[]>(
        `${WP_API}/posts?categories=${categoryId}&per_page=${limit}&_embed`,
        []
      );
      if (posts.length > 0) {
        return posts.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          featured_image_url: getFeaturedImageUrl(post),
        }));
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultCaseStudies.slice(0, limit);
}

// Press Releases - Fetched from posts in "press-releases" category
export async function getPressReleases(limit = 2): Promise<PressRelease[]> {
  try {
    const categoryId = await getCategoryIdBySlug(CATEGORY_SLUGS.pressReleases);
    if (categoryId) {
      const posts = await fetchAPI<WordPressPost[]>(
        `${WP_API}/posts?categories=${categoryId}&per_page=${limit}&_embed`,
        []
      );
      if (posts.length > 0) {
        return posts.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          featured_image_url: getFeaturedImageUrl(post),
          date: post.date,
        }));
      }
    }
  } catch {
    // Fall through to default
  }
  return defaultPressReleases.slice(0, limit);
}

// Insights/Blog Posts - Fetched from posts in "insights" category (or all posts if no category)
export async function getInsights(limit = 4): Promise<Post[]> {
  try {
    const categoryId = await getCategoryIdBySlug(CATEGORY_SLUGS.insights);
    const endpoint = categoryId
      ? `${WP_API}/posts?categories=${categoryId}&per_page=${limit}&_embed`
      : `${WP_API}/posts?per_page=${limit}&_embed`;
    
    const posts = await fetchAPI<WordPressPost[]>(endpoint, []);
    if (posts.length > 0) {
      return posts.map(post => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        featured_image_url: getFeaturedImageUrl(post),
        categories: post.categories,
      }));
    }
  } catch {
    // Fall through to default
  }
  return defaultInsights.slice(0, limit);
}

// Get a specific page by slug
export async function getPageBySlug(slug: string): Promise<Post | null> {
  const pages = await fetchAPI<WordPressPage[]>(`${WP_API}/pages?slug=${slug}&_embed`, []);
  if (pages.length > 0) {
    const page = pages[0];
    return {
      id: page.id,
      slug: page.slug,
      title: page.title,
      excerpt: { rendered: '' },
      content: page.content,
      date: '',
      categories: [],
      featured_image_url: getFeaturedImageUrl(page as unknown as WordPressPost),
    };
  }
  return null;
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await fetchAPI<WordPressPost[]>(`${WP_API}/posts?slug=${slug}&_embed`, []);
  if (posts.length > 0) {
    const post = posts[0];
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      categories: post.categories,
      featured_image_url: getFeaturedImageUrl(post),
    };
  }
  return null;
}
