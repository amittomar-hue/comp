import Link from 'next/link';
import { Users, Monitor, Shield } from 'lucide-react';

const pillars = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Talent Solutions',
    description: 'Strategic workforce solutions that align talent acquisition with business objectives for lasting impact.',
    link: '/services/talent',
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Digital Solutions',
    description: 'End-to-end digital transformation services from strategy to implementation and beyond.',
    link: '/services/digital',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your enterprise in an evolving threat landscape.',
    link: '/services/cybersecurity',
  },
];

export default function TotalExperience() {
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
            <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">Our Services</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#020B2D] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Total Experience Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One partner to build, protect, and scale what&apos;s next. AI-native intelligence at the core.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.link}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0057FF]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0057FF]/10 text-[#0057FF] mb-6 group-hover:bg-[#0057FF] group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3
                className="text-xl font-bold text-[#020B2D] mb-3 group-hover:text-[#0057FF] transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[#0057FF] font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
