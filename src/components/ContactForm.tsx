"use client";

import { useState } from "react";
import type { ContactFormData, ContactApiResponse } from "@/types";

export function ContactForm() {
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
  );
}
