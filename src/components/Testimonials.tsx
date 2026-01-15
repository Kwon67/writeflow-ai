'use client';

import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    company: '@sarahcreates',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'WriteFlow cut my writing time by 80%. I can now focus on strategy while the AI handles the heavy lifting. Absolutely game-changing for my workflow!',
    rating: 5,
    verified: true,
    stats: { metric: '80%', label: 'Time saved' },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The best AI writing tool I\'ve used. The quality is incredible, and it actually understands our brand voice. Our team\'s productivity has skyrocketed.',
    rating: 5,
    verified: true,
    stats: { metric: '3x', label: 'More content' },
  },
  {
    name: 'Emily Thompson',
    role: 'Startup Founder',
    company: 'GrowthLabs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Game changer for our blog strategy. We went from posting once a week to daily, and our organic traffic tripled in just 3 months.',
    rating: 5,
    verified: true,
    stats: { metric: '300%', label: 'Traffic increase' },
  },
  {
    name: 'David Park',
    role: 'SEO Specialist',
    company: 'RankBoost Agency',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'Finally, an AI that writes SEO-optimized content that actually ranks. We\'ve seen incredible improvements in our clients\' search visibility.',
    rating: 5,
    verified: true,
    stats: { metric: '50+', label: 'Top 10 rankings' },
  },
  {
    name: 'Lisa Wang',
    role: 'E-commerce Manager',
    company: 'ShopStyle',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    content: 'Product descriptions used to take hours. Now I generate hundreds of unique, compelling descriptions in minutes. My conversion rate is up 40%.',
    rating: 5,
    verified: true,
    stats: { metric: '40%', label: 'Higher conversions' },
  },
  {
    name: 'James Miller',
    role: 'Freelance Writer',
    company: '@jamesmwrites',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    content: 'I was skeptical at first, but WriteFlow has become my secret weapon. I\'ve doubled my client capacity without sacrificing quality.',
    rating: 5,
    verified: true,
    stats: { metric: '2x', label: 'Client capacity' },
  },
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Happy Writers' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: TrendingUp, value: '10M+', label: 'Words Generated' },
  { icon: Zap, value: '99.9%', label: 'Uptime' },
];

const companyLogos = [
  'Google', 'Microsoft', 'Shopify', 'Stripe', 'Notion', 'Figma'
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Static gradient background - optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/20 via-transparent to-blue-950/20" />
        <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Decorative elements */}
      <BackgroundOrbs variant="section" />
      <FloatingParticles count={8} />
      <GridPattern opacity={0.02} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030014_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Trusted by 50,000+ Writers</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Loved by </span>
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Creators
            </span>
            <span className="text-white"> Worldwide</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            See why thousands of content creators, marketers, and businesses
            <span className="text-white/70"> choose WriteFlow AI.</span>
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600/0 via-blue-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:via-blue-600/20 group-hover:to-cyan-600/20 rounded-2xl blur-lg transition duration-500" />

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative h-full rounded-2xl bg-gray-900/50 border border-white/10 group-hover:border-white/20 backdrop-blur-xl p-6 transition-colors"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-purple-500/10 transition-colors" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar with gradient border */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-linear-to-br from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-gray-800"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-white truncate">
                        {testimonial.name}
                      </h3>
                      {testimonial.verified && (
                        <BadgeCheck className="w-4 h-4 text-blue-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 truncate">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  {testimonial.stats && (
                    <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-medium text-green-400">
                        {testimonial.stats.metric} {testimonial.stats.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companyLogos.map((company, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
            <div className="relative px-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((t, i) => (
                    <Image
                      key={i}
                      src={t.image}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-[#030014] object-cover"
                      style={{ zIndex: 4 - i }}
                    />
                  ))}
                </div>
                <div className="flex gap-0.5 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Join <span className="text-white font-semibold">50,000+</span> writers who trust WriteFlow AI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
