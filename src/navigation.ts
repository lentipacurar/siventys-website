import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

export const locales = ['ro', 'en', 'fr', 'de', 'hu'] as const;
export const localePrefix = 'always'; // Always display the locale prefix

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathnames, use
  // the special `'/'` key to specify this.
  '/': '/',
  '/about': {
    ro: '/despre-noi',
    en: '/about-us',
    fr: '/a-propos-de-nous',
    de: '/uber-uns',
    hu: '/rolunk'
  },
  '/ai-agents': {
    ro: '/agenti-ai',
    en: '/ai-agents',
    fr: '/agents-ia',
    de: '/ki-agenten',
    hu: '/ai-ugynokok'
  },
  '/custom-solutions': {
    ro: '/solutii-personalizate',
    en: '/custom-solutions',
    fr: '/solutions-personnalisees',
    de: '/kundenspezifische-losungen',
    hu: '/egyedi-megoldasok'
  },
   '/contact': {
    ro: '/contact',
    en: '/contact',
    fr: '/contact',
    de: '/kontakt',
    hu: '/kapcsolat'
  }
} satisfies Pathnames<typeof locales>;

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});
