interface WatermarkLayerProps {
  variant: 'light' | 'dark';
  zIndexClass?: string;
}

/**
 * Full-bleed Microsoft Word-style diagonal repeating watermark using the
 * transparent GoExecution logo tile. Adapts contrast for light vs dark sections
 * while staying pointer-events-none so all UI interactions remain unobstructed.
 */
export function WatermarkLayer({ variant, zIndexClass = 'z-20' }: WatermarkLayerProps) {
  const isDark = variant === 'dark';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${zIndexClass}`}
    >
      <div
        className="absolute top-1/2 left-1/2 h-[5400px] w-[5400px] -translate-x-1/2 -translate-y-1/2 -rotate-[26deg]"
        style={{
          backgroundImage: "url('/images/goexecution-watermark-tile.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '580px 280px',
          opacity: isDark ? 0.075 : 0.06,
          filter: isDark ? 'invert(1) hue-rotate(180deg)' : 'none',
        }}
      />
    </div>
  );
}
