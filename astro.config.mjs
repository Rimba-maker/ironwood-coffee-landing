// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: '/ironwood-coffee-landing',
  integrations: [
    react(),
    icon({
      include: {
        solar: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
