# Technische Entscheidungen

## Statische Seiten

Die Website stellt Leistungen vor und braucht weder Datenbank noch Backend. Ein Python-Build mit Standardbibliothek vermeidet Paketinstallation und Laufzeitabhängigkeiten. Inhalte und Navigation werden als echtes HTML erzeugt.

## Gemeinsamer Rahmen, individuelle Seiten

src/templates/layout.html enthält den Seitenrahmen. src/pages/ enthält individuelle Kompositionen und Inhalte. src/assets/ enthält gemeinsame Gestaltung und Verhalten. src/content/site.json hält die Unternehmensdaten und Metadaten.

## Hosting und Zugriff

Flache .html-URLs und relative Pfade funktionieren ohne Client-Routing und unter einem Repository-Unterpfad. Eine Canonical-Basisadresse wird nur aus der bestätigten Build-Konfiguration verwendet.

Der Standard-Build deaktiviert Indexierung; private Online-Zugriffe benötigen Hostingzugriffsschutz. Öffentliche Builds erfordern --public und eine HTTPS-Basisadresse. Der Pages-Workflow ist manuell mit expliziter öffentlicher Freigabe. Pushes starten Prüfungen, keine Veröffentlichung.

## Inhaltsgrenzen

Personen-, Kontakt- und Rechtsangaben werden nicht erfunden. Fehlende Angaben sind markiert. Formulare und Uploads werden erst mit einem tatsächlich eingerichteten Empfänger ergänzt.

## Verifikation

verify.py prüft den vollständigen erzeugten Seitenbestand, Verweise und Metadaten. Diese Prüfungen ersetzen keine visuelle Browserabnahme. Browser- und Hostingzugriffe sind derzeit blockiert; eine erfolgreiche Veröffentlichung wird nicht behauptet.
