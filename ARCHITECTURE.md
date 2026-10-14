# Technische Entscheidungen

## Statische Seiten

Die Website stellt Leistungen vor und braucht weder Datenbank noch Backend. Ein Python-Build mit Standardbibliothek vermeidet Paketinstallation und Laufzeitabhängigkeiten. Inhalte und Navigation werden als echtes HTML erzeugt.

## Gemeinsamer Rahmen, individuelle Seiten

src/templates/layout.html enthält den Seitenrahmen. src/pages/ enthält individuelle Kompositionen und Inhalte. src/assets/ enthält gemeinsame Gestaltung und Verhalten. src/content/site.json hält die Unternehmensdaten und Metadaten.

## Hosting und Zugriff

Flache .html-URLs und relative Pfade funktionieren ohne Client-Routing und unter einem Repository-Unterpfad. Eine Canonical-Basisadresse wird nur aus der bestätigten Build-Konfiguration verwendet.

Der Standard-Build deaktiviert Indexierung; private Online-Zugriffe benötigen Hostingzugriffsschutz. Öffentliche Builds erfordern --public und eine HTTPS-Basisadresse. Der Pages-Workflow ist manuell mit expliziter öffentlicher Freigabe. Pushes starten Prüfungen, keine Veröffentlichung.

## Kontaktversand und deaktivierte Seiten

EmailJS wird direkt über die dokumentierte REST-Schnittstelle aufgerufen. Der Browser erhält nur Service-ID, Template-ID und Public Key. Der Empfänger ist in der dienstseitigen Vorlage festgelegt; es gibt keinen frei wählbaren Browser-Empfänger. Ohne Konfiguration ist Versand gesperrt. Die Offline-Vorschau deaktiviert Versand ausdrücklich. Neun Tests prüfen die Verbindung mit simulierten Antworten.

Seiten mit enabled=false bleiben als Quelle erhalten, werden aber aus Ausgabe, Navigation und Sitemap entfernt. verify.py prüft auch Verweise auf deaktivierte Seiten.

## Inhaltsgrenzen

Personen-, Kontakt- und Rechtsangaben werden nicht erfunden. Fehlende Angaben sind markiert. Das Kontaktformular ist vorbereitet; seine Versandfunktion wird erst nach Eintragung der öffentlichen EmailJS-Konfiguration aktiviert. Uploads sind nicht vorgesehen.

## Verifikation

verify.py prüft den vollständigen erzeugten Seitenbestand, Verweise und Metadaten. Diese Prüfungen ersetzen keine visuelle Browserabnahme. Browser- und Hostingzugriffe sind derzeit blockiert; eine erfolgreiche Veröffentlichung wird nicht behauptet.
