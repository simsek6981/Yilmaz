'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menu.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.querySelectorAll('a').forEach(item => item.removeAttribute('aria-current'));
  link.setAttribute('aria-current', 'page'); closeMenu();
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
if ('IntersectionObserver' in window) {
  const sections = [...navigation.querySelectorAll('a')].map(link => document.querySelector(link.hash));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigation.querySelectorAll('a').forEach(link => {
      if (link.hash === '#' + visible.target.id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: [0, .1, .3] });
  sections.forEach(section => observer.observe(section));
}
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
  document.getElementById(button.dataset.dialog).showModal();
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }});
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
