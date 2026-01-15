'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Copy, Download, Check, Sparkles, Wand2, Clock, FileText, Zap, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import BackgroundOrbs from './decorative/BackgroundOrbs';
import FloatingParticles from './decorative/FloatingParticles';
import GridPattern from './decorative/GridPattern';

const demoPrompts = [
  {
    category: 'Blog Post',
    prompt: 'Write a blog post about sustainable fashion',
    output: 'Sustainable fashion is revolutionizing the textile industry. By choosing eco-friendly materials like organic cotton and recycled polyester, brands are reducing their environmental impact. Consumers are increasingly aware of fast fashion\'s toll on our planet, driving demand for ethical alternatives that prioritize both style and sustainability.',
    color: 'purple',
    icon: FileText,
  },
  {
    category: 'Email',
    prompt: 'Write a professional follow-up email after a job interview',
    output: 'Dear [Hiring Manager], Thank you for taking the time to meet with me yesterday. I thoroughly enjoyed learning more about the [Position] role and your team\'s innovative approach to [specific project discussed]. Our conversation reinforced my enthusiasm for this opportunity, and I\'m confident my experience in [relevant skill] would be valuable to your team.',
    color: 'blue',
    icon: Zap,
  },
  {
    category: 'Social Media',
    prompt: 'Create an engaging Twitter thread about AI in 2025',
    output: '🧵 The AI revolution is here, and it\'s changing everything. Let me break down the top 5 ways artificial intelligence is transforming our daily lives in 2025... 1/ Personalized healthcare is no longer a dream. AI analyzes your health data in real-time, predicting issues before they become problems.',
    color: 'cyan',
    icon: Sparkles,
  },
];

const stats = [
  { label: 'Words/min', value: '2,500+' },
  { label: 'Languages', value: '50+' },
  { label: 'Accuracy', value: '99.2%' },
];

export default function LiveDemo() {
  const [activePrompt, setActivePrompt] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const currentDemo = demoPrompts[activePrompt];

  const startTyping = useCallback(() => {
    setDisplayText('');
    setIsTyping(true);
    setWordCount(0);
    setTimeElapsed(0);
  }, []);

  useEffect(() => {
    if (isTyping && displayText.length < currentDemo.output.length) {
      const timeout = setTimeout(() => {
        const newText = currentDemo.output.slice(0, displayText.length + 1);
        setDisplayText(newText);
        setWordCount(newText.split(/\s+/).filter(Boolean).length);
      }, 15);
      return () => clearTimeout(timeout);
    } else if (isTyping && displayText.length === currentDemo.output.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping, currentDemo.output]);

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  useEffect(() => {
    const timeout = setTimeout(startTyping, 500);
    return () => clearTimeout(timeout);
  }, [activePrompt, startTyping]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentDemo.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePromptChange = (index: number) => {
    if (index !== activePrompt) {
      setActivePrompt(index);
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        gradient: 'from-purple-500 to-purple-600',
      },
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        gradient: 'from-blue-500 to-blue-600',
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30',
        gradient: 'from-cyan-500 to-cyan-600',
      },
    };
    return colors[color] || colors.purple;
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#030014]">
      {/* Static gradient background - optimized */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/30 via-transparent to-blue-950/30" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[80px]" />
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
            <Wand2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Live Demo</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">See </span>
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WriteFlow
            </span>
            <span className="text-white"> in Action</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Watch as AI generates high-quality content in real-time.
            <br className="hidden sm:block" />
            <span className="text-white/70">Select a template and see the magic happen.</span>
          </p>
        </motion.div>

        {/* Main demo container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl" />

          <div className="relative rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Browser header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-sm mx-auto px-4 py-1.5 rounded-lg bg-gray-900/50 border border-white/5 text-gray-500 text-sm text-center">
                  writeflow.ai/playground
                </div>
              </div>
              <div className="flex items-center gap-2">
                {stats.map((stat, i) => (
                  <div key={i} className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs">
                    <span className="text-gray-500">{stat.label}:</span>
                    <span className="text-white font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Sidebar - Template selector */}
              <div className="lg:col-span-1 p-4 border-b lg:border-b-0 lg:border-r border-white/5 bg-gray-900/50">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Content Type
                </div>
                <div className="space-y-2">
                  {demoPrompts.map((demo, index) => {
                    const colors = getColorClasses(demo.color);
                    const Icon = demo.icon;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handlePromptChange(index)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                          activePrompt === index
                            ? `${colors.bg} ${colors.border} border`
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${colors.gradient} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-medium ${activePrompt === index ? colors.text : 'text-white'}`}>
                            {demo.category}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {demo.prompt.slice(0, 25)}...
                          </div>
                        </div>
                        {activePrompt === index && (
                          <ChevronRight className={`w-4 h-4 ${colors.text}`} />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Real-time stats */}
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Generation Stats
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FileText className="w-4 h-4" />
                        Words
                      </div>
                      <span className="text-white font-mono font-medium">{wordCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        Time
                      </div>
                      <span className="text-white font-mono font-medium">{timeElapsed.toFixed(1)}s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Zap className="w-4 h-4" />
                        Speed
                      </div>
                      <span className="text-white font-mono font-medium">
                        {timeElapsed > 0 ? Math.round(wordCount / timeElapsed * 60) : 0} w/min
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="lg:col-span-3 p-6">
                {/* Input section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`px-3 py-1 rounded-lg text-sm font-medium ${getColorClasses(currentDemo.color).bg} ${getColorClasses(currentDemo.color).text}`}>
                      {currentDemo.category}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      GPT-4o Active
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={currentDemo.prompt}
                      readOnly
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Output section */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">Generated Content</h3>
                      {isTyping && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.6 }}
                            className="w-1.5 h-1.5 rounded-full bg-purple-400"
                          />
                          Writing...
                        </div>
                      )}
                      {!isTyping && displayText && (
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                          <Check className="w-3 h-3" />
                          Complete
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startTyping}
                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group"
                        title="Regenerate"
                      >
                        <RefreshCw className={`w-4 h-4 text-gray-400 group-hover:text-white transition-colors ${isTyping ? 'animate-spin' : ''}`} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopy}
                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group"
                        title="Copy"
                      >
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <Check className="w-4 h-4 text-green-400" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors group"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Text output area */}
                  <div className="relative rounded-xl bg-white/5 border border-white/10 p-6 min-h-[200px]">
                    {/* Progress bar */}
                    {isTyping && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-800 rounded-t-xl overflow-hidden">
                        <motion.div
                          className={`h-full bg-linear-to-r ${getColorClasses(currentDemo.color).gradient}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${(displayText.length / currentDemo.output.length) * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    )}

                    <p className="text-gray-200 leading-relaxed text-lg">
                      {displayText}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className={`inline-block w-0.5 h-5 ml-1 align-middle ${getColorClasses(currentDemo.color).bg.replace('/20', '')}`}
                        />
                      )}
                    </p>

                    {!displayText && !isTyping && (
                      <div className="flex items-center justify-center h-[150px] text-gray-500">
                        Click regenerate to start...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Ready to experience the future of content creation?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            Try It Free
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
