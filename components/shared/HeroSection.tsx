import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  headline: string;
  subtext: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: { value: string; label: string }[];
  variant?: 'blue' | 'dark' | 'white';
  eyebrow?: string;
}

export default function HeroSection({
  headline, subtext, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref,
  stats, variant = 'blue', eyebrow,
}: Props) {
  return (
    <section className={clsx(
      'relative overflow-hidden',
      variant === 'blue' && 'gradient-blue text-white',
      variant === 'dark' && 'gradient-dark text-white',
      variant === 'white' && 'bg-brand-gray text-brand-blue-dark',
    )}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 text-white mb-6 uppercase tracking-widest">
              {eyebrow}
            </span>
          )}
          <h1 className={clsx(
            'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight',
            variant === 'white' && 'text-brand-blue-dark',
          )}>
            {headline}
          </h1>
          <p className={clsx(
            'text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto',
            variant === 'white' ? 'text-brand-gray-mid' : 'text-blue-100',
          )}>
            {subtext}
          </p>
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {ctaLabel && ctaHref && (
                <Link href={ctaHref} className="btn-primary text-base px-8 py-4">
                  {ctaLabel} <ArrowRight size={18} />
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className={clsx(
                  'inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-md transition-colors duration-200',
                  variant === 'white'
                    ? 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                    : 'btn-secondary',
                )}>
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className={clsx(
                  'text-3xl md:text-4xl font-black mb-1',
                  variant === 'white' ? 'text-brand-blue' : 'text-white',
                )}>
                  {s.value}
                </div>
                <div className={clsx(
                  'text-xs uppercase tracking-wide',
                  variant === 'white' ? 'text-brand-gray-mid' : 'text-blue-200',
                )}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
