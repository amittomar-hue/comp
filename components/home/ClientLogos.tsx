import type { ClientLogo } from '@/lib/types';

export default function ClientLogos({ clients }: { clients: ClientLogo[] }) {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-brand-gray-mid mb-8 uppercase tracking-widest font-medium">
          Trusted by 200+ world-class organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((c) => (
            <div key={c.id} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              {c.logo.url ? (
                <img src={c.logo.url} alt={c.name} className="h-8 md:h-10 object-contain" />
              ) : (
                <span className="text-xl font-bold text-brand-gray-mid">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
