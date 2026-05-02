import type { SiteStat } from '@/lib/types';

export default function StatsBar({ stats }: { stats: SiteStat[] }) {
  return (
    <section className="bg-white border-y border-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s) => (
            <div key={s.id} className="text-center">
              <div className="text-3xl font-black text-brand-blue mb-1">{s.value}</div>
              <div className="text-xs text-brand-gray-mid uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
