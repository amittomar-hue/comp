import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Whitepapers', description: 'Technical whitepapers and industry research from Compunnel.' };

export default async function WhitepapersPage() {
  const posts = await getInsightPosts('whitepaper', 9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Whitepapers</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research-Grade Enterprise Intelligence</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Industry trend analysis, technical deep-dives, and CIO-ready strategic research.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => <InsightCard key={p.id} post={p} basePath="/insights/whitepapers" />)}
            </div>
          ) : (
            <div className="text-center py-12"><p className="text-brand-gray-mid">Whitepapers coming soon.</p></div>
          )}
        </div>
      </section>
      <PageCTA headline="Access Our Research Library" subtext="Compunnel publishes quarterly industry research across AI, security, cloud, and talent." ctaLabel="Request Access" ctaHref="/contact" />
    </>
  );
}
