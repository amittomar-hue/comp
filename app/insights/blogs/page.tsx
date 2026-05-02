import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Blog', description: 'Compunnel enterprise technology blog — AI, cloud, cybersecurity, and digital transformation insights.' };

export default async function BlogsPage() {
  const posts = await getInsightPosts('blog', 9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Blogs</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Technology Insights</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Thought leadership from Compunnel's practitioners, engineers, and industry experts.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => <InsightCard key={p.id} post={p} basePath="/insights/blogs" />)}
          </div>
        </div>
      </section>
      <PageCTA headline="Never Miss an Insight" subtext="Get the latest enterprise technology analysis delivered monthly." ctaLabel="Subscribe" ctaHref="/contact" secondaryCtaLabel="View eBooks" secondaryCtaHref="/insights/ebooks" />
    </>
  );
}
