# F-Tax · Design und erhaltene Verträge

Quelle: https://github.com/simsek6981/Yilmaz, Stand des geklonten main-Zweigs. Unternehmensdaten, Original-Logo, Fachtexte, Biografie und EmailJS-Konfiguration stammen aus diesem vom Nutzer benannten Repository. Firmenname, Geschäftsführer und Adresse sind zusätzlich über https://www.evi.gv.at/f/655274p abgeglichen.

## Design Read

- Website einer persönlichen Steuerberatung für Unternehmen, freie Berufe und Privatpersonen in Leonding und österreichweit.
- Modus: Redesign · Overhaul. Neue Art Direction, bestehende Inhalte und Transportverträge.
- Sprache: ruhige, typografisch geprägte Geschäftskommunikation; großzügige Flächen, präzise Linien, eine markeneigene F-Skulptur.
- Dials: Varianz 6 (wechselnde Kompositionen), Bewegung 3 (kurze Reveals und Zustandswechsel), Dichte 5 (kurze Übersicht, ausführliche Fachseiten), Asset-Abhängigkeit 3 (Original-Logo und vorhandene SVG), Markentreue 7 (Original-Logo, lokale Manrope, Inhalt und Ton bleiben).

## Positionierung und System

Der Hero erklärt Angebot und Ansprechpartner auf Telefon und Laptop aus kurzer Lesedistanz. Autoritativ, aber zugänglich; H1, kurzer Leistungsbezug und CTA müssen gemeinsam sichtbar sein. Fachseiten priorisieren Navigation und ruhige Leselänge. Der Abschluss führt unmittelbar zur Anfrage.

- Farben: Tannengrün #193a32, Elfenbein #f6f5ef, dunkle Schrift #20352d, Salbei #bdcdb2, gedeckter Text #57645c.
- Typografie: lokal gehostete Manrope (assets/fonts/manrope-latin.woff2), 16–18px Fließtext, 68–112px Desktop-Hero, 46–68px mobile Headline. Keine externe Fontanfrage.
- Raster: 8px-Basis, 24/32/48/64/96px-Abstände, Inhaltsbreite 1280px, flüssige Außenabstände.
- Formen: 3px an Buttons, 0–8px an Flächen. Kreise nur bei Richtungspfeilen. Keine Glassmorphism-Flächen.
- Tiefe: nur sehr dezenter Schatten an der klebenden Navigation. Hierarchie entsteht durch Typografie und Farbe.
- Motion: 220ms für Zustände, einmalige 430–760ms-Reveals; reduced-motion zeigt alle Inhalte statisch. Keine Endlosschleifen.
- Logo: assets/icons/logo.svg ist unverändert. assets/images/perspective.svg bleibt als Original erhalten; perspective-sage.svg ist eine neue Farbvariante der bestehenden Codegrafik.

## Erhalten

Routen und alte Anker, Kontaktdaten, Original-Logo, tatsächliche Biografie, Hinweis zum Lohnverrechnungspartner, Rechtsentwürfe und deren Freigabehinweise; sämtliche Formularfeldnamen, EmailJS-Service/Template/Public-Key, Validierung, Fehlerrückmeldung, Spamfeld, Sperre während Versand und Wiederholschutz. Bestehende Vorschau bleibt noindex. Keine erfundenen Bewertungen, Teamfotos, Kennzahlen oder Auszeichnungen.

## Verbessert

Kontrast und Schriftgrößen, mobile Komposition, weniger dekorative Metadaten, gut sichtbare Kontaktoptionen, vollständige Buchhaltungs-/Bilanzierungs-/Lohnverrechnungsseiten an bisherigen Weiterleitungsrouten, FAQ zur Zusammenarbeit, klare Fokuszustände und reduzierte Bewegung.

## Grenzen

EmailJS-Empfang und Domainfreigabe erfordern einen echten Zustelltest im bestehenden Konto; QA fängt alle Versandaufrufe ab und sendet keine Nachrichten. Rechtliche Entwürfe und Unternehmensangaben behalten ihren ursprünglichen Bestätigungsbedarf. Private Sites-Vorschau ist keine Freigabe für öffentliche Suchmaschinenindexierung.
