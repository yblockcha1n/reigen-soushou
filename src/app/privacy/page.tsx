"use client";

import Link from "next/link";

const privacyItems = [
  {
    title: "1. 個人情報の取り扱いについて",
    content: "零元創匠（以下「当社」）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（個人情報保護法）に基づき、個人情報の適切な取り扱い及び保護に努めます。",
  },
  {
    title: "2. 収集する個人情報の範囲",
    content: [
      "当社は、サービスの提供にあたり、以下の個人情報を取得させていただきます：",
      "・氏名",
      "・メールアドレス",
      "・電話番号（任意）",
      "・その他、サービス提供に必要な情報",
    ],
  },
  {
    title: "3. 個人情報の利用目的",
    content: [
      "取得した個人情報は、以下の目的で利用いたします：",
      "・サービスの提供及び業務の遂行",
      "・お問い合わせへの対応",
      "・サービスの品質向上",
      "・重要なお知らせの通知",
    ],
  },
  {
    title: "4. 個人情報の第三者提供",
    content: [
      "当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：",
      "・お客様の同意がある場合",
      "・法令に基づく場合",
      "・人の生命、身体または財産の保護のために必要がある場合",
    ],
  },
  {
    title: "5. 個人情報の安全管理",
    content: "当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。",
  },
  {
    title: "6. 個人情報の開示・訂正・利用停止",
    content: "お客様ご本人からの個人情報の開示、訂正、利用停止等のご要請につきましては、合理的な範囲で速やかに対応いたします。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    content: "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトでお知らせいたします。",
  },
  {
    title: "8. お問い合わせ",
    content: [
      "個人情報の取り扱いに関するお問い合わせは、以下の連絡先までご連絡ください：",
      "",
      "零元創匠",
      "Email: negishi-yuto@reigen-soushou.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "プライバシーポリシー | 零元創匠",
            "description": "零元創匠のプライバシーポリシーをご案内します。",
            "url": "https://www.reigen-soushou.com/privacy",
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
        <Link href="/">ホーム</Link> &gt; プライバシーポリシー
      </p>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              ■ プライバシーポリシー ■
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        当社における個人情報の取り扱いについて定めています。
      </p>

      <hr />

      {privacyItems.map((item, index) => (
        <div key={index} style={{ marginBottom: '12px' }}>
          <h2 style={{ fontSize: '14px', color: '#000080', fontWeight: 'bold', marginBottom: '4px' }}>
            {item.title}
          </h2>
          {Array.isArray(item.content) ? (
            <div style={{ fontSize: '13px', paddingLeft: '8px' }}>
              {item.content.map((line, idx) => (
                <p key={idx} style={{ marginBottom: '2px' }}>{line || '\u00A0'}</p>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: '13px', paddingLeft: '8px' }}>{item.content}</p>
          )}
        </div>
      ))}

      <hr />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span>[<Link href="/">ホームに戻る</Link>]</span>
        <span style={{ fontSize: '11px', color: '#808080' }}>
          最終更新日: 2025年3月24日
        </span>
      </div>
    </div>
  );
}
