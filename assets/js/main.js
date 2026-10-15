'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const services = document.querySelector('.nav-services');
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  if (!open && services) services.open = false;
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && services?.open) {
    services.open = false;
    services.querySelector('summary').focus();
    return;
  }
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', event => {
  if (services?.open && !services.contains(event.target)) services.open = false;
  if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
});
nav.addEventListener('focusout', event => {
  if (services?.open && event.relatedTarget && !services.contains(event.relatedTarget)) services.open = false;
});
const desktop = window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change', () => setMenu(false));
document.querySelectorAll('[data-year]').forEach(item => { item.textContent = String(new Date().getFullYear()); });
const finder = document.querySelector('.service-finder');
if (finder) {
  const topics = {
    Buchhaltung:{file:'buchhaltung.html',text:'Laufende Finanzbuchhaltung und Einnahmen-Ausgaben-Rechnung: Geschäftsvorfälle und Unterlagen übersichtlich zusammenführen.'},
    Lohnverrechnung:{file:'lohnverrechnung.html',text:'Lohn- und Gehaltsabrechnung inklusive aller Meldungen – auch bei grenzüberschreitender Beschäftigung.'},
    Bilanzierung:{file:'bilanzierung.html',text:'Jahresabschlüsse und Bilanzen: Vorhandene Zahlen und Unterlagen für den Abschluss Ihres Geschäftsjahres zusammenführen.'},
    Steuerberatung:{file:'steuerberatung.html',text:'Steuererklärungen, Vertretung gegenüber dem Finanzamt sowie Beratung zu Rechtsformwahl und Umgründungen.'}
  };
  finder.querySelectorAll('[data-service-topic]').forEach(button=>button.addEventListener('click',()=>{
    const topic=button.dataset.serviceTopic,item=topics[topic];if(!item)return;
    finder.querySelectorAll('[data-service-topic]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
    finder.querySelector('[data-finder-title]').textContent=topic;
    finder.querySelector('[data-finder-description]').textContent=item.text;
    finder.querySelector('[data-finder-link]').setAttribute('href',item.file);
    finder.querySelector('[data-finder-contact]').setAttribute('href','kontakt.html?thema='+encodeURIComponent(topic));
  }));
}
// Animate only on entry; content always remains visible if scripting fails.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.service-cards article, .process-grid li, .month-cycle, .balance-art').forEach(item => observer.observe(item));
}
