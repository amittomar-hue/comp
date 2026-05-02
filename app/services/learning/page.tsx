import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Learning Solutions',
  description: 'Enterprise learning, upskilling, and leadership development powered by AI — preparing workforces for what\'s next.',
};

const OFFERINGS = [
  { title: 'AI & Emerging Tech Upskilling', description: 'Structured learning paths for AI, ML, cloud, and cybersecurity — built for the enterprise workforce.' },
  { title: 'Leadership Development', description: 'Executive and mid-level leadership programs grounded in real-world enterprise challenges.' },
  { title: 'Custom Learning Pathways', description: 'Tailored curricula aligned to your industry, technology stack, and growth objectives.' },
  { title: 'Instructor-Led & Virtual Training', description: 'Flexible delivery — live virtual, in-person, self-paced, or blended modalities.' },
  { title: 'Compliance & Certification Prep', description: 'Training programs for ISO, GDPR, HIPAA, and leading technology certifications.' },
  { title: 'Learning Analytics & ROI Tracking', description: 'Data-driven measurement of learning outcomes, skill progression, and business impact.' },
];

export default function LearningPage() {
  return (
    <>
      <HeroSection
        eyebrow="Learning Solutions"
        headline="Upskill Your Workforce. Outpace the Future."
        subtext="In an AI-driven world, continuous learning isn't optional — it's the competitive edge. Compunnel's enterprise learning solutions keep your teams ahead of every technology shift."
        ctaLabel="Design Your Learning Program"
        ctaHref="/contact"
        secondaryCtaLabel="View Insights"
        secondaryCtaHref="/insights/blogs"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">Flexible, outcome-driven learning experiences for every role and level.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: '500+', label: 'Courses Delivered' },
              { value: '50,000+', label: 'Learners Trained' },
              { value: '95%', label: 'Learner Satisfaction Rate' },
              { value: '30+', label: 'Technology Domains' },
              { value: '12', label: 'Industry Verticals' },
              { value: 'Custom', label: 'Curricula Available' },
            ].map((s, i) => (
              <div key={i} className="text-center card p-6">
                <div className="text-3xl font-black text-brand-blue mb-1">{s.value}</div>
                <div className="text-sm text-brand-gray-mid">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsList
        title="Our Learning Offerings"
        subtitle="Six capability areas that transform how enterprises develop their people."
        benefits={OFFERINGS}
        columns={3}
      />

      <PageCTA
        headline="Invest in Your People. Accelerate Your Business."
        subtext="Custom learning programs designed for where your enterprise needs to go next."
        ctaLabel="Design Your Program"
        ctaHref="/contact"
        secondaryCtaLabel="Download Learning Brochure"
        secondaryCtaHref="/insights/ebooks"
      />
    </>
  );
}
