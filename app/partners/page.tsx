import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Strategic Partners', description: 'Compunnel\'s technology partnerships with Microsoft, AWS, UiPath, and Adobe.' };

const PARTNERS = [
  { title: 'Microsoft', href: '/partners/microsoft', description: '20+ Microsoft services including Azure, Dynamics 365, Power Platform, Microsoft 365, and Copilot AI solutions.', tag: 'Gold Partner' },
  { title: 'Amazon (AWS)', href: '/partners/amazon', description: 'Cloud infrastructure, migration, optimization, and managed services on Amazon Web Services.', tag: 'AWS Partner' },
  { title: 'UiPath', href: '/partners/uipath', description: 'End-to-end RPA implementation, automation COE setup, and intelligent process automation at enterprise scale.', tag: 'Gold Partner' },
  { title: 'Adobe', href: '/partners/adobe', description: 'Adobe Experience Cloud, Creative Cloud, and digital experience platform implementation and optimization.', tag: 'Solution Partner' },
];

export default function PartnersPage() {
  return (
    <>
      <HeroSection
        eyebrow="Technology Partners"
        headline="World-Class Technology Partnerships. Enterprise-Scale Delivery."
        subtext="Compunnel partners with the world's leading technology companies to deliver certified, outcome-driven solutions that move your enterprise forward."
      />
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((p) => <ServiceCard key={p.href} {...p} />)}
          </div>
        </div>
      </section>
      <PageCTA headline="Leverage the Best Technology with the Best Partner" subtext="Microsoft Gold, AWS, UiPath, and Adobe certified — all in one enterprise team." ctaLabel="Talk to an Expert" ctaHref="/contact" />
    </>
  );
}
