"use client";

import { useState } from "react";

export function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      {/* オーバーレイ */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 128, 0.3)',
          zIndex: 9998,
        }}
      />

      {/* ダイアログ */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '420px',
          maxWidth: '90vw',
        }}
      >
        <div style={{ border: '2px outset #c0c0c0', backgroundColor: '#c0c0c0', padding: '2px' }}>
          {/* タイトルバー */}
          <div
            style={{
              background: 'linear-gradient(90deg, #000080, #1084d0)',
              color: '#ffffff',
              padding: '3px 6px',
              fontWeight: 'bold',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2px',
            }}
          >
            <span>⚠ お知らせ</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: '#c0c0c0',
                border: '2px outset #c0c0c0',
                width: '16px',
                height: '16px',
                fontSize: '10px',
                lineHeight: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                color: '#000000',
                fontWeight: 'bold',
              }}
            >
              ×
            </button>
          </div>

          {/* コンテンツ */}
          <div style={{ backgroundColor: '#c0c0c0', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              {/* アイコン */}
              <div style={{
                fontSize: '32px',
                lineHeight: 1,
                flexShrink: 0,
              }}>
                ⚠️
              </div>

              {/* テキスト */}
              <div>
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
                  現在、新規のお問い合わせ・ご依頼の受付を<br />
                  一時的に停止しております。
                </p>
                <p style={{ fontSize: '12px', color: '#404040', marginBottom: '4px' }}>
                  受付再開の際は、当サイトにてお知らせいたします。
                </p>
                <p style={{ fontSize: '12px', color: '#404040' }}>
                  ご不便をおかけいたしますが、<br />
                  何卒ご了承くださいますようお願い申し上げます。
                </p>
              </div>
            </div>

            {/* ボタン */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button
                onClick={() => setIsOpen(false)}
                className="win95-button"
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  padding: '6px 32px',
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
