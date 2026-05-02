import { Metadata } from 'next';
import { getLeadershipTeam } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import PageCTA from '@/components/shared/PageCTA';
import { Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership Team',
  description: 'Meet the 19 executives leading Compunnel\'s global enterprise solutions organization.',
};

export default async function LeadershipPage() {
  const leaders = await getLeadershipTeam();

  return (
    <>
      <HeroSection
        eyebrow="Our People"
        headline="Leadership That Drives the Mission"
        subtext="19 executives with an average of 20+ years of enterprise experience — united by a shared commitment to transformation, integrity, and AI-first innovation."
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l) => (
              <div key={l.id} className="card p-6 flex gap-4">
                <div className="flex-shrink-0">
                  {l.photo.url ? (
                    <img
                      src={l.photo.url}
                      alt={l.photo.alt}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full gradient-blue flex items-center justify-center text-white text-2xl font-black">
                      {l.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-brand-blue-dark">{l.name}</h3>
                      <p className="text-xs text-brand-red font-medium mt-0.5">{l.title}</p>
                    </div>
                    {l.linkedin && (
                      <a
                        href={l.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:text-brand-blue-light flex-shrink-0"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-brand-gray-mid leading-relaxed mt-2 line-clamp-4">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        headline="Join a Team That Moves the World Forward"
        subtext="6,000+ professionals. 30+ countries. One culture of excellence and inclusion."
        ctaLabel="View Open Roles"
        ctaHref="/careers"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </>
  );
}
