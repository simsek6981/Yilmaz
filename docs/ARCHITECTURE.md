# Architektur · Premium-Version

Fünf eigenständige Inhalts-/Rechtsseiten im Root plus 404. Vier alte Fach-/Kontaktadressen sind nur noch statische Weiterleitungen. Ihre Ziele stehen in docs/site.json; Meta-Refresh sorgt für den No-JavaScript-Fall, redirect.js erhält bei JavaScript-Nutzung Anfrageparameter. Es werden keine HTTP-301-Antworten behauptet.

Gemeinsamer Header/Footer unter components/, abgeglichen durch tools/components.py. Die Hauptnavigation enthält genau drei Seiten; der Terminbutton führt zur Startseite #termin. Eine einzige CSS-Datei gestaltet alle Hauptseiten, Rechtsseiten und das Formular. Keine externen Schriftarten, Fotos oder zusätzlichen Browserpakete.

Das bereitgestellte Logo ist als SVG unverändert lokal gespeichert. Personenfotos wurden nicht erfunden. Identitäts- und Firmendaten aus den Referenzen sind im Quellenabgleich dokumentiert; Rechtstexte als Entwürfe markiert.

EmailJS-Konfiguration ausschließlich in index.html als application/json. contact.js validiert Name und Adresse als Pflichtangaben; weitere Felder sind optional. Topic hat einen sicheren Standardwert Erstgespräch. Terminwunsch wird als appointment übergeben; es wird weder Verfügbarkeit geprüft noch ein fester Termin gebucht. Der data-booking-provider-Marker erlaubt später eine klar abgegrenzte Buchungsintegration. Bestehende Fehler-, Timeout- und Mehrfachsendebehandlung bleibt erhalten.

tools/prepare-release.py aktualisiert Metadaten und Domainbasis. Redirects und rechtliche Entwürfe bleiben aus der Sitemap ausgeschlossen. tools/package.py prüft vor der Paketierung und nimmt nur öffentliche Seiten sowie CSS, JS und Icons auf. dist bleibt ignoriert und wird nicht getrackt. Bestehender Pages-Workflow, PAGES_ENABLED und Veröffentlichungszustand werden nicht verändert.
