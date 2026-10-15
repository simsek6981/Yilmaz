# F-Tax – Clarity

Statische Website für die F-Tax Steuerberatung GmbH und Ferhat Yilmaz. Vollständiger Frontend-Neubau mit dunklem Petrol, hellen mineralischen Flächen, Mintakzenten und einem einheitlichen nativen Motion-System. Keine Framework-, Schrift- oder Animationsdownloads erforderlich.

## Seiten und Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Grafischer Hero, Beratungsverständnis, Leistungen, Zielgruppen, persönlicher Ansprechpartner, Zusammenarbeit und Terminanfrage |
| `steuerberatung.html` | Buchhaltung, Bilanzierung, Steuerfragen, Gründung/Rechtsform und Partner-Lohnverrechnung |
| `ueber-mich.html` | Ferhat Yilmaz, Erfahrung, Prüfung Oktober 2024, Hintergrund, Arbeitsweise und digitales Interesse |
| `impressum.html`, `datenschutz.html` | Erhaltene rechtliche Entwürfe auf Grundlage der bereitgestellten Unternehmensdaten |
| `404.html` | Eigene Fehlerseite mit Rückweg |
| `buchhaltung.html`, `bilanzierung.html`, `lohnverrechnung.html`, `kontakt.html` | Frühere URLs mit Weiterleitung auf die vorhandenen Zielabschnitte |
| `assets/css/style.css` | Design-Tokens, Layouts, responsive Gestaltung und Interaktionszustände |
| `assets/js/main.js` | Hero-, Scroll- und Menüanimationen, Progress und begrenzte Desktop-Parallaxe |
| `assets/js/contact.js` | Unveränderte, getestete EmailJS-Integration |
| `assets/icons/logo.svg` | Unverändertes bereitgestelltes Unternehmenslogo |
| `assets/email-templates/contact-notification.html` | Vollständiges HTML-E-Mail-Template für das Dashboard |
| `components/` | Gemeinsamer Header und Footer |
| `docs/` | Konfiguration, Einrichtung und dokumentierte Qualitätssicherung |

Die Hauptnavigation enthält genau Startseite, Steuerberatung und Über mich. Termin vereinbaren führt direkt zu `index.html#termin`. Prozessoptimierung ist nicht als eigene Seite vorhanden oder verlinkt. Digitale Interessen und Abläufe bleiben im vorgesehenen persönlichen/steuerlichen Kontext erhalten.

## Lokal verwenden

```sh
python tools/serve.py
```

Lokale Adresse: `http://127.0.0.1:8000/Yilmaz/`. Die fertigen HTML-Dateien liegen direkt im Repository-Root. Header/Footer in `components/` bearbeiten und mit `python tools/components.py` abgleichen. `python tools/package.py` erstellt das ignorierte Deployment-Paket `dist/`; Dokumentation, Tests und E-Mail-Template werden nicht darin ausgeliefert. Es wird kein dist getrackt.

## Motion und Bedienung

Choreografierte Hero-Gruppen starten mit begrenzten Verzögerungen. Inhaltsgruppen erhalten einmalige Aufwärts-, Seiten- oder Skalierungseffekte; dekorative Linien werden separat animiert. Desktop-Reveals dauern normalerweise 740 ms, auf Smartphones 460 ms. Hero-Dauer maximal 1000 ms, mobil 600 ms; das Menü öffnet in 320 ms. Hover-Effekte liegen ungefähr bei 250–350 ms.

Die native Web Animations API und IntersectionObserver reichen aus. Ein passiver, gebündelter Scroll-Handler aktualisiert Header, Fortschrittslinie und die auf maximal 48 px begrenzte Desktop-Parallaxe. Keine Endlosschleife und kein Scroll-Hijacking. Bewegung entfällt bei Reduced Motion, Datensparmodus oder erkannten Geräten mit höchstens zwei logischen Kernen. Laufende Effekte werden beim Wechsel gestoppt. Ohne Animation/JavaScript bleiben Inhalte und direkte Kontaktwege sichtbar. Mobile Navigation ist ohne JavaScript regulär sichtbar; mit JavaScript werden geschlossene Links inert. Escape schließt das Menü und stellt den Fokus wieder her.

## Terminanfrage und EmailJS

**Nur Name und E-Mail sind Pflichtfelder.** Unternehmen, Telefon, Anliegen, Terminwunsch und Nachricht sind optional. Kein Kalender und keine verbindliche Buchung: Erst die persönliche Rückmeldung bestätigt einen Termin. Die geprüfte Transportlogik, Validierung, 15-Sekunden-Timeout, Eingabeerhalt bei Fehlern und Mehrfachsendesperre bleiben erhalten. Der Browser bestimmt kein Empfängerpostfach.

Öffentliche Konfiguration ausschließlich in `index.html`: Service `service_ja02fgi`, Template `template_tk14gwp`, Public Key `VaQ_PnlLN756oJY4H`.

### Neues E-Mail-Design einsetzen

1. Im EmailJS-Dashboard **Email Templates → template_tk14gwp → Code Editor / HTML** öffnen.
2. Den vollständigen Inhalt aus [`assets/email-templates/contact-notification.html`](assets/email-templates/contact-notification.html) einsetzen.
3. Folgende Einstellungen prüfen und speichern:

| Dashboard-Feld | Wert |
| --- | --- |
| Subject | `F-Tax Terminanfrage: {{topic}}` |
| From Name | `F-Tax Website` |
| From Email | Standardadresse des verbundenen E-Mail-Dienstes |
| To Email | Bestätigtes Zielpostfach fest eintragen; die Unternehmensunterlagen nennen `office@f-tax.at` |
| Reply To | `{{reply_to}}` |

Die tatsächlichen Variablen heißen `from_name`, `from_email`, `reply_to`, `company`, `phone`, `topic`, `appointment`, `message`. Es wird kein `subject`-Parameter gesendet. Doppelte Klammern escapen Nutzereingaben; optionale Angaben besitzen sinnvolle Leerzustände, Nachrichten behalten ihre Zeilenumbrüche. Tabellenlayout, Inline-CSS, mobile Abstände und Outlook-Breitenfallback. Keine E-Mail-Skripte, Animationen oder externen Bilder/Fonts.

**Das Live-Template wurde nicht im Dashboard verändert.** Keine reale Anfrage versendet; Postfacheingang und Reply-To sind noch zu prüfen. `python tools/email-preview.py` erzeugt nur ein markiertes fiktives Designbeispiel unter `docs/contact-notification-preview.html`; diese Beispieldatei nicht ins Dashboard kopieren. Weitere Hinweise: [docs/EMAILJS-SETUP.md](docs/EMAILJS-SETUP.md).

## SEO und GitHub Pages

Vorhandene Titles, Beschreibungen, Canonicals, Social-Metadaten, Sprache, JSON-LD, robots und Sitemap sind erhalten; ausschließlich theme-color ist neu. Frühere Fach-/Kontaktadressen bleiben statische Weiterleitungen mit Meta-Refresh und JavaScript-Fallback, keine behaupteten HTTP-301-Antworten. Alle wichtigen Inhalte stehen im HTML.

Der bisherige Vorschau-/Indexierungsmodus und die Basisadresse `https://simsek6981.github.io/Yilmaz/` bleiben bestehen. `noindex` ist kein Zugriffsschutz. Die tatsächliche spätere Domain ist noch nicht bestätigt; die E-Mail-Domain wird nicht automatisch als Website-Domain verwendet. Nur drei Inhaltsseiten gehören nach späterer Freigabe in die Sitemap; rechtliche Entwürfe, Redirects und 404 bleiben ausgeschlossen.

```sh
python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
```

Das optionale Werkzeug aktualisiert Canonicals, Schema, Sitemap und 404-Basis. Bei eigener Domain die echte HTTPS-Adresse verwenden und DNS/CNAME gesondert konfigurieren. Der vorhandene Pages-Workflow und `PAGES_ENABLED` sind unverändert. Diese Arbeit aktiviert kein Hosting und ändert keine Veröffentlichungseinstellungen.

## Prüfung

```sh
python tools/components.py --check
python tools/verify.py
python tests/release_test.py
python tools/email-preview.py
node --check assets/js/main.js
node --check assets/js/contact.js
node --check assets/js/redirect.js
node --test tests/contact.test.js tests/motion.test.js
python tools/package.py
```

21 erfolgreiche Verhaltenstests: zehn Kontakt-/Template- und elf Motion-/Menütests. Zusätzlich Links/Anker, Metadaten, Formularvertrag, Release-/Domainwechsel, Escaping und Syntax. Fachliche/biografische Detailtexte und rechtliche Inhalte wurden mit dem vorherigen Stand abgeglichen; Logo und Kontaktcode bleiben unverändert. Ausgewählte Text-/Hintergrundpaare wurden rechnerisch auf mindestens 4,5:1 Kontrast geprüft.

Die integrierte Browseransicht scheitert technisch; lokale HTTP-Abfragen laufen in einen Timeout. Deshalb keine bestätigte visuelle Desktop-/Smartphone-Prüfung, Screenshots, tatsächlichen Overflow-Messungen, Core-Web-Vitals-Werte oder E-Mail-Client-Zertifizierung. Die Einzeldatei-Vorschau im Chat enthält fünf Seiten und deaktiviert Versand ausdrücklich. Ausführlicher Bericht: [docs/CLARITY.md](docs/CLARITY.md).

Firmen-/Kontaktdaten, Biografie, Leistungsdetails, Logo-Rechte und Rechtstexte sind vor öffentlicher Freigabe durch das Unternehmen zu bestätigen. Fachliche Quelle bleibt der vorhandene Referenzabgleich: [docs/ANALYSIS-V3.md](docs/ANALYSIS-V3.md).
