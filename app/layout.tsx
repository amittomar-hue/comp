import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Compunnel | AI-Powered Enterprise Solutions',
    template: '%s | Compunnel',
  },
  description:
    'Compunnel delivers AI-powered talent, cybersecurity, and digital transformation solutions trusted by 23% of Fortune 500 companies since 1994.',
  keywords: ['enterprise IT', 'talent solutions', 'cybersecurity', 'digital transformation', 'AI staffing'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.compunnel.com',
    siteName: 'Compunnel',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
