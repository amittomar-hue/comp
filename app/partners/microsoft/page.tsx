import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Microsoft Partnership' };

const OFFERINGS = [
  { title: 'Azure Cloud Migration', description: 'End-to-end migration of enterprise workloads to Azure with zero-downtime SLAs and cost optimization.' },
  { title: 'Microsoft 365 & Modern Workplace', description: 'Teams, SharePoint, and Power Platform implementation driving collaboration and productivity.' },
  { title: 'Dynamics 365', description: 'CRM, ERP, and business applications implementation, customization, and managed services on Dynamics 365.' },
  { title: 'Microsoft Copilot & AI', description: 'Copilot for Microsoft 365, Azure OpenAI, and custom AI solutions built on Microsoft\'s AI platform.' },
  { title: 'Azure Cybersecurity', description: 'Microsoft Sentinel, Defender, and Purview implementation for enterprise-grade security and compliance.' },
  { title: 'Power Platform & Automation', description: 'Power Apps, Power BI, Power Automate, and low-code solutions accelerating digital transformation.' },
];

export default function MicrosoftPage() {
  return (
    <>
      <HeroSection
        eyebrow="Microsoft Gold Partner"
        headline="20+ Microsoft Services. One Expert Delivery Partner."
        subtext="From Azure cloud architecture to Dynamics 365 and Copilot AI — Compunnel's Microsoft practice delivers certified, enterprise-grade outcomes across the full Microsoft stack."
        ctaLabel="Talk to a Microsoft Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our Microsoft Service Offerings" subtitle="20+ certified Microsoft capabilities delivered at enterprise scale." benefits={OFFERINGS} columns={3} />
      <PageCTA headline="Maximize Your Microsoft Investment" subtext="Microsoft Gold Partner. 30+ years enterprise expertise. Outcome-driven delivery." ctaLabel="Talk to a Microsoft Expert" ctaHref="/contact" secondaryCtaLabel="View All Partners" secondaryCtaHref="/partners" />
    </>
  );
}
