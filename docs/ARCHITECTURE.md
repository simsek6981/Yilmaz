# Architektur · Premium-Version

Fünf eigenständige Inhalts-/Rechtsseiten im Root plus 404. Vier alte Fach-/Kontaktadressen sind nur noch statische Weiterleitungen. Ihre Ziele stehen in docs/site.json; Meta-Refresh sorgt für den No-JavaScript-Fall, redirect.js erhält bei JavaScript-Nutzung Anfrageparameter. Es werden keine HTTP-301-Antworten behauptet.

Gemeinsamer Header/Footer unter components/, abgeglichen durch tools/components.py. Die Hauptnavigation enthält genau drei Seiten; der Terminbutton führt zur Startseite #termin. Eine einzige CSS-Datei gestaltet alle Hauptseiten, Rechtsseiten und das Formular. Keine externen Schriftarten, Fotos oder zusätzlichen Browserpakete.

Das bereitgestellte Logo ist als SVG unverändert lokal gespeichert. Personenfotos wurden nicht erfunden. Identitäts- und Firmendaten aus den Referenzen sind im Quellenabgleich dokumentiert; Rechtstexte als Entwürfe markiert.

EmailJS-Konfiguration ausschließlich in index.html als application/json. contact.js validiert Name und Adresse als Pflichtangaben; weitere Felder sind optional. Topic hat einen sicheren Standardwert Erstgespräch. Terminwunsch wird als appointment übergeben; es wird weder Verfügbarkeit geprüft noch ein fester Termin gebucht. Der data-booking-provider-Marker erlaubt später eine klar abgegrenzte Buchungsintegration. Bestehende Fehler-, Timeout- und Mehrfachsendebehandlung bleibt erhalten.

tools/prepare-release.py aktualisiert Metadaten und Domainbasis. Redirects und rechtliche Entwürfe bleiben aus der Sitemap ausgeschlossen. tools/package.py prüft vor der Paketierung und nimmt nur öffentliche Seiten sowie CSS, JS und Icons auf. dist bleibt ignoriert und wird nicht getrackt. Bestehender Pages-Workflow, PAGES_ENABLED und Veröffentlichungszustand werden nicht verändert.

## Bewegungslogik

main.js hält Menü, Sticky-Oberfläche und optionale Bewegung getrennt. Passive Scroll-Ereignisse bündeln die Header-Aktualisierung mit requestAnimationFrame; es wird keine Layouthöhe verändert. IntersectionObserver beobachtet nur ausgewählte Inhaltsgruppen und entfernt sie nach dem ersten Sichtbarwerden. Die native animate()-Methode verändert transform/opacity; die Ausgangs-CSS bleibt sichtbar. Reduced Motion beendet aktive Animationen. Kein Inhalt hängt von einer erfolgreichen Animationsinitialisierung ab.

## Clarity / aktuelles Frontend

Neues HTML und CSS-Designsystem; die statische Architektur bleibt erhalten. main.js nutzt data-hero-item/data-delay, data-reveal, data-scroll-progress und data-parallax als kleine progressive Verträge. Native Web Animations API statt Bibliothek; maximale Desktop-Parallaxe 48 px, gemeinsame passive Scroll-Pipeline, Gerätemodi und Reduced Motion. Mobile Links sind nur im JS-geschlossenen Menü inert. SVG-Markengrafik ist inline/dekorativ; Original-Logo unverändert. Das neue E-Mail-Design enthält keine Bewegung. Einzelheiten und tatsächliche Testgrenzen in CLARITY.md.
