import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Manufacturing Solutions' };

const SOLUTIONS = [
  { title: 'Industry 4.0 / Smart Manufacturing', description: 'IoT, digital twin, and connected factory solutions for discrete and process manufacturers.' },
  { title: 'Supply Chain Digitization', description: 'End-to-end supply chain visibility, demand forecasting, and supplier network optimization.' },
  { title: 'OT/IT Security Convergence', description: 'Industrial cybersecurity protecting SCADA, PLC, and operational technology from modern threats.' },
  { title: 'ERP Modernization', description: 'SAP, Oracle, and Microsoft Dynamics implementation, migration, and cloud-native transformation.' },
  { title: 'Quality Management Systems', description: 'Digital QMS, defect tracking, and statistical process control platforms for manufacturing excellence.' },
  { title: 'Manufacturing Talent', description: 'CAD engineers, process specialists, automation programmers, and MES developers placed globally.' },
];

export default function ManufacturingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Manufacturing"
        headline="Build the Smart Factory of Tomorrow. Today."
        subtext="Industry 4.0, IoT integration, OT/IT security, and supply chain digitization — Compunnel helps manufacturers compete in a connected, AI-driven world."
        ctaLabel="Talk to a Manufacturing Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our Manufacturing Solutions" benefits={SOLUTIONS} columns={3} />
      <PageCTA headline="Manufacture Excellence. Digitize Everything." subtext="From the shop floor to the cloud — Compunnel delivers Industry 4.0 at enterprise scale." ctaLabel="Talk to an Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
