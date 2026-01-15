'use client';

interface GridPatternProps {
  opacity?: number;
}

export default function GridPattern({ opacity = 0.05 }: GridPatternProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(255 255 255 / ${opacity}) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(255 255 255 / ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}
