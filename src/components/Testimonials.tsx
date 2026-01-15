'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'WriteFlow cut my writing time by 80%. I can now focus on strategy while the AI handles the heavy lifting. Absolutely game-changing!',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The best AI writing tool I\'ve used. The quality is incredible, and it actually understands our brand voice. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Emily Thompson',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Game changer for our blog strategy. We went from posting once a week to daily, and our organic traffic tripled in 3 months.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-linear-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-1/4 right-1/4" />
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl bottom-1/4 left-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by 50,000+ Writers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our customers are saying about WriteFlow AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />

              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
