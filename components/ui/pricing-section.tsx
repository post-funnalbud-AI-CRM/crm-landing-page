"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export function PricingSection({ dict }: { dict: any }) {
  const plansData = dict.pricing.plans;
  const planGradients = ["from-gray-500 to-gray-700", "from-gray-700 to-gray-900", "from-gray-600 to-gray-800"];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-6">
            {dict.pricing.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            {dict.pricing.description}
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-all duration-300">
              {dict.pricing.monthly}
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-black dark:hover:text-white transition-all duration-300">
              {dict.pricing.annually} <span className="text-green-600 dark:text-green-400">({dict.pricing.save})</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plansData.map((plan: any, index: number) => {
            const isPopular = index === 1; // Professional plan
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${isPopular ? 'md:scale-110 z-10' : ''}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      {dict.pricing.popular}
                    </div>
                  </div>
                )}

                <div className={`backdrop-blur-md bg-white/80 dark:bg-black/80 border-2 ${
                  isPopular 
                    ? 'border-black dark:border-white shadow-2xl' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                } rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl`}>
                  
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-black dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 ${
                        isPopular
                          ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {isPopular ? (
                        <span className="flex items-center justify-center gap-2">
                          <Zap className="w-5 h-5" />
                          {dict.pricing.startFreeTrial}
                        </span>
                      ) : (
                        dict.pricing.getStarted
                      )}
                    </motion.button>
                  </div>

                  {/* Features list */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-black dark:text-white mb-4">
                      {dict.pricing.everythingIncluded}
                    </h4>
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FAQ or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {dict.pricing.freeTrial}
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
            {dict.pricing.guarantees.map((guarantee: string, index: number) => (
              <span key={index}>✓ {guarantee}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 