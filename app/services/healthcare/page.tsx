import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';
import Testimonial from '@/components/shared/Testimonial';
import FAQSection from '@/components/shared/FAQSection';

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

const HEALTHCARE_TESTIMONIAL = {
  quote: "Compunnel's team migrated our entire EHR infrastructure to Azure without a single minute of clinical downtime. Their HIPAA expertise and pre-built compliance frameworks saved us six months of planning.",
  name: 'Chief Technology Officer',
  title: 'Regional Health System, Mid-Atlantic US',
};

const HEALTHCARE_FAQS = [
  { question: 'Is Compunnel HIPAA compliant?', answer: 'Yes. All Compunnel Healthcare IT engagements operate under a Business Associate Agreement (BAA). Our processes, personnel, and technology controls are designed to maintain HIPAA and HITECH compliance at every layer.' },
  { question: 'What EHR platforms does Compunnel support?', answer: 'We have certified expertise across Epic, Cerner (Oracle Health), Meditech, Allscripts, and eClinicalWorks. We support implementation, migration, optimization, training, and ongoing managed services.' },
  { question: 'Can you help with cloud migration for clinical workloads?', answer: 'Yes. We migrate clinical applications, data lakes, and administrative systems to Azure and AWS — maintaining HIPAA compliance throughout. Our reference architectures for healthcare cloud are pre-certified and reduce implementation time significantly.' },
  { question: 'Do you offer healthcare-specific staffing?', answer: 'Yes. We place clinical informatics professionals, HIT analysts, EHR trainers, project managers, and healthcare cybersecurity specialists. Most placements are within 48 hours from our pre-vetted healthcare talent bench.' },
  { question: 'How do you handle healthcare data security?', answer: 'We implement a defense-in-depth security model covering encryption at rest and in transit, role-based access controls, audit logging, DLP for PHI, and continuous threat monitoring — all aligned to HIPAA Security Rule requirements.' },
  { question: 'Can you support telehealth platform development?', answer: 'Yes. We architect and build telehealth platforms with secure video, remote monitoring integration, HL7/FHIR APIs, and EHR integration. We ensure compliance with state telehealth regulations and 21st Century Cures Act interoperability mandates.' },
  { question: 'What is your experience with revenue cycle management technology?', answer: 'Our RCM technology practice helps health systems optimize billing workflows, reduce claim denial rates, and accelerate collections through intelligent automation, analytics, and integration with leading RCM platforms.' },
  { question: 'Do you support FHIR and interoperability projects?', answer: 'Yes. We implement HL7 FHIR R4 APIs, CDS Hooks, and SMART on FHIR applications — enabling interoperability between EHR systems, payers, and third-party health apps in compliance with CMS and ONC regulations.' },
  { question: 'How do you staff for healthcare IT projects?', answer: 'We use a blended model: onsite leads for governance and clinical relationships, offshore delivery for development and testing, and a dedicated healthcare practice director overseeing quality and compliance across all engagements.' },
  { question: 'Can you help with healthcare AI and predictive analytics?', answer: 'Yes. We build clinical decision support tools, predictive readmission models, patient risk stratification algorithms, and NLP-powered clinical documentation solutions — all validated for clinical accuracy and regulatory compliance.' },
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

      <Testimonial testimonial={HEALTHCARE_TESTIMONIAL} variant="blue" />

      <FAQSection title="Healthcare IT — Common Questions" faqs={HEALTHCARE_FAQS} />

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
