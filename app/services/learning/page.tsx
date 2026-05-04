import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';
import Testimonial from '@/components/shared/Testimonial';
import FAQSection from '@/components/shared/FAQSection';

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

const LEARNING_TESTIMONIAL = {
  quote: "Compunnel's learning programs helped us upskill 2,000 employees on cloud and AI technologies in under a year. Employee satisfaction scores hit an all-time high, and our cloud migration accelerated by 6 months.",
  name: 'Chief People Officer',
  title: 'Fortune 500 Insurance Enterprise',
};

const LEARNING_FAQS = [
  { question: 'What types of learning programs does Compunnel offer?', answer: 'We offer instructor-led training (in-person and virtual), self-paced e-learning, blended programs, and custom bootcamps. All programs are available in cohort-based or on-demand formats depending on your organization\'s needs.' },
  { question: 'Can you build custom learning content for our technology stack?', answer: 'Yes. Our instructional design team creates bespoke curricula tailored to your specific technologies, use cases, and business goals. We map learning objectives to measurable skill outcomes and business KPIs.' },
  { question: 'How do you measure learning effectiveness and ROI?', answer: 'We use Kirkpatrick Level 1-4 evaluation: reaction surveys, knowledge assessments, behavioral observation, and business impact metrics. Our analytics dashboard tracks completion rates, skill progression, and time-to-competency.' },
  { question: 'Do you offer certifications and exam preparation?', answer: 'Yes. We prepare teams for AWS, Azure, GCP, CompTIA, PMI, Salesforce, and many other industry certifications. Our pass rates consistently exceed 90% on first attempt.' },
  { question: 'What technology and AI topics do you cover?', answer: 'Our catalog covers 30+ domains including: Generative AI, MLOps, cloud architecture (AWS/Azure/GCP), DevOps/DevSecOps, cybersecurity fundamentals, data engineering, RPA, and emerging tech like IoT and blockchain.' },
  { question: 'Can you support compliance training (GDPR, HIPAA, etc.)?', answer: 'Absolutely. We offer compliance-focused training covering GDPR, HIPAA, SOC 2, PCI-DSS, CMMC, and data privacy regulations. Content is updated regularly as regulations evolve.' },
  { question: 'How do you handle large-scale enterprise deployments?', answer: 'We have delivered programs for enterprises with 50,000+ employees. Our LMS integration, cohort scheduling, and dedicated program managers ensure consistent delivery at any scale across geographies.' },
  { question: 'Do you integrate with existing LMS platforms?', answer: 'Yes. We support SCORM and xAPI-compliant content delivery on Cornerstone, SAP SuccessFactors, Degreed, Workday Learning, and other major LMS platforms — or we can provide our own LMS environment.' },
  { question: 'Can you deliver training in multiple languages?', answer: 'Yes. We offer content localization and multilingual delivery across our global delivery network in English, Spanish, French, German, Hindi, and other languages on request.' },
  { question: 'What leadership development programs do you offer?', answer: 'We offer executive coaching, high-potential leadership programs, first-time manager workshops, and team effectiveness programs — all grounded in real-world enterprise scenarios and delivered by experienced industry practitioners.' },
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

      <Testimonial testimonial={LEARNING_TESTIMONIAL} variant="blue" />

      <FAQSection title="Learning Solutions — Common Questions" faqs={LEARNING_FAQS} />

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
