"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Locale } from '@/middleware';

interface QuotesSectionProps {
  dict: any;
  locale: Locale;
}

export function QuotesSection({ dict, locale }: QuotesSectionProps) {
  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = dict.quotes.quotes;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-16">
            {dict.quotes.title}
          </h2>
          
          <div className="relative h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
              >
                <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 sm:p-12 shadow-2xl">
                  <Quote className="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
                  <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    &ldquo;{quotes[currentQuote].text}&rdquo;
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-semibold text-black dark:text-white text-lg">
                      {quotes[currentQuote].author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {quotes[currentQuote].title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {quotes[currentQuote].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {quotes.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? "bg-black dark:bg-white scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
