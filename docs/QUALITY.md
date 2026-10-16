# Prüfbericht · Cinematic Dark Luxury · 16.10.2026

## Tatsächlich ausgeführt

- Komponentenabgleich, interne Links/Anker, zehn Root-Seiten, Metadaten, JSON-LD, Formularvertrag, Sitemap und bestehende Vorschau-Indexierung: bestanden.
- Release-Test auf temporären Kopien für GitHub-Unterpfad, eigene Domain und Vorschaumodus: bestanden.
- JavaScript-Syntax und `git diff --check`: bestanden.
- 19 Node-Tests: bestanden. EmailJS-Payload, Pflichtfelder, Fehler/Timeouts, Spamfalle, Doppelabsenden, Cooldown, unterschiedliche Reveal-Arten, Reduced Motion und Menübedienung sind eingeschlossen.
- E-Mail-Vorschauerzeugung, Escaping, optionale Felder und mehrzeilige Nachricht: bestanden.
- Wortlaut von Impressum und Datenschutz gegen den Ausgangscommit `770cb5988ad7940c09803eb82b19b1ed871ae9aa` verglichen: identisch.
- Statisches Paket mit sämtlichen lokalen Bildern und Fonts erzeugt und geprüft; `dist/` bleibt ungetrackt.

## Echter Browser

Geprüft mit Playwright und installiertem Microsoft Edge im Headless-Modus unter der lokalen GitHub-Pages-Unterpfad-Vorschau.

Startseite, Steuerberatung, Über mich, Impressum und Datenschutz bei 360, 390, 768, 1024, 1440 und 1920 CSS-Pixeln: 30 Kombinationen ohne horizontalen Überlauf, jeweils am Seitenanfang, in der Mitte und am Ende. Desktop-/Mobilaufnahmen aller fünf Seiten sowie Tablet-Hero und E-Mail-Designvorschau wurden erzeugt. Hero, Fachseite, Profil, Menü, Kontakt- und Rechtsbereiche wurden visuell kontrolliert.

Funktional geprüft: mobiles Öffnen/Schließen, Escape mit Fokusrückgabe, Navigationslink, Wechsel auf Desktop; Validierung mit Fehlerfokus; simulierte EmailJS-Payload, Ladezustand, Doppelabsendesperre, Erfolg, Reset, Cooldown und Serverfehler mit erhaltenen Eingaben; Themenvorbelegung; vier Alt-URLs und verschachtelte 404 mit funktionierenden Assets; vollständige reduzierte Bewegung; Inhalte und Navigation bei deaktiviertem JavaScript. Keine JavaScript-Seitenfehler. Alle Gestaltungsassets werden lokal angefordert; EmailJS-Aufrufe entstehen nur beim Absenden und wurden in den Tests simuliert.

axe-core 4.10.3 mit den Regeln für WCAG 2 A/AA, WCAG 2.1 AA und WCAG 2.2 AA: keine gemeldeten Verstöße auf den fünf Seiten bei 390 und 1440 Pixeln. Auf der Startseite wurden auch die geöffneten optionalen Formularfelder geprüft. Kapitelnummern wurden nach dem ersten Kontrastbefund aufgehellt. Native CSS-Scroll-Timeline im Browser unterstützt und ein tatsächlicher Wechsel der Prozesslinien-Skalierung beim Scrollen gemessen.

Die wiederholbaren Tests liegen in `tests/browser.cjs` und `tests/accessibility.cjs`. Die CI speichert deren Berichte und Screenshots unter `website-browser-qa`.

## Grenzen und offene Betriebsaufgaben

Dies ist kein vollständiges manuelles WCAG-Audit. Safari, Firefox, echte Mobilgeräte, Screenreader und E-Mail-Clients wurden nicht geprüft. Es liegen keine belastbaren Feldmessungen von LCP, INP oder CLS vor. Eine kleine lokale Schrift, SVG statt großer Rasterbilder, intrinsische Bildgrößen, keine Runtime-Abhängigkeiten und keine Endlosanimationen begrenzen die technischen Kosten.

Es wurde keine echte E-Mail verschickt und kein Postfacheingang geprüft. Das neue Template muss in EmailJS übernommen, Empfänger/Reply-To sowie ein echter Versand bestätigt werden. Unternehmens-/Biografiedaten und rechtliche Entwürfe müssen entsprechend dem bereits vorhandenen Freigabestatus bestätigt werden. Vorschau-Indexierung und die vorhandene Pages-Freigabevariable bleiben unverändert. Der Pull-Request enthält den fertigen Code; ein produktives Pages-Deployment wird dadurch nicht als erfolgt behauptet.
