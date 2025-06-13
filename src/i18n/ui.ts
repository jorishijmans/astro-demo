

// Localisation languages

// Using only `en: 'English'` works 
export const languages = {
 // British English
  en: 'English (GB)',
  nl: 'Nederlands',
} as const;

// Adding label and lang to languages does not work.
//export const languages = {
//  // British English
//  en: { label: 'English', lang: 'en-GB' },
//  nl: { label: 'Nederlands', lang: 'nl-NL' },
//} as const; // Ensure literal types for 'en' and 'nl'


// Default locale
export const defaultLang = 'en';

export const showDefaultLang = 'true';




export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
  },
  nl: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.about': 'Over',
    'nav.contact': 'Contact',
  },
  /*
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
  */
} as const;


//interface routes {
//  label: string;
//  lang?: string;
//  dir?: 'ltr' | 'rtl';
//}

export const routes = {
  en: {
    'services': 'services',
    'about': 'about',
   },
  nl: {
    'services': 'services',
    'about': 'over',
   },
} as const;