import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = 'https://www.futureclicks.agency';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FutureClicks | High-Converting Websites & Digital Marketing for Local Businesses',
    template: '%s | FutureClicks',
  },
  description:
    'We help local businesses generate more leads, rank higher on Google, and convert more visitors into customers through stunning websites and proven digital marketing strategies.',
  keywords: [
    'digital marketing agency',
    'website development',
    'local SEO',
    'Google Ads',
    'Meta Ads',
    'web design',
    'WordPress development',
    'e-commerce websites',
    'lead generation',
    'social media marketing',
  ],
  authors: [{ name: 'FutureClicks' }],
  creator: 'FutureClicks',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'FutureClicks',
    title: 'FutureClicks | High-Converting Websites & Digital Marketing',
    description:
      'We help local businesses generate more leads, rank higher on Google, and convert more visitors into customers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureClicks | High-Converting Websites & Digital Marketing',
    description:
      'We help local businesses generate more leads, rank higher on Google, and convert more visitors into customers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}
