import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FOOTER_LINKS = {
  About: [
    { label: 'Who We Are', href: '/about' },
    { label: 'Our Vision', href: '/about/vision' },
    { label: 'Diversity & Inclusion', href: '/about/diversity' },
    { label: 'Leadership', href: '/about/leadership' },
    { label: 'Referral Program', href: '/about/referral' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Services: [
    { label: 'Talent Solutions', href: '/services/talent' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
    { label: 'Digital Services', href: '/services/digital' },
    { label: 'Learning', href: '/services/learning' },
    { label: 'Healthcare', href: '/services/healthcare' },
  ],
  Products: [
    { label: 'Eximius (AI Hiring)', href: 'https://eximius.ai', external: true },
    { label: 'Testgrid', href: 'https://testgrid.io', external: true },
    { label: 'Dori AI', href: 'https://dori.ai', external: true },
    { label: 'JoblecticsPRO', href: 'https://jobletics.com', external: true },
    { label: 'StafflinePro', href: '#', external: true },
  ],
  Insights: [
    { label: 'Blogs', href: '/insights/blogs' },
    { label: 'Case Studies', href: '/insights/case-studies' },
    { label: 'eBooks', href: '/insights/ebooks' },
    { label: 'Whitepapers', href: '/insights/whitepapers' },
    { label: 'Webinars', href: '/insights/webinars' },
    { label: 'Press Releases', href: '/insights/press-releases' },
    { label: 'Events', href: '/insights/events' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tight">compunnel</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              AI-powered enterprise solutions spanning talent, cybersecurity, and digital transformation.
              Trusted by 23% of Fortune 500 companies since 1994.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="tel:+16096069010" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} /> +1 (609) 606-9010
              </a>
              <a href="mailto:contact@compunnel.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} /> contact@compunnel.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>4390 Route 1 North, Suite 302<br />Princeton, NJ 08540</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Compunnel Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <a href="#" className="hover:text-white transition-colors">DIR TX Contract</a>
            <a href="#" className="hover:text-white transition-colors">LCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
