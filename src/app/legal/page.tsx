"use client";

import Link from "next/link";

const legalItems = [
  { title: "事業者の名称", content: "零元創匠" },
  { title: "代表者", content: "根岸 優翔" },
  { title: "所在地", content: "東京都新宿区富久町2-22 クレドール富久 201号室" },
  {
    title: "お問い合わせ",
    content: [
      "Email: negishi-yuto@reigen-soushou.com",
      "対応時間: 平日 9:00-18:00",
    ],
  },
  { title: "電話番号", content: "070-8549-2712" },
  { title: "料金", content: "案件の内容により異なります。お見積りは無料で承ります。" },
  { title: "追加料金", content: "表示価格以外に追加料金は発生しません（要件変更を除く）。" },
  {
    title: "支払方法",
    content: [
      "以下の支払方法に対応しております：",
      "・銀行振込",
      "・クレジットカード決済",
    ],
  },
  { title: "支払時期", content: "契約締結後、着手金として50%、納品後に残額50%をお支払いいただきます。" },
  { title: "納期", content: "プロジェクトの規模により異なります。契約時に納期を設定させていただきます。" },
  {
    title: "返品・キャンセルについて",
    content: "受注制作のため、原則として返品・キャンセルはお受けできません。ただし、開発開始前のキャンセルについては、ご相談に応じます。",
  },
];

export default function LegalPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "特定商取引法に基づく表記 | 零元創匠",
            "description": "零元創匠の特定商取引法に基づく表記をご案内します。",
            "url": "https://www.reigen-soushou.com/legal",
            "datePublished": "2025-03-24",
            "dateModified": "2025-03-24",
            "publisher": {
              "@type": "Organization",
              "name": "零元創匠",
              "url": "https://www.reigen-soushou.com"
            }
          })
        }}
      />

      {/* パンくずリスト */}
      <p style={{ fontSize: '11px', marginBottom: '8px' }}>
        <Link href="/">ホーム</Link> &gt; 特定商取引法に基づく表記
      </p>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              ■ 特定商取引法に基づく表記 ■
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        当社のサービス提供における取引条件を明記しております。
      </p>

      <hr />

      <table className="retro-table" style={{ marginBottom: '16px' }}>
        <tbody>
          {legalItems.map((item, index) => (
            <tr key={index}>
              <th style={{ width: '25%', backgroundColor: '#000080', color: '#ffffff', verticalAlign: 'top' }}>
                {item.title}
              </th>
              <td style={{ verticalAlign: 'top' }}>
                {Array.isArray(item.content) ? (
                  item.content.map((line, idx) => (
                    <span key={idx}>{line}<br /></span>
                  ))
                ) : (
                  item.content
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <p style={{ textAlign: 'center', marginBottom: '16px' }}>
        [<Link href="/">ホームに戻る</Link>]
      </p>
    </div>
  );
}
