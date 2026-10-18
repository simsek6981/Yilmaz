# Mobile Anpassungen und Symbolbereinigung

18. Oktober 2026 · bestehende F-Tax-Website

## Analyse und Erhalt

Modus: Redesign · Preserve, begrenzt auf responsive Reparaturen und die angeforderte Symbolbereinigung. Die statischen Seiten verwenden gemeinsame Header-/Footer-Dateien, `main.css`, `responsive.css` sowie die bestehenden Menü-, Tab- und Formularskripte. Kleine Texte und 40px-Menüflächen, starre mobile Bildhöhen und eine bei 768px überstehende Herozeile waren die relevanten Schwächen. Die vorherige reine Prüfung der Dokumentbreite hatte den Überstand innerhalb der Hero-Komposition nicht erkannt.

Design Read: persönliche Steuerberatung; bestehende kontrastreiche, typografische Markenwelt. Varianz 8, Bewegung 5, Dichte 5 und Asset-Abhängigkeit 7 bleiben erhalten; Markentreue 10. Der Schwerpunkt liegt auf Lesbarkeit und Kontaktaufnahme aus kurzer Betrachtungsdistanz am Telefon. Lange Inhalte dürfen wachsen und umbrechen. Die Desktopkomposition bleibt erhalten.

System: unverändert Anthrazit `#0b0f14`, Lime `#d7ff6c`, lokale Manrope, vorhandene Radien, Schatten und Bewegung. Mobile Außenabstände folgen dem vorhandenen Raster; Inhalte, Original-Logo, Bilddateien und Tonalität bleiben bestehen. Routen, Anker, Formularfelder, Validierung, EmailJS-Konfiguration, Statusmeldungen und Tastaturverhalten werden nicht verändert. Keine neuen Produktfunktionen oder Abhängigkeiten.

## Änderungen

- Größere mobile Fließtexte, Beschriftungen und Buttons; Formulartexte und Eingaben sind auch bei 768px gut lesbar. Eingaben haben mindestens 16px Schriftgröße.
- Einspaltige Telefonansichten, flexibel umbrechende Karteninhalte und breite primäre Aktionen. Der Kontaktbereich wird auch auf dem Tablet einspaltig; Felder nutzen dort weiterhin zwei Spalten.
- Menü und primäre eigenständige Touchflächen mindestens 44px, mobil vertikal angeordnete Navigationslinks. Vorhandenes Öffnen, Schließen, Escape, Fokus-Rückgabe und Größenwechsel bleiben erhalten.
- Mobile Hero-Bilder mit Seitenverhältnis statt fester Höhe. Die Kontaktkarte liegt im Layoutfluss der Bildfläche und kann mit ihrem Inhalt wachsen.
- Überstehende Heroüberschrift bei 768px korrigiert; kleinere Telefonbreiten erhalten eine flüssige Schriftgröße.
- Dekorative Unicodepfeile in der Leistungszeile, den Werten und den Tabs entfernt. Funktionale Richtungshinweise verwenden das vorhandene Prinzip lokaler strokierter SVG-Icons. Keine Emoji-Schrift als Iconquelle und keine leeren Symbolabstände. Überschriften, Texte, Navigation, Footer, Karten, Formular- und Statusmeldungen geprüft; Copyrightzeichen bleiben als Rechtsangabe erhalten.

## Browserprüfung

Lokaler Quellstand, `python tools/serve.py --port 8000`, `http://127.0.0.1:8000/Yilmaz/`. Playwright mit installiertem Microsoft Edge (Chromium), DPR 1.

| Breite | Höhe | Seiten | Ergebnis |
| --- | --- | --- | --- |
| 360px | 844px | 9 | bestanden |
| 390px | 844px | 9 | bestanden |
| 430px | 844px | 9 | bestanden |
| 768px | 1024px | 9 | bestanden |
| 1440px | 1024px | 9 | bestanden |

Alle 45 Kombinationen ohne horizontalen Überlauf, abgeschnittene geprüfte Text-/Bedienelemente, Emoji im UI-Text oder neue JavaScript-/Assetfehler. Sichtprüfung der Screenshots für alle fünf Breiten und gezielter Ansichten von Menü, Karten, Auswahlbereich, Formular und Footer.

Menüöffnung, Escape mit Fokus-Rückgabe, Fachseitennavigation, Wechsel zwischen mobilem und Desktopmenü, Kartenlinks und Terminanker bestanden. Bei jeder Breite wurden ungültiger Name/E-Mail, optionale Formularfelder, laufender Versand, Erfolg, Fehler, Rücksetzen und Erhalt von Eingaben geprüft. Alle EmailJS-Anfragen wurden abgefangen; keine reale Nachricht wurde versendet.

Die Desktopgeometrie von Header, Hero, H1, Kartenraster, Kontaktlayout, Formular und Footer wurde vor/nachher verglichen und ist identisch. Die beauftragte Symbolbereinigung ist davon unabhängig sichtbar.

Weitere Regression: 64 bestehende Seiten-/Breitenprüfungen und 12 Funktionsprüfungen bestanden, einschließlich No-JavaScript, Reduced Motion, FAQ, Tabs, Weiterleitung und 404. 19 Node-Tests bestanden. 20 axe-core-Zustände ohne Verstöße gegen die geprüften WCAG-A/AA-Regeln. Komponenten-, Link-, Anker-, Metadaten-, Schema-, Formularvertrag- und Releaseprüfungen bestanden. Der neue gezielte Browserlauf ist als `npm run test:mobile` auch in CI eingebunden.

Nachweise liegen lokal in `qa/mobile/`: `mobile-acceptance.json`, `desktop-before.json`, `desktop-after.json` sowie `before-*`/`after-*`-Screenshots. Reproduktion: Vorschau starten, `npm run test:mobile`; bei einem installierten Systembrowser optional `FTAX_BROWSER_CHANNEL=msedge`. QA-Dateien sind nicht Teil der veröffentlichten Website.

## Grenzen

Keine Prüfung auf physischen iOS-/Android-Geräten oder in Safari/Firefox. Die echte EmailJS-Zustellung ist durch den simulierten Versand nicht nachgewiesen. Das automatisierte axe-Ergebnis ersetzt kein vollständiges manuelles Barrierefreiheits-Audit. Bestehende rechtliche Entwürfe und Angaben bleiben unverändert.
