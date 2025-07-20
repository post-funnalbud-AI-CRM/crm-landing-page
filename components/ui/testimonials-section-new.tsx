"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Locale } from '@/middleware';

interface TestimonialsSectionProps {
  dict: any;
  locale: Locale;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function TestimonialsSection({ dict, locale }: TestimonialsSectionProps) {
  const testimonials = dict.testimonials.testimonials.map((testimonial: any, index: number) => ({
    ...testimonial,
    rating: 5,
    image: `https://images.unsplash.com/photo-${[
      '1507003211169-0a1dd7228f2d',
      '1494790108755-2616b2e11d3e', 
      '1472099645785-5658abf4ff4e',
      '1438761681033-6461ffad8d80',
      '1560250097-0b93528c311a',
      '1487412720507-e7ab37603c6f'
    ][index]}?w=150&h=150&fit=crop&crop=face`
  }));

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6">
            {dict.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dict.testimonials.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-6" />
                
                {/* Testimonial text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                {/* Author info */}
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-gray-300 dark:group-hover:ring-gray-600 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-black dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: dict.testimonials.stats.users, label: dict.testimonials.stats.usersLabel },
            { number: dict.testimonials.stats.satisfaction, label: dict.testimonials.stats.satisfactionLabel },
            { number: dict.testimonials.stats.roi, label: dict.testimonials.stats.roiLabel },
            { number: dict.testimonials.stats.support, label: dict.testimonials.stats.supportLabel }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
