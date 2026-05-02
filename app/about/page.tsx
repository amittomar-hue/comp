import { Metadata } from 'next';
import { getLeadershipTeam, getSiteStats } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import StatsBar from '@/components/shared/StatsBar';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Learn about Compunnel — 30+ years of enterprise trust, AI-first solutions, and 6,000+ global professionals.',
};

const VALUES = [
  { title: 'Innovation with Integrity', description: 'We bring fresh ideas to life with honesty and responsibility at every level.' },
  { title: 'Precision in Motion', description: 'We act with speed and accuracy, ensuring every step delivers measurable impact.' },
  { title: 'Inclusion as Power', description: 'Diversity and equity drive our creativity, growth, and collective intelligence.' },
  { title: 'Built-In Integrity', description: 'Every solution is rooted in trust, governance, and ethical AI — delivering confidence at scale.' },
  { title: 'Action at Pace', description: 'We design with agility, enabling enterprises to respond quickly while staying precise.' },
  { title: 'Forward-Thinking Intelligence', description: 'Our systems anticipate change, creating intelligent outcomes that keep businesses ahead.' },
];

const WHAT_MAKES_US_DIFFERENT = [
  { title: '30+ Years of Trust', description: 'Operating since 1994, we\'ve navigated every technology cycle while staying ahead of the curve.' },
  { title: 'AI-Native Architecture', description: 'AI isn\'t a bolt-on for us — it\'s the core of every solution we design and deliver.' },
  { title: 'MBE Certified', description: 'Proud Minority Business Enterprise with deep commitment to diversity and supplier equity.' },
  { title: 'Fortune 500 Penetration', description: '23% of Fortune 500 companies trust Compunnel — a testament to our quality at scale.' },
  { title: 'Global + Local Delivery', description: '30+ delivery centers worldwide with US-first compliance and local market expertise.' },
  { title: 'End-to-End Coverage', description: 'Talent, security, and digital transformation — all under one trusted enterprise partner.' },
];

export default async function AboutPage() {
  const [stats, leaders] = await Promise.all([getSiteStats(), getLeadershipTeam()]);

  return (
    <>
      <HeroSection
        eyebrow="Who We Are"
        headline="Tomorrow happens here, where people, ideas, and AI converge."
        subtext="Built on empathy, strengthened by expertise, and powered by AI innovation, Compunnel helps enterprises stay confident, resilient, and ready for what's next."
        ctaLabel="Meet Our Leadership"
        ctaHref="/about/leadership"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />

      <StatsBar stats={stats} />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="tag mb-4 inline-block">Our Story</span>
            <h2 className="section-title text-left">Founded on Purpose. Built for the Future.</h2>
            <div className="prose prose-lg text-brand-gray-mid space-y-4">
              <p>
                Compunnel was founded in 1994 with a singular belief: that the right people,
                equipped with the right technology, can solve any enterprise challenge. Over three
                decades later, that belief hasn&apos;t changed — but the technology certainly has.
              </p>
              <p>
                AI is no longer a trend. It is the new infrastructure of business. And Compunnel
                is not just adapting to it — we are rearchitecting around it. From hiring
                intelligence and digital engineering to cloud-native platforms and enterprise-grade
                security, we embed AI at every layer of what we do.
              </p>
              <p>
                We are not a vendor. Not a system. A force. A partner. The mind behind the magic.
                Our purpose: make transformation unstoppable — helping enterprises move from
                ambition to achievement by turning complexity into clarity and challenges into momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsList
        title="What Makes Us Different"
        subtitle="Six pillars that set Compunnel apart from every other enterprise solutions partner."
        benefits={WHAT_MAKES_US_DIFFERENT}
        columns={3}
      />

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Our Values</span>
            <h2 className="section-title">The Principles We Build On</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card p-6 border-l-4 border-brand-blue">
                <div className="text-3xl font-black text-brand-blue/20 mb-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-brand-blue-dark mb-2">{v.title}</h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership preview */}
      {leaders.length > 0 && (
        <section className="section-padding bg-brand-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="tag mb-3 inline-block">Leadership</span>
              <h2 className="section-title">The Team Behind the Mission</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
              {leaders.slice(0, 6).map((l) => (
                <div key={l.id} className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-blue flex items-center justify-center text-white text-2xl font-black mx-auto mb-3">
                    {l.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-brand-blue-dark text-sm">{l.name}</h4>
                  <p className="text-xs text-brand-gray-mid mt-0.5">{l.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/about/leadership" className="btn-outline inline-flex items-center gap-2">
                View Full Leadership Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <PageCTA
        headline="Partner with a Force for Transformation"
        subtext="30+ years of trust. 6,000+ professionals. One unified mission. Let's build what's next together."
        ctaLabel="Start Your Journey"
        ctaHref="/contact"
        secondaryCtaLabel="Explore Services"
        secondaryCtaHref="/services/talent"
      />
    </>
  );
}
