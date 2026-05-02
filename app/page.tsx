import {
  getHeroSlides, getSiteStats, getClientLogos, getAwards,
  getCaseStudies, getInsightPosts, getPressReleases,
} from '@/lib/wordpress';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/shared/StatsBar';
import ClientLogos from '@/components/home/ClientLogos';
import TotalExperience from '@/components/home/TotalExperience';
import SuccessStories from '@/components/home/SuccessStories';
import HomeInsights from '@/components/home/Insights';
import Awards from '@/components/home/Awards';
import HomeCTA from '@/components/home/CTA';
import ServiceCard from '@/components/shared/ServiceCard';
import { Users, Shield, Zap, BookOpen, Heart } from 'lucide-react';

const SERVICES = [
  { title: 'Talent Solutions', description: 'AI-powered hiring, contingent workforce, EOR, and direct sourcing — 500,000+ hires delivered across 100+ skill sets.', href: '/services/talent', icon: <Users size={20} /> },
  { title: 'Cybersecurity', description: 'End-to-end security across 10 practice areas — from cyber strategy to security operations — protecting 1,000+ applications.', href: '/services/cybersecurity', icon: <Shield size={20} /> },
  { title: 'Digital Services', description: 'Enterprise cloud, AI/ML, RPA, engineering, and FinOps — 1,000+ applications built and modernized for Fortune 500s.', href: '/services/digital', icon: <Zap size={20} /> },
  { title: 'Learning Solutions', description: 'Upskilling, reskilling, and leadership development programs that keep your workforce ahead of AI-driven change.', href: '/services/learning', icon: <BookOpen size={20} /> },
  { title: 'Healthcare IT', description: 'Specialized healthcare staffing and digital solutions — HIPAA-compliant, outcomes-focused, enterprise-grade.', href: '/services/healthcare', icon: <Heart size={20} /> },
];

export default async function HomePage() {
  const [slides, stats, clients, awards, caseStudies, insights] = await Promise.all([
    getHeroSlides(),
    getSiteStats(),
    getClientLogos(),
    getAwards(),
    getCaseStudies(3),
    getInsightPosts('blog', 3),
  ]);

  return (
    <>
      <Hero slides={slides} />
      <StatsBar stats={stats} />
      <ClientLogos clients={clients} />

      {/* Services overview */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">What We Do</span>
            <h2 className="section-title">Enterprise Solutions, Powered by AI</h2>
            <p className="section-subtitle">
              From talent intelligence to cybersecurity and digital transformation —
              every solution built for the speed of business today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <TotalExperience />
      <SuccessStories caseStudies={caseStudies} />
      <HomeInsights posts={insights} />
      <Awards awards={awards} />
      <HomeCTA />
    </>
  );
}
