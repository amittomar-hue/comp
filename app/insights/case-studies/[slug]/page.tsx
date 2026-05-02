import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/wordpress';
import PageCTA from '@/components/shared/PageCTA';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) return { title: 'Case Study Not Found' };
  return { title: cs.title, description: cs.excerpt };
}

export default async function CaseStudyPage({ params }: Props) {
  const cs = await getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/insights/case-studies" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="tag bg-white/20 text-white">{cs.industry}</span>
            <span className="tag bg-white/10 text-white">{cs.service}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{cs.title}</h1>
          <p className="text-blue-100 text-xl">{cs.excerpt}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">The Challenge & Solution</h2>
              <div
                className="prose prose-lg text-brand-gray-mid prose-headings:text-brand-blue-dark"
                dangerouslySetInnerHTML={{ __html: cs.content || `<p>${cs.excerpt}</p>` }}
              />
            </div>
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold text-brand-blue-dark mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
                <hr className="my-4" />
                <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                  Start Your Transformation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA headline="Ready for Your Own Success Story?" subtext="Let's build the transformation your enterprise deserves." ctaLabel="Talk to an Expert" ctaHref="/contact" />
    </>
  );
}
