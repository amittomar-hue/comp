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
import HomeProducts from '@/components/home/Products';
import ServiceCard from '@/components/shared/ServiceCard';
import { Users, Shield, Zap, BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { title: 'Talent Solutions', description: 'AI-powered hiring, contingent workforce, EOR, and direct sourcing — 500,000+ hires delivered across 100+ skill sets.', href: '/services/talent', icon: <Users size={20} /> },
  { title: 'Cybersecurity', description: 'End-to-end security across 10 practice areas — from cyber strategy to security operations — protecting 1,000+ applications.', href: '/services/cybersecurity', icon: <Shield size={20} /> },
  { title: 'Digital Services', description: 'Enterprise cloud, AI/ML, RPA, engineering, and FinOps — 1,000+ applications built and modernized for Fortune 500s.', href: '/services/digital', icon: <Zap size={20} /> },
  { title: 'Learning Solutions', description: 'Upskilling, reskilling, and leadership development programs that keep your workforce ahead of AI-driven change.', href: '/services/learning', icon: <BookOpen size={20} /> },
  { title: 'Healthcare IT', description: 'Specialized healthcare staffing and digital solutions — HIPAA-compliant, outcomes-focused, enterprise-grade.', href: '/services/healthcare', icon: <Heart size={20} /> },
];

export default async function HomePage() {
  const [slides, stats, clients, awards, caseStudies, insights, pressReleases] = await Promise.all([
    getHeroSlides(),
    getSiteStats(),
    getClientLogos(),
    getAwards(),
    getCaseStudies(3),
    getInsightPosts('blog', 3),
    getPressReleases(3),
  ]);

  return (
    <>
      <Hero slides={slides} />
      <StatsBar stats={stats} />
      <ClientLogos clients={clients} />

      {/* Services overview */}
      <section className="section-padding bg-white">
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
      <HomeProducts />
      <HomeInsights posts={insights} />

      {/* Press Releases */}
      {pressReleases.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="tag mb-3 inline-block">News</span>
                <h2 className="section-title text-left">Latest Press Releases</h2>
              </div>
              <Link href="/insights/press-releases" className="btn-outline inline-flex items-center gap-2 shrink-0">
                View All News <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressReleases.map((pr) => (
                <div key={pr.id} className="card p-6 flex flex-col">
                  <p className="text-xs text-brand-gray-mid mb-3">
                    {new Date(pr.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 className="font-semibold text-brand-blue-dark leading-snug mb-3 flex-1">{pr.title}</h3>
                  {pr.excerpt && <p className="text-sm text-brand-gray-mid mb-4 line-clamp-2">{pr.excerpt}</p>}
                  <Link href={`/insights/press-releases/${pr.slug}`} className="text-brand-blue text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Awards awards={awards} />
      <HomeCTA />
    </>
  );
}
