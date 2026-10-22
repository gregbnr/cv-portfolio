import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Non-régression : aucune chaîne d'UI française ne doit fuiter sur la page EN.
// (Lire le build ; relancer `npm run build` avant ce test.)
const enHtml = readFileSync(resolve('dist/en/index.html'), 'utf-8');

describe('page EN — pas de fuite de chaînes FR en dur', () => {
  it('ne contient pas de texte d’UI français', () => {
    expect(enHtml).not.toContain('Lire l’article');
    expect(enHtml).not.toContain('Aller au contenu');
    expect(enHtml).not.toContain('haut de page');
  });
});
