# F-Tax · persönliche Steuerberatung

Statische Website für F-Tax Steuerberatung GmbH und Ferhat Yilmaz. Drei Hauptseiten, eine integrierte Terminanfrage und ein eigenständiges Design in Elfenbein, Aubergine und Kupfertönen. Die bereitgestellten Referenzen sind die vorrangige Inhaltsquelle; deren dunkle Blaugestaltung und Abschnittsfolgen wurden nicht kopiert.

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Vorstellung, vier Beratungsbereiche, Ferhat Yilmaz, Zusammenarbeit, Terminanfrage |
| `steuerberatung.html` | Zentrale Fachseite: Buchhaltung, Jahresabschluss, Steuern, Gründung, Lohnverrechnung über Kooperationspartner |
| `ueber-mich.html` | Persönlicher Hintergrund, Prüfung Oktober 2024, Erfahrung und Arbeitsweise |
| `impressum.html`, `datenschutz.html` | Rechtliche Entwürfe auf Grundlage der Referenzdaten |
| `buchhaltung.html`, `bilanzierung.html`, `lohnverrechnung.html`, `kontakt.html` | Ausschließlich Weiterleitungen zu den neuen zentralen Abschnitten |
| `assets/css/style.css` | Gemeinsame Gestaltung, mobile Layouts und Fokuszustände |
| `assets/js/` | Navigation, EmailJS und Erhaltung alter URLs |
| `assets/icons/logo.svg` | Unverändertes bereitgestelltes Unternehmenslogo |
| `assets/email-templates/contact-notification.html` | Passendes HTML-Template für EmailJS |
| `components/` | Gemeinsamer Header und Footer zur Pflege |
| `docs/` | Quellenabgleich, Einrichtung, Prüfbericht und Seiteninventar |
| `tools/`, `tests/` | Optionale Pflege-, Prüf-, Vorschau- und Paketierungswerkzeuge |

Alle fertigen HTML-Dateien liegen direkt im Root. Keine Paketinstallation oder Laufzeitabhängigkeiten; kein getracktes dist. Prozessoptimierung ist nicht veröffentlicht oder verlinkt. Digitale Abläufe werden nur als Teil der steuerlichen Zusammenarbeit bzw. persönliches Interesse behandelt.

## Lokal ansehen

```sh
python tools/serve.py
```

Vorschau unter `http://127.0.0.1:8000/Yilmaz/`, einschließlich Projekt-Unterpfad und 404-Verhalten. Die Root-Seiten funktionieren auch ohne Build. Die gesonderte Einzeldatei-Vorschau im Chat verhindert ausdrücklich E-Mail-Versand.

Header/Footer in `components/` bearbeiten und anschließend `python tools/components.py` ausführen. Seiteninhalte direkt in den Root-HTML-Dateien pflegen.

## Terminanfrage und EmailJS

Header und Hero führen mit einem Klick zu `index.html#termin`. **Nur Name und E-Mail sind Pflichtfelder.** Weitere Angaben lassen sich freiwillig aufklappen. Es gibt keinen Kalender und keine verbindliche Buchungsbestätigung. Der Architekturanker `data-booking-provider="emailjs"` kennzeichnet die heutige Lösung; für einen späteren Buchungsdienst können die Terminziele zentral im Header und in den Seiten angepasst werden.

Öffentliche Werte unverändert: Service `service_ja02fgi`, Template `template_tk14gwp`, Public Key `VaQ_PnlLN756oJY4H`. Die Konfiguration steht jetzt ausschließlich in `index.html`.

1. Im EmailJS-Dashboard **Email Templates → template_tk14gwp → Code Editor / HTML** öffnen.
2. Den gesamten Inhalt aus [`assets/email-templates/contact-notification.html`](assets/email-templates/contact-notification.html) einsetzen.
3. Die folgenden Felder konfigurieren und speichern:

| Feld | Wert |
| --- | --- |
| Subject | `F-Tax Terminanfrage: {{topic}}` |
| From Name | `F-Tax Website` |
| From Email | Standardadresse des verbundenen E-Mail-Dienstes |
| To Email | Bestätigtes Zielpostfach fest eintragen; Referenz nennt `office@f-tax.at` |
| Reply To | `{{reply_to}}` |

Variablen: `from_name`, `from_email`, `reply_to`, `company`, `phone`, `topic`, `appointment`, `message`. `topic` ersetzt keinen anders benannten `subject`-Parameter; die Website sendet tatsächlich `topic`. Leere optionale Angaben erhalten sinnvolle Platzhalter. Doppelte Klammern escapen Nutzereingaben, Zeilenumbrüche bleiben erhalten. **Das Live-Template wurde nicht im Dashboard geändert; Postfacheingang und Antwortheader sind noch nicht getestet.** Details: [docs/EMAILJS-SETUP.md](docs/EMAILJS-SETUP.md).

## SEO, frühere URLs und GitHub Pages

Individuelle Titel/Beschreibungen, de-AT, Canonicals, Open Graph, Twitter-Metadaten, Schema und Breadcrumbs bleiben erhalten. Nur Startseite, Steuerberatung und Über mich sind im öffentlichen Modus indexierbar. Frühere Fachseiten führen mit Meta-Refresh und JavaScript-Fallback zum passenden Abschnitt der zentralen Steuerberatung; `kontakt.html` führt zur Startseiten-Terminanfrage. Canonicals konsolidieren die Zielseiten. Das sind statische Weiterleitungen, keine vorgetäuschten HTTP-301-Antworten.

Die bisherige Basisadresse und der Indexierungsmodus wurden übernommen. `noindex` und die leere Sitemap bleiben bis zur ausdrücklichen Freigabe bestehen. Das ist kein Zugriffsschutz. Die tatsächliche spätere Domain ist noch nicht bestätigt; die E-Mail-Domain `f-tax.at` wird nicht automatisch als Website-Domain vorausgesetzt.

```sh
python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
```

Dieses optionale Werkzeug aktualisiert Canonicals, Schema, Sitemap und 404-Basis; bei eigener Domain die echte HTTPS-Adresse verwenden. CNAME und DNS separat konfigurieren.

Der vorhandene Pages-Workflow und die Aktivierung über `PAGES_ENABLED` bleiben erhalten. `python tools/package.py` erstellt ein ignoriertes dist-Paket ausschließlich mit öffentlichen Website-Dateien. Quellen, Tests, Dokumentation und Mailvorlage werden dabei nicht ausgeliefert. Es wurde weder Pages aktiviert noch eine neue Veröffentlichung ausgelöst.

## Prüfungen und offene Punkte

```sh
python tools/components.py --check
python tools/verify.py
python tests/release_test.py
python tools/email-preview.py
node --check assets/js/main.js
node --check assets/js/contact.js
node --check assets/js/redirect.js
node --test tests/contact.test.js
python tools/package.py
```

Zehn Formular-/Mailtests verwenden simulierte Antworten. Geprüft sind minimale Anfrage, Parametervertrag, Validierung, Escaping, Fehler, Timeout und Mehrfachsendesperre. Seiten-, Link-, Schema-, Redirect- und Indexierungsprüfungen sowie Tests für Domainwechsel und Release-Modi sind enthalten.

Visuelle Browser-/Smartphone-Prüfung und Screenshots der neuen Version konnten wegen blockierter Browserumgebung nicht erstellt werden; bestehende V2-Screenshots gelten nicht als V3-Nachweis. Keine gemessenen Core Web Vitals oder behauptete E-Mail-Client-Zertifizierung. Siehe [docs/QUALITY.md](docs/QUALITY.md).

Vor öffentlicher Freigabe sind die bereitgestellten Firmen-/Kontaktdaten, Biografie, Leistungsdetails, Logo-Rechte und Rechtstexte zu bestätigen. Lohnverrechnung über Kooperationspartner ist gegenüber dem älteren Stand ausdrücklich korrigiert. Quellen und Abweichungen: [docs/ANALYSIS-V3.md](docs/ANALYSIS-V3.md).
