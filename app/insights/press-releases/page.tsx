import { Metadata } from 'next';
import { getPressReleases } from '@/lib/wordpress';
import PageCTA from '@/components/shared/PageCTA';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = { title: 'Press Releases', description: 'Company news and announcements from Compunnel.' };

export default async function PressReleasesPage() {
  const prs = await getPressReleases(12);
  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">Press Releases</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compunnel News & Announcements</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {prs.map((pr) => (
              <div key={pr.id} className="card p-6 flex gap-6 items-start">
                <div className="text-center flex-shrink-0 w-16">
                  <div className="text-2xl font-black text-brand-blue">{new Date(pr.date).getDate()}</div>
                  <div className="text-xs text-brand-gray-mid uppercase">{new Date(pr.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                  <div className="text-xs text-brand-gray-mid">{new Date(pr.date).getFullYear()}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-blue-dark mb-2 hover:text-brand-blue cursor-pointer">{pr.title}</h3>
                  <p className="text-sm text-brand-gray-mid">{pr.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA headline="Media Inquiries" subtext="Contact our communications team for press inquiries, interviews, and media assets." ctaLabel="Contact Media Team" ctaHref="/contact" />
    </>
  );
}
