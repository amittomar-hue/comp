import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = {
  title: 'Healthcare IT Solutions',
  description: 'HIPAA-compliant healthcare staffing and digital transformation — specialized talent and technology for health systems.',
};

const OFFERINGS = [
  { title: 'Healthcare IT Staffing', description: 'Specialized EHR, EMR, HIT, and clinical informatics talent placed within 48 hours.' },
  { title: 'EHR Implementation & Support', description: 'Epic, Cerner, Meditech implementation, migration, and ongoing support at scale.' },
  { title: 'Cloud Migration for Health Systems', description: 'HIPAA-compliant migration of clinical workloads to Azure and AWS with zero downtime.' },
  { title: 'Revenue Cycle Management IT', description: 'Technology solutions that accelerate billing, reduce denials, and improve cash flow.' },
  { title: 'Healthcare Cybersecurity', description: 'HIPAA, HITECH, and SOC2 compliance embedded across all clinical and administrative systems.' },
  { title: 'Telehealth & Digital Health', description: 'Platform engineering and integration for telehealth, remote monitoring, and patient engagement.' },
];

export default function HealthcarePage() {
  return (
    <>
      <HeroSection
        eyebrow="Healthcare IT"
        headline="Specialized Healthcare Solutions. Zero Compromise on Compliance."
        subtext="From EHR implementation to clinical cloud migration and HIPAA-compliant cybersecurity, Compunnel's healthcare practice delivers technology outcomes that protect patients and accelerate care."
        ctaLabel="Talk to a Healthcare Expert"
        ctaHref="/contact"
        secondaryCtaLabel="View Healthcare Case Studies"
        secondaryCtaHref="/insights/case-studies"
      />

      <BenefitsList
        title="Our Healthcare IT Offerings"
        subtitle="End-to-end technology and talent solutions purpose-built for healthcare enterprises."
        benefits={OFFERINGS}
        columns={3}
      />

      {/* Compliance badges */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-10">Compliance We Deliver</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['HIPAA Compliant', 'HITECH Ready', 'SOC2 Type II', 'ISO 9001:2015', 'HL7/FHIR Expertise', '21st Century Cures Act'].map((c) => (
              <div key={c} className="card px-6 py-3 text-sm font-semibold text-brand-blue-dark">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Advance Healthcare. Protect What Matters Most."
        subtext="HIPAA-compliant by default. Patient-outcome focused. Enterprise-grade at every layer."
        ctaLabel="Talk to a Healthcare Expert"
        ctaHref="/contact"
        secondaryCtaLabel="View Case Studies"
        secondaryCtaHref="/insights/case-studies"
      />
    </>
  );
}
