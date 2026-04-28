import Link from 'next/link';
import { Users, Briefcase, Monitor, Shield, Cloud, Brain } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Staffing Solutions',
    description: 'Access top talent through our extensive network of skilled professionals.',
    link: '/services/staffing',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Managed Services',
    description: 'Comprehensive workforce management and MSP/VMS solutions.',
    link: '/services/managed-services',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Digital Engineering',
    description: 'Build next-generation digital products and platforms.',
    link: '/services/digital-engineering',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Cybersecurity',
    description: 'Protect your enterprise with comprehensive security solutions.',
    link: '/services/cybersecurity',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Services',
    description: 'Accelerate your cloud journey with expert guidance.',
    link: '/services/cloud',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Analytics',
    description: 'Transform data into actionable insights with AI-powered solutions.',
    link: '/services/ai-analytics',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
              <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">What We Do</span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#020B2D]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0057FF] font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group flex items-start gap-4 p-6 bg-[#F8FAFF] rounded-2xl hover:bg-[#0057FF] transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0057FF]/10 text-[#0057FF] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                {service.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-[#020B2D] group-hover:text-white mb-1 transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
