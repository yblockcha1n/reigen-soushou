"use client";

interface MonochromeMapProps {
  address: string;
  zoom?: number;
  className?: string;
}

export function MonochromeMap({
  address,
  zoom = 16,
  className = "",
}: MonochromeMapProps) {
  // 住所をエンコードしてGoogle Maps Embedで表示
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed&hl=ja`}
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(100%) contrast(1.1)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="所在地マップ"
      />
      {/* オーバーレイでより統一感のあるモノクロ効果を追加 */}
      <div className="absolute inset-0 pointer-events-none bg-background/5" />
    </div>
  );
}
