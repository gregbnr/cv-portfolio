import { buildMailto } from '../lib/mailto';

const form = document.getElementById('contact-form') as HTMLFormElement | null;
const copyBtn = document.getElementById('copy-email');

if (form) {
  const email = form.dataset.email ?? '';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');
    window.location.href = buildMailto(email, subject, message);
  });
}

if (copyBtn instanceof HTMLButtonElement) {
  const email = copyBtn.dataset.email ?? '';
  const copied = copyBtn.dataset.copied ?? 'Copied';
  const original = copyBtn.textContent;
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Secours : sélection manuelle impossible ici, on affiche quand même l'email.
      window.prompt('Copier mon email :', email);
      return;
    }
    copyBtn.textContent = copied;
    copyBtn.classList.add('is-copied');
    window.setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove('is-copied');
    }, 2000);
  });
}
