'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Copy, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';

const demoText = 'Sustainable fashion is revolutionizing the textile industry. By choosing eco-friendly materials like organic cotton and recycled polyester, brands are reducing their environmental impact. Consumers are increasingly aware of fast fashion\'s toll on our planet, driving demand for ethical alternatives that prioritize both style and sustainability.';

export default function LiveDemo() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = () => {
    setDisplayText('');
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping && displayText.length < demoText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(demoText.slice(0, displayText.length + 1));
      }, 20);
      return () => clearTimeout(timeout);
    } else if (isTyping && displayText.length === demoText.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping();
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 bg-linear-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Decorative elements */}
      <BackgroundOrbs variant="section" />
      <FloatingParticles count={12} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            See WriteFlow in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch as AI generates high-quality content in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Input section */}
          <div className="bg-linear-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-lg text-sm font-semibold">
                Blog Post
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">•</span>
              <span className="text-gray-600 dark:text-gray-300 text-sm">GPT-4</span>
            </div>
            <input
              type="text"
              value="Write a blog post about sustainable fashion"
              readOnly
              className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Output section */}
          <div className="p-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Generated Content
              </h3>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startTyping}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 min-h-[200px] relative">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {displayText}
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-purple-600 ml-1"
                  />
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
