"use client";

import Link from "next/link";

const COMPANY_INFO = [
  { label: "屋号", value: "零元創匠" },
  { label: "代表者", value: "根岸 優翔" },
  { label: "所在地", value: "東京都新宿区富久町2-22 クレドール富久 201号室" },
  { label: "メールアドレス", value: "negishi-yuto@reigen-soushou.com", href: "mailto:negishi-yuto@reigen-soushou.com" },
  { label: "営業時間", value: "平日 9:00 - 18:00" },
  { label: "定休日", value: "土日祝日" },
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      {/* スキーママークアップ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "零元創匠",
            "description": "基幹システム開発、Webアプリケーション開発、業務効率化ツールの開発を提供する技術集団です。",
            "url": "https://www.reigen-soushou.com/about",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "富久町2-22 クレドール富久 201号室",
              "addressLocality": "新宿区",
              "addressRegion": "東京都",
              "postalCode": "162-0067",
              "addressCountry": "JP"
            },
            "email": "negishi-yuto@reigen-soushou.com",
            "openingHours": "Mo-Fr 09:00-18:00"
          })
        }}
      />

      {/* パンくずリスト */}
      <p style={{ fontSize: '11px', marginBottom: '8px' }}>
        <Link href="/">ホーム</Link> &gt; 私たちについて
      </p>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              ■ 私たちについて ■
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        零元創匠は、「零から始まるイノベーション」をモットーに、<br />
        お客様の業務課題を解決するシステム開発を行っています。
      </p>

      <hr />

      {/* 会社情報テーブル */}
      <h2 style={{ fontSize: '16px', color: '#000080', marginBottom: '8px' }}>
        ◆ 事業者情報
      </h2>

      <table className="retro-table" style={{ marginBottom: '16px' }}>
        <tbody>
          {COMPANY_INFO.map((item, index) => (
            <tr key={index}>
              <th style={{ width: '30%', backgroundColor: '#000080', color: '#ffffff' }}>
                {item.label}
              </th>
              <td>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  item.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 所在地 */}
      <h2 style={{ fontSize: '16px', color: '#000080', marginBottom: '8px' }}>
        ◆ 所在地
      </h2>

      <div className="win95-sunken" style={{ padding: '8px', marginBottom: '8px' }}>
        <p style={{ fontSize: '13px', marginBottom: '4px' }}>
          〒162-0067 東京都新宿区富久町2-22 クレドール富久 201号室
        </p>
        <p style={{ fontSize: '12px' }}>
          [<a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("東京都新宿区富久町2-22 クレドール富久")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Mapsで開く
          </a>]
        </p>
      </div>

      <hr />

      {/* 理念セクション */}
      <h2 style={{ fontSize: '16px', color: '#000080', marginBottom: '8px' }}>
        ◆ 私たちの想い
      </h2>

      <div className="retro-card">
        <div className="retro-card-inner">
          <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '8px' }}>
            「零」から始まる無限の可能性。
          </p>
          <p style={{ fontSize: '13px', color: '#404040', marginBottom: '8px' }}>
            私たちは、お客様のビジネスに寄り添い、課題を深く理解し、
            最適なシステムソリューションを提供することで、
            お客様の成功に貢献することを使命としています。
          </p>
          <p style={{ fontSize: '13px', color: '#404040' }}>
            基幹システム開発、業務効率化ツール、Webアプリケーション開発など、
            技術力とビジネス理解を兼ね備えたチームが、
            お客様のビジョンを形にします。
          </p>
        </div>
      </div>

      <hr />

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '16px', marginBottom: '16px' }}>
        <Link href="/contact" className="win95-button" style={{ fontSize: '14px', fontWeight: 'bold' }}>
          ▶ お問い合わせはこちら
        </Link>
      </div>

      <p style={{ textAlign: 'center', marginBottom: '16px' }}>
        [<Link href="/">ホームに戻る</Link>]
      </p>
    </div>
  );
}
