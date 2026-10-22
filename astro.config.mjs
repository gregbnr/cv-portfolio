// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL publique GitHub Pages (dépôt projet gregbnr/cv-portfolio).
  // Pour une URL racine, créer un dépôt `gregbnr.github.io` et mettre base: '/'.
  site: 'https://gregbnr.github.io',
  base: '/cv-portfolio/',
  output: 'static',
  // On n'optimise aucune image au build (l'OG est un fichier statique), donc on
  // évite sharp (module natif) — plus léger et pas de chargement natif en CI.
  image: { service: passthroughImageService() },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
