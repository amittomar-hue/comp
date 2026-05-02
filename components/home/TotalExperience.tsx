import { Brain, Shield, Zap, Globe, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const TX_PILLARS = [
  { icon: Brain, title: 'AI-Native Intelligence', desc: 'Every service powered by machine learning and predictive analytics.' },
  { icon: Shield, title: 'Security by Design', desc: 'Compliance and trust embedded at every layer of the stack.' },
  { icon: Zap, title: 'Action at Pace', desc: 'Agile delivery that keeps enterprises ahead of change.' },
  { icon: Globe, title: 'Global Scale', desc: '30+ delivery centers across US, Canada, UK, and India.' },
  { icon: Users, title: 'People-First Culture', desc: '6,000+ professionals united by inclusion and continuous growth.' },
  { icon: TrendingUp, title: 'Outcome-Based Value', desc: 'Measurable ROI with transparent, flexible engagement models.' },
];

export default function TotalExperience() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="tag mb-4 inline-block">The TX Framework</span>
            <h2 className="section-title text-left mb-4">
              Total Experience (TX):<br />
              <span className="text-brand-red">Where People, Ideas & AI Converge</span>
            </h2>
            <p className="text-brand-gray-mid leading-relaxed mb-6">
              TX is Compunnel&apos;s unified delivery framework that integrates talent intelligence,
              digital engineering, and enterprise security into a seamless, AI-driven experience
              for both your employees and customers.
            </p>
            <p className="text-brand-gray-mid leading-relaxed mb-8">
              Built on 30+ years of enterprise trust, TX turns complexity into clarity and
              ambition into measurable outcomes — helping you move faster without compromising
              resilience or compliance.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="btn-outline">Learn About Compunnel</Link>
              <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {TX_PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-5">
                <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center mb-3">
                  <Icon size={18} className="text-white" />
                </div>
                <h4 className="font-semibold text-brand-blue-dark text-sm mb-1">{title}</h4>
                <p className="text-xs text-brand-gray-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
