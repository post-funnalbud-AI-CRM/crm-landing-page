import { NextRequest } from 'next/server'
 
const locales = ['en', 'sv'] as const
export type Locale = (typeof locales)[number]
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): Locale {
  // Check if locale is in the URL (e.g., /sv/page)
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameLocale) return pathnameLocale
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = locales.find(locale => 
      acceptLanguage.toLowerCase().includes(locale)
    )
    if (preferredLocale) return preferredLocale
  }
  
  return 'en' // Default locale
}
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return Response.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}
 
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!_next|api|favicon.ico).*)']
}
