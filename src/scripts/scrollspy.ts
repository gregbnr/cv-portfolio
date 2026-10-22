// Met en évidence le lien de nav de la section visible (robuste tous navigateurs).
const links = document.querySelectorAll<HTMLAnchorElement>('[data-spy]');
const byId = new Map<string, HTMLAnchorElement[]>();

for (const a of links) {
  const id = (a.getAttribute('data-spy') ?? '').replace('#', '');
  if (!id) continue;
  const list = byId.get(id) ?? [];
  list.push(a);
  byId.set(id, list);
}

const sections = [...byId.keys()]
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => el !== null);

if (sections.length > 0 && 'IntersectionObserver' in window) {
  const clearAll = () => {
    for (const list of byId.values()) {
      for (const a of list) a.removeAttribute('aria-current');
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          clearAll();
          for (const a of byId.get(entry.target.id) ?? []) {
            a.setAttribute('aria-current', 'true');
          }
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  for (const section of sections) observer.observe(section);
}
