interface Step {
  step: number;
  title: string;
  description: string;
}

interface Props {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export default function HowItWorks({ steps, title = 'How It Works', subtitle }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full gradient-blue text-white flex items-center justify-center text-xl font-black mb-4 relative z-10 shadow-lg">
                  {String(s.step).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-brand-blue-dark mb-2">{s.title}</h3>
                <p className="text-sm text-brand-gray-mid leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
