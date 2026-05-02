import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function PageCTA({
  headline = "Ready to Transform Your Enterprise?",
  subtext = "Join 200+ organizations that trust Compunnel to drive their next phase of growth.",
  ctaLabel = "Start Your Journey",
  ctaHref = "/contact",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "/services/talent",
}: Props) {
  return (
    <section className="gradient-dark text-white section-padding">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={ctaHref} className="btn-primary text-base px-8 py-4">
            {ctaLabel} <ArrowRight size={18} />
          </Link>
          <Link href={secondaryCtaHref} className="btn-secondary text-base px-8 py-4">
            {secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
