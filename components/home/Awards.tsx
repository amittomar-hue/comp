import type { Award } from '@/lib/types';

export default function Awards({ awards }: { awards: Award[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag mb-3 inline-block">Recognition</span>
          <h2 className="section-title">Awards & Certifications</h2>
          <p className="section-subtitle">
            30+ years of excellence recognized by industry leaders and global certification bodies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((a) => (
            <div
              key={a.id}
              className="card px-8 py-6 flex flex-col items-center text-center min-w-[160px] hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mb-3 text-white font-black text-xl">
                {a.title.charAt(0)}
              </div>
              <h4 className="font-semibold text-brand-blue-dark text-sm">{a.title}</h4>
              <p className="text-xs text-brand-gray-mid mt-1">{a.year}</p>
              {a.description && (
                <p className="text-xs text-brand-gray-mid mt-1">{a.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
