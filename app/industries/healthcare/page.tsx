import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Healthcare Industry Solutions' };

const SOLUTIONS = [
  { title: 'EHR/EMR Implementation', description: 'Epic, Cerner, Meditech, and Allscripts implementation, optimization, and clinical training.' },
  { title: 'Health Cloud Migration', description: 'HIPAA-compliant migration of clinical workloads to Azure, AWS, and GCP with zero downtime SLAs.' },
  { title: 'Clinical IT Staffing', description: 'CIOs, CMIOs, HIT analysts, and clinical informatics specialists placed in days.' },
  { title: 'Telehealth Platforms', description: 'Design, build, and integrate telehealth, remote monitoring, and patient engagement platforms.' },
  { title: 'Revenue Cycle IT', description: 'Technology solutions accelerating billing, reducing denials, and improving cash flow for health systems.' },
  { title: 'Healthcare Cybersecurity', description: 'HIPAA, HITECH, and SOC2-compliant security across clinical and administrative systems.' },
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <HeroSection
        eyebrow="Healthcare"
        headline="Healthcare IT That Protects Patients and Powers Progress"
        subtext="HIPAA-compliant by default. Clinical outcome-focused. Enterprise-grade at every layer — from EHR implementation to health cloud and telehealth engineering."
        ctaLabel="Talk to a Healthcare Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our Healthcare IT Solutions" benefits={SOLUTIONS} columns={3} />
      <PageCTA headline="Advance Healthcare. Protect What Matters Most." subtext="Purpose-built healthcare technology from a team with decades of clinical IT experience." ctaLabel="Talk to a Healthcare Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
