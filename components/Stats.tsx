import type { Stat } from '@/lib/api';
import { Handshake, Building2, Rocket, GraduationCap } from 'lucide-react';

interface StatsProps {
  stats: Stat[];
}

const iconMap: Record<string, React.ReactNode> = {
  handshake: <Handshake className="w-8 h-8" />,
  building: <Building2 className="w-8 h-8" />,
  rocket: <Rocket className="w-8 h-8" />,
  'graduation-cap': <GraduationCap className="w-8 h-8" />,
};

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 bg-[#020B2D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0057FF]/20 text-[#00D4FF] mb-4">
                {stat.icon && iconMap[stat.icon] ? iconMap[stat.icon] : <Rocket className="w-8 h-8" />}
              </div>
              <div
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.number}
              </div>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
