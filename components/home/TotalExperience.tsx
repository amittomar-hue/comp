import { Users, Monitor, Briefcase, Smartphone } from 'lucide-react';
import Link from 'next/link';

const TX_PILLARS = [
  {
    icon: Users,
    label: 'CX',
    title: 'Customer Experience',
    desc: 'AI-driven journeys that delight customers at every touchpoint — faster resolution, personalised engagement, measurable loyalty.',
    color: 'from-brand-blue to-brand-blue-light',
  },
  {
    icon: Monitor,
    label: 'UX',
    title: 'User Experience',
    desc: 'Intuitive, accessible digital interfaces designed around real user behaviour — reducing friction and increasing adoption.',
    color: 'from-brand-red to-brand-red-light',
  },
  {
    icon: Briefcase,
    label: 'EX',
    title: 'Employee Experience',
    desc: 'Talent intelligence, upskilling, and AI-native HR tools that empower teams, reduce attrition, and fuel productivity.',
    color: 'from-brand-blue-dark to-brand-blue',
  },
  {
    icon: Smartphone,
    label: 'MX',
    title: 'Multi-Experience',
    desc: 'Seamless omnichannel delivery across web, mobile, voice, and AR — connecting every experience into a unified ecosystem.',
    color: 'from-brand-blue-light to-teal-500',
  },
];

export default function TotalExperience() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag mb-3 inline-block">The TX Framework</span>
          <h2 className="section-title">
            Total Experience (TX):<br />
            <span className="text-brand-red">Where People, Ideas &amp; AI Converge</span>
          </h2>
          <p className="section-subtitle">
            Compunnel&apos;s unified delivery model integrates four experience dimensions —
            CX, UX, EX, and MX — into a seamless, AI-driven enterprise framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TX_PILLARS.map(({ icon: Icon, label, title, desc, color }) => (
            <div key={label} className="card p-6 flex flex-col items-start group hover:scale-[1.02] transition-transform duration-200">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex flex-col items-center justify-center mb-4 text-white`}>
                <span className="text-xs font-black leading-none">{label}</span>
                <Icon size={14} className="mt-0.5" />
              </div>
              <h4 className="font-bold text-brand-blue-dark text-base mb-2">{title}</h4>
              <p className="text-sm text-brand-gray-mid leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-blue-dark to-brand-blue rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-3">Built on 30+ years of enterprise trust</h3>
            <p className="text-blue-100 leading-relaxed">
              TX turns complexity into clarity and ambition into measurable outcomes — helping you
              move faster without compromising resilience or compliance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/about" className="btn-secondary">Learn About Compunnel</Link>
            <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
