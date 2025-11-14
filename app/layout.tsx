import type { Metadata } from 'next';
import './globals.css';
import { Inter, EB_Garamond } from 'next/font/google';
import { Nav } from '@/components/Nav';
import BrainWaves from '@/components/BrainWaves';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' });

export const metadata: Metadata = {
  title: 'Computational Neuroscience ? Portfolio',
  description: 'A minimal, intelligent portfolio blending science and aesthetics.',
  metadataBase: new URL('https://agentic-c6b2d8fd.vercel.app'),
  openGraph: {
    title: 'Computational Neuroscience ? Portfolio',
    description: 'A minimal, intelligent portfolio blending science and aesthetics.',
    url: 'https://agentic-c6b2d8fd.vercel.app',
    siteName: 'NeuroPortfolio',
    images: ['/og.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computational Neuroscience ? Portfolio',
    description: 'A minimal, intelligent portfolio blending science and aesthetics.',
    images: ['/og.png']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BrainWaves />
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <Nav />
        <main className="relative mx-auto max-w-5xl px-6 pt-28 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
