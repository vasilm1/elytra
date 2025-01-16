import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // Specify all available locales
  locales: locales,
  // Used when no locale matches
  defaultLocale,
  // Disable prefix for default locale
  localePrefix: 'as-needed'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - ... if they start with `/api`, `/_next` or `/_vercel`
    // - ... if they contain a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\.[^/]*$).*)'
  ]
}; 