"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue by 40%",
    description: "Our AI algorithms identify high-value prospects and optimize your sales funnel for maximum conversion rates.",
    stats: "40% Average Revenue Increase",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    icon: Clock,
    title: "Save 25+ Hours Per Week",
    description: "Automate repetitive tasks, streamline workflows, and let your team focus on building relationships.",
    stats: "25+ Hours Saved Weekly",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    icon: Users,
    title: "Improve Team Productivity",
    description: "Centralized communication, task management, and performance tracking boost team efficiency.",
    stats: "300% Productivity Boost",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    gradient: "from-gray-500 to-gray-700"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced security protocols protect your data.",
    stats: "99.9% Uptime Guarantee",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    gradient: "from-gray-700 to-gray-900"
  }
];

export function BenefitsSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isAutoPlay]);

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
            Transform Your Business Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See the measurable impact CRM AI can have on your business performance and growth.
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
                  {/* Content */}
                  <div className="space-y-8 px-8 lg:px-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefits[currentSlide].gradient} flex items-center justify-center mb-6`}>
                        {React.createElement(benefits[currentSlide].icon, { className: "w-10 h-10 text-white" })}
                      </div>
                      
                      <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                        {benefits[currentSlide].title}
                      </h3>
                      
                      <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {benefits[currentSlide].description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-3">
                          <span className="text-2xl font-bold text-black dark:text-white">
                            {benefits[currentSlide].stats}
                          </span>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                      <Image
                        src={benefits[currentSlide].image}
                        alt={benefits[currentSlide].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-lg pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-black dark:text-white hover:bg-white dark:hover:bg-black transition-all duration-300 shadow-lg pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
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