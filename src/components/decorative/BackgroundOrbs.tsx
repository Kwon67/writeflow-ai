'use client';

import { motion } from 'framer-motion';

interface BackgroundOrbsProps {
  variant?: 'hero' | 'section' | 'cta';
}

export default function BackgroundOrbs({ variant = 'section' }: BackgroundOrbsProps) {
  const configs = {
    hero: [
      { color: 'bg-purple-500', size: 'w-[600px] h-[600px]', position: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2', delay: 0 },
      { color: 'bg-blue-500', size: 'w-[500px] h-[500px]', position: 'top-1/2 right-0 translate-x-1/3 -translate-y-1/2', delay: 2 },
      { color: 'bg-cyan-500', size: 'w-[550px] h-[550px]', position: 'bottom-0 left-1/3 translate-y-1/3', delay: 4 },
    ],
    section: [
      { color: 'bg-purple-400', size: 'w-[400px] h-[400px]', position: 'top-1/4 right-0 translate-x-1/2', delay: 0 },
      { color: 'bg-cyan-400', size: 'w-[350px] h-[350px]', position: 'bottom-1/4 left-0 -translate-x-1/2', delay: 3 },
    ],
    cta: [
      { color: 'bg-purple-500', size: 'w-[450px] h-[450px]', position: 'top-1/2 left-1/4 -translate-y-1/2', delay: 0 },
      { color: 'bg-blue-500', size: 'w-[400px] h-[400px]', position: 'bottom-1/3 right-1/4', delay: 2 },
    ],
  };

  const orbs = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
