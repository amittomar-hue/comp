import type { Award } from '@/lib/api';

interface AwardsProps {
  awards: Award[];
}

export default function Awards({ awards }: AwardsProps) {
  return (
    <section className="py-20 bg-[#020B2D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase">Recognition</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Awards & Accolades
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Industry recognition for excellence in talent solutions, digital transformation, and workplace culture.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img
                  src={award.image_url}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs font-semibold text-white/90 mb-1 line-clamp-2">
                {award.title}
              </h3>
              <p className="text-[10px] text-white/50 line-clamp-2">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
