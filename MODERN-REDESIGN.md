# F-Tax · New Perspective

Ergänzung vom 18. Oktober 2026: Mobile Darstellung und Symbolbereinigung sind in [docs/MOBILE-POLISH.md](docs/MOBILE-POLISH.md) dokumentiert. Die Desktopkomposition bleibt erhalten.

18. Oktober 2026. Die vom Nutzer gewünschte deutlich modernere Gestaltung ersetzt die vorherige reduzierte Fassung. Bestehende Unternehmensangaben, Original-Logo, Fachinhalte, Routen und die EmailJS-Anbindung bleiben erhalten. Die Arbeit aktualisiert den bestehenden Pull Request #13.

## Gestaltung

- Dunkles Anthrazit `#0b0f14`, Weiß `#f5f6f7` und ein bewusst kräftiger Lime-Akzent `#d7ff6c`.
- Große, expressive Manrope-Typografie mit klaren Wortabständen, runden Aktionsflächen und kontrastierenden hellen Inhaltsbereichen.
- Neue Hero-Komposition mit einer eigens generierten abstrakten Chromskulptur. Das Bild ist eine Illustration; es behauptet weder reale Räume noch ein real vorhandenes Team.
- Eigenständige Leistungskarten mit konsistenten lokalen SVG-Icons, horizontaler Prozessdarstellung, klaren Zuständen und überarbeitetem Formular.
- Neues einheitliches CSS-System für alle Seiten; die alte Gestaltungsschicht wird nicht mehr eingebunden.

Die generierte Bilddatei wurde lokal in WebP optimiert: Desktop **93.698 Bytes**, zusätzlich eine mobile Variante. Keine externen Bild- oder Fontanfragen. Das Original-Logo bleibt als echte Bilddatei erhalten und wird auf dunklem Untergrund ausschließlich per CSS invertiert. Es wurde kein erfundenes Personenfoto eingesetzt.

## Neue Interaktion

„Was bewegt Sie?“ lässt Besucher zwischen Unternehmen, Gründung und Privatperson wählen. Die Auswahl zeigt passende Inhalte und echte weiterführende Links. Bedienung per Maus, Touch, Pfeiltasten, Home und End; aktive Tabs und zugehörige Panels sind semantisch verknüpft. Ohne JavaScript bleiben alle drei Inhalte lesbar. Es gibt keine erfundenen Auswertungen oder Kundenzahlen.

Animationen unterstützen den Einstieg und die Orientierung. Text behält während der Bewegung vollen Kontrast. Farbwechsel der Auswahl erfolgen unmittelbar, damit kein vorübergehend kontrastschwacher Zwischenzustand entsteht. Reduced Motion deaktiviert Bewegung vollständig.

## Tatsächliche Prüfungen

- **19 Node-Tests** für Formularvertrag, Fehler, Timeout, Wiederholschutz, Navigation und Motion bestanden.
- **64 Seite-/Viewport-Kombinationen** auf acht Seiten bei 320, 360, 390, 768, 1024, 1280, 1440 und 1920 Pixeln ohne horizontalen Überlauf.
- **12 Browserprüfungen** einschließlich des neuen Selektors, Tastatur, Menü, FAQ, Formularzuständen, Fachseiten, Weiterleitung, 404, Reduced Motion und No-JavaScript bestanden.
- Die Barrierefreiheitsprüfung wurde von 16 auf **20 Zustände** erweitert: acht Seiten bei 390/1440 Pixeln plus die zusätzlichen Auswahlzustände. Verbleibende Kontrastbefunde wurden behoben und erneut geprüft.
- Komponenten, Links und Anker, Metadaten, JSON-LD, zehn HTML-Routen, Formularlabels, Paketierung und der Wechsel zwischen Vorschau und öffentlicher Konfiguration wurden geprüft.

Lighthouse **13.5.0**, mobile Simulation der ausschließlich lokal indexierbar geschalteten Release-Kopie:

| Performance | Accessibility | Best Practices | SEO |
| ---: | ---: | ---: | ---: |
| 99 | 100 | 100 | 100 |

FCP **1,2 s**, LCP **2,1 s**, TBT **20 ms**, CLS **0**. Einzelne lokale Labormessung, keine Feldmessung am 75. Perzentil und kein gemessener INP. Die private Vorschau bleibt absichtlich `noindex`. Komprimierung und Caching des tatsächlichen Hosters wurden mit dem lokalen Python-Server nicht nachgewiesen.

## Skills, Quellen und Sicherheit

Verwendet: **Web Design Engineer**, **Sites**, **ImageGen**. ImageGen lief im eingebauten Tool-Modus. Pfade und vollständiger Prompt sind in [docs/modern-image-prompt.md](docs/modern-image-prompt.md) dokumentiert. Das Bild wurde in das Projekt kopiert und wird nicht aus einem persönlichen Generatorverzeichnis geladen.

Unternehmensdaten und Texte stammen weiterhin aus dem vom Nutzer benannten [Yilmaz-Repository](https://github.com/simsek6981/Yilmaz). Die fünf Wettbewerber und die zugrunde liegenden Erkenntnisse sind im [vorherigen Bericht](BERICHT.md) dokumentiert; diese Recherche wurde für die reine Designüberarbeitung nicht unnötig wiederholt.

Kein neues Laufzeitframework, keine neue externe API und kein Tracking. CSP und Referrer-Policy bleiben aktiv. Das EmailJS-Script, seine öffentlichen Kennungen und der Formulardatenvertrag wurden erhalten. Sämtliche Browser-Versandtests fangen die Netzwerkaufrufe ab; es wurden keine echten E-Mails versandt.

Unverändert offen: tatsächlicher EmailJS-Zustelltest vom Zielhost und die bereits dokumentierte rechtliche Bestätigung der Entwürfe. Die neue Gestaltung hebt diese Betriebsprüfungen nicht auf. Die automatisierte Prüfung ersetzt kein vollständiges manuelles Barrierefreiheits-Audit.

## Gestalterische Nachprüfung

Die größte Verbesserung liegt in der neuen Bildwelt und dem Wechsel von einer rein typografischen Beratungssite zu einer deutlich markanteren, interaktiven Komposition. Die Typografie wurde auf kleinen Bildschirmen separat skaliert; Lesbarkeit, Auswahlzustände und Fokusdarstellung haben Vorrang vor Effekten. Die interne Einschätzung lautet etwa 8 von 10, keine unabhängige Auszeichnung. Ein freigegebenes echtes Porträt bleibt eine mögliche spätere inhaltliche Verbesserung.
