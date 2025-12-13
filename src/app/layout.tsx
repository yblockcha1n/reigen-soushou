import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CursorProvider } from '@/components/CursorProvider';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 零元創匠',
    default: '零元創匠 | システム開発・ブロックチェーン開発',
  },
  description: '零から始まるイノベーション。Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発を提供する技術集団です。',
  keywords: ['Webアプリケーション開発', 'ブロックチェーン開発', '業務効率化ツール', 'システム開発', 'ウェブサイト制作'],
  authors: [{ name: '零元創匠' }],
  creator: '零元創匠',
  publisher: '零元創匠',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: '零元創匠 | システム開発・ブロックチェーン開発',
    description: '零から始まるイノベーション。Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発を提供する技術集団です。',
    url: 'https://www.reigen-soushou.com',
    siteName: '零元創匠',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '零元創匠 | システム開発・ブロックチェーン開発',
    description: '零から始まるイノベーション。Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発を提供する技術集団です。',
    creator: '@reigen_soushou_',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "零元創匠",
              "url": "https://www.reigen-soushou.com",
              "description": "零から始まるイノベーション。Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発を提供する技術集団です。",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "JP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "reigen.soushou@gmail.com"
              },
              "sameAs": [
                "https://twitter.com/reigen_soushou_"
              ]
            })
          }}
        />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <CursorProvider />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}