import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: '零元創匠 | システム開発・ブロックチェーン開発',
  description: '零から始まるイノベーション。Webアプリケーション開発、ブロックチェーン開発、業務効率化ツールの開発を提供する技術集団です。',
};

// 新しい形式のviewport設定
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}