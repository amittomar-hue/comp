import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Diversity & Inclusion',
  description: 'Compunnel\'s commitment to diversity, equity, and inclusion as a Certified Minority Business Enterprise.',
};

const DEI_PILLARS = [
  { title: 'Inclusion as Power', description: 'Every voice matters. We build teams where every perspective shapes the journey forward.' },
  { title: 'Collaboration by Design', description: 'We believe teams rise higher when they solve challenges together across backgrounds and disciplines.' },
  { title: 'Continuous Learning', description: 'Growth is constant through leadership development, upskilling in AI, and cross-cultural mentorship.' },
  { title: 'MBE Certification', description: 'Proud Certified Minority Business Enterprise — equity isn\'t a checkbox for us, it\'s a foundation.' },
  { title: 'Equitable Hiring', description: 'Our AI-powered matching surfaces talent on merit and potential, reducing bias at every stage.' },
  { title: 'Community Engagement', description: 'We invest in local communities across our 30+ global delivery centers through education and opportunity.' },
];

export default function DiversityPage() {
  return (
    <>
      <HeroSection
        eyebrow="Diversity & Inclusion"
        headline="Inclusion as Power. Diversity as Strength."
        subtext="At Compunnel, diversity isn't a program — it's the engine of our innovation. As a Certified Minority Business Enterprise, we build workplaces where every voice shapes the future."
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="tag mb-4 inline-block">Our Commitment</span>
            <h2 className="section-title text-left">Why D&I Matters at Compunnel</h2>
            <div className="text-brand-gray-mid space-y-4 text-lg leading-relaxed">
              <p>
                We are a Certified Minority Business Enterprise (MBE) — a designation that reflects
                not just our ownership structure, but our core belief that diverse perspectives
                create stronger solutions.
              </p>
              <p>
                With 6,000+ professionals across the US, Canada, UK, Denmark, and India, our team
                represents the full spectrum of human experience. That diversity of thought, background,
                and culture is what enables us to solve the world&apos;s most complex enterprise challenges.
              </p>
              <p>
                From equitable AI-powered hiring tools to leadership development programs designed for
                underrepresented talent, we walk the talk at every level of our organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsList
        title="Our D&I Pillars"
        subtitle="Six commitments that define how we hire, lead, and grow together."
        benefits={DEI_PILLARS}
        columns={3}
      />

      {/* Stats */}
      <section className="section-padding gradient-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6,000+', label: 'Global Professionals' },
              { value: '30+', label: 'Global Locations' },
              { value: 'MBE', label: 'Certified Since 2015' },
              { value: '50%+', label: 'Women in Leadership' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black mb-2">{s.value}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Build a Stronger Enterprise Through Inclusion"
        subtext="Partner with a team that brings the full power of diverse thinking to your toughest challenges."
        ctaLabel="Partner With Us"
        ctaHref="/contact"
        secondaryCtaLabel="Join Our Team"
        secondaryCtaHref="/careers"
      />
    </>
  );
}
