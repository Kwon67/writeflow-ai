'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Sparkles, Play, ArrowRight, Users, FileText, Star, Zap } from 'lucide-react';
import Button from './ui/Button';
import { useState, useEffect, useRef } from 'react';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';

interface HeroProps {
  onWatchDemo: () => void;
  onStartTrial: () => void;
}

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse text-purple-400">|</span>}
    </span>
  );
};

const AnimatedCounter = ({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (target >= 1000) return Math.floor(latest).toLocaleString();
    if (target < 10) return latest.toFixed(1);
    return Math.floor(latest).toString();
  });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: 'easeOut' });
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, target, duration, rounded]);

  return <span>{displayValue}{suffix}</span>;
};

export default function Hero({ onWatchDemo, onStartTrial }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-purple-950/50 via-transparent to-blue-950/50" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[100px] animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      {/* Decorative elements */}
      <BackgroundOrbs variant="hero" />
      <FloatingParticles count={30} />
      <GridPattern opacity={0.02} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030014_70%)]" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powered by GPT-4o & Claude 3.5
              </span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        </motion.div>

        {/* Main heading with glow effect */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 blur-3xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Write 10x Faster
            </h1>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            <span className="text-white/90">Write </span>
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                10x Faster
              </span>
            </span>
            <br />
            <span className="text-white/90">with </span>
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Magic
              </span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-8 -top-4"
              >
                <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle with typing effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your ideas into compelling content in seconds.
          <br className="hidden sm:block" />
          <span className="text-white/80">Blogs, emails, social media</span> — all powered by AI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
            <Button size="lg" onClick={onStartTrial} className="relative bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0 px-8 py-4 text-lg font-semibold">
              Start Free Trial
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" size="lg" onClick={onWatchDemo} className="px-8 py-4 text-lg border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-sm">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-blue-500 border-2 border-[#030014] flex items-center justify-center text-xs font-bold text-white"
                  style={{ zIndex: 4 - i }}
                >
                  {['A', 'B', 'C', 'D'][i]}
                </div>
              ))}
            </div>
            <span className="text-sm">Join <span className="text-white font-semibold">50,000+</span> writers</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-gray-400 ml-2">4.9/5 from <span className="text-white">2,000+ reviews</span></span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-20"
        >
          {[
            { icon: Users, value: 50000, suffix: '+', label: 'Active Writers', color: 'from-purple-500 to-purple-600' },
            { icon: FileText, value: 10, suffix: 'M+', label: 'Words Generated', color: 'from-blue-500 to-blue-600' },
            { icon: Star, value: 4.9, suffix: '/5', label: 'User Rating', color: 'from-cyan-500 to-cyan-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-linear-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
              <div className="relative glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind mockup */}
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl" />

          <div className="relative">
            {/* Browser frame */}
            <div className="relative rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto px-4 py-1.5 rounded-lg bg-gray-900/50 border border-white/5 text-gray-500 text-sm">
                    writeflow.ai/editor
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Editor content */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Sidebar */}
                  <div className="hidden lg:block space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-sm font-medium text-white mb-3">Templates</div>
                      {['Blog Post', 'Email', 'Social Media', 'Ad Copy'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          className={`p-2.5 rounded-lg text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-400 hover:bg-white/5'}`}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Main editor */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-sm font-medium text-white mb-3">AI Writing Assistant</div>
                      <div className="space-y-3 text-left">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 1.2 }}
                          className="h-5 bg-linear-to-r from-purple-500/30 to-purple-500/10 rounded overflow-hidden"
                        >
                          <div className="h-full px-3 flex items-center">
                            <span className="text-sm text-purple-300 whitespace-nowrap">
                              <TypewriterText text="How AI is Transforming Content Creation..." delay={1500} />
                            </span>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.5 }}
                          className="space-y-2"
                        >
                          <div className="h-4 bg-linear-to-r from-blue-500/20 to-transparent rounded w-full" />
                          <div className="h-4 bg-linear-to-r from-blue-500/20 to-transparent rounded w-11/12" />
                          <div className="h-4 bg-linear-to-r from-blue-500/20 to-transparent rounded w-4/5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Generation indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.8 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                    >
                      <div className="flex gap-1">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-purple-400" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-blue-400" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300">AI is generating your content...</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -left-4 top-1/4 hidden xl:block"
            >
              <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30 backdrop-blur-xl">
                <span className="text-green-400 text-sm font-medium">✓ SEO Optimized</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute -right-4 top-1/3 hidden xl:block"
            >
              <div className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 backdrop-blur-xl">
                <span className="text-blue-400 text-sm font-medium">⚡ 10x Faster</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="absolute -right-2 bottom-1/4 hidden xl:block"
            >
              <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-xl">
                <span className="text-purple-400 text-sm font-medium">🎯 On-Brand Voice</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
