import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Compunnel | AI-driven Digital Transformation & Workforce Solutions',
  description:
    'Global enterprises turn to Compunnel to move faster, grow stronger, and stay secure. AI-native intelligence driving workforce, digital, and cybersecurity solutions.',
  keywords: 'Compunnel, staffing, digital transformation, cybersecurity, AI, workforce solutions',
  openGraph: {
    title: 'Compunnel | AI-driven Digital Transformation & Workforce Solutions',
    description: 'AI-native intelligence at the core. Competent workforces, seamless digital platforms, and resilient security foundations.',
    url: 'https://www.compunnel.com',
    siteName: 'Compunnel',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>{children}</body>
    </html>
  );
}
