import Link from 'next/link';

const footerLinks = {
  About: [
    { label: 'Who We Are', href: '/about-us' },
    { label: 'Our Vision', href: '/our-vision' },
    { label: 'Diversity & Inclusion', href: '/diversity-inclusion' },
    { label: 'Become Our Partner', href: '/partners' },
    { label: 'Careers', href: '/jobs' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  Services: [
    { label: 'Talent', href: '/services/talent' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
    { label: 'Digital', href: '/services/digital' },
    { label: 'Learning', href: '/learning' },
    { label: 'Healthcare', href: '/healthcare-services' },
  ],
  Products: [
    { label: 'Eximius – AI Hiring Co-Pilot', href: 'https://eximius.ai', external: true },
    { label: 'Testgrid', href: 'https://testgrid.io', external: true },
    { label: 'Dori AI', href: 'https://www.dori.ai', external: true },
    { label: 'JoblecticsPRO', href: 'https://www.jobletics.com', external: true },
    { label: 'StafflinePro', href: 'https://stafflinepro.com', external: true },
  ],
  Insights: [
    { label: 'Blogs', href: '/blog' },
    { label: 'Whitepapers', href: '/whitepaper' },
    { label: 'eBooks', href: '/ebooks' },
    { label: 'Case Studies', href: '/case-study' },
    { label: 'Press Release', href: '/press-release' },
    { label: 'Events & Webinars', href: '/events-webinars' },
    { label: 'Videos', href: '/video' },
  ],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/compunnel-software-group/mycompany/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/CompunnelInc/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter/X',
    href: 'https://twitter.com/Compunnelinc',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/compunnel_lnc/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CompunnelInc',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#020B2D] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="text-[#0057FF]">C</span>ompunnel
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              AI-driven Digital Transformation &amp; Workforce Solutions for global enterprises.
            </p>
            {/* Social */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0057FF] hover:border-[#0057FF] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a href="tel:+16096069010" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (609) 606-9010
              </a>
              <a href="mailto:contact@compunnel.com" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-[#0057FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@compunnel.com
              </a>
              <p className="flex items-start gap-2 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5 text-[#0057FF] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                4390 Route 1 North, Suite 302, Princeton, NJ 08540
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-white text-sm font-bold mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-[#0057FF] transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-2.5 h-2.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link href={link.href} className="text-xs text-gray-400 hover:text-[#0057FF] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quality badges */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-gray-500 font-medium">Certified by:</span>
              {[
                'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/03110614/badge-ISO-9001-2015.png',
                'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/03110615/badge-AICPA-SOC2.png',
                'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/03110612/badge-ISO27001-2019.png',
              ].map((badge, i) => (
                <div key={i} className="h-12 w-12 bg-white rounded-lg p-1 flex items-center justify-center">
                  <img src={badge} alt="Quality Badge" className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>

            {/* Partner logos */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-gray-500 font-medium">Partners:</span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'Microsoft', logo: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/19070235/microsoft-logo.svg' },
                  { name: 'AWS', logo: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/21092213/amazon-logo-1.svg' },
                  { name: 'UiPath', logo: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/19070232/uipath-logo.svg' },
                  { name: 'Adobe', logo: 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/08/21091829/adobe-logo-1.svg' },
                ].map((p) => (
                  <div key={p.name} className="h-6 w-16 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity">
                    <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain invert" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Compunnel, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: 'Terms of Use', href: '/terms-of-use' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Accessibility', href: '/website-accessibility-compliance' },
              { label: 'LCA', href: '/lca' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
