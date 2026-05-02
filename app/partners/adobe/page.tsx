import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Adobe Partnership' };

const OFFERINGS = [
  { title: 'Adobe Experience Manager', description: 'AEM implementation, migration, and content management optimization for enterprise digital experiences.' },
  { title: 'Adobe Analytics', description: 'Multi-channel analytics implementation, custom dashboards, and data-driven CX optimization.' },
  { title: 'Adobe Campaign', description: 'Marketing automation, cross-channel campaign management, and personalization at scale.' },
  { title: 'Adobe Target', description: 'A/B testing, multivariate testing, and AI-powered personalization with Adobe Target.' },
  { title: 'Adobe Commerce (Magento)', description: 'E-commerce platform implementation, customization, and performance optimization.' },
  { title: 'Adobe Creative Cloud Integration', description: 'Enterprise Creative Cloud deployment, DAM integration, and brand asset management.' },
];

export default function AdobePage() {
  return (
    <>
      <HeroSection eyebrow="Adobe Solution Partner" headline="Deliver Extraordinary Customer Experiences with Adobe." subtext="Compunnel's Adobe practice helps enterprises implement, optimize, and scale the full Adobe Experience Cloud — creating personalized, data-driven digital experiences." ctaLabel="Talk to an Adobe Expert" ctaHref="/contact" />
      <BenefitsList title="Our Adobe Service Offerings" benefits={OFFERINGS} columns={3} />
      <PageCTA headline="Elevate Your Digital Experience with Adobe" subtext="Adobe Solution Partner. CX specialists. Enterprise-grade implementation." ctaLabel="Talk to an Adobe Expert" ctaHref="/contact" secondaryCtaLabel="View All Partners" secondaryCtaHref="/partners" />
    </>
  );
}
