"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  Eye, 
  Clock, 
  TrendingDown, 
  Heart, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Locale } from '@/middleware';

interface BenefitsSlideProps {
  dict: any;
  locale: Locale;
}

const getBenefits = (dict: any) => [
  {
    icon: Eye,
    title: dict.benefits.visibility.title,
    description: dict.benefits.visibility.description,
    stats: dict.benefits.visibility.stats,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Clock,
    title: dict.benefits.time.title,
    description: dict.benefits.time.description,
    stats: dict.benefits.time.stats,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    gradient: "from-green-600 to-green-800"
  },
  {
    icon: TrendingDown,
    title: dict.benefits.churn.title,
    description: dict.benefits.churn.description,
    stats: dict.benefits.churn.stats,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    icon: Heart,
    title: dict.benefits.peace.title,
    description: dict.benefits.peace.description,
    stats: dict.benefits.peace.stats,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    gradient: "from-pink-600 to-pink-800"
  }
];

export function BenefitsSlide({ dict, locale }: BenefitsSlideProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const benefits = getBenefits(dict);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay, benefits.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6">
            {dict.benefits.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dict.benefits.description}
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative min-h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                  {/* Content */}
                  <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 px-4 sm:px-8 lg:px-0 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${benefits[currentSlide].gradient} flex items-center justify-center mb-4 lg:mb-6`}>
                        {React.createElement(benefits[currentSlide].icon, { className: "w-8 h-8 lg:w-10 lg:h-10 text-white" })}
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-3 lg:mb-4">
                        {benefits[currentSlide].title}
                      </h3>
                      
                      <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4 lg:mb-6">
                        {benefits[currentSlide].description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-6 lg:mb-8">
                        <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 lg:px-6 lg:py-3">
                          <span className="text-lg lg:text-2xl font-bold text-black dark:text-white">
                            {benefits[currentSlide].stats}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="order-1 lg:order-2 relative px-4 sm:px-8 lg:px-0"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96">
                      <Image
                        src={benefits[currentSlide].image}
                        alt={benefits[currentSlide].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 lg:left-4 lg:right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-lg pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-lg pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 lg:space-x-3 mt-6 lg:mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-black dark:bg-white scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 