import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'eBooks & Reports', description: 'Enterprise technology guides, playbooks, and research reports from Compunnel.' };

export default async function EbooksPage() {
  const posts = await getInsightPosts('ebook', 9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">eBooks & Reports</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Dives. Actionable Insights.</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Research-backed guides that help enterprise leaders make better technology decisions.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => <InsightCard key={p.id} post={p} basePath="/insights/ebooks" />)}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-brand-gray-mid">eBooks coming soon. Check back shortly.</p>
            </div>
          )}
        </div>
      </section>
      <PageCTA headline="Download Our Enterprise Playbooks" subtext="Get the insights your peers are already acting on." ctaLabel="Request a Custom Report" ctaHref="/contact" />
    </>
  );
}
