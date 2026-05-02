import { CheckCircle } from 'lucide-react';

interface Benefit {
  icon?: string;
  title: string;
  description: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  columns?: 2 | 3;
}

export default function BenefitsList({ title, subtitle, benefits, columns = 3 }: Props) {
  return (
    <section className="section-padding bg-brand-gray">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
          {benefits.map((b, i) => (
            <div key={i} className="card p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center">
                  <CheckCircle size={18} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-brand-blue-dark mb-1">{b.title}</h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
