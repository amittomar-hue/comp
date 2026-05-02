import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Webinars', description: 'Live and on-demand enterprise technology webinars from Compunnel.' };

export default async function WebinarsPage() {
  const posts = await getInsightPosts('webinar', 9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Webinars</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn From the Frontline</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Live and on-demand sessions with Compunnel practitioners and industry thought leaders.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((p) => <InsightCard key={p.id} post={p} basePath="/insights/webinars" />)}
            </div>
          ) : (
            <div className="text-center py-12"><p className="text-brand-gray-mid">Upcoming webinars coming soon. Check back or subscribe below.</p></div>
          )}
        </div>
      </section>
      <PageCTA headline="Never Miss a Compunnel Webinar" subtext="Get notified about upcoming sessions and access on-demand recordings." ctaLabel="Subscribe to Webinar Updates" ctaHref="/contact" />
    </>
  );
}
