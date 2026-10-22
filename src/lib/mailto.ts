/**
 * Construit une URL `mailto:` avec objet et corps encodés.
 * Ouvre le client mail par défaut avec les champs pré-remplis.
 */
export function buildMailto(to: string, subject: string, body: string): string {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${params}`;
}
