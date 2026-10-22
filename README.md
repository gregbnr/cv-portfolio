# CV / Portfolio — Grégoire Bonnier

CV en ligne, interactif et moderne de **Grégoire Bonnier**, développeur d'applications mobiles (Android puis Flutter). Le site sert de carte de visite à envoyer aux recruteurs : il présente le parcours, les apps livrées, les compétences et le projet phare — tout en **démontrant par l'exemple** la maîtrise front/mobile (perf, accessibilité, animations soignées).

🔗 **En ligne :** https://gregbnr.github.io/cv-portfolio/

---

## ✨ Fonctionnalités

- **Single-page** au scroll, **bilingue FR / EN** (routes `/` et `/en/`, `hreflang`).
- **Thème clair / sombre** sans flash au chargement (`color-scheme` + `light-dark()`), basé sur une direction visuelle « violet néon ».
- **Hero animé** : fenêtre de code Flutter qui s'écrit en **machine à écrire**, aurora animée et **parallax** au scroll.
- **Spotlight au curseur** (hero, mockups d'apps, carte GenUI) et **apparitions de sections** au scroll.
- **Apps en mockups de téléphone** (MGEN, Citeo, Franprix, FieldPro) cliquables vers les stores.
- **Projet phare GenUI** (POC Flutter / A2UI), articles, hobbies.
- **Contact** via `mailto:` pré-rempli (aucun back-end) + copier l'email + LinkedIn.
- **Faux chatbot IA** : un clin d'œil humoristique (il promet de l'aide… puis répond une punchline 😏).
- **Accessibilité** WCAG AA, `prefers-reduced-motion` respecté, enrichissement progressif (le contenu reste lisible sans JS / sur navigateurs sans scroll-driven animations).
- **Perf** : Lighthouse **100 / 100 / 100 / 100** (Performance, Accessibilité, Best Practices, SEO).

---

## 🛠️ Stack technique

- **[Astro](https://astro.build/)** (sortie 100 % statique)
- **TypeScript**
- **CSS natif** : design tokens (custom properties), `light-dark()`, scroll-driven animations, `:has()`, container/viewport units — sans framework CSS
- **Vitest** (test unitaire de l'utilitaire `mailto`)
- Contenu typé dans `src/data/{fr,en}.ts` (aucune base de données)
- **Déploiement** : GitHub Pages via **GitHub Actions** (build sur Node 24)
- Bonnes pratiques web vérifiées avec le skill **modern-web-guidance**

---

## 🚀 Développement

```bash
npm install
npm run dev      # serveur de dev
npm run build    # build statique (dossier dist/)
npm run preview  # prévisualise le build
npm run check    # vérification des types (astro check)
npm test         # tests unitaires (vitest)
```

Le déploiement est automatique : chaque `git push` sur la branche `main` déclenche le workflow GitHub Actions qui build et publie sur GitHub Pages.

---

## 📁 Structure

```
src/
  data/         # contenu FR/EN typé (SiteContent)
  components/   # Hero, HeroCode, AppsShowcase, GenUI, Contact, ChatBot, …
  layouts/      # Base.astro (SEO, thème anti-FOUC) + Home.astro (assemblage)
  styles/       # tokens.css, global.css, motion.css, fx.css
  lib/          # mailto.ts (+ test), url.ts (base-aware)
  scripts/      # scrollspy, pointer-fx, contact
public/         # CV PDF, favicon, image Open Graph
docs/superpowers/  # spec de design + plan d'implémentation
```

---

## 🤖 À propos de la création

Ce site a été **conçu et développé intégralement par Claude** (Anthropic), de la page blanche à la mise en ligne, au cours d'une session de pair-programming avec Grégoire.

La méthode a suivi le plugin **[Superpowers](https://github.com/obra/superpowers)** :

1. **Brainstorming** — cadrage des besoins, de l'identité visuelle et des choix techniques (avec un compagnon visuel pour comparer les pistes).
2. **Spec de design** écrite et validée (`docs/superpowers/specs/`).
3. **Plan d'implémentation** découpé en tâches (`docs/superpowers/plans/`).
4. **Exécution en TDD** tâche par tâche, commits fréquents.
5. **Revue de code** finale de toute la branche par un relecteur indépendant.

En complément, Claude s'est appuyé sur :

- le skill **`modern-web-guidance`** — pour appliquer les pratiques web les plus à jour (scroll-driven animations, `light-dark()`, parallax, spotlight au pointeur, Core Web Vitals, accessibilité…) ;
- le skill **`claude-automation-recommender`** — pour proposer les automatisations utiles au projet ;
- une **revue de sécurité** dédiée (aucune vulnérabilité exploitable sur ce site statique).

Les itérations visuelles (animations, chatbot, finitions) ont été faites en local, prévisualisées, puis validées avant chaque mise en ligne.

---

*Réalisé avec [Claude](https://claude.com/claude-code) 🤖 — contenu et direction : Grégoire Bonnier.*
