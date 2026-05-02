'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '@/lib/types';

export default function Hero({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="relative gradient-blue text-white overflow-hidden min-h-[580px] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-24 w-96 h-96 rounded-full bg-white/5" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">
            AI-Powered Enterprise Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-500">
            {slide.headline}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl leading-relaxed">
            {slide.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={slide.ctaHref} className="btn-primary text-base px-8 py-4">
              {slide.ctaLabel} <ArrowRight size={18} />
            </Link>
            {slide.secondaryCtaLabel && slide.secondaryCtaHref && (
              <Link href={slide.secondaryCtaHref} className="btn-secondary text-base px-8 py-4">
                {slide.secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slide controls */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)} className="p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronLeft size={16} />
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
          <button onClick={() => setCurrent((c) => (c + 1) % slides.length)} className="p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
