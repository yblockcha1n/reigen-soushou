import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '零元創匠へのお問い合わせはこちらから。基幹システム開発、Webアプリケーション開発、業務効率化ツール開発についてのご質問・ご相談を承っております。24時間以内に返信いたします。',
  openGraph: {
    title: 'お問い合わせ | 零元創匠',
    description: '零元創匠へのお問い合わせはこちらから。基幹システム開発、業務システム開発のご相談を承っております。',
    url: 'https://www.reigen-soushou.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.reigen-soushou.com/contact',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.reigen-soushou.com" },
    { "@type": "ListItem", "position": 2, "name": "お問い合わせ", "item": "https://www.reigen-soushou.com/contact" }
  ]
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "零元創匠 お問い合わせページ",
  "description": "零元創匠へのお問い合わせはこちらから。基幹システム開発、Webアプリケーション開発、業務効率化ツール開発についてのご質問・ご相談を承っております。",
  "url": "https://www.reigen-soushou.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://www.reigen-soushou.com/#organization"
  }
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="パンくずリスト" style={{ fontSize: '11px', marginBottom: '8px' }}>
        <Link href="/">ホーム</Link> &gt; お問い合わせ
      </nav>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              <h1 style={{ fontSize: '18px', margin: 0, color: '#ffffff' }}>■ お問い合わせ ■</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        零元創匠のサービスやプロジェクトについてのご質問・ご相談をお待ちしております。<br />
        24時間以内に返信いたします。
      </p>

      <hr />

      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            {/* 左：連絡先情報 */}
            <td style={{ width: '35%', verticalAlign: 'top', paddingRight: '12px' }}>
              <section aria-label="お問い合わせ方法">
                <h2 style={{ fontSize: '14px', color: '#000080', fontWeight: 'bold', marginBottom: '8px' }}>
                  ◆ お問い合わせ方法
                </h2>

                <div className="win95-raised" style={{ padding: '8px', marginBottom: '8px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '12px' }}>✉ Eメール</p>
                  <p style={{ fontSize: '11px', marginBottom: '2px' }}>お問い合わせはこちらから</p>
                  <a href="mailto:negishi-yuto@reigen-soushou.com" style={{ fontSize: '11px' }}>
                    negishi-yuto@reigen-soushou.com
                  </a>
                </div>

                <div className="win95-raised" style={{ padding: '8px', marginBottom: '8px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '12px' }}>🕐 対応時間</p>
                  <p style={{ fontSize: '11px' }}>平日: 9:00 - 18:00</p>
                  <p style={{ fontSize: '11px' }}>24時間以内に返信いたします</p>
                </div>

                <div className="win95-raised" style={{ padding: '8px' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '4px' }}>❓ よくある質問</p>
                  <ul style={{ fontSize: '11px', paddingLeft: '16px', listStyle: 'disc' }}>
                    <li>開発料金の目安を知りたい</li>
                    <li>開発期間はどのくらい必要か</li>
                    <li>開発実績を詳しく知りたい</li>
                  </ul>
                </div>
              </section>
            </td>

            {/* 右：フォーム */}
            <td style={{ width: '65%', verticalAlign: 'top' }}>
              <ContactForm />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <p style={{ textAlign: 'center', marginBottom: '16px' }}>
        [<Link href="/">ホームに戻る</Link>]
      </p>
    </main>
  );
}
