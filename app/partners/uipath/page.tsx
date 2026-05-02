import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'UiPath Partnership' };

const OFFERINGS = [
  { title: 'RPA Discovery & Assessment', description: 'Identify and prioritize automation opportunities using process mining and value analysis.' },
  { title: 'UiPath Implementation', description: 'End-to-end RPA bot development, testing, and deployment using UiPath Studio and Orchestrator.' },
  { title: 'Automation COE Setup', description: 'Build your Center of Excellence — governance, operating model, and team structure for scalable RPA.' },
  { title: 'Intelligent Automation', description: 'Combine UiPath with AI and ML for document processing, natural language, and decision automation.' },
  { title: 'RPA Maintenance & Support', description: 'Ongoing bot monitoring, exception handling, and enhancement management for production RPA.' },
  { title: 'Hyperautomation Strategy', description: 'End-to-end hyperautomation roadmap integrating RPA, AI, process mining, and analytics.' },
];

export default function UiPathPage() {
  return (
    <>
      <HeroSection eyebrow="UiPath Gold Partner" headline="Automate Everything. Free Your People for What Matters." subtext="Compunnel's UiPath practice delivers end-to-end RPA — from opportunity discovery to COE buildout to intelligent automation at enterprise scale." ctaLabel="Talk to an RPA Expert" ctaHref="/contact" />
      <BenefitsList title="Our UiPath RPA Offerings" benefits={OFFERINGS} columns={3} />
      <PageCTA headline="Unlock the Full Value of RPA" subtext="UiPath Gold Partner. Automation COE specialists. Proven at Fortune 500 scale." ctaLabel="Talk to an RPA Expert" ctaHref="/contact" secondaryCtaLabel="View All Partners" secondaryCtaHref="/partners" />
    </>
  );
}
