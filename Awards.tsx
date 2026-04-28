import Link from 'next/link';
import type { Post } from '@/lib/api';

interface InsightsProps {
  posts: Post[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Insights({ posts }: InsightsProps) {
  const [featured, ...rest] = posts;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
              <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">Insights</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#020B2D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get Ahead of the Curve
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-lg">
              Discover the latest trends and insights from the world of work and technology.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0057FF] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            View All Insights
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Layout: featured + grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group lg:col-span-2 flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0057FF]/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                {featured.featured_image_url ? (
                  <img
                    src={featured.featured_image_url}
                    alt={featured.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0057FF]/20 to-[#020B2D] flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0057FF] bg-blue-50 px-2 py-0.5 rounded">
                    Blog
                  </span>
                  <time className="text-[10px] text-gray-400 font-medium">{formatDate(featured.date)}</time>
                </div>
                <h3
                  className="text-base font-bold text-[#020B2D] mb-3 leading-snug group-hover:text-[#0057FF] transition-colors flex-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: featured.title.rendered }}
                />
                <p
                  className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: featured.excerpt.rendered }}
                />
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0057FF] group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          )}

          {/* Remaining posts */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {rest.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:border-[#0057FF]/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden bg-gray-100">
                  {post.featured_image_url ? (
                    <img
                      src={post.featured_image_url}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#0057FF]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0057FF] bg-blue-50 px-1.5 py-0.5 rounded">Post</span>
                    <time className="text-[10px] text-gray-400">{formatDate(post.date)}</time>
                  </div>
                  <h3
                    className="text-sm font-bold text-[#020B2D] leading-snug group-hover:text-[#0057FF] transition-colors line-clamp-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
