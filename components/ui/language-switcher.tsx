"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/middleware';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  locale: Locale;
}

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' }
] as const;

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Remove the locale from the pathname to get the path without locale
  const pathWithoutLocale = pathname.split('/').slice(2).join('/') || '';

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {locales.find(l => l.code === locale)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 py-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {locales.map((lng) => (
          <Link
            key={lng.code}
            href={`/${lng.code}/${pathWithoutLocale}`}
            className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              lng.code === locale 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-lg">{lng.flag}</span>
            <span className="font-medium">{lng.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
