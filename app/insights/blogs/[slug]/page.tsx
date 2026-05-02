import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getInsightPosts } from '@/lib/wordpress';
import PageCTA from '@/components/shared/PageCTA';
import InsightCard from '@/components/shared/InsightCard';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getInsightBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const [post, related] = await Promise.all([
    getInsightBySlug(params.slug),
    getInsightPosts('blog', 3),
  ]);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/insights/blogs" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          <span className="tag bg-white/20 text-white mb-4 inline-block">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-blue-200 text-sm">
            <Calendar size={14} /> {date}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="prose prose-lg max-w-none text-brand-gray-mid prose-headings:text-brand-blue-dark prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
          />
        </div>
      </section>

      {/* Related posts */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.filter(p => p.slug !== params.slug).slice(0, 3).map(p => (
              <InsightCard key={p.id} post={p} basePath="/insights/blogs" />
            ))}
          </div>
        </div>
      </section>

      <PageCTA headline="Want More Enterprise Insights?" subtext="Subscribe to our monthly intelligence report." ctaLabel="Subscribe" ctaHref="/contact" />
    </>
  );
}
