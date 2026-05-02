import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Insurance Solutions' };

const SOLUTIONS = [
  { title: 'Guidewire Implementation', description: 'Full Guidewire PolicyCenter, ClaimCenter, and BillingCenter implementation, migration, and support.' },
  { title: 'Claims Automation', description: 'AI-powered claims processing, fraud detection, and straight-through processing automation.' },
  { title: 'InsurTech Modernization', description: 'API-first architecture, microservices, and cloud migration for legacy insurance platforms.' },
  { title: 'Regulatory Compliance', description: 'NAIC, state DOI, GDPR, and CCPA compliance embedded into insurance technology platforms.' },
  { title: 'Insurance Cybersecurity', description: 'Data protection, identity management, and threat monitoring tailored to carrier risk profiles.' },
  { title: 'Actuarial Data Platforms', description: 'Data engineering, analytics, and ML platforms for pricing, reserving, and risk modeling.' },
];

export default function InsurancePage() {
  return (
    <>
      <HeroSection
        eyebrow="Insurance"
        headline="Modernize Your Insurance Technology. Accelerate Claims. Reduce Risk."
        subtext="From Guidewire implementation to InsurTech modernization and AI-powered claims automation — Compunnel is the enterprise technology partner carriers choose for transformation."
        ctaLabel="Talk to an Insurance Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our Insurance Technology Solutions" benefits={SOLUTIONS} columns={3} />
      <PageCTA headline="Ready to Modernize Your Insurance Enterprise?" subtext="Guidewire certified. Claims automation specialists. NAIC compliance experts." ctaLabel="Talk to an Insurance Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
