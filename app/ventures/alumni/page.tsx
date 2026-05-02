import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'Alumni – The Circle', description: 'The Compunnel Alumni Network — The Circle. Stay connected, grow together.' };

export default function AlumniPage() {
  return (
    <>
      <HeroSection
        eyebrow="Alumni Program"
        headline="The Circle — Once Compunnel, Always Compunnel"
        subtext="The Circle is our alumni network — a community of former team members who continue to share knowledge, unlock opportunities, and grow together long after they've moved on."
        ctaLabel="Join The Circle"
        ctaHref="/contact"
      />
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Networking Events', desc: 'Exclusive alumni mixers, industry roundtables, and virtual networking events throughout the year.' },
              { title: 'Career Opportunities', desc: 'First access to re-hire opportunities, contract engagements, and referral bonuses for connected alumni.' },
              { title: 'Knowledge Exchange', desc: 'Access to Compunnel insights, research, and thought leadership — and the platform to share your own.' },
            ].map((b, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-brand-blue-dark mb-2">{b.title}</h3>
                <p className="text-sm text-brand-gray-mid">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA headline="Stay Connected with The Circle" subtext="Your Compunnel journey doesn't end — it evolves." ctaLabel="Join The Circle" ctaHref="/contact" />
    </>
  );
}
