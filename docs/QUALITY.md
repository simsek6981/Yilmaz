# Prüfbericht · Atelier · 15.10.2026

## Automatisiert

- `python tools/components.py --check`: gemeinsamer Header/Footer konsistent.
- `python tools/verify.py`: zehn Root-Seiten, interne Links und Anker, Assets, Metadaten, Schema, Formularvertrag, Sitemap und Vorschau-Indexierung bestanden.
- `python tests/release_test.py`: Wechsel zwischen GitHub-Unterpfad, eigener Domain und Vorschau bestanden; Test arbeitet temporär und hat den Arbeitsstand nicht veröffentlicht.
- `node --check` für `main.js` und `contact.js` bestanden.
- `node --test tests/contact.test.js tests/motion.test.js`: 17/17 Tests bestanden, darunter EmailJS-Payload, Validierung, Fehler/Timeout, Doppelabsendesperre, Einmaleffekte, reduzierte Bewegung und Menübedienung.
- `python tools/package.py`: statisches GitHub-Pages-Paket erzeugt; `dist/` wird nicht getrackt.
- `git diff --check` bestanden.

## Browserprüfung

Die lokale Vorschau wurde unter `http://127.0.0.1:8000/Yilmaz/` im Browser geöffnet. Startseite, Steuerberatung, Über mich, Impressum und Datenschutz wurden bei 360, 390, 768, 1024, 1440 und 1920 px auf horizontales Überlaufen geprüft. Nach Korrekturen am Mobilmenü, einer Kapitelüberschrift und dem Zielgruppenraster wurde kein Überlauf mehr gemessen.

Desktop- und Smartphone-Hero, Tablet-Layout, mobile Steuerberatungs- und Profilseite sowie das Anfrageformular wurden visuell geprüft. Das Mobilmenü wurde geöffnet und ein Navigationslink benutzt. Die leere Terminanfrage erzeugte die erwartete Meldung, markierte das Namensfeld und setzte den Fokus dorthin. Die Browserkonsole enthielt bei der lokalen Startseite keine Fehler oder Warnungen. Desktop- und Mobil-Screenshots liegen in der Aufgabenausgabe.

## Offene Grenzen

Eine echte EmailJS-Anfrage wurde nicht gesendet. Das HTML-Template muss im EmailJS-Dashboard synchronisiert und der Postfacheingang einschließlich Reply-To dort geprüft werden. Keine gemessenen LCP-, INP- oder CLS-Werte, kein vollständiges WCAG-2.2-AA-Audit und keine Safari-/Firefox-Prüfung. Die bestehenden rechtlichen Entwürfe sowie Unternehmens- und Biografiedaten müssen vor öffentlicher Freigabe durch F-Tax bestätigt werden. Der vorhandene `noindex`-Vorschaumodus bleibt aktiv.
