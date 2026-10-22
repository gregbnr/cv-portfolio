/**
 * Préfixe un chemin interne par le `base` du site (ex. '/cv-portfolio/').
 * Fonctionne quel que soit le base, y compris '/'.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // se termine toujours par '/'
  return (base + path.replace(/^\/+/, '')).replace(/([^:]\/)\/+/g, '$1');
}
