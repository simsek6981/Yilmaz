# F-Tax · Website V2

Statische Unternehmenswebsite für F-Tax Steuerberatung GmbH, Leonding, im Repository Yilmaz. Marke, vier Leistungen, Unternehmensangaben und URLs bleiben erhalten. Keine Paketinstallation und keine Laufzeitabhängigkeiten.

## Vorschau und Build

Python 3.10 oder neuer; Node.js 22 für die JavaScript-Tests.

```sh
python tools/serve.py
```

Vorschau: http://127.0.0.1:8000/Yilmaz/ — einschließlich Projekt-Unterpfad und eigener 404-Seite. Alternativ HTML-Dateien direkt öffnen; die 404-Seite benötigt den konfigurierten Hosting-Pfad.

```sh
python tools/components.py
python tools/package.py
```

Der Build prüft die Website und erstellt `dist/` ausschließlich aus öffentlichen Website-Dateien. Dokumentation, Tests, Komponentenquellen, Git-Daten und E-Mail-Vorlagen werden nicht ausgeliefert. Die Root-HTML-Dateien bleiben ohne Build nutzbar. `dist/` ist ignoriert.

## Aufbau und Pflege

| Pfad | Inhalt |
| --- | --- |
| index.html | Startseite, Leistungskarten, Unternehmen, Themenfinder, Zusammenarbeit |
| steuerberatung.html | Themen-Navigation, Beratungsumfang, Ablauf und FAQ |
| buchhaltung.html | Belegablauf, Buchhaltungsformen, Vorbereitung und FAQ |
| lohnverrechnung.html | Monatlicher Zyklus, Abrechnung, Meldungen und FAQ |
| bilanzierung.html | Jahresübersicht, Abschlussvorbereitung und FAQ |
| ueber-mich.html | Unternehmen; bestehende URL erhalten |
| kontakt.html | Validiertes EmailJS-Formular mit Themenübernahme |
| components/ | Gemeinsame Kopf- und Fußbereiche |
| assets/css/style.css | Grundelemente, Seitenlayouts, Formularzustände |
| assets/css/editorial.css | V2-Kompositionen und responsive Anpassungen |
| assets/icons/ | Favicon und eigens erstellte SVG-Illustration |
| assets/js/ | Navigation, Themenfinder, Kontaktformular |
| docs/site.json | Seiteninventar, Basis-URL, Indexierungsmodus |
| tools/ | Abgleich, Prüfung, Vorschau, Paketierung, Metadatenwechsel |

Header/Footer in `components/` ändern, danach `python tools/components.py` ausführen. Seiteninhalte direkt in den HTML-Dateien bearbeiten. Der Abgleich setzt den aktiven Navigationspunkt. `--check` erkennt abweichende Kopien in CI.

## GitHub Pages und eigene Domain

Der Branch-/Pull-Request-Workflow bleibt erhalten. `validate.yml` prüft Pull Requests und main. `pages.yml` baut und deployt Änderungen an main, sobald die Repository-Variable `PAGES_ENABLED=true` gesetzt ist. Bis dahin bleibt der Deployment-Job deaktiviert.

1. Fehlende Unternehmens- und Rechtsangaben ergänzen und prüfen; EmailJS-Postfach und Verbindung bestätigen.
2. Öffentliche Metadaten vorbereiten:

   ```sh
   python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
   python tools/package.py
   ```

3. Änderungen über Pull Request nach main übernehmen.
4. Unter Settings → Pages → Source „GitHub Actions“ wählen und `PAGES_ENABLED=true` als Repository-Variable setzen. Workflow bei Bedarf manuell starten.

Bis dahin bleibt noindex aktiv und die Sitemap leer. Das ist kein Zugriffsschutz. Im öffentlichen Modus werden die sieben Inhaltsseiten indexierbar; rechtliche Entwürfe und 404 bleiben ausgeschlossen. Bei finalisierten Rechtstexten deren Indexierung separat prüfen.

Für eine eigene Domain die Metadaten mit der tatsächlichen HTTPS-Adresse umstellen. CNAME im Root, DNS und Domain-Einstellungen separat konfigurieren. Ein vorhandenes CNAME wird paketiert. Reguläre Links und Assets sind relativ; die 404-Basis wird aktualisiert. Eine robots.txt unter /Yilmaz/ gilt nicht für den gesamten GitHub-Pages-Host.

## Kontakt und Datenschutz

Die vorhandene öffentliche EmailJS-Konfiguration bleibt in kontakt.html. Keine privaten Schlüssel oder Browser-konfigurierbaren Empfänger. Nachrichten werden nur beim Absenden übertragen. Keine externen Fonts, Analysewerkzeuge oder eingebetteten Karten. Validierung, Honeypot, Timeout und Mehrfachsendesperre bleiben erhalten.

Einrichtung: [docs/EMAILJS-SETUP.md](docs/EMAILJS-SETUP.md). Automatische Tests senden ausschließlich simulierte Anfragen. Live-Postfacheingang und E-Mail-Client-Darstellung sind nicht verifiziert.

## Qualitätsprüfung

```sh
python tools/components.py --check
python tools/verify.py
python tests/release_test.py
python tools/email-preview.py
node --check assets/js/main.js
node --check assets/js/contact.js
node --test tests/contact.test.js
python tools/package.py
```

Browser-Prüfbericht: [docs/QUALITY.md](docs/QUALITY.md). Die Grundgestaltung funktioniert ohne JavaScript. Tastaturfokus, reduzierte Bewegung, Formularlabels und Statusmeldungen sind berücksichtigt. Keine behauptete WCAG-Zertifizierung oder gemessene Core Web Vitals.
