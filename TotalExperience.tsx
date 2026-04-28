import Link from 'next/link';
import type { PressRelease } from '@/lib/api';

interface PressReleasesProps {
  releases: PressRelease[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PressReleases({ releases }: PressReleasesProps) {
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
              <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">Press Release</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#020B2D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              In the News
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-xl">
              Get the latest news, analyst mentions, and company updates. From milestones and industry
              rankings to awards and new partnerships.
            </p>
          </div>
          <Link
            href="/press-release"
            className="inline-flex items-center gap-2 text-[#0057FF] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            View All Press Releases
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {releases.map((pr) => (
            <Link
              key={pr.id}
              href={`/press-release/${pr.slug}`}
              className="group flex gap-5 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#0057FF]/20 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              {pr.featured_image_url && (
                <div className="flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={pr.featured_image_url}
                    alt={pr.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              {/* Content */}
              <div className="flex-1 min-w-0">
                <time className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                  {formatDate(pr.date)}
                </time>
                <h3
                  className="text-sm font-bold text-[#020B2D] mt-1.5 mb-2 leading-snug group-hover:text-[#0057FF] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: pr.title.rendered }}
                />
                <p
                  className="text-xs text-gray-500 leading-relaxed line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: pr.excerpt.rendered }}
                />
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#0057FF] group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
