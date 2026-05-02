import Link from 'next/link';
import InsightCard from '@/components/shared/InsightCard';
import type { InsightPost } from '@/lib/types';

export default function HomeInsights({ posts }: { posts: InsightPost[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="tag mb-3 inline-block">Latest Insights</span>
            <h2 className="section-title text-left mb-0">Knowledge at the Edge of Innovation</h2>
          </div>
          <Link href="/insights/blogs" className="hidden md:block btn-outline">
            View All Insights
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <InsightCard key={p.id} post={p} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link href="/insights/blogs" className="btn-outline">View All Insights</Link>
        </div>
      </div>
    </section>
  );
}
