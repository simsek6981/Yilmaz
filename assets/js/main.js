'use strict';
(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('[data-scroll-progress]');
  const art = [...document.querySelectorAll('[data-parallax]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 901px)');
  const connection = window.navigator?.connection;
  const constrained = () => Boolean(connection?.saveData) ||
    (Number(window.navigator?.hardwareConcurrency) > 0 && window.navigator.hardwareConcurrency <= 2);
  const canMove = () => !reduced.matches && !constrained();
  const running = new Set();
  const heroes = [...document.querySelectorAll('[data-hero-item]')];
  const pending = new Set([...document.querySelectorAll('[data-reveal]')].filter(el => !heroes.includes(el)));
  const ease = 'cubic-bezier(.16,1,.3,1)';
  let observer = null;
  let heroStarted = false;
  let menuAnimation = null;
  let framePending = false;

  root.classList.add('js');
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });

  const hasFocus = el => el === document.activeElement || el.contains(document.activeElement);
  function animate(el, frames, options) {
    if (!canMove() || typeof el.animate !== 'function' || hasFocus(el)) return null;
    try {
      const animation = el.animate(frames, { easing: ease, fill: 'backwards', ...options });
      running.add(animation);
      const release = () => running.delete(animation);
      animation.addEventListener('finish', release, { once: true });
      animation.addEventListener('cancel', release, { once: true });
      return animation;
    } catch (_) { return null; } // Animation support never gates access to content.
  }

  function closeMenu(restoreFocus = false) {
    menuAnimation?.cancel();
    menuAnimation = null;
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Menü öffnen');
    nav?.classList.remove('is-open');
    if (nav) nav.inert = !desktop.matches;
    if (restoreFocus) toggle?.focus();
  }
  if (toggle && nav) {
    closeMenu();
    toggle.addEventListener('click', () => {
      if (toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); return; }
      nav.inert = false;
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Menü schließen');
      nav.classList.add('is-open');
      menuAnimation = animate(nav, [
        { opacity: .35, transform: 'translateY(-10px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 320 });
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  // A single passive scroll pipeline. Decorative transforms never affect layout.
  function syncScroll() {
    framePending = false;
    const y = Math.max(0, Number(window.scrollY) || 0);
    header?.classList.toggle('is-scrolled', y > 16);
    if (progress) {
      const extent = Math.max(0, root.scrollHeight - window.innerHeight);
      const fraction = extent > 0 ? Math.min(1, y / extent) : 0;
      progress.style.transform = 'scaleX(' + fraction.toFixed(4) + ')';
    }
    const parallax = canMove() && desktop.matches;
    art.forEach(el => {
      const requested = Number(el.getAttribute('data-parallax'));
      const speed = requested > 0 ? Math.min(.15, requested) : .075;
      el.style.setProperty('--parallax-y', parallax ? Math.min(48, y * speed).toFixed(2) + 'px' : '0px');
    });
  }
  function queueScroll() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(syncScroll);
  }
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll, { passive: true });

  function reveal(el, index) {
    const mobile = !desktop.matches;
    const travel = mobile ? 10 : 30;
    const kind = el.getAttribute('data-reveal');
    let first = { opacity: .25, transform: 'translateY(' + travel + 'px)' };
    let last = { opacity: 1, transform: 'translateY(0)' };
    if (kind === 'slide') {
      first.transform = 'translateX(' + (mobile ? -8 : -24) + 'px)';
      last.transform = 'translateX(0)';
    } else if (kind === 'scale') {
      first.transform = 'scale(' + (mobile ? '.985' : '.96') + ')';
      last.transform = 'scale(1)';
    } else if (kind === 'line') {
      first = { opacity: .5, transform: 'scaleX(.15)', transformOrigin: 'left center' };
      last = { opacity: 1, transform: 'scaleX(1)', transformOrigin: 'left center' };
    }
    animate(el, [first, last], {
      duration: mobile ? 460 : kind === 'line' ? 900 : 740,
      delay: mobile ? Math.min(index * 30, 60) : Math.min(index * 65, 195)
    });
  }

  function startMotion() {
    if (!canMove()) return;
    root.classList.add('motion-enabled');
    if (!heroStarted) {
      heroStarted = true;
      heroes.forEach((el, index) => {
        const rawDelay = el.getAttribute('data-delay');
        const requested = Number(rawDelay);
        const delay = rawDelay !== null && Number.isFinite(requested) && requested >= 0 ? requested : index * 90;
        animate(el, [
          { opacity: .2, transform: 'translateY(' + (desktop.matches ? 34 : 14) + 'px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: desktop.matches ? 1000 : 600, delay: Math.min(delay, desktop.matches ? 600 : 240) });
      });
    }
    if (!pending.size || !('IntersectionObserver' in window)) return;
    try {
      observer = new window.IntersectionObserver(entries => {
        if (!canMove()) return;
        let index = 0;
        entries.forEach(entry => {
          if (!entry.isIntersecting || !pending.has(entry.target)) return;
          pending.delete(entry.target);
          observer?.unobserve(entry.target);
          reveal(entry.target, index++);
        });
        if (!pending.size) { observer?.disconnect(); observer = null; }
      }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
      pending.forEach(el => observer.observe(el));
    } catch (_) { observer?.disconnect(); observer = null; }
  }
  function refreshMotion() {
    observer?.disconnect();
    observer = null;
    running.forEach(animation => animation.cancel());
    running.clear();
    menuAnimation = null;
    root.classList.remove('motion-enabled');
    syncScroll();
    startMotion();
  }
  reduced.addEventListener('change', refreshMotion);
  connection?.addEventListener?.('change', refreshMotion);
  desktop.addEventListener('change', () => {
    // Resizing must not leave keyboard focus inside a now-hidden mobile menu.
    const focusWillBeHidden = !desktop.matches && nav && hasFocus(nav);
    closeMenu(focusWillBeHidden);
    refreshMotion();
  });
  syncScroll();
  startMotion();
})();
