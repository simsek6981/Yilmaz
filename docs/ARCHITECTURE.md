# Architektur

Die Root-HTML-Dateien sind die maßgeblichen, direkt auslieferbaren Seiten. Keine Quell-/Build-Duplikate, Frameworks oder Paketinstallation. Gemeinsame Änderungen an Header, Footer und Metadaten in den betroffenen HTML-Dateien konsistent vornehmen und mit `tools/verify.py` prüfen.

CSS, JavaScript und Favicon liegen unter `assets/`. Dienstleistungsseiten verwenden individuelle Sektionen und responsive CSS-Regeln. Native Fragen-Akkordeons, mobile Navigation und sichtbarer Tastaturfokus benötigen keine Animationen. Leistungslinks bleiben ohne Leistungsfinder-Skript erreichbar.

Die öffentliche Formularkonfiguration steht als application/json in `kontakt.html`. `assets/js/contact.js` behält REST-Integration, Validierung, Honeypot, Timeout, Fehlermeldungen und Sperre gegen Mehrfachsendungen. Nur die Kontaktseite lädt diesen Code. Die Mailvorlage nutzt die tatsächlichen Parameter einschließlich `topic` und `reply_to`.

`tools/prepare-release.py` ist ein optionaler Metadaten-Schalter, kein Build. Er verändert gespeicherte Seiten; `docs/site.json` hält Seitenliste und Modus für Prüfungen fest. Standard ist weiterhin die nicht indexierbare Vorschau. Das ist kein Zugriffsschutz.

Aktive Seitennamen bleiben erhalten, daher sind keine Weiterleitungen für aktive Seiten nötig. Prozessoptimierung existiert nicht mehr. Der ursprüngliche Entwurf ist im Git-Commit `973e489c3fe57e1292302dcf8c2987cdd25601f3` erhalten. Die 404-Basis passt zum vorgesehenen Hosting-Unterpfad und wird bei Domainwechsel angepasst.

GitHub Pages ist für `main / (root)` vorbereitet. Der Workflow validiert, deployt aber nicht. Das Root kann auf beliebigem statischem Hosting ausgeliefert werden. Die frühere private Sites-Veröffentlichung blieb durch die lokale Netzwerkverbindung blockiert; keine erfolgreiche Live-Veröffentlichung wird behauptet.
