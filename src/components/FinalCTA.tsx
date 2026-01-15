'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';

interface FinalCTAProps {
  onStartTrial: () => void;
}

export default function FinalCTA({ onStartTrial }: FinalCTAProps) {
  return (
    <section className="py-20 bg-linear-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Decorative elements */}
      <BackgroundOrbs variant="cta" />
      <FloatingParticles count={15} />
      <GridPattern opacity={0.03} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Write Faster?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 50,000+ writers using AI to create amazing content
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <Button size="lg" onClick={onStartTrial} className="text-xl px-10 py-5 animate-pulse-glow">
              Start Free Trial - No Credit Card Required
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-gray-400"
          >
            14-day free trial • Cancel anytime • No setup fees
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
