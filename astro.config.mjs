// @ts-check
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
// import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';
import { defaultLang, languages } from './src/i18n/ui';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://jh-astro-demo.netlify.app',
  
  adapter: netlify({ imageCDN: false }),
  
  server: {
    host: true,
    port: 4321,
    allowedHosts: ['http://localhost:4321/']
  },
 
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
      routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: false,
        fallbackType: "redirect",
      },
  },

    integrations: [mdx(), sitemap()],

  

  /*
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  */
});