# F-Tax Steuerberatung GmbH

Statische Website für Ferhat Yilmaz und die F-Tax Steuerberatung GmbH. Der Auftritt **Atelier** führt die vorhandenen Unternehmens- und Fachinformationen in einer neuen, architektonisch inspirierten Gestaltung zusammen: dunkles Mineralgrün, warmes Papier, Kupferakzent, große redaktionelle Typografie und eine eigens gezeichnete Hero-Komposition. Kein Framework, Build-Schritt, externer Font- oder Animationsdienst.

## Seiten und Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Kanzlei, Leistungen, Zielgruppen, Arbeitsweise und Terminanfrage |
| `steuerberatung.html` | Buchhaltung, Bilanzierung, Steuern, Gründung und Partner-Lohnverrechnung |
| `ueber-mich.html` | Ferhat Yilmaz, Erfahrung, Prüfung, Arbeitsweise |
| `impressum.html`, `datenschutz.html` | Vorhandene rechtliche Entwürfe |
| `buchhaltung.html`, `bilanzierung.html`, `lohnverrechnung.html`, `kontakt.html` | Statische Weiterleitungen |
| `assets/css/style.css` | Funktions- und Layoutbasis |
| `assets/css/atelier.css` | Neues Designsystem, Seitenkompositionen und responsive Feinarbeit |
| `assets/js/main.js` | Menü, Header und Scroll-Reveals |
| `assets/js/contact.js` | EmailJS, Validierung, Lade- und Fehlerzustände |
| `assets/email-templates/contact-notification.html` | HTML-Mail im Atelier-Design |

Das bereitgestellte Logo bleibt erhalten. Die grafischen Motive sind CSS-basiert; es wird kein Foto einer nicht belegten Person gezeigt.

## Lokale Vorschau

```sh
python tools/serve.py
```

Vorschau: `http://127.0.0.1:8000/Yilmaz/`. Die Root-Dateien funktionieren ohne Build auf GitHub Pages. `.nojekyll`, Weiterleitungen, Canonicals, strukturierte Daten und die vorhandene Pages-Konfiguration bleiben erhalten.

Der gegenwärtige Modus in `docs/site.json` ist `preview`: öffentliche Seiten tragen `noindex`, die Sitemap ist deshalb leer. Das ist der bereits vorhandene Freigabestatus. Für eine öffentliche Freigabe nach Prüfung der Unternehmens- und Rechtstexte:

```sh
python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
```

Bei einer bestätigten eigenen Domain stattdessen deren wirkliche HTTPS-Adresse verwenden. Eine Veröffentlichung oder Indexierungsfreigabe erfolgt nicht automatisch durch dieses Redesign.

## Terminanfrage und EmailJS

Die Terminanfrage auf der Startseite verlangt nur Name und E-Mail-Adresse. Weitere Angaben sind freiwillig; eine verbindliche Kalenderbuchung findet nicht statt. Der vorhandene EmailJS-Vertrag und die öffentlichen Kennungen bleiben erhalten: Service `service_ja02fgi`, Template `template_tk14gwp`, Public Key `VaQ_PnlLN756oJY4H`. Der Versand sperrt Doppelabsendungen, zeigt Validierungs- und Netzwerkfehler an und bestätigt einen Termin erst nach persönlicher Rückmeldung.

Das lokale HTML-Template ist **noch nicht automatisch mit EmailJS synchronisiert**. Im EmailJS-Dashboard unter **Email Templates → template_tk14gwp → Code Editor / HTML** den Inhalt von `assets/email-templates/contact-notification.html` einfügen und speichern. Subject: `F-Tax Terminanfrage: {{topic}}`; Reply To: `{{reply_to}}`; To Email: festes bestätigtes Kanzleipostfach. Weitere Felder und Variablen stehen in `docs/EMAILJS-SETUP.md`. Der Live-Versand und der Postfacheingang wurden nicht ausgelöst.

## Bewegung und Zugänglichkeit

Die Choreografie des Hero-Bereichs läuft ohne Ladebildschirm. Weitere Inhalte erscheinen beim Scrollen einmalig über IntersectionObserver und die native Web Animations API. Die HTML-Inhalte sind stets vorhanden und ohne JavaScript lesbar. `prefers-reduced-motion` deaktiviert Bewegungen. Navigation, Formular und Fokuszustände sind per Tastatur nutzbar.

## Prüfungen

Ausgeführt:

```sh
python tools/components.py --check
python tools/verify.py
python tests/release_test.py
node --check assets/js/main.js
node --check assets/js/contact.js
node --test tests/contact.test.js tests/motion.test.js
python tools/package.py
```

Zusätzlich wurden Startseite, Steuerberatung, Über mich, Impressum und Datenschutz im Browser bei 360, 390, 768, 1024, 1440 und 1920 px auf horizontales Überlaufen geprüft. Mobilmenü, Navigation, Formularvalidierung und Browserkonsole wurden in der lokalen Vorschau kontrolliert. Screenshots liegen als gesonderte Aufgabenausgabe vor. Dies sind keine gemessenen Core Web Vitals und kein echter EmailJS-Zustelltest.

Vor öffentlicher Freigabe sind Firmen-/Kontaktdaten, Biografie, Leistungsdetails, Logo-Rechte und Rechtstexte durch F-Tax zu bestätigen. Die Lohnverrechnung bleibt ausdrücklich als Leistung eines Kooperationspartners bezeichnet.
