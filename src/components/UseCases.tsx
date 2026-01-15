'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Building, GraduationCap } from 'lucide-react';

const useCases = [
  {
    icon: Users,
    title: 'Content Creators',
    description: 'Generate blog posts, video scripts, and social media content to grow your audience',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Marketers',
    description: 'Create high-converting ad copy, email campaigns, and marketing materials',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Building,
    title: 'Businesses',
    description: 'Write product descriptions, landing pages, and customer communication',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Draft essays, research papers, and study materials with AI assistance',
    gradient: 'from-orange-600 to-red-600',
  },
];

export default function UseCases() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Perfect For Everyone
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you're creating, marketing, or learning, WriteFlow AI adapts to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-linear-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
