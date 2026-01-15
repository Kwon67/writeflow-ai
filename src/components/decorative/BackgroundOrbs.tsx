'use client';

import { memo } from 'react';

interface BackgroundOrbsProps {
  variant?: 'hero' | 'section' | 'cta';
}

// Use CSS animations instead of Framer Motion for better performance
const BackgroundOrbs = memo(function BackgroundOrbs({ variant = 'section' }: BackgroundOrbsProps) {
  const configs = {
    hero: [
      { size: 'w-[500px] h-[500px]', position: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2', delay: '0s', color: 'bg-purple-500/20' },
      { size: 'w-[400px] h-[400px]', position: 'top-1/2 right-0 translate-x-1/3 -translate-y-1/2', delay: '2s', color: 'bg-blue-500/20' },
      { size: 'w-[450px] h-[450px]', position: 'bottom-0 left-1/3 translate-y-1/3', delay: '4s', color: 'bg-cyan-500/20' },
    ],
    section: [
      { size: 'w-[350px] h-[350px]', position: 'top-1/4 right-0 translate-x-1/2', delay: '0s', color: 'bg-purple-400/15' },
      { size: 'w-[300px] h-[300px]', position: 'bottom-1/4 left-0 -translate-x-1/2', delay: '3s', color: 'bg-cyan-400/15' },
    ],
    cta: [
      { size: 'w-[400px] h-[400px]', position: 'top-1/2 left-1/4 -translate-y-1/2', delay: '0s', color: 'bg-purple-500/15' },
      { size: 'w-[350px] h-[350px]', position: 'bottom-1/3 right-1/4', delay: '2s', color: 'bg-blue-500/15' },
    ],
  };

  const orbs = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-[100px] will-change-transform`}
          style={{
            animation: 'orb-float 12s ease-in-out infinite',
            animationDelay: orb.delay,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes orb-float {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -20px, 0) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
});

export default BackgroundOrbs;
