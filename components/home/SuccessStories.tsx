import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { CaseStudy } from '@/lib/types';

export default function SuccessStories({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="section-padding bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag mb-3 inline-block">Success Stories</span>
          <h2 className="section-title">Real Results for Real Enterprises</h2>
          <p className="section-subtitle">
            See how we&apos;ve helped Fortune 500s and growth-stage companies transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="card overflow-hidden flex flex-col">
              <div className="gradient-blue p-6 text-white">
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{cs.industry}</span>
                <h3 className="text-lg font-bold mt-3 mb-1">{cs.title}</h3>
                <p className="text-blue-200 text-sm">{cs.service}</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-brand-gray-mid mb-4 leading-relaxed">{cs.excerpt}</p>
                {cs.results.length > 0 && (
                  <ul className="space-y-2 mb-6 flex-1">
                    {cs.results.slice(0, 3).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/insights/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  Read Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/insights/case-studies" className="btn-outline">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
