'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { HeroSlide } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.bg_image}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D]/80 via-[#020B2D]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {slide.subtitle}
          </p>
          {slide.cta_text && slide.cta_url && (
            <Link
              href={slide.cta_url}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0057FF] text-white font-semibold rounded-full hover:bg-[#0046CC] transition-all hover:gap-3"
            >
              {slide.cta_text}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-[#0057FF] w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
