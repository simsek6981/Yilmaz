# F-Tax · Website-Neugestaltung

## Design und Inhalt

Warmweiß (#f8f7f2), Dunkelgrün (#203c34), Salbeitöne und Georgia-Überschriften. Lokale Systemschriften, Weißraum, feine Linien und individuelle Dienstleistungsaufbauten. Keine externen Bilder, Fonts oder Animationen.

Startseite mit vier Leistungen und Leistungsfinder. Steuerberatung ordnet Steuerarten, Vertretung, Rechtsformwahl und Umgründungen ein. Buchhaltung erklärt Arbeitsgrundlagen und Vorbereitung. Lohnverrechnung behandelt Abrechnung, Meldungen und grenzüberschreitende Beschäftigung. Bilanzierung erläutert die Vorbereitung des Abschlusses. Über F-Tax verwendet nur vorhandene Unternehmensdaten. Kontakt ist neu gestaltet; Validierung und EmailJS bleiben erhalten.

## Struktur und SEO

Neun aktive Seiten und eine 404-Datei liegen im Root. Assets unter css, js, icons und email-templates; Unterlagen unter docs, Werkzeuge unter tools, Tests unter tests. dist, src und alte Templates entfallen. Prozessoptimierung ist aus Seiten, Navigation und Sitemap entfernt; der Entwurf bleibt in der Git-Historie.

Individuelle Titel, Beschreibungen, H1, de-AT, Canonical, Open Graph, Twitter, Organization/WebSite/WebPage sowie Service- und Breadcrumb-Daten. Die vorgesehene Basis ist die GitHub-Pages-Projektadresse. Bis zur öffentlichen Freigabe bleibt noindex aktiv und die Sitemap leer. Ein geprüftes Metadatenwerkzeug unterstützt den Wechsel auf öffentliche Indexierung und eigene Domain.

## E-Mail

Die bereitgestellten EmailJS-Werte sind in kontakt.html eingetragen. Das neue Template liegt unter assets/email-templates/contact-notification.html. Es verwendet die Website-Farben und zeigt alle Formularangaben; Reply-To wird im Dashboard mit reply_to eingerichtet. Anleitung in README.md und docs/EMAILJS-SETUP.md.

## Prüfstand und offene Punkte

Automatische Prüfungen von Root-Seiten, Verweisen, Metadaten, Schema und Formularvertrag; neun simulierte Kontakt-/Template-Tests sowie öffentliche, private und Domainwechsel-Metadatenprüfungen. Die Browserumgebung startet weiterhin nicht. Keine durchgeführte visuelle Browser-/E-Mail-Client-Prüfung oder gemessene Core Web Vitals.

HTML-Mail im Dashboard speichern, Empfänger und Dienst prüfen, echten Eingang testen. Laut Preisübersicht keine Domain-Allowlist in Free. Keine Live-Mails versendet oder Tarife geändert.

GitHub Pages ist für main / (root) vorbereitet, aber nicht öffentlich aktiviert. Bestätigte Firmenkontakte, Geschäftsanschrift, persönliche Vorstellung und vollständige rechtliche Texte fehlen weiterhin.

# Fortschreibung V2 · 15.10.2026

Die obigen Abschnitte dokumentieren den bisherigen Projektstand. V2 erweitert die Gestaltung um lokale SVG-Bildwelt, Kupferakzent, Leistungskarten, Unternehmensabschnitt und Beratungsablauf. Die vier Leistungen behalten ihre Inhalte und erhalten Themen-Navigation, Belegkarte, Monatszyklus bzw. Abschlussgrafik; zusätzliche FAQ bei Buchhaltung und Bilanzierung.

Gemeinsame Elemente liegen jetzt in components/ und werden in die weiterhin direkt nutzbaren Root-HTML-Dateien synchronisiert. Der optionale Build tools/package.py erstellt ein ignoriertes dist ausschließlich mit Website-Dateien. Der Pages-Workflow nutzt dieses Paket; PAGES_ENABLED steuert die spätere Aktivierung. Keine zusätzlichen Frameworks oder Abhängigkeiten.

Die Browserprüfung funktioniert nun. Ergebnis und Grenzen: docs/QUALITY.md. Bestandsanalyse: docs/ANALYSIS-V2.md. Noch fehlende Unternehmensangaben bleiben sichtbar markiert; Indexierung bleibt im Vorschaumodus. README und ARCHITECTURE beschreiben den aktuellen Workflow.
