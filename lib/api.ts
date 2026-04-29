// WordPress.com public REST API — category-based content
// compu81.wordpress.com | categories created 2026-04-29
const API_BASE =
  process.env.WORDPRESS_API_URL ||
  'https://public-api.wordpress.com/wp/v2/sites/compu81.wordpress.com';

const CAT = {
  heroSlide:    80814421,
  stat:         125685,
  client:       124397,
  award:        41209,
  caseStudy:    15241,
  pressRelease: 6672,
  insights:     25761,
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8230;/g, '...')
    .trim();
}

async function fetchWP<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: 60 },
    } as RequestInit);
    if (!res.ok) return fallback;
    return res.json();
  } catch {
    return fallback;
  }
}

export interface Post {
  id: number; slug: string;
  title: { rendered: string }; excerpt: { rendered: string }; content: { rendered: string };
  date: string; featured_image_url?: string; categories: number[];
}
export interface CaseStudy {
  id: number; slug: string;
  title: { rendered: string }; excerpt: { rendered: string }; featured_image_url?: string;
}
export interface PressRelease {
  id: number; slug: string;
  title: { rendered: string }; excerpt: { rendered: string }; featured_image_url?: string; date: string;
}
export interface HeroSlide {
  id: number; title: string; subtitle: string; cta_text?: string; cta_url?: string; bg_image: string;
}
export interface Stat { number: string; label: string; icon?: string; }
export interface ClientLogo { name: string; logo_url: string; }
export interface Award { id: number; title: string; description: string; image_url: string; }

// ─── Fallbacks ────────────────────────────────────────────────────────────────

export const defaultHeroSlides: HeroSlide[] = [
  { id: 1, title: 'Talent', subtitle: "One partner to build, protect, and scale what's next.", cta_text: 'Explore Services', cta_url: '/services/talent', bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17093035/slide-1-poster-img.webp' },
  { id: 2, title: 'Ranked Top 50', subtitle: 'Powered by AI. Driven by People. Built for Impact.', cta_text: 'Learn More', cta_url: '/about-us', bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091657/slide-2-poster.webp' },
  { id: 3, title: 'Stop Counting Hires,', subtitle: 'Get the ROI Playbook', cta_text: 'Download Now', cta_url: '/whitepapers', bg_image: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091650/slide-3-poster.webp' },
];
export const defaultStats: Stat[] = [
  { number: '200+', label: 'Enduring client partnerships' },
  { number: '23%', label: 'Of Fortune enterprises trust us' },
  { number: '100+', label: 'Successful digital transformations' },
  { number: '1200+', label: 'Leadership workshops annually' },
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
  { name: 'PepsiCo', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130701/PepsiCo_logo.svg' },
  { name: 'BNY Mellon', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130614/BNY_Mellon-logo.svg' },
  { name: 'CVS Health', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094220/cvs-health-logo-stacked.webp' },
  { name: 'Cummins', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130624/Cummins_logo.svg' },
  { name: 'World Bank', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130709/The_World_Bank_logo.svg' },
  { name: 'Colgate Palmolive', logo_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/10/10130619/Colgate-Palmolive_logo.svg' },
];
export const defaultAwards: Award[] = [
  { id: 1, title: 'SIA 2025: Top 50 Largest Staffing Firms', description: "10 consecutive years on SIA's list.", image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09093040/SIA_2025_ListLogos_LargestStaffingFirms_US.webp' },
  { id: 2, title: 'Great Place to Work - Best Workplaces for Women', description: 'Honoring inclusive culture and fair growth paths.', image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094502/gptw-footer-logo.webp' },
  { id: 3, title: 'Great Place to Work Certified', description: 'Certified for trust-led, inclusive culture.', image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094500/gptw-footer-logo2.webp' },
  { id: 4, title: 'Brandon Hall Group - Gold Excellence Award', description: 'Gold honor for service excellence.', image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/04/22070806/bh-gold-2021-footer.svg' },
  { id: 5, title: 'USPAACC Fast 100 Honoree', description: 'High-growth Asian American-owned businesses.', image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/06/11103613/uspaac-logo.svg' },
  { id: 6, title: '12-time Inc. 5000 Honoree', description: "America's Fastest-Growing Private Companies.", image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/08/29120446/INC-5000-01.svg' },
];
export const defaultCaseStudies: CaseStudy[] = [
  { id: 1, slug: '5b-financial-organization-cybersecurity', title: { rendered: '$5B+ Financial Organization Strengthened Its Cybersecurity Framework' }, excerpt: { rendered: 'Our cybersecurity staffing expertise enabled a leading financial services organization to accelerate project timelines.' }, featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/03/13075529/side-view-hacker-desktop-using-computers-with-glowing-dollar-hologram-lines-blurry-office-interior-background-ecommerce-online-banking-cryptocurrency-finance-concept-double-exposure-300x200.jpg' },
  { id: 2, slug: 'state-agency-scalable-workforce', title: { rendered: 'State Agency Builds a Scalable Workforce with Tailored Solutions' }, excerpt: { rendered: 'A major U.S. state agency partnered with Compunnel to overcome staffing gaps across IT, engineering, and admin.' }, featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/10/11104519/State-Agency-Builds-a-Scalable-Workforce-with-Compunnels-Tailored-Solutions-300x193.png' },
];
export const defaultPressReleases: PressRelease[] = [
  { id: 1, slug: 'compunnel-earns-aws-ec2-badge', title: { rendered: 'Compunnel Earns AWS EC2 Windows Server Badge, Unlocks 30% Cloud Cost Savings' }, excerpt: { rendered: 'Compunnel earned the AWS EC2 Windows Server Badge, demonstrating expertise in cloud optimization.' }, featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/09092229/AWS1-card-img.webp', date: '2025-08-09' },
  { id: 2, slug: 'compunnel-ranked-top-50-sia', title: { rendered: 'Compunnel Ranked Among the Top 50 Largest US Staffing Firms by SIA' }, excerpt: { rendered: 'Staffing Industry Analysts (SIA) has ranked Compunnel among the top 50 largest staffing firms in the US.' }, featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/09092432/Artboard-4-100.webp', date: '2025-09-09' },
];
export const defaultInsights: Post[] = [
  { id: 1, slug: 'is-your-organization-truly-secure', title: { rendered: 'Is your organization truly secure?' }, excerpt: { rendered: 'Cybersecurity today is about continuously evolving where threats adapt faster than traditional defenses.' }, content: { rendered: '' }, date: '2025-04-01', featured_image_url: '', categories: [25761] },
  { id: 2, slug: 'ai-governance-with-ai-innovation', title: { rendered: 'Keeping Your AI Governance in Step with AI Innovation' }, excerpt: { rendered: 'AI is changing how industries work, sparking new ideas and reshaping how businesses operate.' }, content: { rendered: '' }, date: '2025-04-29', featured_image_url: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/04/29195303/Banner-160425_3-A%404x-300x200.png', categories: [25761] },
];

// ─── Fetchers ─────────────────────────────────────────────────────────────────

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.heroSlide}&per_page=10&orderby=date&order=asc`, []);
  if (!posts.length) return defaultHeroSlides;
  return posts.map(p => {
    const raw = stripHtml(p.content.rendered);
    const parts = raw.split('|');
    return { id: p.id, title: stripHtml(p.title.rendered), subtitle: stripHtml(p.excerpt.rendered), cta_text: parts[0]?.trim(), cta_url: parts[1]?.trim(), bg_image: parts[2]?.trim() || defaultHeroSlides[0].bg_image };
  });
}
export async function getSiteStats(): Promise<Stat[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.stat}&per_page=10&orderby=date&order=asc`, []);
  if (!posts.length) return defaultStats;
  return posts.map(p => ({ number: stripHtml(p.title.rendered), label: stripHtml(p.excerpt.rendered) }));
}
export async function getClientLogos(): Promise<ClientLogo[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.client}&per_page=30&orderby=date&order=asc`, []);
  if (!posts.length) return defaultClients;
  return posts.map(p => ({ name: stripHtml(p.title.rendered), logo_url: stripHtml(p.content.rendered) }));
}
export async function getAwards(): Promise<Award[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.award}&per_page=10&orderby=date&order=asc`, []);
  if (!posts.length) return defaultAwards;
  return posts.map(p => ({ id: p.id, title: stripHtml(p.title.rendered), description: stripHtml(p.excerpt.rendered), image_url: stripHtml(p.content.rendered) }));
}
export async function getCaseStudies(limit = 4): Promise<CaseStudy[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.caseStudy}&per_page=${limit}&orderby=date&order=desc`, []);
  if (!posts.length) return defaultCaseStudies;
  return posts.map(p => ({ id: p.id, slug: p.slug, title: { rendered: p.title.rendered }, excerpt: { rendered: p.excerpt.rendered }, featured_image_url: p.featured_image_url }));
}
export async function getPressReleases(limit = 2): Promise<PressRelease[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.pressRelease}&per_page=${limit}&orderby=date&order=desc`, []);
  if (!posts.length) return defaultPressReleases;
  return posts.map(p => ({ id: p.id, slug: p.slug, title: { rendered: p.title.rendered }, excerpt: { rendered: p.excerpt.rendered }, date: p.date, featured_image_url: p.featured_image_url }));
}
export async function getInsights(limit = 4): Promise<Post[]> {
  const posts = await fetchWP<any[]>(`/posts?categories=${CAT.insights}&per_page=${limit}&orderby=date&order=desc`, []);
  if (!posts.length) return defaultInsights;
  return posts.map(p => ({ id: p.id, slug: p.slug, title: { rendered: p.title.rendered }, excerpt: { rendered: p.excerpt.rendered }, content: { rendered: p.content.rendered }, date: p.date, featured_image_url: p.featured_image_url, categories: p.categories || [] }));
}
export async function getPageBySlug(slug: string): Promise<Post | null> {
  const pages = await fetchWP<Post[]>(`/pages?slug=${slug}`, []);
  return pages.length > 0 ? pages[0] : null;
}
