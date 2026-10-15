# Architektur V2

Zehn Root-HTML-Dateien bleiben direkt auslieferbar. Kein Router, Framework oder Datenbank. Direkte Unterseitenaufrufe funktionieren auf GitHub Pages ohne SPA-Fallback. Die aktive Marke ist F-Tax; Yilmaz bezeichnet das Repository.

`components/header.html` und `components/footer.html` sind die maßgeblichen gemeinsamen Elemente. `tools/components.py` synchronisiert sie und setzt aria-current. CI prüft die Synchronität; der Browser benötigt keine dynamische Einfügung.

`style.css` enthält Basiselemente und Formularzustände; `editorial.css` die V2-Kompositionen. Die lokale dekorative SVG stellt keine Kanzleiräume dar. Die Abschlussgrafik zeigt keine Unternehmenskennzahlen; alle relevanten Informationen stehen als Text im HTML.

Native details-Elemente tragen Leistungsmenü und FAQ. JavaScript ergänzt mobiles Menü, Escape-/Außenklick-Verhalten, Themenfinder und kurze Einblendungen. Inhalte bleiben sichtbar, wenn Skripte oder IntersectionObserver fehlen. Reduced Motion deaktiviert Bewegung.

`contact.js` bewahrt den EmailJS-Vertrag. Die JSON-Konfiguration enthält nur öffentliche IDs. Der Empfänger wird im Dashboard festgelegt. Kein Speichern von Nachrichten im Browser. Datenschutzhinweise bleiben als Entwurf gekennzeichnet.

`tools/package.py` prüft Komponenten und Website und erstellt ein sauberes dist aus einer Allowlist. Komponenten werden dabei absichtlich nicht automatisch korrigiert: Inkonsistenzen sollen in CI auffallen. Dokumentation, Mailvorlagen und Tests gelangen nicht ins Deployment.

`validate.yml` prüft Pull Requests. `pages.yml` deployt main nur bei PAGES_ENABLED=true. `prepare-release.py` verwaltet Canonicals, Schema-URLs, Indexierung, Sitemap, robots.txt und 404-Basis. DNS und Domain-Einstellungen bleiben separate Schritte.

`tools/serve.py` bildet den Projekt-Unterpfad und eine echte HTTP-404 mit eigener Fehlerseite ab. Python ist ausschließlich Entwicklungswerkzeug.
