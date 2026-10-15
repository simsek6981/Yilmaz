# Prüfbericht · Premium-Version · 15.10.2026

## Durchgeführt

- Alle zehn Root-Dateien: sechs vollständige Dokumente einschließlich rechtlicher Seiten und 404 sowie vier reine Weiterleitungsdateien.
- Lokale Links/Anker, relative Assets, individuelles SEO der vollständigen Seiten, de-AT, H1-Hierarchie, Canonicals, Open Graph, Twitter und JSON-LD.
- Drei indexierbare Inhaltsseiten im späteren öffentlichen Modus; keine eigenständigen Fach-/Kontaktseiten in Navigation oder Sitemap.
- Formular ausschließlich auf der Startseite, nur Name und E-Mail verpflichtend. Alle Parameter einschließlich Terminwunsch stimmen mit dem Mailtemplate überein.
- Zehn simulierte Formular-/Template-Tests: minimale Anfrage, sichere Vorgaben für optionale Angaben, Validierung, Escaping, korrekter REST-Payload und Reply-To, Honeypot, Dienst-/Netzfehler, Timeout, Eingabeerhalt und Mehrfachsendesperre.
- Temporäre Release-/Domainwechsel-Tests mit GitHub-Unterpfad, eigener Domain und Rückkehr zur Vorschau.
- E-Mail-Beispiel mit fiktiven Daten sowie Escaping/Zeilenumbrüchen.
- Gemeinsame Header-/Footer-Komponenten und JavaScript-Syntax.

## Visuelle Grenze

Für diese neue Version wurde kein erfolgreicher Browser-Render durchgeführt. Der Start des lokalen Browsers wurde von der automatischen Freigabe abgelehnt. Die alternative Browsersteuerung scheiterte ebenfalls mit fehlendem Windows-Plattformverzeichnis (HRESULT 0x80070003). Die Blockierung wurde nicht durch einen anderen Prozessstart umgangen.

Deshalb keine tatsächlich erstellten Screenshots oder behaupteten Sichtprüfungen bei 375, 768, 1440 und 1920 px. Responsive Regeln sind für diese Breiten implementiert, müssen aber im Browser noch kontrolliert werden. Der ältere V2-Bericht beschreibt eine andere Gestaltung und ersetzt diese Kontrolle nicht. Keine gemessenen Core Web Vitals, kein Safari-/Firefox-Test, kein vollständiges WCAG-Audit.

## Versand / Veröffentlichung

Keine echte E-Mail gesendet. Dashboard-Template, festes Empfängerpostfach, Reply-To-Verhalten im echten Mailprogramm und Eingang müssen noch geprüft werden. Keine E-Mail-Client-Screenshots oder garantierte Darstellung in allen Outlook-Versionen.

Keine öffentliche Freigabe oder Hostingumschaltung ausgelöst. Firmen-/Biografie-/Rechtsangaben stammen vorrangig aus den bereitgestellten Referenzen und bleiben zur Unternehmensbestätigung offen. Indexierungsstatus und vorgesehene Basisadresse aus main wurden erhalten.

## Modernisierungsprüfung

Zusätzlich bestehen sieben Node-Verhaltenstests für einmalige Einblendung, reduzierte Bewegung beim Laden und Umschalten, kleinere Smartphone-Effekte, Fokus-Schutz, fehlende/fehlerhafte Observer, passive gebündelte Header-Aktualisierung und Menübedienung. Zehn bestehende EmailJS-/Template-Tests bleiben erhalten. Die Bewegungslogik wurde mit simuliertem DOM/Observer geprüft, nicht als echte Browserdarstellung.

Alle vorherigen SEO-Titel, Beschreibungen, Canonicals, Social-Metadaten und JSON-LD-Daten wurden vor/nach der Modernisierung identisch verglichen. Keine Indexierungs- oder Hostingumschaltung. Das neue Maildesign enthält keine Animation oder JavaScript. Keine tatsächlichen Core-Web-Vitals-Messwerte; die bereits dokumentierte Browser-Blockierung bleibt offen.

## Vollständiger Neuaufbau / Perspective

Alle drei Hauptseiten, Header/Footer, Rechtsseiten-Gestaltung und E-Mail-Design sind neu gestaltet. Gleichbleibender Faktenbestand und identische fachliche/biografische Detailtexte wurden beim Umbau kontrolliert. SEO-Vergleich schließt Titel, Beschreibungen, Canonicals, OG/Twitter, Sprache, Indexierung und JSON-LD ein; nur theme-color ändert sich. Logo und Kontaktlogik bleiben bytegleich. Automatische Tests ersetzen weiterhin keine Sichtkontrolle. Erneute Browsersteuerung am 15.10.2026 scheitert vor Initialisierung mit HRESULT 0x80070003. Keine Screenshots und keine gemessenen mobilen Overflow- oder Leistungswerte verfügbar.

## Clarity – erneuter Frontend-Neubau

Aktueller Prüfstand und Grenzen: [CLARITY.md](CLARITY.md). 21 erfolgreiche Verhaltenstests (zehn Kontakt, elf Motion/Menü), unveränderte Fakten-/SEO-Verträge, neu berechnete Textkontraste und korrigierter Formularplatzhalter. Eigene responsive Layouts und Motion-Varianten sind implementiert. Integrierte Browseransicht fehlgeschlagen, HTTP-Lokalabfrage mit Timeout; kein erfolgreicher Render, keine gemessenen Viewport-Overflow-/Core-Web-Vitals-Werte oder Screenshots. Kein Live-E-Mail-Versand und keine Hostingumschaltung.
