# F-Tax · New Perspective

Aktuelle mobile Anpassungen und Symbolbereinigung: [docs/MOBILE-POLISH.md](docs/MOBILE-POLISH.md). Geprüft bei 360, 390, 430, 768 und 1440 Pixeln; zusätzliche Regression mit `npm run test:mobile`.

Vollständig überarbeitete visuelle Gestaltung: Anthrazit, helle Typografie, Lime-Akzent und eine eigens generierte abstrakte Chromskulptur. Die bisherigen CSS-Schichten wurden durch ein zusammenhängendes Designsystem ersetzt. Neue Leistungskarten, eine interaktive Auswahl für Unternehmen/Gründung/Privatpersonen, horizontale Prozessschritte und überarbeitete Fachseiten prägen den Auftritt. Original-Logo, Unternehmensdaten, Formularvertrag und Routen bleiben erhalten.

Aktueller Umsetzungs- und Prüfbericht: [MODERN-REDESIGN.md](MODERN-REDESIGN.md). Designsystem: [brand-spec.md](brand-spec.md). Bildherkunft und vollständiger Prompt: [docs/modern-image-prompt.md](docs/modern-image-prompt.md). Der frühere Bericht [BERICHT.md](BERICHT.md) dokumentiert die vorherige Fassung und die weiterhin relevante Wettbewerbsrecherche.

## Vorschau

```sh
python tools/serve.py
```

Adresse: `http://127.0.0.1:8000/Yilmaz/`. Alle Inhaltsseiten liegen direkt im Repository-Root und funktionieren auch ohne JavaScript; das Senden des Formulars benötigt JavaScript.

| Datei | Zweck |
| --- | --- |
| `index.html` | Kanzlei, Leistungen, Philosophie, Person, Zusammenarbeit, Terminanfrage |
| `steuerberatung.html` | Fünf vollständige Fachkapitel |
| `ueber-mich.html` | Hintergrund, Erfahrung, Philosophie und digitales Interesse |
| `impressum.html`, `datenschutz.html` | Erhaltene rechtliche Entwürfe |
| `buchhaltung.html`, `bilanzierung.html`, `lohnverrechnung.html` | Vollständige, direkt erreichbare Fachseiten an den bisherigen URLs |
| `kontakt.html` | Kompatible Weiterleitung zur Terminanfrage |
| `assets/css/main.css` | Design Tokens, Typografie und sämtliche Komponenten |
| `assets/css/animations.css` | Intro und native Scroll-Timelines mit statischen Fallbacks |
| `assets/css/responsive.css` | Responsive Kompositionen und mobiles Menü |
| `assets/css/refinement.css` | Nicht mehr eingebundener Kompatibilitätsvermerk; das alte Design ist ersetzt |
| `assets/js/main.js` | Navigation, Header und einmalige Reveals ohne kontrastschwache Text-Fades |
| `assets/js/experience.js` | Tastaturbedienbare Auswahl für Unternehmen, Gründung und Privatpersonen |
| `assets/js/contact.js` | Erhaltene EmailJS-Transportlogik und Formularzustände |
| `assets/images/perspective.svg` | Originale, rein dekorative Markenkomposition |
| `assets/images/perspective-chrome.webp`, `perspective-chrome-mobile.webp` | Neue lokal gehostete, optimierte Hero-Bildwelt |
| `assets/fonts/` | Lokale Manrope-Latin-Variable als WOFF2 mit OFL-Lizenz |
| `assets/email-templates/` | Neues HTML-Mailtemplate mit dunklem Markenkopf und hellem Lesebereich |

Das unveränderte Original-Logo wird auf hellem Grund in seiner Originalfarbe dargestellt. Es liegt kein belegtes Porträt vor; die Namenskomposition ersetzt kein angebliches Personenfoto. Unternehmensdaten, Biografie, Fachinhalte und rechtliche Texte stammen aus dem vorhandenen Repository.

## Motion und Zugänglichkeit

Das Intro enthüllt die Headline zeilenweise, dann Beschreibung, CTA und Skulptur. Es gibt keinen Preloader. Ausgewählte Überschriften, Leistungszeilen und Markenflächen erhalten unterschiedliche einmalige Reveals über IntersectionObserver und Web Animations API. Eine native CSS-Scroll-Timeline zeichnet die Prozesslinie; auf Desktop verschiebt sich die Hero-Grafik beim Scrollen dezent. Browser ohne Scroll-Timeline-Unterstützung sehen die statische Darstellung.

`prefers-reduced-motion: reduce` stoppt CSS- und JavaScript-Bewegungen. Inhalte bleiben ohne JavaScript lesbar. Skip-Link, sichtbare Fokuszustände, korrekte Labels, Tastaturmenü, Fehlerfokus und Statusmeldungen sind vorhanden. Keine Tracking-, Karten- oder externen Font-/Bildaufrufe.

## Prüfungen

```sh
python tools/components.py --check
python tools/verify.py
python tests/release_test.py
python tools/email-preview.py
node --check assets/js/main.js
node --check assets/js/contact.js
npm test
python tools/package.py
git diff --check
```

Für wiederholbare Browserprüfungen bei laufender Vorschau:

```sh
npm ci --ignore-scripts
npx playwright install chromium
npm run test:browser
npm run test:a11y
```

Optional: `FTAX_BROWSER_CHANNEL=msedge` für einen installierten Edge, `FTAX_QA_DIR` für den Bericht-/Screenshot-Ordner und `FTAX_BASE_URL` für eine andere lokale Vorschau. Die Browserprüfung simuliert EmailJS vollständig und verschickt keine E-Mails. Node-Pakete sind reine Entwicklungswerkzeuge und werden nicht ausgeliefert. Der GitHub-Workflow führt statische Prüfungen sowie Browser- und axe-core-Prüfungen aus und speichert Screenshots als Actions-Artefakt.

Aktuelle Ergebnisse und Grenzen der tatsächlich ausgeführten Prüfungen: [MODERN-REDESIGN.md](MODERN-REDESIGN.md). Frühere Fassungen bleiben in `docs/` als historischer Kontext erhalten.

## EmailJS und Veröffentlichung

Der vorhandene Service `service_ja02fgi`, das Template `template_tk14gwp` und der Public Key `VaQ_PnlLN756oJY4H` bleiben erhalten. Name und E-Mail sind die einzigen Pflichtfelder. Eine erfolgreiche Anfrage bestätigt keinen Termin. Dashboard-Schritte, Variablen und notwendiger Zustelltest stehen in [docs/EMAILJS-SETUP.md](docs/EMAILJS-SETUP.md).

Das neue HTML-Template ist noch nicht in EmailJS eingespielt. Ein echter Versand und Postfacheingang sind nicht geprüft. Rechtstexte und Unternehmensangaben benötigen weiterhin die bereits im Repository vorgesehene Bestätigung.

`docs/site.json` steht unverändert auf `preview`: `noindex` und eine leere Sitemap bleiben bewusst erhalten. Indexierung nach bestätigter Freigabe einschalten:

```sh
python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
```

Bei einer eigenen Domain ist deren bestätigte HTTPS-Adresse zu verwenden. Die bestehende GitHub-Pages-Veröffentlichung nutzt den Hauptzweig. Der zusätzliche optionale Actions-Workflow ist weiterhin an `PAGES_ENABLED=true` gebunden; die Freigabeeinstellungen werden nicht geändert. `tools/package.py` erzeugt das direkt deploybare Artefakt in `dist/`; dieser Ordner bleibt ungetrackt. Der Pages-Workflow lädt ausschließlich öffentliche Dateien hoch, einschließlich der neuen lokalen Bilder und Fonts.

## Helle Fassung der gelieferten Vorlage · 17.10.2026

Diese Version übernimmt den Aufbau mit „Klarheit. Für das, was kommt.“ und der geometrischen Skulptur aus den bereitgestellten Dateien. Sämtliche Seiten wurden aufgehellt, einschließlich Formular, Profil- und Footerbereich. Kontraste und CSS-Cacheversion sind angepasst; `color-scheme:light` verhindert dunkle System-Formularstile. Details: [docs/LIGHT-REFRESH.md](docs/LIGHT-REFRESH.md).
