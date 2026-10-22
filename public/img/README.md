# Images du site

Emplacements à remplir par Grégoire :

- Photo de profil : elle est désormais dans `src/assets/profile-image.webp` et
  affichée via le composant `<Image>` dans `src/components/About.astro`
  (optimisée, 600×600). Pour la changer, remplacer ce fichier (idéalement déjà
  redimensionné ~600px).
- `apps/*.png` — vraies captures d'écran des apps (format portrait ~1080×1920).
  Une fois ajoutées, renseigner `screenshot` dans `src/data/fr.ts` / `en.ts`
  (champ `AppItem.screenshot`).
- `og-image.jpg` — image de partage (Open Graph) 1200×630, déjà générée.
  Régénérable si le design du hero évolue.
