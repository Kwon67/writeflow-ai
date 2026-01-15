'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
}

export default function FloatingParticles({
  count = 15,
  colors = ['bg-purple-400', 'bg-blue-400', 'bg-cyan-400']
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    color: string;
    duration: number;
    delay: number;
    opacity: number;
    xMove: number;
  }>>([]);

  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (!initialized.current) {
      initialized.current = true;
      setParticles(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          size: Math.random() * 16 + 4, // 4px to 20px
          x: Math.random() * 100, // 0% to 100%
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 10 + 15, // 15s to 25s
          delay: Math.random() * 5,
          opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
          xMove: Math.random() * 50 - 25,
        }))
      );
    }
  });

  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xMove, 0],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
