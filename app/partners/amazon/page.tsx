import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'AWS Partnership' };

const OFFERINGS = [
  { title: 'AWS Cloud Migration', description: 'Lift-and-shift, re-platform, and refactor migrations to AWS with full compliance and FinOps.' },
  { title: 'AWS Architecture & Design', description: 'Well-Architected Framework reviews and cloud-native architecture for resilient AWS solutions.' },
  { title: 'AWS DevSecOps', description: 'CI/CD pipelines, container orchestration, and security-embedded delivery on AWS.' },
  { title: 'AWS FinOps', description: 'Cost visibility, reserved instance optimization, and cloud financial governance on AWS.' },
  { title: 'AWS Data & Analytics', description: 'Redshift, EMR, Glue, and Athena-based data lake and analytics platform engineering.' },
  { title: 'AWS Managed Services', description: '24/7 AWS managed services — monitoring, patching, incident response, and cost management.' },
];

export default function AmazonPage() {
  return (
    <>
      <HeroSection eyebrow="AWS Partner" headline="Accelerate on AWS. Optimize Cost. Scale Without Limits." subtext="Compunnel's AWS practice delivers cloud migration, DevSecOps, data analytics, and FinOps — all on the world's most comprehensive cloud platform." ctaLabel="Talk to an AWS Expert" ctaHref="/contact" />
      <BenefitsList title="Our AWS Service Offerings" benefits={OFFERINGS} columns={3} />
      <PageCTA headline="Build on AWS with Confidence" subtext="AWS certified architects. FinOps specialists. Enterprise-grade delivery." ctaLabel="Talk to an AWS Expert" ctaHref="/contact" secondaryCtaLabel="View All Partners" secondaryCtaHref="/partners" />
    </>
  );
}
