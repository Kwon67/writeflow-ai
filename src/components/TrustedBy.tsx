'use client';

import { motion } from 'framer-motion';

const companies = [
  'TechCorp',
  'InnoVate',
  'CloudBase',
  'DataFlow',
  'AILabs',
  'NextGen',
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider font-semibold">
            Trusted by industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
