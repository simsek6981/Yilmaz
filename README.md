# Yilmaz · F-Tax Website V4

Neun aktive Seiten für F-Tax Steuerberatung GmbH in Leonding. Die Website konzentriert sich vorerst auf Steuerberatung, Buchhaltung, Lohnverrechnung und Bilanzierung. Ein Leistungsfinder führt zum passenden Angebot und übernimmt das Thema in das neue Kontaktformular. Die Prozessoptimierungsseite ist bis zur späteren Freigabe deaktiviert.

## Entwickeln und prüfen

Voraussetzungen: Python 3.10+; Node.js für die JavaScript-Syntaxprüfung.

```sh
python build.py
python verify.py
node --check src/assets/script.js
node --check src/assets/contact.js
node --test tests/contact.test.js
python -m http.server 4173 --directory dist --bind 127.0.0.1
```

Vorschau: http://127.0.0.1:4173 . Alternativ HTML-Dateien direkt öffnen.

## Projektstruktur

| Pfad | Zweck |
| --- | --- |
| src/pages/ | Individuelle Inhalte und Seitenlayouts |
| src/templates/layout.html | Gemeinsame Navigation, Footer und Metadaten |
| src/content/site.json | Firmendaten und Seitenmetadaten |
| src/content/contact.json | Öffentliche EmailJS-Konfiguration, aktuell noch leer |
| src/assets/ | Styles, JavaScript und Favicon |
| build.py | Statische Ausgabe, Canonicals, Sitemap und robots.txt |
| verify.py | Alle Seitenlinks, Assets, Sprungziele und Metadaten prüfen |
| dist/ | Generierte Website; Änderungen aus src/ übernehmen |
| .github/workflows/validate.yml | Qualitätsprüfung bei Push und Pull Request |
| .github/workflows/pages.yml | Manuell gestartete öffentliche Freigabe |
| EMAILJS-SETUP.md | Einrichtung des Kontaktversands im kostenlosen Tarif |
| templates/contact-email.txt | Inhalt für die feste EmailJS-Vorlage |
| tests/contact.test.js | Acht Tests für Validierung, Versand und Fehlerfälle |

## Zugriff und Veröffentlichung

Die gewünschte private Vorschau bleibt bestehen. Standard-Builds haben `noindex, nofollow`, eine sperrende robots.txt und eine leere gültige Sitemap. Das ist kein Zugriffsschutz: Eine private Online-Vorschau braucht zusätzlich Hostingzugriffsschutz.

Der Pages-Workflow startet nur manuell und nur mit aktiviertem `public_release`. Er wird bei dieser Überarbeitung nicht gestartet. Das GitHub-Repository ist öffentlich: https://github.com/simsek6981/Yilmaz .

Für eine später ausdrücklich genehmigte öffentliche Freigabe:

```sh
python build.py --public --base-url https://simsek6981.github.io/Yilmaz/
python verify.py
```

Unter Settings → Pages „GitHub Actions“ als Quelle wählen. Im Workflow die endgültige HTTPS-Basisadresse angeben. Bei einer eigenen Domain entsprechend ändern. Canonicals und Sitemap werden aus dieser Adresse erzeugt. Relative Assets und Seitenlinks funktionieren unter /Yilmaz/.

## Bestätigte Fakten und offene Angaben

F-Tax Steuerberatung GmbH; Leonding; ATU82256979; FN 655274p; Landesgericht Linz. Die angebotenen Leistungen stammen aus den gelieferten Angaben. Abläufe sind als mögliche Zusammenarbeit oder schematische Beispiele bezeichnet.

Noch offen: Logo/Bilder, Porträt, Name und Werdegang, vollständige Geschäftsadresse, Geschäftstelefon, direkte E-Mail-Adresse und vollständige rechtliche Angaben. Das neue Formular verwendet EmailJS per REST-API, bleibt aber bis zur Eintragung von Service-ID, Template-ID und Public Key deaktiviert. Das Empfängerpostfach wird in der EmailJS-Vorlage festgelegt. Keine erfundenen Bewertungen und kein Dokumenten-Upload.

## Prozessoptimierung später freigeben

Die Seite bleibt unter src/pages/ erhalten. Ihre Metadaten sind in src/content/site.json mit enabled=false markiert. Der Build entfernt die alte Ausgabe aus dist/, lässt sie aus Navigation und Sitemap weg und prüft, dass aktive Seiten keine Verweise darauf enthalten. Eine spätere Freigabe erfordert zusätzlich passende Navigations- und Inhaltsverweise.

Build, alle lokalen Seitenverweise und JavaScript-Syntax werden geprüft. Visuelle Browserprüfung, interaktive Menütests und Core-Web-Vitals-Messung sind wegen der nicht startenden Browserumgebung noch offen. Private Veröffentlichung ist weiterhin durch die lokale Hostingverbindung blockiert.
