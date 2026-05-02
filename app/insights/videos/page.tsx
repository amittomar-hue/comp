import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import PageCTA from '@/components/shared/PageCTA';
import { Play } from 'lucide-react';

export const metadata: Metadata = { title: 'Videos', description: 'Enterprise technology videos, demos, and talks from Compunnel.' };

export default async function VideosPage() {
  const posts = await getInsightPosts('video', 9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Videos</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">See Transformation in Action</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Product demos, client stories, expert talks, and explainer content.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <div key={p.id} className="card overflow-hidden group cursor-pointer">
                  <div className="relative h-48 gradient-blue flex items-center justify-center">
                    {p.image?.url && <img src={p.image.url} alt={p.image.alt} className="absolute inset-0 w-full h-full object-cover opacity-50" />}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-brand-blue-dark group-hover:text-brand-blue">{p.title}</h3>
                    <p className="text-sm text-brand-gray-mid mt-2">{p.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12"><p className="text-brand-gray-mid">Videos coming soon.</p></div>
          )}
        </div>
      </section>
      <PageCTA headline="See Compunnel in Action" subtext="Request a demo or product walkthrough tailored to your enterprise." ctaLabel="Request a Demo" ctaHref="/contact" />
    </>
  );
}
