# Clarity – Frontend und Motion Design

## Neue Gestaltung

Die vorherige Perspective-Gestaltung wurde durch ein neues Frontend ersetzt. Petrol #102f32, helle Fläche #f5f7f5, Sekundärfläche #e8eeeb, Mint #c5edda; Text #102f32 / #4d6363. Design-Tokens definieren auch Fokus, Linien, Schatten und Abstände. Zwei lokale Schriftfamilien: Segoe UI/Arial für klare große Überschriften und Lesetexte, Georgia für gezielte persönliche Akzente. Keine externen Schriften.

Startseite: dunkle, großzügige typografische Bühne mit originaler SVG-Linsengrafik; redaktionelle Vorstellung; offene Leistungszeilen; interaktive Zielgruppenlinks mit vorausgewähltem Formularanliegen; persönliche Markenkomposition; drei Schritte der Zusammenarbeit; integrierte Anfrage. Fachseite: heller Editorial-Einstieg und Themenindex, unterschiedlich aufgebaute Buchhaltungs-, Jahresabschluss-, Steuer-, Gründungs- und Partner-Kapitel. Über mich: großer Name und markentypografische Komposition anstelle eines erfundenen Porträtfotos, Erfahrung/Qualifikation, Hintergrund, Arbeitsweise und digitales Interesse.

## Motion

Native Animationen mit transform/opacity. Hero-Elemente beginnen zeitversetzt; maximal 600 ms Desktop-Verzögerung, mobil 240 ms. Einmalige Scroll-Reveals besitzen Aufwärts-, Seiten-, Skalierungs- und dekorative Linienvarianten. Linienanimationen betreffen nur dekorative Linien, keine zusammengedrückten Texte. Zugehörige Elemente werden kurz gestaffelt. Der Menüzustand ist animiert; Hover/Fokus erhalten eigene Zustände.

Eine passive requestAnimationFrame-Pipeline verändert Headeroberfläche, Seitenfortschritt und begrenzte Grafik-Parallaxe. Keine dauerhafte Animationsschleife. Kein Scroll-Hijacking. Keine Inhalte sind im Ausgangs-CSS versteckt. Fokussierte Elemente werden nicht animiert. Reduced Motion wird initial und bei Änderungen respektiert; Datensparmodus sowie bekannte Geräte mit höchstens zwei Kernen schalten dekorative Bewegung aus. Mobile Bewegung fällt kürzer aus; Parallaxe entfällt.

Das geschlossene Mobilmenü ist inert, die Schaltfläche benennt Öffnen/Schließen, Escape stellt den Fokus wieder her. Beim Wechsel vom Desktop in eine Mobilansicht wird Fokus aus nun verborgenem Menü zurückgeführt. Ohne JavaScript bleiben Navigation und Inhalt sichtbar. Rechtstexte haben keine Inhaltsanimationen.

## Erhaltene Fakten und Integration

Fachliche Detailtexte, Biografie/Qualifikation, Partner-Lohnverrechnung einschließlich grenzüberschreitender Beschäftigung, Gründung/Rechtsform/Umgründung, Zielgruppen, digitale Interessen und Direktkontakte sind erhalten. Impressum/Datenschutz-Inhalte bleiben unverändert. Original-Logo und contact.js sind unverändert. Kein Prozessoptimierungsangebot wird separat veröffentlicht.

EmailJS-Werte, acht Templateparameter, Reply-To-Vertrag und Pflichtfelder Name/E-Mail bleiben erhalten. Neues Benachrichtigungsdesign mit Absenderblock, Anliegen, Kontakt-/Terminangaben und vollständiger Nachricht. Inline-CSS, Tabellen, escaped double braces, inverse Leerzustände und Zeilenumbrüche. Das tatsächliche Dashboard wurde nicht geändert. Einsetzen und Prüfen des festen Empfängers bleibt gemäß README notwendig. Keine echte E-Mail versendet.

## Durchgeführte Prüfung

- 21 erfolgreiche Node-Verhaltenstests: zehn Kontakt-/Mailtests, elf Motion-/Menütests.
- Komponentenabgleich, zehn Root-Dokumente, interne Links, Anker, relative Ressourcen, Formularvertrag und H1-/Überschriftenhierarchie.
- Exakter Vergleich aller vorhandenen SEO-/Social-Tags, Canonicals, Sprache und Schema; ausschließlich theme-color geändert. Robots, Sitemap, Indexierungsmodus und alte Redirects erhalten.
- Fachliche/biografische Detailtexte und rechtliche Hauptinhalte mit Baseline verglichen, Original-Logo und E-Mail-Transport unverändert.
- HTML-Tagstruktur, JavaScript-Syntax, Mail-Escaping, optionale Daten und mehrzeilige Nachricht.
- Temporäre Release-/Domainwechselprüfungen und statisches Deployment-Paket.
- Rechnerische Kontrastprüfung ausgewählter Haupt-/Sekundär-/inverser Texte, Buttons und Platzhalter: mindestens 4,5:1. Ein zu heller Formularplatzhalter wurde dabei korrigiert.

## Tatsächliche Grenze der Sichtprüfung

Ein Preview-Server wurde gestartet, die integrierte Browseransicht schlug jedoch mit einem MCP-/App-Fehler fehl. HTTP-Abfragen auf die lokale Adresse liefen ebenfalls in einen Timeout. Die vorherige CUA-Steuerung scheiterte mit fehlendem Windows-Plattformverzeichnis; direkte Browserstarts waren bereits von der automatischen Freigabe abgelehnt worden und wurden nicht über einen anderen Prozessstart umgangen. Der eigene Preview-Server wurde wieder beendet.

Daher sind keine erfolgreich gerenderten Desktop-/Mobil-Screenshots oder bestätigten Sichtkontrollen für 360, 390, 768, 1024, 1440 und 1920 px vorhanden. Entsprechende responsive Layouts, mobile Typografie/Touch-Ziele und begrenzte Grafiken sind implementiert, echte Overflow-/Konsolen-/CLS-/LCP-/INP-Messungen bleiben offen. Quellcode-/Mock-Prüfungen werden nicht als Browserprüfung ausgegeben. Keine vollständige WCAG-2.2-AA-Zertifizierung oder getestete Darstellung in allen Mailprogrammen.

Die fünfseitige Einzeldatei-Vorschau besitzt Desktop-/Tablet-/Mobilumschaltung und deaktiviert E-Mail-Versand. Vor öffentlicher Freigabe bleiben Browserkontrolle, echter Postfacheingang/Reply-To und Unternehmensbestätigung der Sach-/Rechtsangaben erforderlich. Kein Hosting oder Indexierungsstatus wurde umgeschaltet.
