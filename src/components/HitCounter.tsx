"use client";

import { useState, useEffect } from "react";

export function HitCounter() {
  const [visitorCount, setVisitorCount] = useState("000000");

  useEffect(() => {
    const count = Math.floor(Math.random() * 9999) + 10000;
    setVisitorCount(count.toString().padStart(6, "0"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
      <span style={{ fontSize: '11px' }}>あなたは</span>{' '}
      <span className="hit-counter">{visitorCount}</span>{' '}
      <span style={{ fontSize: '11px' }}>人目のお客様です</span>
    </div>
  );
}
