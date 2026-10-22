// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL publique GitHub Pages (dépôt projet gregbnr/cv-portfolio).
  // Pour une URL racine, créer un dépôt `gregbnr.github.io` et mettre base: '/'.
  site: 'https://gregbnr.github.io',
  base: '/cv-portfolio/',
  output: 'static',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
