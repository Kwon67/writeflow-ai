'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Crown } from 'lucide-react';
import Button from './ui/Button';
import GridPattern from './decorative/GridPattern';
import FloatingParticles from './decorative/FloatingParticles';

interface PricingProps {
  onStartTrial: () => void;
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out WriteFlow',
    features: [
      '10,000 words per month',
      'Basic templates',
      'Email support',
      'Export to PDF',
    ],
    cta: 'Get Started',
    popular: false,
    icon: null,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Best for content creators and marketers',
    features: [
      'Unlimited words',
      'All templates & features',
      'Priority support',
      'API access',
      'Team collaboration',
      'Custom brand voice',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: Zap,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
      'Custom AI models',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Crown,
  },
];

export default function Pricing({ onStartTrial }: PricingProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <GridPattern opacity={0.03} />
      <FloatingParticles count={10} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 will-change-transform ${
                  plan.popular
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20 glow-multi'
                    : 'border-gray-200 dark:border-gray-700 shadow-lg card-glow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {Icon && (
                  <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={onStartTrial}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
