'use client';

import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';
import Button from './ui/Button';
import { useState, useEffect } from 'react';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';

interface HeroProps {
  onWatchDemo: () => void;
  onStartTrial: () => void;
}

export default function Hero({ onWatchDemo, onStartTrial }: HeroProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev < 50000 ? prev + 1000 : 50000));
    }, 30);
    const interval2 = setInterval(() => {
      setCount2((prev) => (prev < 10 ? prev + 0.2 : 10));
    }, 50);
    const interval3 = setInterval(() => {
      setCount3((prev) => (prev < 4.9 ? prev + 0.1 : 4.9));
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Decorative elements */}
      <BackgroundOrbs variant="hero" />
      <FloatingParticles count={20} />
      <GridPattern opacity={0.03} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium">Powered by GPT-4 & Claude</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Write{' '}
          <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            10x Faster
          </span>
          <br />
          with AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Generate high-quality content in seconds. Blogs, emails, social media posts, and more.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" onClick={onStartTrial}>
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" onClick={onWatchDemo}>
            <Play className="w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-6 card-glow will-change-transform"
          >
            <div className="text-4xl font-bold text-white mb-2">
              {Math.floor(count1).toLocaleString()}+
            </div>
            <div className="text-gray-400">Writers</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-6 card-glow will-change-transform"
          >
            <div className="text-4xl font-bold text-white mb-2">
              {count2.toFixed(0)}M+
            </div>
            <div className="text-gray-400">Words Generated</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl p-6 card-glow will-change-transform"
          >
            <div className="text-4xl font-bold text-white mb-2">
              {count3.toFixed(1)}/5
            </div>
            <div className="text-gray-400">Rating</div>
          </motion.div>
        </motion.div>

        {/* Mockup preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-linear-to-r from-purple-400 to-blue-400 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-linear-to-r from-blue-400 to-cyan-400 rounded w-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                <div className="h-4 bg-linear-to-r from-purple-400 to-cyan-400 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
