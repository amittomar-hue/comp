import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Government & Public Sector' };

const SOLUTIONS = [
  { title: 'Government IT Staffing', description: 'Cleared and clearable IT talent for federal, state, and local government agencies — placed fast.' },
  { title: 'Digital Government Modernization', description: 'Citizen-facing portal development, legacy system migration, and cloud-first government architecture.' },
  { title: 'Cybersecurity Compliance', description: 'FISMA, FedRAMP, NIST 800-53, CMMC, and zero-trust architecture for government systems.' },
  { title: 'Cloud Adoption (GovCloud)', description: 'AWS GovCloud, Azure Government, and hybrid cloud solutions for classified and unclassified workloads.' },
  { title: 'Data Analytics & AI', description: 'Intelligent automation, predictive analytics, and AI-powered decision support for government programs.' },
  { title: 'ERP & Enterprise Systems', description: 'SAP, Oracle, and Dynamics implementation and support for government financial and HR systems.' },
];

export default function GovernmentPage() {
  return (
    <>
      <HeroSection
        eyebrow="Government & Public Sector"
        headline="Modernize Government. Accelerate Citizen Services. Secure Public Trust."
        subtext="FedRAMP-aware, NIST-compliant, cleared-talent capable — Compunnel brings enterprise-grade technology solutions to federal and state government agencies."
        ctaLabel="Talk to a Government IT Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our Government IT Solutions" benefits={SOLUTIONS} columns={3} />
      <PageCTA headline="Serve Citizens Better with Modern Technology" subtext="Compliance-first. Mission-focused. Government-specialized delivery." ctaLabel="Talk to an Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
