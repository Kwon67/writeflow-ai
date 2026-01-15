'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Crown, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';
import Button from './ui/Button';
import GridPattern from './decorative/GridPattern';
import FloatingParticles from './decorative/FloatingParticles';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import { useState } from 'react';

interface PricingProps {
  onStartTrial: () => void;
}

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for trying out WriteFlow',
    features: [
      { text: '10,000 words per month', included: true },
      { text: 'Basic templates', included: true },
      { text: 'Email support', included: true },
      { text: 'Export to PDF', included: true },
      { text: 'API access', included: false },
      { text: 'Custom brand voice', included: false },
    ],
    cta: 'Get Started Free',
    popular: false,
    icon: Sparkles,
    color: 'gray',
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Best for content creators and marketers',
    features: [
      { text: 'Unlimited words', included: true },
      { text: 'All templates & features', included: true },
      { text: 'Priority support', included: true },
      { text: 'API access', included: true },
      { text: 'Team collaboration (5 seats)', included: true },
      { text: 'Custom brand voice', included: true },
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: Zap,
    color: 'purple',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'For large teams and organizations',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Advanced security & SSO', included: true },
      { text: 'SLA guarantee (99.9%)', included: true },
      { text: 'Custom AI model training', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Crown,
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const guarantees = [
  { icon: Shield, text: '14-day money-back guarantee' },
  { icon: Star, text: 'Cancel anytime, no questions asked' },
  { icon: Zap, text: 'Instant access after signup' },
];

export default function Pricing({ onStartTrial }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Static gradient background - optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/30 via-transparent to-purple-950/30" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[80px]" />
      </div>

      {/* Decorative elements */}
      <BackgroundOrbs variant="section" />
      <GridPattern opacity={0.02} />
      <FloatingParticles count={8} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030014_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Simple Pricing</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Choose Your </span>
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Start free, upgrade when you need more.
            <span className="text-white/70"> No hidden fees, cancel anytime.</span>
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                -17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/year' : '/month';

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-2xl border backdrop-blur-xl overflow-hidden ${
                    plan.popular
                      ? 'bg-gray-900/90 border-purple-500/50'
                      : 'bg-gray-900/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-wider text-center py-2">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                    {/* Plan header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.gradient} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <p className="text-sm text-gray-400">{plan.description}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      {price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-bold text-white">${price}</span>
                          <span className="text-gray-400">{period}</span>
                          {isYearly && plan.monthlyPrice && plan.monthlyPrice > 0 && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${plan.monthlyPrice * 12}/year
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-white">Custom</span>
                          <span className="text-gray-400">pricing</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            feature.included
                              ? 'bg-green-500/20'
                              : 'bg-gray-500/20'
                          }`}>
                            <Check className={`w-3 h-3 ${
                              feature.included ? 'text-green-400' : 'text-gray-500'
                            }`} />
                          </div>
                          <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular ? (
                        <Button
                          onClick={onStartTrial}
                          className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0 py-4 text-lg font-semibold"
                        >
                          {plan.cta}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          onClick={onStartTrial}
                          className="w-full border-white/20 hover:border-white/40 hover:bg-white/5 py-4"
                        >
                          {plan.cta}
                        </Button>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/5"
        >
          {guarantees.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
            <div className="relative px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <p className="text-gray-300 mb-4">
                Need a custom solution for your enterprise?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={onStartTrial}
                  className="border-white/20 hover:border-white/40 hover:bg-white/5"
                >
                  Schedule a Demo
                </Button>
                <span className="text-gray-500 text-sm">or</span>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1">
                  Contact our sales team
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
