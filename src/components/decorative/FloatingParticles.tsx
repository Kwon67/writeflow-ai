'use client';

import { useState, useEffect, useRef, memo } from 'react';

interface FloatingParticlesProps {
  count?: number;
}

// Use CSS animations instead of Framer Motion for better performance
const FloatingParticles = memo(function FloatingParticles({ count = 10 }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // Reduce particle count for performance
      const actualCount = Math.min(count, 12);
      setParticles(
        Array.from({ length: actualCount }, (_, i) => ({
          id: i,
          size: Math.random() * 8 + 4,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 10 + 20,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.2 + 0.1,
        }))
      );
    }
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20 will-change-transform"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -30px, 0);
          }
        }
      `}</style>
    </div>
  );
});

export default FloatingParticles;
