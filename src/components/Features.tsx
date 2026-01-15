'use client';

import { motion } from 'framer-motion';
import { FileText, Share2, Mail, ShoppingBag, Megaphone, Search } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Blog Posts',
    description: 'Generate complete, SEO-optimized articles in minutes',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Create engaging posts for Instagram, Twitter, LinkedIn',
  },
  {
    icon: Mail,
    title: 'Email Campaigns',
    description: 'Write compelling newsletters and email sequences',
  },
  {
    icon: ShoppingBag,
    title: 'Product Descriptions',
    description: 'Craft persuasive e-commerce copy that converts',
  },
  {
    icon: Megaphone,
    title: 'Ad Copy',
    description: 'Generate high-converting Google and Facebook ads',
  },
  {
    icon: Search,
    title: 'SEO Content',
    description: 'Optimized content that ranks on search engines',
  },
];

export default function Features() {
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
            Create Any Content Type
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From blog posts to ad copy, WriteFlow AI handles all your content needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 card-glow will-change-transform"
              >
                <div className="w-14 h-14 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
