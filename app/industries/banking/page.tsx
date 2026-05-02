import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import HowItWorks from '@/components/shared/HowItWorks';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Banking & Financial Services' };

const CHALLENGES = [
  { title: 'Regulatory Complexity', description: 'SOX, Basel III, GDPR, CCPA, and evolving compliance requirements demand constant technology adaptation.' },
  { title: 'Legacy System Modernization', description: 'Decades of technical debt in core banking, trading platforms, and risk systems slows innovation.' },
  { title: 'Cyber Threat Landscape', description: 'BFSI remains the most targeted sector globally — phishing, ransomware, and insider threats are constant.' },
  { title: 'Talent Competition', description: 'Demand for quant developers, cloud architects, and data scientists far outstrips available supply.' },
  { title: 'Cloud Adoption Friction', description: 'Regulatory constraints and data sovereignty requirements complicate public cloud migration strategies.' },
  { title: 'Digital Customer Expectations', description: 'Customers expect seamless, personalized, real-time digital experiences across every channel.' },
];

const SOLUTIONS = [
  { title: 'Regulatory Compliance Automation', description: 'SOX, KYC/AML, GDPR compliance embedded into cloud and application platforms from day one.' },
  { title: 'Core Banking Modernization', description: 'Mainframe migration, API-first architecture, and cloud-native core banking transformation.' },
  { title: 'Financial Cybersecurity', description: '24/7 SOC, threat hunting, pen testing, and compliance-first security architecture for BFSI.' },
  { title: 'Specialized BFSI Talent', description: 'Quant developers, risk analysts, data scientists, and cloud architects — placed in days, not months.' },
  { title: 'FinOps & Cloud Optimization', description: 'Right-size your cloud spend with FinOps governance frameworks tailored to BFSI workloads.' },
  { title: 'Digital Banking Platforms', description: 'Omnichannel banking, mobile-first design, and real-time payments infrastructure engineering.' },
];

const STEPS = [
  { step: 1, title: 'Assess', description: 'Evaluate your compliance posture, technical debt, and digital readiness.' },
  { step: 2, title: 'Prioritize', description: 'Sequence initiatives by regulatory risk, revenue impact, and execution velocity.' },
  { step: 3, title: 'Execute', description: 'Agile delivery with compliance checkpoints embedded at every sprint.' },
  { step: 4, title: 'Secure', description: 'Continuous security testing and threat monitoring across all new and legacy systems.' },
  { step: 5, title: 'Optimize', description: 'Ongoing performance, cost, and compliance optimization as regulations evolve.' },
];

export default async function BankingPage() {
  const cs = await getCaseStudies(3);
  return (
    <>
      <HeroSection
        eyebrow="Banking & Financial Services"
        headline="Accelerate BFSI Transformation Without Compromising Compliance"
        subtext="From core banking modernization to regulatory-compliant cloud migration and specialized financial talent — Compunnel delivers outcomes that move markets."
        ctaLabel="Talk to a BFSI Expert"
        ctaHref="/contact"
        stats={[{ value: '50+', label: 'BFSI Clients' }, { value: '200+', label: 'Regulated Workloads' }, { value: '100%', label: 'Compliance Maintained' }, { value: '30+', label: 'Years in Finance IT' }]}
      />
      <BenefitsList title="Challenges We Solve" benefits={CHALLENGES} columns={3} />
      <BenefitsList title="Our BFSI Solutions" subtitle="Proven capabilities mapped to your most critical priorities." benefits={SOLUTIONS} columns={3} />
      <HowItWorks title="Our BFSI Engagement Model" steps={STEPS} />
      <SuccessStories caseStudies={cs.filter(c => c.industry === 'Banking & Financial').length > 0 ? cs.filter(c => c.industry === 'Banking & Financial') : cs} />
      <PageCTA headline="Ready to Transform Your Financial Enterprise?" subtext="Compliance-first. AI-native. BFSI-specialized. Let's accelerate what's next." ctaLabel="Talk to a BFSI Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
