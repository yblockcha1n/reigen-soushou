"use client";

export function MarqueeText({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
      <p className="marquee-text rainbow-text" style={{ fontSize: '16px' }}>
        {children}
      </p>
    </div>
  );
}
