import Link from 'next/link';
import type { CaseStudy } from '@/lib/api';

interface SuccessStoriesProps {
  caseStudies: CaseStudy[];
}

export default function SuccessStories({ caseStudies }: SuccessStoriesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
              <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">Case Studies</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#020B2D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Success Stories
            </h2>
          </div>
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-[#0057FF] font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.id}
              href={`/case-study/${cs.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0057FF]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                {cs.featured_image_url ? (
                  <img
                    src={cs.featured_image_url}
                    alt={cs.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0057FF]/20 to-[#020B2D]/40 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0057FF] bg-blue-50 px-2 py-0.5 rounded mb-3">
                  Case Study
                </span>
                <h3
                  className="text-sm font-bold text-[#020B2D] leading-snug mb-2 group-hover:text-[#0057FF] transition-colors line-clamp-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: cs.title.rendered }}
                />
                <p
                  className="text-xs text-gray-500 leading-relaxed line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: cs.excerpt.rendered }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
