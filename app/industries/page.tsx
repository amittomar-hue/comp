import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import PageCTA from '@/components/shared/PageCTA';
import { Landmark, Heart, Factory, Building, GraduationCap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Compunnel delivers industry-specific talent, cybersecurity, and digital solutions across banking, healthcare, manufacturing, and more.',
};

const INDUSTRIES = [
  { title: 'Banking & Financial Services', href: '/industries/banking', description: 'BFSI-specific talent, cloud migration, DevSecOps, and regulatory compliance across capital markets, retail banking, and insurance.', icon: <Landmark size={20} /> },
  { title: 'Insurance', href: '/industries/insurance', description: 'Guidewire, claims automation, InsurTech modernization, and compliance-driven digital transformation for P&C and life carriers.', icon: <Shield size={20} /> },
  { title: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA-compliant EHR, telehealth, clinical IT staffing, and digital health platforms for health systems and payers.', icon: <Heart size={20} /> },
  { title: 'Manufacturing', href: '/industries/manufacturing', description: 'Industry 4.0, IoT integration, supply chain digitization, and OT/IT security for discrete and process manufacturers.', icon: <Factory size={20} /> },
  { title: 'Government', href: '/industries/government', description: 'FedRAMP-aware cloud, cleared talent, cybersecurity compliance, and digital modernization for federal and state agencies.', icon: <Building size={20} /> },
  { title: 'EdTech', href: '/industries/edtech', description: 'Learning platform engineering, LMS integration, AI-powered personalization, and data analytics for education innovators.', icon: <GraduationCap size={20} /> },
];

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Industries"
        headline="Powering What's Next in Every Industry"
        subtext="From Wall Street to Main Street — Compunnel delivers AI-powered enterprise solutions purpose-built for the unique challenges, regulations, and opportunities of your sector."
        stats={[
          { value: '6', label: 'Industries Served' },
          { value: '200+', label: 'Enterprise Clients' },
          { value: '30+', label: 'Years of Expertise' },
          { value: '23%', label: 'Fortune 500 Clients' },
        ]}
      />

      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Industry-Specific Expertise</h2>
            <p className="section-subtitle">
              Sector-deep knowledge. Enterprise-grade execution. Results measured in business outcomes, not SLAs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <ServiceCard key={ind.href} {...ind} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Ready for Industry-Specific Transformation?"
        subtext="Tell us your sector, your challenge, and your timeline — we'll build the solution."
        ctaLabel="Talk to an Industry Expert"
        ctaHref="/contact"
        secondaryCtaLabel="View Case Studies"
        secondaryCtaHref="/insights/case-studies"
      />
    </>
  );
}
