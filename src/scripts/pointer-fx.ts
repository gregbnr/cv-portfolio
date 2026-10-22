// Spotlight qui suit le pointeur sur les éléments [data-spotlight].
// Enrichissement progressif : désactivé si reduced-motion ou pointeur non fin.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(pointer: fine)').matches;

if (!reduce && fine) {
  for (const el of document.querySelectorAll<HTMLElement>('[data-spotlight]')) {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
      });
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerenter', () => el.style.setProperty('--spot', '1'));
    el.addEventListener('pointerleave', () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.setProperty('--spot', '0');
    });
  }
}
