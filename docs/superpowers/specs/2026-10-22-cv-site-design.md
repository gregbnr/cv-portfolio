# CV site — Grégoire Bonnier — Design / Spec

**Date :** 2026-10-22
**Auteur :** Grégoire Bonnier (avec Claude)
**Statut :** En relecture

---

## 1. Contexte & objectif

Grégoire Bonnier, **développeur d'applications mobiles Senior** (Android puis Flutter, 6 ans
d'expérience), souhaite transformer son CV PDF en **site web** dont il enverra le lien aux
employeurs. Le site doit lui-même **démontrer** sa maîtrise mobile/front : moderne, interactif,
rapide, accessible, et robuste sur tous les navigateurs.

**Public cible :** tous employeurs / recruteurs du secteur mobile (générique, pas ciblé Betclic).
Lecture souvent rapide, sur desktop comme mobile.

**Critères de succès :**
- Un **lien unique** à envoyer, qui se consulte d'un trait (single-page au scroll).
- Rendu **« wow » mais lisible** : impact immédiat, infos trouvées en quelques secondes.
- Montre les points forts : **apps livrées** et **projet GenUI**.
- **Perf et accessibilité exemplaires** (le site est une vitrine des compétences).
- **Facile à mettre à jour** (contenu dans des fichiers de données).
- **Bilingue FR/EN**.

**Hors scope (pour cette version) :** blog/CMS, back-end, base de données, analytics,
authentification, pages d'études de cas détaillées par app, génération d'un PDF EN.

---

## 2. Décisions validées (récapitulatif brainstorming)

| Sujet | Décision |
|---|---|
| Cible | Tous employeurs (générique) |
| Langues | Bilingue **FR + EN** (FR par défaut) |
| Profondeur de contenu | **Enrichi** : CV + mise en avant apps + projet GenUI + articles |
| Style visuel | **Moderne & tech — « Violet néon »** (direction B) |
| Structure | **Single-page** au scroll + ADN mobile (apps en mockups téléphone) |
| Techno | **Astro**, statique |
| Hébergement | Sous-domaine gratuit (Vercel ou GitHub Pages — tranché au déploiement) |
| Contact | Formulaire → `mailto:` pré-rempli (pas de back-end) |
| Photo / captures d'apps | Fournies plus tard (emplacements prévus) |

---

## 3. Inventaire de contenu

### 3.1 Identité
- **Nom :** Grégoire Bonnier
- **Titre :** Développeur Flutter Senior / Développeur d'applications mobiles
- **Localisation :** Bordeaux · Permis B
- **Langues :** Français (natif), Anglais B1
- **Email de contact :** `gmfbonnier.pro@gmail.com`
- **LinkedIn :** https://www.linkedin.com/in/gregoire-bonnier/
- **GitHub :** _non inclus (volontairement)_
- **Accroche (FR) :** « Je conçois des apps mobiles utilisées par des millions de personnes. »
  6 ans d'expérience · Flutter & Android · grands comptes.

### 3.2 Expériences (timeline, de la plus récente à la plus ancienne)
1. **2022 – aujourd'hui · Useradgents** — Développeur Flutter & Android — Bordeaux
   Apps grands comptes (MGEN, Franprix, LFP, FFF…), TMA & TME, création d'une nouvelle app
   Flutter (Clean Archi, Design System, Accessibilité), rédaction d'articles & sessions tech,
   documentation technique, industrialisation du processus de dev.
2. **2020 – 2022 · Optimetriks (FieldPro)** — Développeur Android (alternance) — Paris
   Modularisation de l'app Android, TMA & TME, participation design, tests unitaires &
   automatisés, documentation technique & managériale, animation réunions Agile ScrumBan.
3. **2018 – 2020 · Wonderstudios** — Développeur Web junior (alternance) puis Chef de projet (CDI) — Paris
   Bannières publicitaires web, graphic design, relation & négociation client, conseil UX/UI,
   production de contenu web, rapports & recommandations stratégiques.
4. **2017 – 2018 · Autres** — 2 stages développeur web junior.

### 3.3 Apps réalisées (section ⭐ — mockups téléphone)
| App | Techno | Stores |
|---|---|---|
| **MGEN** | Flutter | [Play Store](https://play.google.com/store/apps/details?id=com.mgen.v2&hl=fr) · [App Store](https://apps.apple.com/ma/app/mgen/id1669524120?l=fr-FR&platform=watch) |
| **Citeo · Guide du tri** | Flutter | [Play Store](https://play.google.com/store/apps/details?id=fr.ecoemballage.guidedutri&hl=fr) · [App Store](https://apps.apple.com/fr/app/guide-du-tri-s%C3%A9lectif/id485709444) |
| **Franprix** | Android | [Play Store](https://play.google.com/store/apps/details?id=com.franprix.catalogue&hl=fr) |
| **FieldPro** | Android | [Play Store](https://play.google.com/store/apps/details?id=com.optimetriks.fieldpro&hl=fr) |

- Libellés des badges : **« Play Store »** et **« App Store »** en toutes lettres.
- Écrans **stylisés (placeholders)** dans un premier temps ; structure prête à accueillir de
  vraies captures plus tard (une image par app, format portrait 9:16).

### 3.4 Compétences (regroupées)
- **Langages :** Dart, Kotlin, Swift (notions)
- **State management :** BLoC / Cubit, Riverpod (notions)
- **Industrialisation :** Clean Architecture, Mason, DCM Linter, GitHub Copilot, Localize
- **Outils & DevOps :** Jira, Confluence, GitLab, Bitbucket, Bitrise, SonarQube, Tracking,
  Firebase, Play Console, App Store Connect, Accessibilité

### 3.5 Projet phare — GenUI (section ⭐)
- **POC Flutter GenUI** : génération d'interfaces dynamiques pilotées par l'IA via le protocole
  **A2UI**, sans compromis sur le design system.
- **Intervention chez Betclic** sur le sujet — lien post LinkedIn : https://lnkd.in/p/eUtqAk_x

### 3.6 Articles & veille
- *Android 16 : 5 nouveautés à retenir* — https://www.useradgents.com/actu/6412-android-16-5-nouveautes-a-retenir-de-la-nouvelle-version-de-los-pour-vos-applications-mobiles
- *GenUI : et si on laissait la machine composer l'interface en temps réel* — https://www.useradgents.com/actu/7718-genui-et-si-on-laissait-la-machine-composer-linterface-en-temps-reel

### 3.7 Formations
- **2020 – 2022 · SUPDEWEB** — Master 1 & 2 Développement Mobile
- **2018 – 2019 · HETIC** — Bachelor Web
- **2016 – 2018 · Lycée Polyvalent Le Rebours** — BTS SIO

### 3.8 Hobbies
Football · Rugby · Cuisine (fin gourmet) · Chant polyphonique

### 3.9 À fournir ultérieurement (placeholders dans le code)
- Photo de profil (portrait).
- Vraies captures d'écran des apps.
- Relecture / correction des textes **EN** (1re version rédigée par Claude).
- (Optionnel plus tard) version **EN** du CV PDF.

---

## 4. Structure de la page (single-page)

Navigation sticky en haut (ancres + toggle FR/EN + toggle thème + bouton « Télécharger le CV »).
Ordre validé :

1. **Hero** — nom, titre, accroche, 2 CTA (Me contacter / Télécharger le CV), méta
   (Bordeaux · Anglais B1 · Permis B), téléphone décoratif, fond en dégradé subtilement animé.
2. **À propos** — photo + pitch (6 ans, grands comptes, ce qu'il recherche).
3. **Expériences** — timeline verticale animée au scroll.
4. **⭐ Apps réalisées** — grille de mockups téléphone cliquables vers les stores.
5. **Compétences** — catégories visuelles (langages, state management, industrialisation, DevOps).
6. **⭐ Projet phare — GenUI** — mise en avant forte + lien intervention Betclic.
7. **Articles & veille** — cartes cliquables.
8. **Hobbies** — touche humaine.
9. **Contact** — formulaire mailto + « copier l'email » + LinkedIn.
+ **Footer** — mentions légères, lien haut de page.

Les sections **⭐ (Apps & GenUI)** sont les plus travaillées (ce sont les points forts).

---

## 5. Design visuel — « Violet néon » (direction B)

**Ambiance :** fond noir profond, dégradés violet → magenta, halos (glow), glassmorphism léger.
Audacieux et mémorable, tout en restant lisible.

### Design tokens (valeurs de référence)

**Mode sombre (défaut)**
- `--bg` : `#0B0712` · `--surface` : `#120A1C`
- `--violet` : `#A855F7` · `--pink` : `#EC4899`
- `--accent-text` : `#E9A7FF` · dégradé titres : `#C084FC → #F472B6`
- `--ink` : `#FBF5FF` · `--muted` : `#C9A9DB`
- Bordures : `rgba(168,85,247,0.25–0.5)`

**Mode clair**
- `--bg` : `#FBF7FF` · `--surface` : `#FFFFFF`
- Accents violet/magenta conservés (versions un peu plus foncées pour le contraste AA)
- `--ink` : `#1A1024` · `--muted` : `#5B4A6B`

> Les couleurs seront définies en **tokens CSS** (custom properties) et basculées via
> `light-dark()` / `color-scheme`. Tous les couples texte/fond devront passer le contraste
> **WCAG AA** (vérifié à l'implémentation — attention au violet sur fond sombre).

**Typographie :** une police titres à fort caractère (ex. *Space Grotesk* / *Sora*) + une police
corps lisible (ex. *Inter*), auto-hébergées. (Choix final à l'implémentation.)

**Traitements signature :** dégradé violet→magenta sur le nom et les CTA primaires, halos radiaux,
cartes en glassmorphism, mockups téléphone avec glow.

---

## 6. Architecture technique

### 6.1 Stack
- **Astro** (dernière version stable), sortie **statique** (`output: 'static'`).
- **TypeScript** pour les données et utilitaires.
- **CSS natif** avec design tokens (custom properties), nesting, `light-dark()`,
  container queries si utile. Pas de framework CSS lourd.
- **JS vanilla minimal** (toggles thème/langue, menu mobile, builder mailto, fallback scrollspy).
- Polices **auto-hébergées** (`font-display: swap`, préchargement de la police critique).

### 6.2 Arborescence cible
```
src/
  data/
    fr.ts            # tout le contenu FR (typé)
    en.ts            # tout le contenu EN (même forme)
    types.ts         # types partagés (Experience, App, Article, SkillGroup…)
  components/
    Nav.astro  Hero.astro  About.astro  ExperienceTimeline.astro
    AppsShowcase.astro  PhoneMockup.astro  Skills.astro  GenUI.astro
    Articles.astro  Hobbies.astro  Contact.astro  Footer.astro
    ThemeToggle.astro  LangToggle.astro
  layouts/
    Base.astro       # <head>, SEO/OG, tokens CSS globaux, script anti-FOUC thème
  pages/
    index.astro      # FR (défaut)
    en/index.astro   # EN
  styles/
    tokens.css  global.css
  lib/
    mailto.ts        # construit l'URL mailto (encodage) — testé unitairement
public/
  cv/CV_Gregoire-BONNIER.pdf
  img/ (photo, captures apps, og-image)
  favicon
astro.config.mjs     # i18n: locales ['fr','en'], defaultLocale 'fr'
```

### 6.3 Internationalisation (i18n)
- Deux pages **pré-générées** : `/` (FR) et `/en/`. Meilleur SEO, pas de clignotement.
- Contenu dans `fr.ts` / `en.ts` (même interface typée) ; les composants reçoivent les données
  de la locale courante en props.
- Toggle FR/EN = lien vers l'URL équivalente de l'autre langue.
- `<html lang>` et balises `hreflang` correctes.
- **1re version EN rédigée par Claude**, à relire par Grégoire.

### 6.4 Thème clair/sombre
- **Sombre par défaut**. Respecte `prefers-color-scheme` au 1er chargement.
- Toggle utilisateur mémorisé en `localStorage`, appliqué via un attribut sur `<html>` +
  `color-scheme` / `light-dark()`.
- **Script anti-FOUC** inline dans `<head>` (applique le thème avant le premier paint).

### 6.5 Animations (enrichissement progressif)
- **Contenu toujours visible par défaut** ; les animations ne font que sublimer.
- Reveals au scroll via **scroll-driven animations CSS** (`animation-timeline: view()`),
  encapsulées dans `@supports ((animation-timeline: view()) and (animation-range: entry))`.
  Firefox (non supporté) affiche le contenu statiquement — acceptable (décoratif).
- `@media (prefers-reduced-motion: reduce)` : animations coupées/atténuées au cas par cas
  (pas de reset global brutal).
- On n'anime que `opacity` / `transform` (thread compositeur).
- Nav active (scrollspy) : `IntersectionObserver` (robuste tous navigateurs).

### 6.6 Contact (mailto)
- Mini-formulaire : champs **Objet** et **Message**.
- À l'envoi, un util `lib/mailto.ts` construit
  `mailto:gmfbonnier.pro@gmail.com?subject=<encodé>&body=<encodé>` et déclenche l'ouverture du
  client mail par défaut.
- **Secours** : bouton « Copier mon email » (Clipboard API) + lien **LinkedIn** visible.
- Aucun back-end, aucun service tiers.

---

## 7. Performance & accessibilité

**Performance (objectif Lighthouse ≥ 95)**
- Hero optimisé pour le **LCP** (priorité de chargement, pas d'image lourde bloquante).
- Images en **AVIF/WebP**, responsive (`srcset`/tailles), lazy-loading hors écran.
- JS minimal, pas de dépendance runtime lourde.
- Polices préconnectées / préchargées, `font-display: swap`.

**Accessibilité (objectif WCAG AA)**
- HTML sémantique (`header`, `nav`, `main`, `section`, `h1…h3` cohérents).
- Navigation **clavier** complète, `:focus-visible` nets, skip-link.
- Toggles thème/langue avec labels ARIA.
- Contrastes AA vérifiés (palette violet). `prefers-reduced-motion` respecté.
- Formulaire : labels associés, feedback après interaction (`:user-valid`/`:user-invalid`).

---

## 8. Hébergement & déploiement
- Build statique (`astro build` → `dist/`).
- Déploiement **gratuit** : **Vercel** (déploiement auto sur push, URL `*.vercel.app`) **ou**
  **GitHub Pages** — choix tranché au moment du déploiement (nécessitera la création d'un compte
  gratuit par Grégoire).
- Possibilité de brancher un **nom de domaine perso** plus tard sans refonte.

---

## 9. Vérification (tests d'un site vitrine)
- **Build** sans erreur + `astro check` (types) au vert.
- **Test unitaire** de `lib/mailto.ts` (encodage correct de l'objet/message, caractères spéciaux)
  — approche TDD sur ce seul vrai morceau de logique.
- **Lighthouse** (perf, a11y, best practices, SEO) ≥ 95 sur mobile & desktop.
- **axe** (accessibilité) sans violation bloquante.
- **Rendu multi-navigateurs** : Chrome, Firefox (vérifier le fallback sans scroll-animation),
  Safari ; **responsive** testé à largeur mobile.
- **Liens** (stores, articles, LinkedIn, PDF) valides.

---

## 10. Risques & points ouverts
- **Contraste du violet néon** sur certains textes → ajuster les tokens si AA non atteint.
- **mailto** : dépend du client mail par défaut du poste → le bouton « copier l'email » couvre ce cas.
- **Captures d'apps réelles** indisponibles → placeholders stylisés, remplaçables sans refonte.
- **Qualité des textes EN** → à faire relire par Grégoire (anglais B1).
- **Lien `lnkd.in`** (raccourci) pour le post GenUI/Betclic → conservé tel quel.

---

## 11. Étapes suivantes
1. Relecture de cette spec par Grégoire.
2. Rédaction du **plan d'implémentation** (skill `writing-plans`).
3. Implémentation (TDD sur `mailto`, enrichissement progressif), vérification, puis déploiement.
