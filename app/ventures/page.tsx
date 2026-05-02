import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import PageCTA from '@/components/shared/PageCTA';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = { title: 'Compunnel Ventures', description: 'Compunnel Ventures AI — AI-powered products and innovation ecosystem.' };

const PRODUCTS = [
  { name: 'Eximius', tagline: 'The AI Hiring Co-Pilot', description: 'Eximius is Compunnel\'s AI-native hiring platform — reducing time-to-fill by 50% with predictive matching, bias reduction, and intelligent workflow automation.', href: 'https://eximius.ai', tag: 'AI Hiring' },
  { name: 'Testgrid', tagline: 'Intelligent Quality Engineering', description: 'Testgrid automates testing across web, mobile, and API layers — delivering faster releases with higher confidence through AI-driven test generation.', href: 'https://testgrid.io', tag: 'Quality Assurance' },
  { name: 'Dori AI', tagline: 'Conversational AI for Enterprise', description: 'Dori AI builds intelligent, domain-specific chatbots and virtual assistants that integrate deeply with enterprise systems and workflows.', href: 'https://dori.ai', tag: 'AI Platform' },
  { name: 'JoblecticsPRO', tagline: 'Free AI Job Posting & Matching', description: 'JoblecticsPRO democratizes hiring with AI-powered job matching and free posting — connecting employers and candidates at scale.', href: 'https://jobletics.com', tag: 'Job Platform' },
  { name: 'StafflinePro', tagline: 'AI-Powered Staffing Platform', description: 'StafflinePro brings AI intelligence to the staffing lifecycle — from workforce planning and talent sourcing to onboarding and retention analytics.', href: '#', tag: 'Staffing Tech' },
];

export default function VenturesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Compunnel Ventures AI"
        headline="Products Born from Enterprise Problems. Built for Enterprise Scale."
        subtext="Compunnel Ventures is our AI innovation engine — building proprietary platforms that solve the hardest talent, quality, and intelligence challenges in enterprise business."
      />

      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Our Products</span>
            <h2 className="section-title">5 AI-Powered Platforms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="card p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="tag mb-2 inline-block">{p.tag}</span>
                    <h3 className="text-xl font-bold text-brand-blue-dark">{p.name}</h3>
                    <p className="text-brand-red text-sm font-medium">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-brand-gray-mid leading-relaxed flex-1">{p.description}</p>
                {p.href !== '#' ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                  >
                    Explore {p.name} <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-brand-gray-mid text-sm">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Partner with Compunnel Ventures"
        subtext="Integrate our AI platforms into your enterprise or explore co-innovation opportunities."
        ctaLabel="Explore Partnerships"
        ctaHref="/contact"
        secondaryCtaLabel="View Alumni Program"
        secondaryCtaHref="/ventures/alumni"
      />
    </>
  );
}
