// Available languages
export const languages = {
  'en-GB': 'English (GB)',
  'nl-NL': 'Nederlands',
 /* fr: 'Français', */
};

// Set default website language
export const defaultLang = 'en-GB';

// Show default language
export const showDefaultLang = true;

export const ui = {
  'en-GB': {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
  },
  'nl-NL': {
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

type routes = {
  services: string;
  about:    string;
};

export const routes: Record<string, routes> = {
  'nl-NL': {
    'services': 'services',
    'about': 'over',
   },

} as const;

export type route = keyof routes;

