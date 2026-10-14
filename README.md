# Yilmaz · F-Tax Website V2

Zehn individuell aufgebaute Seiten für F-Tax Steuerberatung GmbH in Leonding. Statisches HTML ohne Framework oder Paketabhängigkeiten.

## Entwickeln und prüfen

Voraussetzungen: Python 3.10+; Node.js für die JavaScript-Syntaxprüfung.

```sh
python build.py
python verify.py
node --check src/assets/script.js
python -m http.server 4173 --directory dist --bind 127.0.0.1
```

Vorschau: http://127.0.0.1:4173 . Alternativ HTML-Dateien direkt öffnen.

## Projektstruktur

| Pfad | Zweck |
| --- | --- |
| src/pages/ | Individuelle Inhalte und Seitenlayouts |
| src/templates/layout.html | Gemeinsame Navigation, Footer und Metadaten |
| src/content/site.json | Firmendaten und Seitenmetadaten |
| src/assets/ | Styles, JavaScript und Favicon |
| build.py | Statische Ausgabe, Canonicals, Sitemap und robots.txt |
| verify.py | Alle Seitenlinks, Assets, Sprungziele und Metadaten prüfen |
| dist/ | Generierte Website; Änderungen aus src/ übernehmen |
| .github/workflows/validate.yml | Qualitätsprüfung bei Push und Pull Request |
| .github/workflows/pages.yml | Manuell gestartete öffentliche Freigabe |

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

Noch offen: Logo/Bilder, Porträt, Name und Werdegang, vollständige Geschäftsadresse, Geschäftstelefon, E-Mail und vollständige rechtliche Angaben. Keine erfundenen Bewertungen, keine vorgetäuschte Nachrichtenübermittlung und kein Dokumenten-Upload.

Build, alle lokalen Seitenverweise und JavaScript-Syntax werden geprüft. Visuelle Browserprüfung, interaktive Menütests und Core-Web-Vitals-Messung sind wegen der nicht startenden Browserumgebung noch offen. Private Veröffentlichung ist weiterhin durch die lokale Hostingverbindung blockiert.
