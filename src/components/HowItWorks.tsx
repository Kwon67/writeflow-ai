'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Choose Content Type',
    description: 'Select from blogs, emails, social posts, and more',
    color: 'from-purple-600 to-purple-400',
  },
  {
    icon: Sparkles,
    title: 'Describe Your Topic',
    description: 'Our AI understands context and your brand voice',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: CheckCircle,
    title: 'Get Perfect Content',
    description: 'Receive polished, ready-to-publish content in seconds',
    color: 'from-cyan-600 to-cyan-400',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Create amazing content in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-24 h-24 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
