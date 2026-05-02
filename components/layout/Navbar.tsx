'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import clsx from 'clsx';

const NAV = [
  {
    label: 'About',
    children: [
      { label: 'Who We Are', href: '/about' },
      { label: 'Our Vision', href: '/about/vision' },
      { label: 'Diversity & Inclusion', href: '/about/diversity' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Partnership', href: '/about/partnerships' },
      { label: 'Referral Program', href: '/about/referral' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Talent', href: '/services/talent' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Digital', href: '/services/digital' },
      { label: 'Learning', href: '/services/learning' },
      { label: 'Healthcare', href: '/services/healthcare' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Banking & Financial', href: '/industries/banking' },
      { label: 'Insurance', href: '/industries/insurance' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Government', href: '/industries/government' },
      { label: 'EdTech', href: '/industries/edtech' },
    ],
  },
  {
    label: 'Partners',
    children: [
      { label: 'Microsoft', href: '/partners/microsoft' },
      { label: 'Amazon (AWS)', href: '/partners/amazon' },
      { label: 'UiPath', href: '/partners/uipath' },
      { label: 'Adobe', href: '/partners/adobe' },
    ],
  },
  {
    label: 'Ventures',
    children: [
      { label: 'Compunnel Ventures AI', href: '/ventures' },
      { label: 'Alumni – The Circle', href: '/ventures/alumni' },
    ],
  },
  {
    label: 'Insights',
    children: [
      { label: 'Blogs', href: '/insights/blogs' },
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'eBooks', href: '/insights/ebooks' },
      { label: 'Whitepapers', href: '/insights/whitepapers' },
      { label: 'Videos', href: '/insights/videos' },
      { label: 'Webinars', href: '/insights/webinars' },
      { label: 'Press Releases', href: '/insights/press-releases' },
      { label: 'Events', href: '/insights/events' },
    ],
  },
  { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="gradient-blue text-white text-xs py-1.5 text-center">
        <span>Trusted by 23% of Fortune 500 Companies &nbsp;|&nbsp; </span>
        <a href="tel:+16096069010" className="hover:underline inline-flex items-center gap-1">
          <Phone size={10} /> +1 (609) 606-9010
        </a>
      </div>

      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-black text-brand-blue tracking-tight">
            compunnel
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-gray-dark hover:text-brand-blue transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-gray-dark hover:text-brand-blue transition-colors">
                  {item.label}
                  <ChevronDown size={14} className={clsx('transition-transform', activeDropdown === item.label && 'rotate-180')} />
                </button>
              )}

              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-gray-dark hover:bg-blue-50 hover:text-brand-blue transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-xs py-2.5">
            Start Your Journey
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          {NAV.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold border-b border-gray-50 text-brand-blue"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown size={14} className={clsx('transition-transform', activeDropdown === item.label && 'rotate-180')} />
                  </button>
                  {activeDropdown === item.label &&
                    item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block pl-8 pr-4 py-2.5 text-sm text-brand-gray-mid hover:text-brand-blue border-b border-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                </>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Start Your Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
