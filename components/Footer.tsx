import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Staffing Solutions', href: '/services/staffing' },
    { label: 'Managed Services', href: '/services/managed-services' },
    { label: 'Digital Engineering', href: '/services/digital-engineering' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
    { label: 'Cloud Services', href: '/services/cloud' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Events', href: '/press-release' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-study' },
    { label: 'Whitepapers', href: '/whitepapers' },
    { label: 'Webinars', href: '/webinars' },
  ],
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/compunnel-software-group/', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/Compunnelinc', label: 'Twitter' },
  { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/CompunnelInc/', label: 'Facebook' },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@CompunnelInc', label: 'YouTube' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/compunnel_lnc/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020B2D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/03/15120503/compunnel-logo.svg"
                alt="Compunnel"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              One partner to build, protect, and scale what&apos;s next. AI-native intelligence driving workforce, digital, and cybersecurity solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#0057FF] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Compunnel Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
