import { Metadata } from 'next';
import { getJobListings } from '@/lib/wordpress';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join 6,000+ professionals at Compunnel — open roles in technology, talent, cybersecurity, and more.',
};

const CULTURE_BENEFITS = [
  { title: 'AI-First Learning', description: 'Continuous upskilling in AI, cloud, and emerging tech — funded by Compunnel.' },
  { title: 'Inclusive Culture', description: 'MBE-certified workplace where every voice is heard and valued.' },
  { title: 'Global Opportunities', description: 'Work across 30+ delivery centers in the US, Canada, UK, and India.' },
  { title: 'Flexible Work Models', description: 'Remote, hybrid, and on-site options across all roles and departments.' },
  { title: 'Competitive Compensation', description: 'Market-leading salaries, equity, and performance bonuses.' },
  { title: 'Career Growth Paths', description: 'Structured mentorship, leadership tracks, and internal mobility programs.' },
];

export default async function CareersPage() {
  const jobs = await getJobListings(12);

  return (
    <>
      <HeroSection
        eyebrow="Join the Team"
        headline="Build the Future of Enterprise Technology"
        subtext="6,000+ professionals. 30+ delivery centers. One shared mission — making transformation unstoppable. Find your next role at Compunnel."
        ctaLabel="Browse Open Roles"
        ctaHref="#open-roles"
        secondaryCtaLabel="Learn About Our Culture"
        secondaryCtaHref="#culture"
        stats={[
          { value: '6,000+', label: 'Team Members Worldwide' },
          { value: '30+', label: 'Global Locations' },
          { value: '12×', label: 'Inc. 5000 Recognition' },
          { value: 'GPTW', label: 'Great Place to Work' },
        ]}
      />

      {/* Open roles */}
      <section id="open-roles" className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="tag mb-3 inline-block">Open Roles</span>
            <h2 className="section-title">Find Your Next Opportunity</h2>
            <p className="section-subtitle">Roles across talent, technology, cybersecurity, digital, and corporate functions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div key={job.id} className="card p-6 flex flex-col gap-4">
                <div>
                  <span className="tag mb-2 inline-block">{job.department}</span>
                  <h3 className="text-lg font-semibold text-brand-blue-dark">{job.title}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-brand-gray-mid">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                </div>
                <p className="text-sm text-brand-gray-mid leading-relaxed">{job.excerpt}</p>
                <Link
                  href={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all self-start"
                >
                  View Job Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture">
        <BenefitsList
          title="Why People Choose Compunnel"
          subtitle="More than a job — a mission, a community, and a career you'll be proud of."
          benefits={CULTURE_BENEFITS}
          columns={3}
        />
      </section>

      <PageCTA
        headline="Don't See the Right Role?"
        subtext="Submit your resume and we'll reach out when the perfect opportunity opens up."
        ctaLabel="Submit Your Resume"
        ctaHref="/contact"
        secondaryCtaLabel="Explore Referral Program"
        secondaryCtaHref="/about/referral"
      />
    </>
  );
}
