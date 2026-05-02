import { Metadata } from 'next';
import HeroSection from '@/components/shared/HeroSection';
import BenefitsList from '@/components/shared/BenefitsList';
import PageCTA from '@/components/shared/PageCTA';

export const metadata: Metadata = { title: 'EdTech Solutions' };

const SOLUTIONS = [
  { title: 'Learning Platform Engineering', description: 'Custom LMS, LCMS, and learning experience platform development built for scale and engagement.' },
  { title: 'LMS Integration & Migration', description: 'Canvas, Blackboard, Moodle, and Cornerstone integration, migration, and optimization.' },
  { title: 'AI-Powered Personalization', description: 'Adaptive learning algorithms, intelligent tutoring systems, and recommendation engines.' },
  { title: 'Education Data Analytics', description: 'Learning analytics platforms surfacing insights on engagement, outcomes, and completion rates.' },
  { title: 'EdTech Cybersecurity & Compliance', description: 'FERPA, COPPA, and CIPA compliance with student data protection at every layer.' },
  { title: 'EdTech Talent', description: 'Instructional designers, LMS admins, learning engineers, and EdTech product managers.' },
];

export default function EdtechPage() {
  return (
    <>
      <HeroSection
        eyebrow="EdTech"
        headline="Power the Future of Learning with Intelligent Technology"
        subtext="From adaptive learning platforms to LMS modernization and AI-powered personalization — Compunnel builds education technology that delivers outcomes at scale."
        ctaLabel="Talk to an EdTech Expert"
        ctaHref="/contact"
      />
      <BenefitsList title="Our EdTech Solutions" benefits={SOLUTIONS} columns={3} />
      <PageCTA headline="Build the Learning Platform of the Future" subtext="AI-personalized. Outcome-measured. Built by education technology specialists." ctaLabel="Talk to an EdTech Expert" ctaHref="/contact" secondaryCtaLabel="View Case Studies" secondaryCtaHref="/insights/case-studies" />
    </>
  );
}
