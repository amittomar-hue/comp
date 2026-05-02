import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import HowItWorks from '@/components/shared/HowItWorks';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';
import ServiceCard from '@/components/shared/ServiceCard';
import { Shield, Lock, Eye, Cloud, Code, Server, Monitor, AlertTriangle, Zap, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity Services',
  description: 'AI-native cybersecurity across 10 practice areas — protecting 1,000+ applications for Fortune 500 enterprises.',
};

const SERVICES = [
  { title: 'Cyber Strategy & Governance', href: '/services/cybersecurity/cyber-strategy', description: 'Align security with business objectives through risk-based governance frameworks.', icon: <Shield size={20} /> },
  { title: 'Data Protection', href: '/services/cybersecurity/data-protection', description: 'Classify, protect, and govern sensitive data across hybrid and multi-cloud environments.', icon: <Lock size={20} /> },
  { title: 'Privacy Services', href: '/services/cybersecurity/privacy-services', description: 'GDPR, CCPA, and HIPAA compliance embedded into your processes and technology.', icon: <Eye size={20} /> },
  { title: 'Identity & Access Management', href: '/services/cybersecurity/identity-access', description: 'Zero-trust IAM architecture — right access, right people, right time.', icon: <Key size={20} /> },
  { title: 'Cloud Security', href: '/services/cybersecurity/cloud-security', description: 'Secure multi-cloud and hybrid environments with continuous posture management.', icon: <Cloud size={20} /> },
  { title: 'Application Security', href: '/services/cybersecurity/application-security', description: 'Shift-left security embedded in SDLC — SAST, DAST, and pen testing at scale.', icon: <Code size={20} /> },
  { title: 'Endpoint Security', href: '/services/cybersecurity/endpoint-security', description: 'Next-gen EDR, MDM, and Zero Trust endpoint protection across all devices.', icon: <Monitor size={20} /> },
  { title: 'Infrastructure Security', href: '/services/cybersecurity/infrastructure-security', description: 'Network segmentation, firewall management, and infrastructure hardening.', icon: <Server size={20} /> },
  { title: 'Security Operations', href: '/services/cybersecurity/security-operations', description: '24/7 SOC with AI-driven SIEM, threat hunting, and incident response.', icon: <AlertTriangle size={20} /> },
  { title: 'Emerging Technology Security', href: '/services/cybersecurity/emerging-technology', description: 'AI, IoT, and blockchain security — protecting tomorrow\'s infrastructure today.', icon: <Zap size={20} /> },
];

const BENEFITS = [
  { title: 'Stronger Trust', description: 'Move fast without breaking critical systems — security confidence at every layer.' },
  { title: 'Regulatory Confidence', description: 'HIPAA, GDPR, CCPA, SOC2, and PCI-DSS compliance integrated, not bolted on.' },
  { title: 'Reduced Risk Exposure', description: 'Proactive vulnerability closure before threats become incidents.' },
  { title: 'Lower Costs', description: 'Prevention saves millions vs. breach recovery — outcome-based security pricing.' },
  { title: 'Operational Agility', description: 'Reduce security firefighting so teams can focus on innovation.' },
  { title: 'Growth Enablement', description: 'Expand into new markets and platforms without security hesitation.' },
];

const STEPS = [
  { step: 1, title: 'Assess & Align', description: 'Map risks to business objectives through structured threat modeling and gap analysis.' },
  { step: 2, title: 'Architect & Embed', description: 'Integrate security from inception — security by design, not afterthought.' },
  { step: 3, title: 'Monitor & Detect', description: '24/7 AI and human-driven visibility across all threat surfaces.' },
  { step: 4, title: 'Predict & Prevent', description: 'Machine learning foresight closes vulnerabilities before exploitation.' },
  { step: 5, title: 'Respond & Evolve', description: 'Adaptive incident response and continuous improvement cycles.' },
];

export default async function CybersecurityPage() {
  const caseStudies = await getCaseStudies(3);

  return (
    <>
      <HeroSection
        eyebrow="Cybersecurity Services"
        headline="Tomorrow's Cybersecurity Services, Running Your Enterprise Today"
        subtext="With AI-native intelligence and compliance at the core, Compunnel's cybersecurity services empower enterprises to predict risks before they surface and scale innovation without hesitation."
        ctaLabel="Talk to a Security Expert"
        ctaHref="/contact"
        secondaryCtaLabel="Download Security Report"
        secondaryCtaHref="/insights/whitepapers"
        stats={[
          { value: '30+', label: 'Years of Experience' },
          { value: '1,000+', label: 'Applications Protected' },
          { value: '23%', label: 'Fortune 500 Trust Us' },
          { value: '10', label: 'Security Practice Areas' },
        ]}
      />

      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">10 Practice Areas</span>
            <h2 className="section-title">End-to-End Security Coverage</h2>
            <p className="section-subtitle">From strategy to operations — every security domain, one trusted partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsList
        title="Why Enterprises Choose Compunnel Security"
        subtitle="Six outcomes that define our security practice's impact."
        benefits={BENEFITS}
        columns={3}
      />

      <HowItWorks
        title="The Compunnel Security Playbook"
        subtitle="Five stages from risk assessment to continuous protection."
        steps={STEPS}
      />

      <SuccessStories caseStudies={caseStudies.filter(cs => cs.service === 'Cybersecurity').length > 0
        ? caseStudies.filter(cs => cs.service === 'Cybersecurity')
        : caseStudies}
      />

      <PageCTA
        headline="Secure Your Enterprise. Enable Your Growth."
        subtext="1,000+ applications protected. AI-native threat detection. Zero compromise on compliance."
        ctaLabel="Get a Security Assessment"
        ctaHref="/contact"
        secondaryCtaLabel="Explore Security Services"
        secondaryCtaHref="#services"
      />
    </>
  );
}
