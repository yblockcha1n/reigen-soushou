"use client";

import { useState } from "react";
import Link from "next/link";
import type { ContactFormData, ContactApiResponse } from "@/types";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "お問い合わせの送信に失敗しました");
      }

      setSubmitStatus({
        success: true,
        message: "お問い合わせを送信しました。24時間以内にご返信いたします。",
      });

      setFormData({ name: "", email: "", type: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "お問い合わせの送信に失敗しました。しばらく経ってからお試しください。";
      setSubmitStatus({ success: false, message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8px' }}>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "零元創匠 お問い合わせページ",
            "description": "零元創匠へのお問い合わせはこちらから。",
            "url": "https://www.reigen-soushou.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "零元創匠",
              "email": "negishi-yuto@reigen-soushou.com",
            }
          })
        }}
      />

      {/* パンくずリスト */}
      <p style={{ fontSize: '11px', marginBottom: '8px' }}>
        <Link href="/">ホーム</Link> &gt; お問い合わせ
      </p>

      <table style={{ width: '100%', marginBottom: '8px' }}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', color: '#ffffff', padding: '4px 8px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>
              ■ お問い合わせ ■
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', fontSize: '13px', marginBottom: '16px' }}>
        弊社のサービスやプロジェクトについてのご質問・ご相談をお待ちしております。<br />
        24時間以内に返信いたします。
      </p>

      <hr />

      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            {/* 左：連絡先情報 */}
            <td style={{ width: '35%', verticalAlign: 'top', paddingRight: '12px' }}>
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
            </td>

            {/* 右：フォーム */}
            <td style={{ width: '65%', verticalAlign: 'top' }}>
              <div className="win95-raised" style={{ padding: '2px' }}>
                <div className="win95-titlebar">
                  <span>✉ お問い合わせフォーム</span>
                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #808080', padding: '12px' }}>
                  <p style={{ fontSize: '12px', color: '#808080', marginBottom: '12px' }}>
                    下記フォームに必要事項をご入力の上、送信してください。
                  </p>

                  {submitStatus && (
                    <div style={{
                      padding: '8px',
                      marginBottom: '12px',
                      border: '2px solid',
                      borderColor: submitStatus.success ? '#008000' : '#ff0000',
                      backgroundColor: submitStatus.success ? '#e0ffe0' : '#ffe0e0',
                      fontSize: '13px',
                    }}>
                      <strong>{submitStatus.success ? '✓ 送信完了' : '✗ エラー'}</strong>
                      <br />
                      {submitStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <table style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ padding: '4px', fontSize: '13px', fontWeight: 'bold', verticalAlign: 'top', width: '30%' }}>
                            お名前 <span style={{ color: '#ff0000' }}>*</span>
                          </td>
                          <td style={{ padding: '4px' }}>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="retro-input"
                              style={{ width: '100%' }}
                              placeholder="例: 山田 太郎"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px', fontSize: '13px', fontWeight: 'bold', verticalAlign: 'top' }}>
                            メールアドレス <span style={{ color: '#ff0000' }}>*</span>
                          </td>
                          <td style={{ padding: '4px' }}>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="retro-input"
                              style={{ width: '100%' }}
                              placeholder="例: example@example.com"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px', fontSize: '13px', fontWeight: 'bold', verticalAlign: 'top' }}>
                            お問い合わせ種類 <span style={{ color: '#ff0000' }}>*</span>
                          </td>
                          <td style={{ padding: '4px' }}>
                            <div className="win95-sunken" style={{ padding: '6px 8px' }}>
                              {[
                                "サービスについて",
                                "お見積り依頼",
                                "採用について",
                                "その他のお問い合わせ",
                              ].map((option) => (
                                <label
                                  key={option}
                                  style={{
                                    display: 'block',
                                    padding: '2px 0',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <input
                                    type="radio"
                                    name="type"
                                    value={option}
                                    checked={formData.type === option}
                                    onChange={handleChange}
                                    required
                                    style={{ marginRight: '6px' }}
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '4px', fontSize: '13px', fontWeight: 'bold', verticalAlign: 'top' }}>
                            お問い合わせ内容
                          </td>
                          <td style={{ padding: '4px' }}>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={6}
                              className="retro-textarea"
                              style={{ width: '100%' }}
                              placeholder="お問い合わせ内容を入力してください"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td style={{ padding: '4px' }}>
                            <button
                              type="submit"
                              className="win95-button"
                              disabled={isSubmitting}
                              style={{ fontSize: '14px', fontWeight: 'bold', padding: '6px 24px' }}
                            >
                              {isSubmitting ? "送信中..." : "▶ 送信する"}
                            </button>
                            <button
                              type="reset"
                              className="win95-button"
                              style={{ fontSize: '12px', marginLeft: '8px' }}
                              onClick={() => setFormData({ name: "", email: "", type: "", message: "" })}
                            >
                              リセット
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <p style={{ textAlign: 'center', marginBottom: '16px' }}>
        [<Link href="/">ホームに戻る</Link>]
      </p>
    </div>
  );
}
