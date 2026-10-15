# F-Tax · Yilmaz

Neu gestaltete Website für **F-Tax Steuerberatung GmbH in Leonding**: warmes Weiß, Dunkelgrün, Salbeitöne, Serifenschrift und individuelle Seitenlayouts. Die fertigen HTML-Seiten liegen direkt im Root. Kein Framework, keine Paketinstallation, kein Build und kein `dist`-Ordner.

## Vorschau

`index.html` direkt öffnen oder `python -m http.server 8000` im Repository ausführen und `http://localhost:8000/` aufrufen. Die im Chat bereitgestellte Einzeldatei-Vorschau sperrt den E-Mail-Versand ausdrücklich. Die echten Root-Seiten enthalten die bereitgestellte EmailJS-Konfiguration.

## Struktur

| Pfad | Zweck |
| --- | --- |
| `index.html` | Startseite mit Leistungsfinder |
| `steuerberatung.html` | Steuerarten, Vertretung, Rechtsformwahl, Umgründungen |
| `buchhaltung.html` | Finanzbuchhaltung und Einnahmen-Ausgaben-Rechnung |
| `lohnverrechnung.html` | Lohn- und Gehaltsabrechnung inklusive Meldungen |
| `bilanzierung.html` | Jahresabschluss und Bilanz |
| `ueber-mich.html` | Über F-Tax; bestehende URL erhalten |
| `kontakt.html` | Formular und öffentliche EmailJS-Konfiguration |
| `impressum.html`, `datenschutz.html`, `404.html` | Rechtliche Entwürfe und Fehlerseite |
| `assets/css/style.css` | Gestaltung und responsive Layouts |
| `assets/js/main.js`, `assets/js/contact.js` | Navigation, Leistungsfinder und Kontaktversand |
| `assets/icons/favicon.svg` | Lokales Favicon |
| `assets/email-templates/contact-notification.html` | HTML-Code für EmailJS |
| `docs/` | Planung, Einrichtung, Architektur, Metadaten und E-Mail-Designvorschau |
| `tools/`, `tests/` | Optionale Prüfungen und Hilfswerkzeuge |
| `.github/workflows/validate.yml` | Automatische Prüfung ohne Veröffentlichung |

`dist/`, `src/` und `templates/` wurden nach Prüfung der neuen Root-Seiten entfernt. `dist/` ist künftig ausgeschlossen. Prozessoptimierung ist nicht vorhanden, verlinkt oder in der Sitemap. Der Entwurf bleibt in der Git-Historie erhalten.

## EmailJS: neues Template einsetzen

Die Werte sind bereits in `kontakt.html` eingetragen: Service `service_ja02fgi`, Template `template_tk14gwp`, Public Key `VaQ_PnlLN756oJY4H`.

1. **Email Templates → template_tk14gwp** im EmailJS-Dashboard öffnen.
2. Auf **Code Editor / HTML (<> Symbol)** umstellen.
3. Den gesamten Code aus [`assets/email-templates/contact-notification.html`](assets/email-templates/contact-notification.html) einsetzen.
4. Die folgenden Felder einstellen und **Save** wählen:

| Feld | Wert |
| --- | --- |
| Subject | `F-Tax Kontaktanfrage: {{topic}}` |
| From Name | `F-Tax Website` |
| From Email | Standardadresse des verbundenen Dienstes |
| To Email | Gewünschte Empfängeradresse fest eintragen |
| Reply To | `{{reply_to}}` |

Die Variablen heißen `from_name`, `from_email`, `reply_to`, `company`, `phone`, `topic` und `message`. Das Formular sendet **topic**, keine Variable namens `subject`. Leere optionale Felder zeigen „Nicht angegeben“. Doppelte Klammern escapen Nutzereingaben. Die Nachricht steht in einem Textblock mit Zeilenumbrüchen.

**Das Live-Template wurde nicht im Dashboard geändert.** Empfänger, verbundener Dienst und tatsächlicher Postfacheingang sind nicht geprüft. Nach dem Speichern eine echte Testanfrage über die verwendete HTTPS-Seite senden und Eingang sowie Antwortadresse kontrollieren. Details: [`docs/EMAILJS-SETUP.md`](docs/EMAILJS-SETUP.md).

## GitHub Pages aus dem Root

Vorbereitet für **Settings → Pages → Deploy from a branch → main → / (root)**. `.nojekyll` ermöglicht die direkte statische Auslieferung. Der bisherige Deployment-Workflow für dist wurde entfernt.

Die bisher gewünschte private Vorschau wurde **nicht öffentlich freigeschaltet**; GitHub Pages wurde nicht aktiviert. Branch-Hosting dieses öffentlichen Repositorys bietet keinen Zugriffsschutz. Auch `noindex` ist kein Passwortschutz.

Die Canonical-Basis ist auf `https://simsek6981.github.io/Yilmaz/` vorbereitet. Das ist keine Bestätigung einer Live-Veröffentlichung. Vor der späteren öffentlichen Freigabe kann dieses optionale Werkzeug die Metadaten umstellen:

```sh
python tools/prepare-release.py --public --base-url https://simsek6981.github.io/Yilmaz/
python tools/verify.py
```

Bei eigener Domain die Basisadresse ersetzen. Das Werkzeug ändert Canonicals, Schema-URLs, 404-Basis, Sitemap und robots.txt. Es erstellt keine zusätzlichen Seiten, setzt keinen CNAME und verändert kein DNS. Die Website selbst braucht weiterhin keinen Build.

## SEO und Performance

Individuelle Titel und Beschreibungen, genau eine H1, `de-AT`, Canonical-, Open-Graph- und Twitter-Metadaten sowie Organization-, WebSite-, WebPage-, Service- und Breadcrumb-Daten sind vorhanden. Keine erfundenen Bewertungen, Kontaktdaten oder Standorte.

Bis zur Freigabe bleiben alle Seiten auf `noindex, nofollow` und die Sitemap leer. Crawling ist erlaubt, damit Suchmaschinen das noindex lesen können. Der öffentliche Modus nimmt die sieben Inhaltsseiten in die Sitemap auf; rechtliche Entwürfe und 404 bleiben ausgeschlossen. Bei der Projekt-URL `/Yilmaz/` ist die dortige robots.txt keine robots.txt für den gesamten Host. Auf eigener Domain gehört sie an deren Root; Meta-Robots gelten seitenweise unabhängig davon.

Keine externen Schriften, Bilddownloads, Tracking-Skripte oder Animationen. Der Unternehmensname ersetzt ein noch unbestätigtes Logo. Mobile Navigation, Tastaturfokus und reduzierte Bewegung sind berücksichtigt. Core Web Vitals wurden nicht gemessen.

## Prüfungen

```sh
python tools/verify.py
python tests/release_test.py
python tools/email-preview.py
node --check assets/js/main.js
node --check assets/js/contact.js
node --test tests/contact.test.js
```

Geprüft werden Root-Struktur, Links und Anker, Metadaten, Schema-JSON, deaktivierte Seiten, Formularvertrag, Template-Variablen, Validierung, Fehlerfälle und Mehrfachsendungen. Öffentlicher Modus und Domainwechsel werden auf einer temporären Kopie getestet. Alle neun Formulartests verwenden simulierte Netzwerkantworten; keine echten E-Mails werden versendet.

Die Browserumgebung konnte nicht starten. Desktop-/Smartphone-Screenshots, echte Gmail-/Outlook-/Apple-Mail-Prüfungen und Postfacheingang bleiben offen. Für den Betrieb fehlen bestätigte Anschrift, direkte Firmenkontakte, persönliche Vorstellung und vollständige rechtliche Texte. Die EmailJS-Domainliste ist ohne Dashboard-Zugriff nicht prüfbar und laut Preisübersicht nicht im Free-Tarif enthalten. Kein Tarif wurde geändert.
