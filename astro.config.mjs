// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://clickculturedigital.com',
  integrations: [react(), sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()]
  }
});