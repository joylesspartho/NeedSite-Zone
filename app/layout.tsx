// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeedSite Zone | Web Agency & Website Builder',
  description:
    'NeedSite Zone delivers fast, mobile-friendly, and SEO-optimized websites for businesses, schools, restaurants, and e-commerce. Your trusted partner for digital growth.',
  keywords: [
    'NeedSite Zone',
    'Web Agency',
    'Website Builder',
    'SEO optimized websites',
    'Responsive websites',
    'E-commerce website',
    'Business website',
  ],
  authors: [{ name: 'NeedSite Zone', url: 'https://needsitezone.42web.io/' }],
  viewport: 'width=device-width, initial-scale=1',
  // Favicon
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome Kit */}
        <Script
          src="https://kit.fontawesome.com/81742b801a.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
