"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" }
];

export function FooterSection({ dict }: { dict: any }) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Company info and newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {/* Trellin Logo */}
                  <img 
                    src="/logo.png" 
                    alt="Trellin Logo" 
                    className="w-12 h-12 rounded-full mr-2"
                    onError={(e) => console.error('Logo failed to load:', e)}
                    onLoad={() => console.log('Logo loaded successfully')}
                  />
                  <span className="text-2xl font-bold text-black dark:text-white">
                    {dict.nav.brand}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                  {dict.footer.description}
                </p>
              </div>

              {/* Newsletter signup */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  {dict.footer.stayUpdated}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {dict.footer.newsletterDescription}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={dict.footer.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    {dict.footer.subscribe}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>{dict.footer.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>{dict.footer.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{dict.footer.contact.address}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  {dict.footer.links.product.title}
                </h3>
                <ul className="space-y-3">
                  {dict.footer.links.product.items.map((linkName: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  {dict.footer.links.company.title}
                </h3>
                <ul className="space-y-3">
                  {dict.footer.links.company.items.map((linkName: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  {dict.footer.links.resources.title}
                </h3>
                <ul className="space-y-3">
                  {dict.footer.links.resources.items.map((linkName: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                  {dict.footer.links.legal.title}
                </h3>
                <ul className="space-y-3">
                  {dict.footer.links.legal.items.map((linkName: string, index: number) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                      >
                        {linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              {dict.footer.copyright}
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 