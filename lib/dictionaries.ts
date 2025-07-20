import 'server-only'
 
type Locale = 'en' | 'sv'
 
const dictionaries = {
  en: () => import('@/public/locales/en/common.json').then((module) => module.default),
  sv: () => import('@/public/locales/sv/common.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.en()
}
