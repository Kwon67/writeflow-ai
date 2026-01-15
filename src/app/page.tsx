'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import LiveDemo from '@/components/LiveDemo';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

export default function Home() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWatchDemo = () => {
    setShowDemoModal(true);
  };

  const handleStartTrial = () => {
    setShowTrialModal(true);
  };

  const handleTrialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setShowTrialModal(false);
    toast.success('🎉 Welcome to WriteFlow AI! Check your email to get started.');
  };

  return (
    <main className="min-h-screen">
      <Hero onWatchDemo={handleWatchDemo} onStartTrial={handleStartTrial} />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <LiveDemo />
      <UseCases />
      <Pricing onStartTrial={handleStartTrial} />
      <Testimonials />
      <FAQ />
      <FinalCTA onStartTrial={handleStartTrial} />
      <Footer />

      {/* Watch Demo Modal */}
      <Modal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        title="Watch WriteFlow AI Demo"
      >
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-linear-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Demo video would play here
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            See how WriteFlow AI works
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Choose from 50+ content templates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Describe your topic in plain English</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Get perfect content in seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span>Edit, refine, and export instantly</span>
            </li>
          </ul>
          <Button onClick={handleStartTrial} className="w-full">
            Start Your Free Trial
          </Button>
        </div>
      </Modal>

      {/* Start Trial Modal */}
      <Modal
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
        title="Start Your Free Trial"
      >
        <form onSubmit={handleTrialSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              minLength={8}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="••••••••"
            />
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                14-day free trial
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Cancel anytime
              </li>
            </ul>
          </div>

          <Button type="submit" loading={isLoading} className="w-full">
            {isLoading ? 'Creating your account...' : 'Start Free Trial'}
          </Button>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </Modal>
    </main>
  );
}
