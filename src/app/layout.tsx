import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AnnouncementPopup } from '@/components/AnnouncementPopup';

export const metadata: Metadata = {
  title: {
    template: '%s | 零元創匠',
    default: '零元創匠 | 基幹システム開発・業務システム開発',
  },
  description: '零元創匠（れいげんそうしょう）は東京都新宿区のシステム開発会社です。基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供しています。React/Next.js、Vue.js、Python等の最新技術で、お客様の業務課題を解決します。',
  keywords: ['零元創匠', 'れいげんそうしょう', 'レイゲンソウショウ', 'Reigen Soushou', '基幹システム開発', '業務システム開発', 'Webアプリケーション開発', '業務効率化ツール', 'システム開発', '受託開発', '東京', '新宿区', 'React', 'Next.js'],
  authors: [{ name: '零元創匠' }],
  creator: '零元創匠',
  publisher: '零元創匠',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: '零元創匠（れいげんそうしょう） | 基幹システム開発・業務システム開発',
    description: '零元創匠（れいげんそうしょう）は東京都新宿区のシステム開発会社です。基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供しています。',
    url: 'https://www.reigen-soushou.com',
    siteName: '零元創匠',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '零元創匠（れいげんそうしょう） | 基幹システム開発・業務システム開発',
    description: '零元創匠（れいげんそうしょう）は東京都新宿区のシステム開発会社です。基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供しています。',
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
    canonical: 'https://www.reigen-soushou.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.reigen-soushou.com/#organization",
  "name": "零元創匠",
  "alternateName": ["Reigen Soushou", "れいげんそうしょう", "レイゲンソウショウ", "reigen-soushou"],
  "url": "https://www.reigen-soushou.com",
  "description": "零元創匠（れいげんそうしょう）は東京都新宿区のシステム開発会社です。基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供しています。React/Next.js、Vue.js、Python等の最新技術で、お客様の業務課題を解決します。",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "根岸 優翔",
    "jobTitle": "代表"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "富久町2-22 クレドール富久 201号室",
    "addressLocality": "新宿区",
    "addressRegion": "東京都",
    "postalCode": "162-0067",
    "addressCountry": "JP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "negishi-yuto@reigen-soushou.com",
    "availableLanguage": ["Japanese"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "JP"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "knowsAbout": [
    "基幹システム開発",
    "業務システム開発",
    "Webアプリケーション開発",
    "業務効率化ツール開発",
    "API連携・システム統合",
    "保守・運用サポート",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "GCP",
    "Docker"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "システム開発サービス",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Webアプリケーション開発・設計",
          "description": "React/Next.js、Vue.js/Nuxt.jsなど最新技術を活用した、スケーラブルで高性能なWebアプリケーションを開発します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "業務効率化ツールの開発",
          "description": "お客様の業務フローを分析し、自動化ツール、データ分析、レポート生成など効率を最大化する独自のツールを開発します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API連携・システム統合",
          "description": "REST/GraphQL APIの設計、外部サービスとの連携や既存システムの統合、マイクロサービスアーキテクチャを実現します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Webサイト開発",
          "description": "レスポンシブデザイン、SEO対策、パフォーマンス最適化を施したモダンで使いやすいWebサイトを制作します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "基幹システムの開発・設計",
          "description": "データベース設計、セキュリティ対策、システム統合を含む、企業の中核を支える信頼性の高い基幹システムを構築します。"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "保守・運用サポート",
          "description": "24時間監視体制、定期メンテナンス、機能追加・改修、ヘルプデスク対応など、システム導入後の安定稼働を支えます。"
        }
      }
    ]
  }
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.reigen-soushou.com/#website",
  "name": "零元創匠",
  "alternateName": ["Reigen Soushou", "れいげんそうしょう", "レイゲンソウショウ", "reigen-soushou"],
  "url": "https://www.reigen-soushou.com",
  "description": "零元創匠（れいげんそうしょう）は東京都新宿区のシステム開発会社です。基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供しています。",
  "inLanguage": "ja",
  "publisher": {
    "@id": "https://www.reigen-soushou.com/#organization"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="https://www.reigen-soushou.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema)
          }}
        />
      </head>
      <body>
        <AnnouncementPopup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
