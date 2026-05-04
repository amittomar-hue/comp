'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  faqs: FAQItem[];
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="tag mb-3 inline-block">FAQ</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-brand-blue-dark pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-brand-blue transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-brand-gray-mid leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
