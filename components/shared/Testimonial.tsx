import { Quote } from 'lucide-react';

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

interface Props {
  testimonial: TestimonialItem;
  variant?: 'blue' | 'white';
}

export default function Testimonial({ testimonial, variant = 'blue' }: Props) {
  const isBlue = variant === 'blue';
  return (
    <section className={`section-padding ${isBlue ? 'gradient-blue' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote
            size={48}
            className={`mx-auto mb-6 ${isBlue ? 'text-white/30' : 'text-brand-blue/20'}`}
          />
          <blockquote
            className={`text-xl md:text-2xl font-light leading-relaxed mb-8 ${isBlue ? 'text-white' : 'text-brand-blue-dark'}`}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div>
            <p className={`font-semibold ${isBlue ? 'text-white' : 'text-brand-blue-dark'}`}>
              {testimonial.name}
            </p>
            <p className={`text-sm ${isBlue ? 'text-blue-200' : 'text-brand-gray-mid'}`}>
              {testimonial.title}{testimonial.company ? `, ${testimonial.company}` : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
