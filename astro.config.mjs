import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.stacksandjoules.org',
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@hooks': '/src/hooks',
        '@utils': '/src/utils',
        '@types': '/src/types',
        '@assets': '/src/assets',
      },
    },
  },
});
