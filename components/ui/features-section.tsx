"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Calendar, 
  AlertTriangle, 
  Mail, 
  Zap, 
  MessageSquare,
  Users,
  TrendingUp,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Customer Analysis",
    description: "Advanced AI analyzes all customer communications to identify sentiment, risks, and opportunities automatically.",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    icon: Calendar,
    title: "Daily Customer Updates",
    description: "Get daily summaries of how each customer is doing, what needs attention, and who's at risk of churning.",
    gradient: "from-green-600 to-green-800"
  },
  {
    icon: AlertTriangle,
    title: "Proactive Risk Detection",
    description: "Spot unhappy customers and potential churn risks before they become problems with intelligent alerts.",
    gradient: "from-red-600 to-red-800"
  },
  {
    icon: Mail,
    title: "Email & Call Monitoring",
    description: "Automatically read and analyze all customer emails and calls to understand sentiment and satisfaction.",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    icon: Zap,
    title: "Project Management Integration",
    description: "Sync with your existing project management tools to get complete visibility into customer relationships.",
    gradient: "from-yellow-600 to-yellow-800"
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Get instant alerts when customers need attention, are unhappy, or present upsell opportunities.",
    gradient: "from-pink-600 to-pink-800"
  },
  {
    icon: Users,
    title: "Team Performance Insights",
    description: "Monitor how your service employees are performing and identify coaching opportunities or praise-worthy actions.",
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    icon: TrendingUp,
    title: "Customer Communication Patterns",
    description: "Track changes in customer communication patterns to identify who needs more attention or follow-up.",
    gradient: "from-teal-600 to-teal-800"
  },
  {
    icon: Globe,
    title: "Upsell Opportunity Detection",
    description: "Identify customers who might be ready for additional services or upgrades based on their interactions.",
    gradient: "from-orange-600 to-orange-800"
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

export function FeaturesSection({ dict }: { dict: any }) {
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
            {dict.features.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {dict.features.description}
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
        </motion.div>
      </div>
    </section>
  );
} 