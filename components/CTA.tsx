import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0057FF] to-[#00D4FF]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Partner with Compunnel to unlock the full potential of your workforce and technology. 
          Let&apos;s build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#0057FF] font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/about-us"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
