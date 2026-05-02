import { Metadata } from 'next';
import { getCaseStudies } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import HowItWorks from '@/components/shared/HowItWorks';
import SuccessStories from '@/components/home/SuccessStories';
import PageCTA from '@/components/shared/PageCTA';
import ServiceCard from '@/components/shared/ServiceCard';
import { Layers, BarChart2, Cloud, AppWindow, Brain, CheckSquare, Bot, DollarSign, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Services',
  description: 'AI-powered digital transformation — cloud, engineering, AI/ML, RPA, FinOps — 1,000+ applications built for Fortune 500.',
};

const SERVICES = [
  { title: 'Enterprise Engineering', href: '/services/digital/enterprise-engineering', description: 'Architecture, migration, and scaling with agility and cloud-native patterns.', icon: <Layers size={20} /> },
  { title: 'Enterprise Insight', href: '/services/digital/enterprise-insight', description: 'Transform data into strategic decisions with advanced analytics and BI platforms.', icon: <BarChart2 size={20} /> },
  { title: 'Enterprise Cloud', href: '/services/digital/enterprise-cloud', description: 'Multi-cloud and hybrid cloud architecture, migration, and ongoing management.', icon: <Cloud size={20} /> },
  { title: 'Enterprise Application', href: '/services/digital/enterprise-application', description: 'Legacy modernization, custom dev, and platform engineering at enterprise scale.', icon: <AppWindow size={20} /> },
  { title: 'Artificial Intelligence', href: '/services/digital/artificial-intelligence', description: 'ML, GenAI, LLM integration, and AI platform engineering for real business outcomes.', icon: <Brain size={20} /> },
  { title: 'Quality Assurance', href: '/services/digital/quality-assurance', description: 'Test automation, performance testing, and QE frameworks that ship with confidence.', icon: <CheckSquare size={20} /> },
  { title: 'Robotics Process Automation', href: '/services/digital/rpa', description: 'End-to-end RPA with UiPath and Blue Prism — intelligent workflow automation at scale.', icon: <Bot size={20} /> },
  { title: 'FinOps', href: '/services/digital/finops', description: 'Cloud cost optimization, governance, and ROI maximization across AWS, Azure, and GCP.', icon: <DollarSign size={20} /> },
  { title: 'Guidewire', href: '/services/digital/guidewire', description: 'Guidewire implementation, migration, and support for insurance digital transformation.', icon: <Shield size={20} /> },
];

const BENEFITS = [
  { title: 'Cloud-Native Speed', description: 'Containerization and microservices deployment accelerate time-to-market.' },
  { title: 'Intelligence Everywhere', description: 'Embedded AI/ML and analytics turn raw data into competitive advantage.' },
  { title: 'Resilient Architectures', description: 'Zero-downtime platforms built secure, compliant, and scalable by default.' },
  { title: 'Cost Visibility & Control', description: 'FinOps monitoring ensures every cloud dollar delivers measurable ROI.' },
  { title: 'Continuous Innovation', description: 'DevSecOps pipelines with security and quality integrated at every stage.' },
  { title: 'North America Focus, Global Reach', description: 'US/Canada compliance-first with worldwide delivery scale and 24/7 support.' },
];

const STEPS = [
  { step: 1, title: 'Discover', description: 'Assess your current tech landscape, debt, and transformation readiness.' },
  { step: 2, title: 'Architect', description: 'Design cloud-native, AI-ready solutions aligned to business outcomes.' },
  { step: 3, title: 'Build', description: 'Agile delivery with DevSecOps, continuous testing, and automated deployment.' },
  { step: 4, title: 'Optimize', description: 'Performance tuning, FinOps cost control, and continuous improvement.' },
  { step: 5, title: 'Scale', description: 'Enterprise-grade scaling from POC to production — global, compliant, resilient.' },
];

export default async function DigitalPage() {
  const caseStudies = await getCaseStudies(3);

  return (
    <>
      <HeroSection
        eyebrow="Digital Services"
        headline="Accelerate. Innovate. Dominate."
        subtext="AI-powered digital services that deliver impact where it counts most — enterprise growth. 1,000+ applications built and modernized for the world's leading organizations."
        ctaLabel="Talk to a Digital Expert"
        ctaHref="/contact"
        secondaryCtaLabel="View Case Studies"
        secondaryCtaHref="/insights/case-studies"
        stats={[
          { value: '30+', label: 'Years in Tech Execution' },
          { value: '1,000+', label: 'Applications Built' },
          { value: '23%', label: 'Fortune 500 Clients' },
          { value: '100+', label: 'Digital Skill Sets' },
        ]}
      />

      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">9 Practice Areas</span>
            <h2 className="section-title">Full-Spectrum Digital Transformation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <BenefitsList
        title="Why Enterprises Choose Compunnel Digital"
        subtitle="Six outcomes that define our digital services' competitive edge."
        benefits={BENEFITS}
        columns={3}
      />

      <HowItWorks
        title="Our Digital Delivery Playbook"
        subtitle="Five stages from discovery to enterprise-scale production."
        steps={STEPS}
      />

      <SuccessStories caseStudies={caseStudies} />

      <PageCTA
        headline="Modernize. Scale. Innovate Without Limits."
        subtext="1,000+ applications delivered. AI-native engineering. Every cloud, every scale, every industry."
        ctaLabel="Start Your Digital Journey"
        ctaHref="/contact"
        secondaryCtaLabel="Download Digital Brochure"
        secondaryCtaHref="/insights/ebooks"
      />
    </>
  );
}
