"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Play, Pause, Mail, ArrowRight, Menu, Sun, Moon, Sparkles, Zap, Shield, BarChart3 } from 'lucide-react';
import { Locale } from '@/middleware';
import { LanguageSwitcher } from './language-switcher';

interface NavbarHeroProps {
  brandName?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  backgroundImage?: string;
  videoUrl?: string;
  emailPlaceholder?: string;
  dict: any;
  locale: Locale;
}

const NavbarHero: React.FC<NavbarHeroProps> = ({
  brandName = "nexus",
  heroTitle = "Innovation Meets Simplicity",
  heroDescription = "Discover cutting-edge solutions designed for the modern digital landscape.",
  backgroundImage = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  emailPlaceholder = "enter@email.com",
  dict,
  locale
}) => {
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailSubmit = () => {
    console.log('Email submitted:', email);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setIsVideoPaused(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };
  
  const handleResumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPaused(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  const ThemeToggleButton = () => {
    if (!mounted) return <div className="w-10 h-10" />;
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="backdrop-blur-md bg-white/80 dark:bg-black/80 hover:bg-white/90 dark:hover:bg-black/90 border border-gray-200 dark:border-gray-700 flex-shrink-0 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-black dark:text-white" /> : <Moon className="h-5 w-5 text-black dark:text-white" />}
      </button>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 163, 175, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/10 dark:bg-gray-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-500/10 dark:bg-gray-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-300/10 dark:bg-gray-700/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute w-2 h-2 bg-gray-400/20 dark:bg-gray-600/30 rounded-full animate-float-1 shadow-sm"></div>
        <div className="particle absolute w-1 h-1 bg-gray-500/25 dark:bg-gray-500/35 rounded-full animate-float-2"></div>
        <div className="particle absolute w-1.5 h-1.5 bg-gray-300/20 dark:bg-gray-700/30 rounded-full animate-float-3"></div>
        <div className="particle absolute w-1 h-1 bg-gray-600/15 dark:bg-gray-400/25 rounded-full animate-float-4"></div>
        <div className="particle absolute w-2 h-2 bg-gray-500/20 dark:bg-gray-600/30 rounded-full animate-float-5 shadow-sm"></div>
        <div className="particle absolute w-1 h-1 bg-gray-400/25 dark:bg-gray-500/35 rounded-full animate-float-6"></div>
      </div>

      {/* Subtle animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent animate-slide-right"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 dark:via-gray-500 to-transparent animate-slide-left"></div>
      </div>
      
      <div className="relative z-10">
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* --- Modern Glassmorphism Navbar --- */}
          <div className="py-4 relative z-20">
            <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 shadow-2xl transition-colors duration-300">
              <div className="flex items-center gap-6">
                <a href="#" className="font-bold text-2xl pb-1 text-black dark:text-white cursor-pointer flex-shrink-0 flex items-center gap-2 transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  {brandName}
                </a>
                <nav className="hidden lg:flex text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                  <ul className="flex items-center space-x-2">
                    <li><a href="#features" className="hover:text-black dark:hover:text-white px-4 py-2 text-sm transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">{dict.nav.features}</a></li>
                    <li><a href="#benefits" className="hover:text-black dark:hover:text-white px-4 py-2 text-sm transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Benefits</a></li>
                    <li><a href="#testimonials" className="hover:text-black dark:hover:text-white px-4 py-2 text-sm transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Reviews</a></li>
                    <li><a href="#pricing" className="hover:text-black dark:hover:text-white px-4 py-2 text-sm transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">{dict.nav.pricing}</a></li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-3">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer py-2 px-4 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">{dict.nav.signIn}</a>
                  <a
                    href="http://crm.20api.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 py-3 px-6 text-sm rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {dict.nav.getStarted}<ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <LanguageSwitcher locale={locale} />
                <ThemeToggleButton />
                <div className="lg:hidden relative">
                  <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="backdrop-blur-md bg-white/80 dark:bg-black/80 hover:bg-white/90 dark:hover:bg-black/90 border border-gray-200 dark:border-gray-700 p-3 rounded-xl transition-all duration-300">
                    <Menu className="h-6 w-6 text-black dark:text-white" />
                  </button>
                  {isMobileMenuOpen && (
                    <ul className="absolute top-full right-0 mt-2 p-2 backdrop-blur-md bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-700 rounded-xl w-56 z-30 animate-in slide-in-from-top-2 duration-200">
                      <li><a href="#features" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">{dict.nav.features}</a></li>
                      <li><a href="#benefits" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Benefits</a></li>
                      <li><a href="#testimonials" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">Reviews</a></li>
                      <li><a href="#pricing" className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">{dict.nav.pricing}</a></li>
                      <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 space-y-2">
                        <a href="#" className="block w-full text-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">{dict.nav.signIn}</a>
                        <a
                          href="http://crm.20api.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-3 py-3 text-sm rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300"
                        >
                          {dict.nav.getStarted}<ArrowRight className="h-4 w-4" />
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- Enhanced Hero Section --- */}
          <div className="pt-8 pb-12 sm:pt-12 sm:pb-16 text-center">
            <div className="max-w-4xl mx-auto">

              <h1 className="text-4xl sm:text-6xl md:text-7xl text-black dark:text-white font-bold tracking-tight mb-6 animate-in slide-in-from-bottom-4 duration-1000 transition-colors duration-300">
                {heroTitle}
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-6 duration-1000 delay-200 transition-colors duration-300">
                {heroDescription}
              </p>
              
              {/* CTA Section with enhanced design */}
              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap animate-in slide-in-from-bottom-8 duration-1000 delay-400">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 rounded-full p-1 flex items-center">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <input 
                      type="email" 
                      placeholder={emailPlaceholder} 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium pl-12 pr-4 py-4 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 w-80 transition-colors duration-300"
                    />
                  </div>
                </div>
                <button 
                  onClick={handleEmailSubmit} 
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-base rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {dict.hero.getStarted}<ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* --- Enhanced Media Section --- */}
          <div className="relative group animate-in slide-in-from-bottom-12 duration-1000 delay-800">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <header className="relative w-full aspect-video rounded-3xl overflow-hidden backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 shadow-2xl">
              <Image 
                src={backgroundImage} 
                alt="AI CRM Dashboard Preview" 
                fill
                className={`object-cover transition-all duration-1000 ${isVideoPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`} 
              />
              <video 
                ref={videoRef} 
                src={videoUrl} 
                className={`w-full h-full absolute inset-0 object-cover transition-all duration-1000 ${isVideoPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
                onEnded={handleVideoEnded} 
                playsInline 
                muted 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6 z-10">
                {!isVideoPlaying ? (
                  <button 
                    onClick={handlePlayVideo} 
                    className="w-16 h-16 rounded-full backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white/90 dark:hover:bg-black/90 transition-all duration-300 shadow-xl hover:scale-110 group"
                  >
                    <Play className="h-8 w-8 text-black dark:text-white fill-current ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                ) : (
                  <button 
                    onClick={isVideoPaused ? handleResumeVideo : handlePauseVideo} 
                    className="w-16 h-16 rounded-full backdrop-blur-md bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-white/90 dark:hover:bg-black/90 transition-all duration-300 shadow-xl hover:scale-110 group"
                  >
                    {isVideoPaused ? 
                      <Play className="h-8 w-8 text-black dark:text-white fill-current ml-1 group-hover:scale-110 transition-transform duration-300" /> : 
                      <Pause className="h-8 w-8 text-black dark:text-white fill-current group-hover:scale-110 transition-transform duration-300" />
                    }
                  </button>
                )}
              </div>
            </header>
          </div>
        </div>
      </div>
    </main>
  );
};

export { NavbarHero }; 