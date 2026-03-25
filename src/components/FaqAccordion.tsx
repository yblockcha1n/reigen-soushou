"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ marginBottom: '16px' }}>
      {faqs.map((faq, index) => (
        <div key={index} className="win95-raised" style={{ marginBottom: '4px', padding: '2px' }}>
          <div
            style={{
              padding: '6px 8px',
              cursor: 'pointer',
              backgroundColor: openFaq === index ? '#d0d0d0' : '#c0c0c0',
              fontWeight: 'bold',
              fontSize: '13px',
            }}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            {openFaq === index ? '▼' : '▶'} Q: {faq.question}
          </div>
          {openFaq === index && (
            <div style={{
              padding: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #808080',
              fontSize: '13px',
            }}>
              <strong>A:</strong> {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
