import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import HowItWorks from '@/components/shared/HowItWorks';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';
import ServiceCard from '@/components/shared/ServiceCard';
import Testimonial from '@/components/shared/Testimonial';
import FAQSection from '@/components/shared/FAQSection';
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

const CYBER_TESTIMONIAL = {
  quote: "Compunnel's security team identified 1,000+ vulnerabilities in our applications within weeks and remediated every critical finding before our audit. We've maintained SOC2 and GDPR compliance ever since.",
  name: 'Chief Information Security Officer',
  title: 'Global Banking & Financial Services Enterprise',
};

const CYBER_FAQS = [
  { question: 'What cybersecurity frameworks do you align to?', answer: 'We support NIST CSF, ISO 27001, SOC 2, HIPAA, GDPR, CCPA, PCI-DSS, and CMMC — helping enterprises align security controls to the right framework for their industry and regulatory environment.' },
  { question: 'Do you offer 24/7 Security Operations Center (SOC) coverage?', answer: 'Yes. Our AI-augmented SOC provides round-the-clock threat monitoring, SIEM management, threat hunting, and incident response. Average mean time to detect (MTTD) is under 15 minutes for critical threats.' },
  { question: 'How do you approach cloud security for multi-cloud environments?', answer: 'We deploy cloud-native security posture management (CSPM) and cloud workload protection (CWPP) tools across AWS, Azure, and GCP — with unified policy enforcement and continuous compliance monitoring.' },
  { question: 'What is your approach to Zero Trust architecture?', answer: 'We implement Zero Trust by verifying every identity, securing every device, and limiting lateral movement. Our IAM practice covers identity lifecycle management, privileged access management (PAM), and MFA enforcement across all applications.' },
  { question: 'Can you help with application security in our DevOps pipeline?', answer: 'Yes. We integrate SAST, DAST, SCA, and container security scanning into CI/CD pipelines — shifting security left without slowing velocity. Our AppSec engineers embed alongside your development teams.' },
  { question: 'What is your incident response process?', answer: 'Our IR process follows a structured contain-eradicate-recover model. We provide a dedicated IR retainer, tabletop exercises, and playbook development. Average containment time for ransomware events is under 4 hours.' },
  { question: 'Do you support penetration testing and red team exercises?', answer: 'Yes. We offer network, web application, API, social engineering, and physical penetration testing. Our red team exercises simulate advanced persistent threat (APT) actors to test your full detection and response capability.' },
  { question: 'How do you handle data classification and DLP?', answer: 'We implement data discovery, classification tagging, and DLP policies across endpoints, cloud storage, and SaaS applications — ensuring sensitive data is identified, labeled, and protected wherever it lives.' },
  { question: 'Can Compunnel help with security awareness training?', answer: 'Absolutely. Our security awareness program includes phishing simulations, role-based e-learning, and executive tabletop workshops. We measure behavior change, not just completion rates.' },
  { question: 'How do you price cybersecurity engagements?', answer: 'We offer flexible models: fixed-scope project engagements, managed security services (MSS) retainers, and outcome-based pricing. We size engagements based on your environment complexity, compliance requirements, and risk profile.' },
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

      <Testimonial testimonial={CYBER_TESTIMONIAL} variant="blue" />

      <FAQSection title="Cybersecurity Services — Common Questions" faqs={CYBER_FAQS} />

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
