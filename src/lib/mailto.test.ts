import { describe, it, expect } from 'vitest';
import { buildMailto } from './mailto';

describe('buildMailto', () => {
  it('encode objet et corps dans l’URL mailto', () => {
    const url = buildMailto(
      'gmfbonnier.pro@gmail.com',
      'Offre & poste',
      'Bonjour,\nContact via le site?'
    );
    expect(url).toBe(
      'mailto:gmfbonnier.pro@gmail.com?subject=Offre%20%26%20poste&body=Bonjour%2C%0AContact%20via%20le%20site%3F'
    );
  });

  it('gère objet et corps vides', () => {
    expect(buildMailto('a@b.com', '', '')).toBe('mailto:a@b.com?subject=&body=');
  });
});
