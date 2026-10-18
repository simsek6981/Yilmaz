# F-Tax · New Perspective

Stand: 18. Oktober 2026. Ausdrücklich gewünschter neuer visueller Auftritt nach der vorherigen reduzierten Fassung.

## Design Read

Website einer persönlichen Steuerberatung für Unternehmen, Gründende und Privatpersonen. Modus: Redesign · Overhaul. Dramatischer, räumlicher Auftakt und klare interaktive Orientierung; stabile Navigation, verständliche Fachtexte und echte Daten bilden die Grundlage.

Varianz 8: neue Hero-Komposition, Kartenraster, interaktiver Auswahlbereich und horizontale Prozesse. Bewegung 5: einmalige Entrées, Auswahlwechsel und zurückhaltende Hoverreaktionen; keine Endlosschleifen. Dichte 5: kurze Einstiegsinformationen mit vollständigen Fachseiten. Asset-Abhängigkeit 7: neue eigens generierte Chromskulptur und das originale Logo. Markentreue 6: Logo, Manrope, Angaben und Ton bleiben, die Farb- und Formensprache wird neu gestaltet.

## System

- Anthrazit `#0b0f14`, Text `#f5f6f7`, Akzent `#d7ff6c`, Sekundärtext `#aab2bc`, helle Flächen `#eef1f4`.
- Lokale Manrope, große Headlines, sichtbare Wortabstände; Außenabstände flüssig, Inhaltsbreite maximal 1280px, 8px-Grundraster.
- Runde Aktionsflächen, 16–24px-Radien für Karten, 24–36px für große Abschnittswechsel. Kein allgemeines Glassmorphism-System.
- Zustände über Farbe, Linien und präzise Bewegung. Text behält auch während Animationen vollen Kontrast. Alle Bewegungen werden bei Reduced Motion abgeschaltet.
- Original-Logo: `assets/icons/logo.svg`, unverändert. Auf dunklem Grund wird es nur per CSS invertiert.
- Neue Bildwelt: `assets/images/perspective-chrome.webp` sowie die mobile Variante. Generative abstrakte Illustration, kein tatsächlicher Standort und kein Porträt. Vollständiger Prompt und Toolmodus in `docs/modern-image-prompt.md`.

## Erhaltene Verträge

Firmenname, Geschäftsführer, Adresse, Telefon, E-Mail, UID, Biografie, Leistungen und Partnerhinweis stammen aus dem vom Nutzer benannten Repository. Formularfelder und EmailJS-Kennungen sowie Validierung, Fehlerrückmeldung, Spamfeld, Versandsperre und Wiederholschutz bleiben erhalten. Bestehende Routen und Fachanker, mobile Tastaturnavigation, No-JavaScript-Fallback und Vorschau-noindex bleiben erhalten. Keine erfundenen Kundenstimmen, Kennzahlen, Porträts oder Auszeichnungen.

## Neue Interaktion

Drei ARIA-Tabs für Unternehmen, Gründung und Privatpersonen. Pfeiltasten, Home und End; aktive Zustände und passende echte Fachlinks. Ohne JavaScript werden alle Inhalte angezeigt. Es werden keine personenbezogenen Informationen für die Auswahl gespeichert.

## Prüfung und Grenzen

Mobile Erhaltungsanpassung vom 18. Oktober 2026: Farben, Manrope, Logo, Bildwelt und Desktopkomposition bleiben bestehen. Größere mobile Typografie und Touchflächen, flexible Bildhöhen, sichere Umbrüche und SVG-Bedienicons. Prüfung und genaue Grenzen: `docs/MOBILE-POLISH.md`.

Aktuelle tatsächliche Resultate: `MODERN-REDESIGN.md`. Echte EmailJS-Zustellung, Domainfreigabe im Dienst und juristische Bestätigung der bestehenden Rechtsentwürfe bleiben als konkrete Betriebsprüfungen offen. Private Sites-Vorschau und GitHub-Pull-Request sind getrennte Veröffentlichungswege.
