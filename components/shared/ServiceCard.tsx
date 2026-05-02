import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  tag?: string;
}

export default function ServiceCard({ title, description, href, icon, tag }: Props) {
  return (
    <Link href={href} className="card p-6 flex flex-col gap-4 group">
      {icon && (
        <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
      )}
      {tag && <span className="tag">{tag}</span>}
      <h3 className="text-lg font-semibold text-brand-blue-dark group-hover:text-brand-blue transition-colors">
        {title}
      </h3>
      <p className="text-sm text-brand-gray-mid leading-relaxed flex-1">{description}</p>
      <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium group-hover:gap-2 transition-all">
        Learn More <ArrowRight size={14} />
      </span>
    </Link>
  );
}
