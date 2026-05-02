import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import type { InsightPost } from '@/lib/types';

export default function InsightCard({ post, basePath = '/insights/blogs' }: { post: InsightPost; basePath?: string }) {
  const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <Link href={`${basePath}/${post.slug}`} className="card overflow-hidden group flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-brand-blue to-brand-blue-light flex-shrink-0">
        {post.image?.url ? (
          <Image src={post.image.url} alt={post.image.alt} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-black">
            C
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="tag bg-white/90 text-brand-blue">{post.category}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-1 text-xs text-brand-gray-mid">
          <Calendar size={12} /> {date}
        </div>
        <h3 className="font-semibold text-brand-blue-dark group-hover:text-brand-blue transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-brand-gray-mid line-clamp-3 flex-1">{post.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium group-hover:gap-2 transition-all mt-auto">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
