import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/wordpress';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Case Studies', description: 'Real enterprise transformation stories — measurable results delivered by Compunnel.' };

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies(9);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Results. Measurable Impact.</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">How Compunnel transforms enterprise challenges into competitive advantages.</p>
        </div>
      </section>
      <SuccessStories caseStudies={caseStudies} />
      <PageCTA headline="Ready to Write Your Success Story?" subtext="Join 200+ enterprises that chose Compunnel as their transformation partner." ctaLabel="Start Your Journey" ctaHref="/contact" />
    </>
  );
}
