# Yilmaz – F-Tax Website V2

Stand: 14.10.2026. Projekt: Yilmaz. Unternehmen: F-Tax Steuerberatung GmbH, Leonding. Repository: https://github.com/simsek6981/Yilmaz

## Ausgangslage und Ergebnis

V1 war eine Einseiten-Website mit Sprunglinks und kurzen Leistungsbeschreibungen. V2 bietet zehn eigenständige Seiten mit vertieften Inhalten und individuellen Kompositionen. Navigation, Footer, Buttons und Typografie bilden den gemeinsamen Rahmen.

## Seiten und individuelle Gestaltung

| Seite | Inhalt | Aufbau |
| --- | --- | --- |
| Home | Zwei Sparten, vier steuerliche Themen, Zusammenarbeit vorbereiten | Typografischer Einstieg, Belegmotiv, Schwerpunktflächen, Leistungsverzeichnis |
| Steuerberatung | Steuerarten, Erklärungen, Finanzamt, Rechtsformwahl und Umgründungen | Paragraphen-Akzent, vier Themenfelder, Vorbereitung, FAQ |
| Buchhaltung | Finanzbuchhaltung, Einnahmen-Ausgaben-Rechnung | Belegübersicht, zwei Leistungsblöcke, Übergabeablauf, digitales Belegwesen |
| Lohnverrechnung | Löhne/Gehälter, Meldungen, grenzüberschreitende Beschäftigung | Monatlicher Zyklus, Leistungsschwerpunkte, vertikaler Ablauf, FAQ |
| Bilanzierung | Jahresabschlüsse und Bilanzen | Zentrierter Einstieg, redaktioneller Aufbau, dunkle Leistungsfläche |
| Prozessoptimierung | Abläufe, Schnittstellen, Automatisierung, digitales Belegwesen | Dunkler Einstieg, Systemübersicht, vier Ansatzpunkte, Belegbeispiel |
| Über mich | Bestätigte Firmendaten, persönliche Vorstellung offen | Porträtplatzhalter, Zusammenhang beider Sparten, Unternehmensdaten |
| Kontakt | Anliegen vorbereiten, Kontaktdaten offen | Standortfläche ohne externen Kartendienst, Vorbereitung, Leistungswege |
| Impressum | Bekannte Firmenangaben, fehlende Angaben | Eigene Informationsseite, ausdrücklich unvollständiger Entwurf |
| Datenschutz | Aktueller Funktionsumfang und Hostingfragen | Eigene Informationsseite, vollständige Erklärung noch erforderlich |

## Gestaltung und Inhalte

Heller warmer Grundton, dunkles Grün, Salbeitöne und ruhige Serifentypografie. Die Gestaltung baut auf der bisherigen F-Tax-Grundlage auf. Wortmarke und grafische Motive bleiben vorläufig.

Die bereitgestellten Bilder konnten trotz erneuter Übernahmeprüfung nicht lokal übertragen werden. Es wurden keine Personenbilder erfunden.

Alle Leistungen stammen aus den gelieferten Angaben. Keine erfundenen Qualifikationen, Mitarbeiter, Bewertungen oder Zertifizierungen. Arbeitsabläufe sind als mögliche Struktur oder schematische Beispiele gekennzeichnet. Die Nennung von BMD, Microsoft Dynamics, ABAS, Excel und Microsoft 365 bezeichnet keine Herstellerpartnerschaft.

## Technik und Qualitätskontrolle

Quellen, individuelle Seiten, gemeinsames Layout und Assets liegen getrennt unter src/. build.py erzeugt statisches HTML in dist/. Keine externen Pakete, Datenbanken oder Frameworks erforderlich. Die alten doppelten Style-/Script-Ausgaben sind entfernt.

Umgesetzt: individuelle Titel und Beschreibungen, semantisches HTML, eine H1 pro Seite, relative Pfade, Breadcrumbs, eigene 404-Seite, Sitemap-/robots-Erzeugung, Canonicals und Organisationsdaten bei konfigurierter endgültiger Basisadresse, Tastatur-Fokuszustände, ohne JavaScript sichtbare Navigation, native FAQs und reduzierte Bewegung.

Geprüft werden Build, lokale Links und Sprungziele aller elf HTML-Dateien einschließlich 404, Metadaten, Assets, Sitemap und JavaScript-Syntax. Automatische Prüfungen laufen bei Push und Pull Request. Die Browserumgebung konnte nicht starten; visuelle Desktop-/Mobilkontrolle, interaktive Menütests und Core-Web-Vitals-Messungen sind noch offen.

## Zugriff und Veröffentlichung

Die private Vorschau bleibt die Vorgabe. Standard-Builds deaktivieren Indexierung; noindex und robots.txt ersetzen keinen Zugriffsschutz. Ein öffentliches Pages-Deployment wird bei dieser Überarbeitung nicht gestartet.

Der öffentliche Pages-Workflow ist manuell und zusätzlich durch public_release abgesichert. Nach einer später ausdrücklich gewünschten öffentlichen Freigabe erzeugt der Build mit bestätigter Basisadresse Canonicals, strukturierte Daten und Sitemap. Die Seiten funktionieren unter /Yilmaz/ und unterstützen eine spätere eigene Domain.

Das bestehende private Sites-Projekt bleibt erhalten. Seine Bereitstellung ist wegen der verweigerten lokalen Hostingverbindung noch blockiert. Es gibt keinen bestätigten privaten Online-Link.

## Nächste Ergänzungen

1. Tatsächliches Logo, Bilder und Porträt prüfen und einbauen.
2. Bestätigten Ansprechpartner, Werdegang, Qualifikationen und Geschäftskontakte ergänzen.
3. Impressum und Datenschutz anhand des endgültigen Betriebs vervollständigen.
4. Desktop, Tablet und Smartphone im Browser prüfen; Menü und FAQ mit Tastatur bedienen.
5. Private Bereitstellung bei funktionierender Hostingverbindung abschließen. Öffentliche Freigabe erst nach ausdrücklicher Änderung der Vorgabe.
