# Architektur · Cinematic Dark Luxury

Die fünf Inhalts-/Rechtsseiten und 404 liegen im Root. Vier bestehende URLs bleiben als statische Weiterleitungen mit Meta-Refresh und JavaScript-Weiterleitung erhalten; dies sind keine HTTP-301-Antworten. Header und Footer werden aus `components/` mit `tools/components.py` in die vollständigen HTML-Dateien synchronisiert. Es gibt kein Runtime-Templating und keinen Build für den Auftritt.

CSS ist nach Hauptsystem, Bewegung und responsiven Regeln aufgeteilt. Farben, Zeitwerte, Easing, Stagger und Abstände stehen als Custom Properties in `main.css`. Eine 25-KB-WOFF2-Datei deckt die verwendete lateinische Schrift ab, mit `font-display:swap`. Das Markenmotiv ist eine lokale SVG-Datei mit intrinsischen Abmessungen. Original-Logo und OFL-Lizenz bleiben enthalten.

`main.js` steuert das Menü und den Header. Der passive Scrollhandler bündelt nur den Headerzustand mit requestAnimationFrame und verändert keine Layoutmaße. IntersectionObserver entfernt beobachtete Elemente nach dem ersten Sichtbarwerden; aktive Web-Animations-Instanzen werden nach Ende freigegeben. Die Grunddarstellung ist sichtbar, auch bei fehlenden APIs. Fokus innerhalb eines Elements verhindert dessen Reveal. Änderungen an Reduced Motion brechen aktive Animationen ab. Es gibt keine Endlosschleife, kein Partikelsystem und keinen Cursor-Tracker.

Die eigentliche Scrollkopplung nutzt CSS View Timelines: Prozesslinie und sehr geringe Desktop-Parallaxe. Fallback ist die statische Darstellung. Mobil entfällt die Parallaxe; Reveals sind kürzer und ohne Stagger. `animations.css` enthält eine vollständige Reduced-Motion-Ausnahme.

`contact.js` und dessen öffentliche Kennungen sowie alle acht Templateparameter bleiben erhalten. Nur Name und E-Mail sind erforderlich. Validierung, Honeypot, Versandsperre, Cooldown, Timeout, Fehler- und Erfolgsmeldungen sind vorhanden. EmailJS wird erst beim Absenden angesprochen; im Browser steht keine private Zugangsinformation und kein frei wählbares Empfängerpostfach. Alle QA-Versandaufrufe werden abgefangen und simuliert.

`tools/prepare-release.py` aktualisiert Metadaten, Domainbasis, robots und Sitemap. Rechtsentwürfe und Redirects bleiben aus der Sitemap ausgeschlossen. Der vorhandene Vorschaustatus wird nicht automatisch aufgehoben. `tools/package.py` prüft vor der Paketierung und nimmt Root-Seiten, CSS, JavaScript, Icons, Bilder und Fonts auf. Node-Module, Tests, interner Dokumentationsinhalt und Mailvorlagen werden nicht mit der öffentlichen Website ausgeliefert. `dist/` bleibt ignoriert.
