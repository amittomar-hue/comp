import { Metadata } from 'next';
import Link from 'next/link';
import { getInsightPosts, getCaseStudies, getPressReleases } from '@/lib/wordpress';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';
import { BookOpen, FileText, BarChart2, Video, Podcast, Megaphone, Image, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Resources',
  description: 'Enterprise insights, research, case studies, and thought leadership from Compunnel.',
};

const CATEGORIES = [
  { label: 'Blogs', href: '/insights/blogs', icon: BookOpen, desc: 'Thought leadership and technology updates' },
  { label: 'Case Studies', href: '/insights/case-studies', icon: FileText, desc: 'Real enterprise transformation stories' },
  { label: 'eBooks', href: '/insights/ebooks', icon: BookOpen, desc: 'In-depth research guides and playbooks' },
  { label: 'Whitepapers', href: '/insights/whitepapers', icon: BarChart2, desc: 'Industry research and analysis' },
  { label: 'Videos', href: '/insights/videos', icon: Video, desc: 'Demos, talks, and explainer content' },
  { label: 'Webinars', href: '/insights/webinars', icon: Podcast, desc: 'Live and on-demand expert sessions' },
  { label: 'Press Releases', href: '/insights/press-releases', icon: Megaphone, desc: 'Company news and announcements' },
  { label: 'Events', href: '/insights/events', icon: Calendar, desc: 'Conferences, workshops, and meetups' },
];

export default async function InsightsPage() {
  const [posts, caseStudies, pressReleases] = await Promise.all([
    getInsightPosts('blog', 3),
    getCaseStudies(3),
    getPressReleases(3),
  ]);

  return (
    <>
      <section className="gradient-blue text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights at the Edge of Innovation
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Research, analysis, and real-world stories from the enterprise technology frontline.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-brand-gray-dark hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Icon size={16} /> {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blogs */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title text-left mb-0">Latest Blogs</h2>
            <Link href="/insights/blogs" className="text-brand-blue text-sm font-medium hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((p) => <InsightCard key={p.id} post={p} basePath="/insights/blogs" />)}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title text-left mb-0">Featured Case Studies</h2>
            <Link href="/insights/case-studies" className="text-brand-blue text-sm font-medium hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/insights/case-studies/${cs.slug}`} className="card p-6 group">
                <span className="tag mb-3 inline-block">{cs.industry}</span>
                <h3 className="font-semibold text-brand-blue-dark group-hover:text-brand-blue transition-colors mb-2">{cs.title}</h3>
                <p className="text-sm text-brand-gray-mid">{cs.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="section-title text-left mb-0">Press Releases</h2>
            <Link href="/insights/press-releases" className="text-brand-blue text-sm font-medium hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressReleases.map((pr) => (
              <div key={pr.id} className="card p-6">
                <p className="text-xs text-brand-gray-mid mb-2">{new Date(pr.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h3 className="font-semibold text-brand-blue-dark mb-2">{pr.title}</h3>
                <p className="text-sm text-brand-gray-mid">{pr.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Stay Ahead with Compunnel Intelligence"
        subtext="Subscribe to our quarterly enterprise insights report — delivered straight to your inbox."
        ctaLabel="Subscribe to Insights"
        ctaHref="/contact"
        secondaryCtaLabel="View All Resources"
        secondaryCtaHref="/insights/ebooks"
      />
    </>
  );
}
