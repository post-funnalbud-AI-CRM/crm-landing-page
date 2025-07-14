"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  MessageSquare,
  BarChart3,
  Clock,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze customer behavior patterns to provide actionable insights and predictions.",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    icon: Users,
    title: "Customer 360° View",
    description: "Complete customer profiles with interaction history, preferences, and predictive analytics in one unified dashboard.",
    gradient: "from-gray-500 to-gray-700"
  },
  {
    icon: TrendingUp,
    title: "Sales Forecasting",
    description: "Accurate revenue predictions and sales pipeline analysis powered by historical data and market trends.",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and advanced security protocols to protect your sensitive data.",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks, email sequences, and follow-ups to increase productivity by up to 300%.",
    gradient: "from-gray-500 to-gray-700"
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Communication",
    description: "Centralized communication hub supporting email, SMS, social media, and live chat in one platform.",
    gradient: "from-gray-700 to-gray-900"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboards with customizable KPIs, conversion tracking, and performance metrics that update instantly.",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI-optimized meeting scheduling, task prioritization, and resource allocation for maximum efficiency.",
    gradient: "from-gray-500 to-gray-700"
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Multi-language support, currency conversion, and region-specific compliance for worldwide operations.",
    gradient: "from-gray-700 to-gray-900"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.3) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
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
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to transform customer relationships, boost sales, and scale your business with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/60 dark:bg-black/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 