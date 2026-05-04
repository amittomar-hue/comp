import { Metadata } from 'next';
import { getInsightPosts } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import ServiceCard from '@/components/shared/ServiceCard';
import InsightCard from '@/components/shared/InsightCard';
import PageCTA from '@/components/shared/PageCTA';
import { Award, Users, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = { title: 'Strategic Partners', description: "Compunnel's technology partnerships with Microsoft, AWS, UiPath, and Adobe." };

const PARTNERS = [
  { title: 'Microsoft', href: '/partners/microsoft', description: '20+ Microsoft services including Azure, Dynamics 365, Power Platform, Microsoft 365, and Copilot AI solutions.', tag: 'Gold Partner' },
  { title: 'Amazon (AWS)', href: '/partners/amazon', description: 'Cloud infrastructure, migration, optimization, and managed services on Amazon Web Services.', tag: 'AWS Partner' },
  { title: 'UiPath', href: '/partners/uipath', description: 'End-to-end RPA implementation, automation COE setup, and intelligent process automation at enterprise scale.', tag: 'Gold Partner' },
  { title: 'Adobe', href: '/partners/adobe', description: 'Adobe Experience Cloud, Creative Cloud, and digital experience platform implementation and optimization.', tag: 'Solution Partner' },
];

const PARTNER_BENEFITS = [
  { icon: Award, title: 'Certified Expertise', description: 'Our engineers hold active certifications across Microsoft, AWS, UiPath, and Adobe — ensuring you get proven, up-to-date expertise on every engagement.' },
  { icon: Users, title: 'Dedicated Partner Teams', description: 'Each partner practice has a dedicated team of architects, consultants, and support engineers — not shared generalists.' },
  { icon: Zap, title: 'Faster Time to Value', description: 'Pre-built accelerators, reference architectures, and deployment templates reduce implementation time by 30–40%.' },
  { icon: Globe, title: 'Global Support', description: 'Follow-the-sun support across US, Canada, UK, and India ensures your enterprise systems are always covered.' },
];

export default async function PartnersPage() {
  const insights = await getInsightPosts('blog', 3);

  return (
    <>
      <HeroSection
        eyebrow="Technology Partners"
        headline="World-Class Technology Partnerships. Enterprise-Scale Delivery."
        subtext="Compunnel partners with the world's leading technology companies to deliver certified, outcome-driven solutions that move your enterprise forward."
        ctaLabel="Explore Partnerships"
        ctaHref="#partners"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* Partners grid */}
      <section id="partners" className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Our Ecosystem</span>
            <h2 className="section-title">Strategic Technology Partners</h2>
            <p className="section-subtitle">
              Four certified partnerships spanning cloud, AI, automation, and digital experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((p) => <ServiceCard key={p.href} {...p} />)}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Why Choose Compunnel</span>
            <h2 className="section-title">The Partner Advantage</h2>
            <p className="section-subtitle">
              We don&apos;t just resell partner technologies — we build certified practices around them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_BENEFITS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-brand-blue-dark mb-2">{title}</h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Think — content hub */}
      {insights.length > 0 && (
        <section className="section-padding bg-brand-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="tag mb-3 inline-block">Insights</span>
              <h2 className="section-title">What We Think</h2>
              <p className="section-subtitle">
                Perspectives from our partner practices on cloud, AI, automation, and digital strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((post) => (
                <InsightCard key={post.id} post={post} basePath="/insights/blogs" />
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTA
        headline="Leverage the Best Technology with the Best Partner"
        subtext="Microsoft Gold, AWS, UiPath, and Adobe certified — all in one enterprise team."
        ctaLabel="Talk to an Expert"
        ctaHref="/contact"
        secondaryCtaLabel="View All Services"
        secondaryCtaHref="/services/digital"
      />
    </>
  );
}
