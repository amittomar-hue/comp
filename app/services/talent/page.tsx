import { Metadata } from 'next';
import { getCaseStudies, getSiteStats } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import StatsBar from '@/components/shared/StatsBar';
import BenefitsList from '@/components/shared/BenefitsList';
import HowItWorks from '@/components/shared/HowItWorks';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';
import ServiceCard from '@/components/shared/ServiceCard';
import Testimonial from '@/components/shared/Testimonial';
import FAQSection from '@/components/shared/FAQSection';
import { Users, Bot, Briefcase, Target, Globe, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Talent Solutions',
  description: 'AI-powered talent acquisition, contingent workforce, EOR, and direct sourcing — 500,000+ hires across 100+ skill sets.',
};

const SUB_SERVICES = [
  { title: 'AI/ML Staffing', href: '/services/talent/ai-ml', description: 'Specialized AI, machine learning, and data science talent for enterprise transformation initiatives.', icon: <Bot size={20} /> },
  { title: 'Contingent Workforce', href: '/services/talent/contingent-workforce', description: 'Flexible contract workforce management and rapid deployment at enterprise scale.', icon: <Users size={20} /> },
  { title: 'Full-Time Hiring', href: '/services/talent/full-time-hiring', description: 'Permanent placement with AI-powered matching, reducing time-to-fill by 50%.', icon: <Briefcase size={20} /> },
  { title: 'Direct Sourcing', href: '/services/talent/direct-sourcing', description: 'Brand-owned talent communities with higher conversion rates and lower costs.', icon: <Target size={20} /> },
  { title: 'Employer of Record', href: '/services/talent/employer-of-record', description: 'Full payrolling, compliance, and EOR services across the US and Canada.', icon: <DollarSign size={20} /> },
];

const BENEFITS = [
  { title: 'Impact at Digital Speed', description: '50% faster time-to-fill vs. industry average using our AI-native matching engine.' },
  { title: 'Fit Beyond the Resume', description: 'Skills-based + culture-fit scoring surfaces candidates traditional ATS systems miss.' },
  { title: 'Scale Without Strain', description: 'Pre-vetted bench of 50,000+ professionals ready to deploy within 48 hours.' },
  { title: 'Compliance Built In', description: 'I-9, SOW, EOR, and multi-state labor law compliance managed end-to-end.' },
  { title: 'Future Skills, On Call', description: '100+ skill sets across AI/ML, cloud, cybersecurity, data, and emerging tech.' },
  { title: 'Retention by Design', description: '25% lower first-year attrition through our structured onboarding and feedback loops.' },
];

const STEPS = [
  { step: 1, title: 'Diagnose', description: 'Map workforce gaps, skill deficits, and market demand across your target roles.' },
  { step: 2, title: 'Forecast', description: 'Read market signals in real-time to anticipate talent supply and pricing shifts.' },
  { step: 3, title: 'Architect', description: 'Design the optimal mix of FTE, contingent, and sourced talent for your goals.' },
  { step: 4, title: 'Execute', description: 'Deploy pre-vetted, skills-matched talent with full compliance documentation.' },
  { step: 5, title: 'Optimize', description: 'Continuously improve through retention analytics, feedback loops, and re-deployment.' },
];

const TALENT_TESTIMONIAL = {
  quote: "Compunnel's AI-driven talent platform transformed how we hire. We reduced time-to-fill by over 40% and the quality of candidates has been consistently higher than any other vendor we've worked with.",
  name: 'Chief Information Officer',
  title: 'Fortune 500 Financial Services Company',
};

const TALENT_FAQS = [
  { question: 'What makes Compunnel different from traditional staffing firms?', answer: 'We combine 30+ years of workforce expertise with a proprietary AI matching engine (Eximius) that goes beyond keyword matching — evaluating skills, culture fit, and retention likelihood. This means faster placements with lower attrition.' },
  { question: 'How quickly can you deploy contingent workers?', answer: 'We maintain a pre-vetted bench of 50,000+ professionals ready to deploy within 48–72 hours for most roles. For specialized positions, we average 5–7 business days from requisition to placement.' },
  { question: 'Do you support Employer of Record (EOR) arrangements?', answer: 'Yes. Our EOR service covers payrolling, I-9 compliance, benefits administration, and multi-state labor law management across the US and Canada — reducing your co-employment and compliance risk.' },
  { question: 'Which skill sets do you specialize in?', answer: 'We cover 100+ skill sets with deepest expertise in AI/ML, cloud (AWS, Azure, GCP), cybersecurity, data engineering, DevOps, full-stack development, and enterprise applications (SAP, Salesforce, ServiceNow).' },
  { question: 'How do you ensure diversity and inclusion in hiring?', answer: 'Our AI engine includes bias-reduction algorithms that anonymize candidate scoring. As an MBE-certified company, diversity is embedded in our sourcing strategy — we actively recruit from HBCUs, women-in-tech communities, and veteran organizations.' },
  { question: 'What is direct sourcing and why does it matter?', answer: 'Direct sourcing builds a brand-owned talent community rather than relying on third-party vendors. This reduces agency fees by 15–30%, improves candidate quality, and creates a reusable talent pool that compounds over time.' },
  { question: 'Can you support volume hiring for large enterprise programs?', answer: 'Absolutely. We have delivered 500,000+ hires and have dedicated volume-hiring programs for clients needing 50–5,000+ placements annually, including MSP/VMS-integrated models.' },
  { question: 'How do you measure quality of hire?', answer: 'We track first-year retention, manager satisfaction scores, time-to-productivity, and re-engagement rates. Our structured 30-60-90 day feedback loops allow us to course-correct early and continuously improve.' },
  { question: 'Do you provide workforce analytics and reporting?', answer: 'Yes. Our client portal provides real-time dashboards covering pipeline velocity, fill rates, cost-per-hire, diversity metrics, and retention analytics — giving you full visibility into your talent program.' },
  { question: 'What industries do you serve for talent solutions?', answer: 'We serve all major enterprise industries including Banking & Financial Services, Healthcare & Life Sciences, Insurance, Manufacturing, Government & Defense, Technology, and Energy & Utilities.' },
];

export default async function TalentPage() {
  const [stats, caseStudies] = await Promise.all([getSiteStats(), getCaseStudies(3)]);

  const talentStats = [
    { id: 1, value: '30+', label: 'Years in Workforce Innovation' },
    { id: 2, value: '500,000+', label: 'Hires Delivered' },
    { id: 3, value: '100+', label: 'Skill Sets' },
    { id: 4, value: '23%', label: 'Fortune 500 Trust Compunnel' },
  ];

  return (
    <>
      <HeroSection
        eyebrow="Talent Solutions"
        headline="Smarter Talent Solutions for Future-Ready Teams"
        subtext="With AI-native matching, enterprise compliance, and 30+ years of workforce intelligence, Compunnel helps you hire faster, smarter, and at scale — without the strain."
        ctaLabel="Talk to a Talent Expert"
        ctaHref="/contact"
        secondaryCtaLabel="See All Sub-Services"
        secondaryCtaHref="#sub-services"
        stats={talentStats.map(s => ({ value: s.value, label: s.label }))}
      />

      {/* Sub-services */}
      <section id="sub-services" className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Our Talent Practice</span>
            <h2 className="section-title">Five Ways We Find Your Next Great Hire</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUB_SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsList
        title="Why Enterprises Choose Compunnel Talent"
        subtitle="Six outcomes that set our talent practice apart from traditional staffing firms."
        benefits={BENEFITS}
        columns={3}
      />

      <HowItWorks
        title="The Compunnel Talent Playbook"
        subtitle="Five stages from workforce diagnosis to continuous optimization."
        steps={STEPS}
      />

      <SuccessStories caseStudies={caseStudies.filter(cs => cs.service === 'Talent').length > 0
        ? caseStudies.filter(cs => cs.service === 'Talent')
        : caseStudies}
      />

      <Testimonial testimonial={TALENT_TESTIMONIAL} variant="blue" />

      <FAQSection title="Talent Solutions — Common Questions" faqs={TALENT_FAQS} />

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-10">Recognition &amp; Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['ISO 9001:2015', 'Great Place to Work®', 'MBE Certified', 'Top 50 US Staffing (SIA)', 'Inc. 5000 × 12'].map((c) => (
              <div key={c} className="card px-6 py-4 font-semibold text-brand-blue-dark text-sm">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Ready to Build a Future-Ready Workforce?"
        subtext="500,000+ hires. 30+ years of workforce intelligence. Let's find your next great team."
        ctaLabel="Talk to a Talent Expert"
        ctaHref="/contact"
        secondaryCtaLabel="Download Talent Brochure"
        secondaryCtaHref="/insights/ebooks"
      />
    </>
  );
}
