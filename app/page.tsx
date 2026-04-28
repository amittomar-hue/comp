import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import TotalExperience from '@/components/TotalExperience';
import Clients from '@/components/Clients';
import SuccessStories from '@/components/SuccessStories';
import Awards from '@/components/Awards';
import Services from '@/components/Services';
import PressReleases from '@/components/PressReleases';
import Insights from '@/components/Insights';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import {
  getHeroSlides,
  getSiteStats,
  getClientLogos,
  getAwards,
  getCaseStudies,
  getPressReleases,
  getInsights,
  defaultHeroSlides,
  defaultStats,
  defaultClients,
  defaultAwards,
  defaultCaseStudies,
  defaultPressReleases,
  defaultInsights,
} from '@/lib/api';

export const revalidate = 60; // ISR: revalidate every minute

export default async function HomePage() {
  // Fetch all data in parallel; gracefully falls back to defaults if WP is offline
  const [heroSlides, stats, clients, awards, caseStudies, pressReleases, insights] = await Promise.all([
    getHeroSlides().catch(() => defaultHeroSlides),
    getSiteStats().catch(() => defaultStats),
    getClientLogos().catch(() => defaultClients),
    getAwards().catch(() => defaultAwards),
    getCaseStudies(4).catch(() => defaultCaseStudies),
    getPressReleases(2).catch(() => defaultPressReleases),
    getInsights(4).catch(() => defaultInsights),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero slides={heroSlides} />
        <Stats stats={stats} />
        <TotalExperience />
        <Clients logos={clients} />
        <Services />
        <SuccessStories caseStudies={caseStudies} />
        <Awards awards={awards} />
        <PressReleases releases={pressReleases} />
        <Insights posts={insights} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
