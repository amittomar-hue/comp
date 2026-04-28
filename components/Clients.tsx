import type { ClientLogo } from '@/lib/api';

interface ClientsProps {
  logos: ClientLogo[];
}

export default function Clients({ logos }: ClientsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-400 text-sm">
            Powering transformation for Fortune 500 enterprises worldwide
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center">
          {logos.slice(0, 16).map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo_url}
                alt={client.name}
                className="h-8 w-auto max-w-[100px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
