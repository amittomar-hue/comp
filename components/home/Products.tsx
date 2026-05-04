import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'Eximius',
    tagline: 'AI Hiring Co-Pilot',
    description: 'Reduce time-to-fill by 50% with predictive talent matching, bias reduction, and intelligent workflow automation.',
    href: 'https://eximius.ai',
    external: true,
    tag: 'AI Hiring',
    color: 'border-brand-blue',
  },
  {
    name: 'Testgrid',
    tagline: 'Intelligent Quality Engineering',
    description: 'AI-driven test automation across web, mobile, and API layers — faster releases, higher confidence.',
    href: 'https://testgrid.io',
    external: true,
    tag: 'QA Automation',
    color: 'border-brand-red',
  },
  {
    name: 'Dori AI',
    tagline: 'Conversational AI for Enterprise',
    description: 'Domain-specific chatbots and virtual assistants that integrate deeply with enterprise systems.',
    href: 'https://dori.ai',
    external: true,
    tag: 'AI Platform',
    color: 'border-teal-500',
  },
  {
    name: 'JoblecticsPRO',
    tagline: 'Free AI Job Matching',
    description: 'Democratise hiring with AI-powered job matching and free posting — connecting talent at scale.',
    href: 'https://jobletics.com',
    external: true,
    tag: 'Job Platform',
    color: 'border-purple-500',
  },
  {
    name: 'StafflinePro',
    tagline: 'AI-Powered Staffing Platform',
    description: 'AI intelligence across the staffing lifecycle — from workforce planning to onboarding analytics.',
    href: '/ventures',
    external: false,
    tag: 'Staffing Tech',
    color: 'border-orange-500',
  },
];

export default function HomeProducts() {
  return (
    <section className="section-padding bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="tag mb-3 inline-block">Compunnel Ventures AI</span>
            <h2 className="section-title text-left">5 AI-Powered Platforms</h2>
            <p className="text-brand-gray-mid max-w-lg">
              Proprietary products born from enterprise problems — built to scale.
            </p>
          </div>
          <Link href="/ventures" className="btn-outline inline-flex items-center gap-2 shrink-0">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.name} className={`card p-6 flex flex-col border-l-4 ${p.color}`}>
              <span className="tag mb-3 inline-block">{p.tag}</span>
              <h3 className="text-lg font-bold text-brand-blue-dark">{p.name}</h3>
              <p className="text-sm text-brand-red font-medium mb-3">{p.tagline}</p>
              <p className="text-sm text-brand-gray-mid leading-relaxed flex-1 mb-4">{p.description}</p>
              {p.external ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  Explore {p.name} <ExternalLink size={14} />
                </a>
              ) : (
                <Link href={p.href} className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
