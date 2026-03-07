import type { Metadata } from 'next';
import { Red_Hat_Display, Manrope } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dentiva - Clean Template for Dental Clinic',
  description:
    'Clean Template for Dental Clinic offers a sleek, minimal design to showcase dental services, build trust, and attract patients with a modern, responsive, and professional online presence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${manrope.variable}`}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
