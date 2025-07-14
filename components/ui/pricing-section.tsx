"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small teams getting started with CRM",
    features: [
      "Up to 1,000 contacts",
      "Basic email automation",
      "Standard reporting",
      "24/7 email support",
      "Mobile app access",
      "Basic integrations (5)",
      "1 user account"
    ],
    popular: false,
    gradient: "from-gray-500 to-gray-700"
  },
  {
    name: "Professional", 
    price: "$79",
    period: "per month",
    description: "Most popular choice for growing businesses",
    features: [
      "Up to 10,000 contacts",
      "Advanced AI automation",
      "Real-time analytics",
      "Priority phone support",
      "Custom workflows",
      "Advanced integrations (25)",
      "Up to 5 user accounts",
      "Lead scoring",
      "A/B testing"
    ],
    popular: true,
    gradient: "from-gray-700 to-gray-900"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month", 
    description: "Advanced features for large organizations",
    features: [
      "Unlimited contacts",
      "Full AI suite",
      "Custom reporting",
      "Dedicated success manager",
      "White-label options",
      "Unlimited integrations",
      "Unlimited users",
      "Advanced security (SSO)",
      "API access",
      "Custom training"
    ],
    popular: false,
    gradient: "from-gray-600 to-gray-800"
  }
];

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

export function PricingSection() {
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core CRM features with no hidden fees.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
            <button className="px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-all duration-300">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-black dark:hover:text-white transition-all duration-300">
              Annual <span className="text-green-600 dark:text-green-400">(Save 20%)</span>
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
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${plan.popular ? 'md:scale-110 z-10' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`backdrop-blur-md bg-white/80 dark:bg-black/80 border-2 ${
                plan.popular 
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
                      plan.popular
                        ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {plan.popular ? (
                      <span className="flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5" />
                        Start Free Trial
                      </span>
                    ) : (
                      'Get Started'
                    )}
                  </motion.button>
                </div>

                {/* Features list */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-black dark:text-white mb-4">
                    Everything included:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
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
          ))}
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
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ Money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 