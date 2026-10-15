const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/main.js'), 'utf8');

function element(attributes = {}) {
  const classes = new Set(), attrs = {...attributes}, events = {}, properties = {};
  return {classes, attrs, events, properties, contains: () => false, focus() {this.focused = true;},
    style: {setProperty: (name, value) => {properties[name] = value;}},
    classList: {add: n => classes.add(n), remove: n => classes.delete(n), toggle(n, v) {
      if (v === undefined) v = !classes.has(n);
      if (v) classes.add(n); else classes.delete(n);
      return v;
    }, contains: n => classes.has(n)},
    setAttribute: (n, v) => {attrs[n] = v;}, getAttribute: n => attrs[n] ?? null,
    addEventListener: (n, fn) => {events[n] = fn;}
  };
}
function harness({reduce = false, mobile = false, observer = true, failObserver = false,
  focused = false, saveData = false, cores = 8, failAnimation = false} = {}) {
  const root = element(), header = element(), toggle = element({'aria-expanded': 'false'});
  const nav = element(), link = element(), progress = element(), art = element({'data-parallax': '.1'}), year = element();
  root.scrollHeight = 2000;
  nav.querySelectorAll = () => [link];
  const targets = ['rise', 'slide', 'scale', 'line'].map(kind => element({'data-reveal': kind}));
  const heroes = [element({'data-hero-item': ''}), element({'data-hero-item': '', 'data-delay': '9000'})];
  const animations = [];
  [...targets, ...heroes, nav].forEach(el => {el.animate = (frames, options) => {
    if (failAnimation) throw Error('unsupported');
    const events = {};
    const animation = {el, frames, options, canceled: false, addEventListener: (n, fn) => {events[n] = fn;},
      cancel() {this.canceled = true; events.cancel?.();}, finish() {events.finish?.();}};
    animations.push(animation); return animation;
  };});
  if (focused) {targets[0].contains = () => true; heroes[0].contains = () => true;}
  const docEvents = {}, winEvents = {}, frames = [], queries = new Map(), observers = [];
  const query = s => {
    if (!queries.has(s)) queries.set(s, {
      matches: s.includes('reduced-motion') ? reduce : !mobile, events: {},
      addEventListener(n, fn) {this.events[n] = fn;}
    });
    return queries.get(s);
  };
  const document = {documentElement: root, activeElement: {},
    querySelector: s => ({'.menu-toggle': toggle, '#navigation': nav, '.site-header': header, '[data-scroll-progress]': progress}[s]),
    querySelectorAll: s => ({'[data-year]': [year], '[data-parallax]': [art], '[data-hero-item]': heroes, '[data-reveal]': targets}[s] || []),
    addEventListener: (n, fn) => {docEvents[n] = fn;}
  };
  const connection = {saveData, events: {}, addEventListener(n, fn) {this.events[n] = fn;}};
  const window = {scrollY: 0, innerHeight: 800, navigator: {hardwareConcurrency: cores, connection}, matchMedia: query,
    addEventListener: (n, fn, options) => {winEvents[n] = {fn, options};}, requestAnimationFrame: fn => frames.push(fn)};
  if (observer) window.IntersectionObserver = class {
    constructor(callback, options) {
      if (failObserver) throw Error('unavailable');
      this.callback = callback; this.options = options; this.observed = []; observers.push(this);
    }
    observe(el) {this.observed.push(el);} unobserve(el) {this.observed = this.observed.filter(x => x !== el);}
    disconnect() {this.disconnected = true;}
  };
  vm.runInNewContext(source, {document, window, Date});
  const reveals = () => animations.filter(a => targets.includes(a.el));
  return {window, root, header, toggle, nav, link, progress, art, year, targets, heroes, animations, reveals,
    docEvents, winEvents, frames, queries, observers, connection};
}

test('Reduced motion and limited devices retain fully static content without observers', () => {
  for (const options of [{reduce: true}, {saveData: true}, {cores: 2}]) {
    const h = harness(options);
    assert.equal(h.root.classes.has('motion-enabled'), false);
    assert.equal(h.observers.length, 0);
    assert.equal(h.animations.length, 0);
    assert.equal(h.art.properties['--parallax-y'], '0px');
  }
});
test('Hero choreography bounds custom delay and uses shorter mobile travel', () => {
  const h = harness(), m = harness({mobile: true});
  assert.equal(h.animations[0].options.duration, 1000);
  assert.equal(h.animations[1].options.delay, 600);
  assert.equal(m.animations[1].options.delay, 240);
  assert.equal(m.animations[0].options.duration, 600);
  assert.ok(m.animations[0].frames[0].transform.includes('14px'));
  assert.ok(h.animations.every(a => a.frames[0].opacity > 0));
});
test('Intersection reveals play once, preserve all four visual variants and bound stagger', () => {
  const h = harness(), o = h.observers[0];
  o.callback([{target: h.targets[0], isIntersecting: false}]);
  assert.equal(h.reveals().length, 0);
  const entries = h.targets.map(target => ({target, isIntersecting: true}));
  o.callback(entries); o.callback(entries);
  assert.equal(h.reveals().length, 4);
  assert.match(h.reveals()[0].frames[0].transform, /translateY/);
  assert.match(h.reveals()[1].frames[0].transform, /translateX/);
  assert.match(h.reveals()[2].frames[0].transform, /scale\(/);
  assert.match(h.reveals()[3].frames[0].transform, /scaleX/);
  assert.ok(h.reveals().every(a => a.options.delay <= 195));
  assert.equal(o.disconnected, true);
  assert.ok(h.targets.every(el => el.attrs.hidden === undefined));
});
test('Mobile reveal choreography has short travel and a maximum 60ms stagger', () => {
  const h = harness({mobile: true});
  h.observers[0].callback(h.targets.map(target => ({target, isIntersecting: true})));
  assert.ok(h.reveals().every(a => a.options.duration === 460 && a.options.delay <= 60));
  assert.match(h.reveals()[0].frames[0].transform, /10px/);
});
test('Runtime reduced motion cancels animations and resets parallax without replaying consumed content', () => {
  const h = harness(); h.window.scrollY = 200; h.winEvents.scroll.fn(); h.frames.shift()();
  assert.equal(h.art.properties['--parallax-y'], '20.00px');
  h.observers[0].callback([{target: h.targets[0], isIntersecting: true}]);
  const before = h.animations.length, q = h.queries.get('(prefers-reduced-motion: reduce)');
  q.matches = true; q.events.change();
  assert.ok(h.animations.every(a => a.canceled));
  assert.equal(h.art.properties['--parallax-y'], '0px');
  assert.equal(h.root.classes.has('motion-enabled'), false);
  q.matches = false; q.events.change();
  assert.equal(h.animations.length, before);
  assert.equal(h.observers.at(-1).observed.includes(h.targets[0]), false);
});
test('Enabling save-data at runtime suspends decorative motion', () => {
  const h = harness(); h.connection.saveData = true; h.connection.events.change();
  assert.ok(h.animations.every(a => a.canceled));
  assert.equal(h.root.classes.has('motion-enabled'), false);
});
test('Focused content never moves and unavailable animation APIs do not gate visibility', () => {
  const h = harness({focused: true});
  h.observers[0].callback([{target: h.targets[0], isIntersecting: true}]);
  assert.equal(h.reveals().length, 0);
  assert.equal(h.animations.some(a => a.el === h.heroes[0]), false);
  assert.doesNotThrow(() => harness({observer: false}));
  assert.doesNotThrow(() => harness({failObserver: true}));
  assert.doesNotThrow(() => harness({failAnimation: true}));
});
test('A single passive RAF coalesces scroll updates with bounded progress and parallax', () => {
  const h = harness(); assert.equal(h.winEvents.scroll.options.passive, true);
  h.winEvents.scroll.fn(); h.winEvents.scroll.fn(); assert.equal(h.frames.length, 1);
  h.window.scrollY = 100000; h.frames.shift()();
  assert.equal(h.header.classes.has('is-scrolled'), true);
  assert.equal(h.progress.style.transform, 'scaleX(1.0000)');
  assert.equal(h.art.properties['--parallax-y'], '48.00px');
  h.window.scrollY = -200; h.winEvents.scroll.fn(); h.frames.shift()();
  assert.equal(h.progress.style.transform, 'scaleX(0.0000)');
  assert.equal(h.header.classes.has('is-scrolled'), false);
  h.root.scrollHeight = 500; h.winEvents.resize.fn(); h.frames.shift()();
  assert.equal(h.progress.style.transform, 'scaleX(0.0000)');
});
test('Mobile navigation is inert while closed; Escape restores toggle focus', () => {
  const h = harness({mobile: true}); assert.equal(h.nav.inert, true);
  assert.equal(h.toggle.attrs['aria-label'], 'Menü öffnen');
  h.toggle.events.click(); assert.equal(h.nav.inert, false); assert.equal(h.toggle.attrs['aria-expanded'], 'true');
  assert.equal(h.toggle.attrs['aria-label'], 'Menü schließen');
  h.docEvents.keydown({key: 'Escape'});
  assert.equal(h.toggle.attrs['aria-expanded'], 'false'); assert.equal(h.nav.inert, true); assert.equal(h.toggle.focused, true);
  assert.equal(h.toggle.attrs['aria-label'], 'Menü öffnen');
});
test('Menu closes on link/outside click and becomes accessible when changing to desktop', () => {
  const h = harness({mobile: true});
  h.toggle.events.click(); h.link.events.click(); assert.equal(h.nav.inert, true);
  h.toggle.events.click(); h.docEvents.click({target: {}}); assert.equal(h.nav.classes.has('is-open'), false);
  const q = h.queries.get('(min-width: 901px)'); q.matches = true; q.events.change();
  assert.equal(h.nav.inert, false); assert.equal(h.toggle.attrs['aria-expanded'], 'false');
  assert.equal(h.year.textContent, String(new Date().getFullYear()));
});
test('Resize restores focus only when a focused navigation item becomes hidden', () => {
  const h = harness();
  h.nav.contains = () => true;
  const q = h.queries.get('(min-width: 901px)');
  q.matches = true; q.events.change();
  assert.equal(h.toggle.focused, undefined);
  q.matches = false; q.events.change();
  assert.equal(h.nav.inert, true);
  assert.equal(h.toggle.focused, true);
  const unfocused = harness();
  const other = unfocused.queries.get('(min-width: 901px)');
  other.matches = false; other.events.change();
  assert.equal(unfocused.toggle.focused, undefined);
});
