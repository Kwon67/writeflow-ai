'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Clock, CreditCard, Star, Zap, Check } from 'lucide-react';
import Button from './ui/Button';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';
import { useState } from 'react';

interface FinalCTAProps {
  onStartTrial: () => void;
}

const benefits = [
  { icon: Clock, text: '14-day free trial' },
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Shield, text: 'Cancel anytime' },
];

const features = [
  'Unlimited AI content generation',
  'All premium templates included',
  'Priority customer support',
  'Export in any format',
];

export default function FinalCTA({ onStartTrial }: FinalCTAProps) {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartTrial();
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Static gradient background - optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-t from-purple-950/40 via-transparent to-blue-950/40" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Decorative elements */}
      <BackgroundOrbs variant="cta" />
      <FloatingParticles count={8} />
      <GridPattern opacity={0.02} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030014_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-30" />

          <div className="relative rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-xl overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500" />

            <div className="p-8 sm:p-12 lg:p-16 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-gray-300">Start creating in 30 seconds</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-white">Ready to </span>
                <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-white">Your Writing?</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              >
                Join <span className="text-white font-semibold">50,000+</span> writers who create
                <span className="text-white"> 10x more content</span> with AI assistance.
              </motion.p>

              {/* Email form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto mb-8"
              >
                <div className="relative flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300" />
                    <Button
                      type="submit"
                      size="lg"
                      className="relative w-full sm:w-auto bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0 px-8 py-4 text-lg font-semibold whitespace-nowrap"
                    >
                      Start Free Trial
                      <motion.span
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </motion.form>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-6 mb-10"
              >
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Divider */}
              <div className="border-t border-white/5 my-10" />

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
              >
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9/5</span>
                  <span className="text-gray-500 text-sm">from 2,000+ reviews</span>
                </div>

                <div className="hidden sm:block w-px h-6 bg-white/10" />

                {/* Users */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['A', 'B', 'C', 'D'].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-blue-500 border-2 border-[#030014] flex items-center justify-center text-xs font-bold text-white"
                        style={{ zIndex: 4 - i }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    <span className="text-white font-semibold">50,000+</span> happy users
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
            <Zap className="w-4 h-4" />
            <span>Powered by GPT-4o & Claude 3.5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
