# Qualitätsbericht V2 · 15.10.2026

## Automatisierte Prüfungen

- Zehn Root-Dokumente: lokale Links, Anker, individuelle Titel/Beschreibungen, de-AT, H1-/Überschriftenhierarchie, Canonicals, JSON-LD, Sitemap und Indexierungsmodus.
- Synchronität der gemeinsamen Header-/Footer-Komponenten.
- Neun Kontakt-/Mailtemplate-Tests: Validierung, Payload, Escaping, Honeypot, Netz-/Dienstfehler, Timeout, Mehrfachsendesperre und Erhalt der Eingaben.
- Metadatenwechsel auf öffentlicher Projekt-URL, eigener Domain und Vorschau-Unterpfad auf temporären Kopien.
- JavaScript-Syntaxprüfung und statische Paketierung.

Alle oben genannten Prüfungen erfolgreich. Keine echte E-Mail gesendet.

## Browserprüfung

Lokale Chromium-Vorschau: alle neun Inhalts-/Rechtsseiten bei 320, 390, 768 und 1440 Pixeln auf Seitenüberlauf geprüft. Ein Überlauf des Monatszyklus bei 320 Pixeln wurde behoben und erneut geprüft. Die zwölf illustrativen Jahresbalken wurden nach Sichtkontrolle auf ein festes Raster umgestellt.

Visuell geprüft: Startseite, Buchhaltung, Lohnverrechnung, Bilanzierung und mobiles Kontaktformular. Automatisch im Browser geprüft: Seitentitel/H1, Seitenbreiten und geladene Bilder. Die anderen Seiten wurden zusätzlich strukturell und im Browser-DOM kontrolliert.

Interaktionen: mobiles Menü öffnen, Leistungen ausklappen, Escape zum Schließen beider Ebenen, sichtbarer Fokus beim Tab-Wechsel, Themenfinder auf Bilanzierung umstellen, Link zum korrekt vorausgewählten Formular, FAQ öffnen, Nachrichtenzähler und Pflichtfelder. Keine Browser-Konsolenwarnungen/-fehler im geprüften Kontaktseitenaufruf.

GitHub-Pages-Verhalten lokal unter /Yilmaz/ geprüft: direkte Unterseite, unbekannte tiefe Adresse, 404 mit Stylesheets und funktionierender Rückkehr zur Startseite. Öffentliche Indexierung und Domainwechsel separat durch Release-Tests geprüft.

## Grenzen und offene Angaben

Keine realen Core-Web-Vitals-Messwerte, kein vollständiges WCAG-Audit, keine Prüfung in Safari/Firefox oder auf physischem Mobilgerät. Reduced-Motion-Fallback ist im CSS und JavaScript implementiert, kein gesonderter Betriebssystem-Test.

Für die Veröffentlichung fehlen weiterhin bestätigte Geschäftsanschrift, direkte Kontaktangaben, vertretungsberechtigte Personen und vollständige rechtliche Texte. Persönliche Vorstellung und Kanzleifotos wurden nicht erfunden. EmailJS-Empfänger, Live-Template und Postfacheingang müssen im tatsächlichen Konto geprüft werden.

Der Pages-Workflow ist vorbereitet, aber durch PAGES_ENABLED deaktiviert. noindex und die leere Vorschau-Sitemap bleiben bis zur Freigabe bestehen. Das ist kein Zugriffsschutz. Eine erfolgreiche Live-Veröffentlichung wird nicht behauptet.
