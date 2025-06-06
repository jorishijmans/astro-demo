// @ts-check
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-demo.jorishijmans.com',
  integrations: [mdx(), sitemap()],
  adapter: netlify({ imageCDN: false }),
  
  server: {
    host: true,
    port: 4321,
    allowedHosts: ['http://localhost:4321/'] 
  },

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