# Yilmaz – F-Tax Website V4

Stand: 14.10.2026. Repository: https://github.com/simsek6981/Yilmaz

## Aktueller Umfang

Neun aktive Seiten: Home, Steuerberatung, Buchhaltung, Lohnverrechnung, Bilanzierung, Über mich, Kontakt, Impressum und Datenschutz. Die Unterseite zur Prozessoptimierung ist vorerst geschlossen. Ihr Quelltext bleibt für später erhalten, wird aber nicht nach dist/ gebaut, nicht verlinkt und nicht in die Sitemap aufgenommen.

## Inhalt und Nutzbarkeit

Die Startseite konzentriert sich auf die vier steuerlichen Leistungsbereiche. Ein interaktiver Leistungsfinder ordnet das Anliegen ein, zeigt einen passenden Einstieg und führt mit vorausgewähltem Thema zum Kontaktformular. Ohne JavaScript bleiben die normalen Leistungslinks verfügbar.

Die Buchhaltungsseite erklärt konkreter, wie vorhandene Unterlagen den Einstieg erleichtern. Leistungen, Vorbereitung und FAQ bleiben auf den jeweiligen Unterseiten nachvollziehbar. Über mich und die Metadaten konzentrieren sich auf die aktuell sichtbaren Leistungen. Unbestätigte Personen-, Kontakt- und Rechtsangaben werden nicht erfunden.

## Kontaktformular

Felder: Name, E-Mail-Adresse, Unternehmen und Telefon optional, Anliegen und Nachricht. Das Thema wird aus einem gültigen Leistungslink übernommen. Versand erfolgt nach Einrichtung über EmailJS mit einer festen Vorlage und einem im Dashboard eingetragenen Zielpostfach.

Der kostenlose Tarif bietet nach Prüfung der offiziellen Preisübersicht 200 Anfragen pro Monat und zwei Vorlagen. Die Umsetzung verwendet eine Vorlage und eine API-Anfrage pro Versand. Keine automatische zusätzliche Antwort und keine Anhänge.

Service-ID, Template-ID und Public Key sind eingetragen. Die gestaltete HTML-Vorlage für template_tk14gwp liegt unter templates/contact-email.html bereit. Vorlage, festes Empfängerpostfach und tatsächlicher Postfacheingang müssen im EmailJS-Konto noch geprüft werden. Die Offline-Vorschau verhindert Versand unabhängig von der Konfiguration.

Umgesetzt sind Eingabevalidierung, Honeypot, Sperre während des Versands, kurze Begrenzung unmittelbar wiederholter angenommener Anfragen sowie verständliche Erfolgs- und Fehlermeldungen. Eingaben bleiben bei Fehlern erhalten. Erfolg wird erst nach einer erfolgreichen EmailJS-Antwort angezeigt; der tatsächliche Postfacheingang muss nach Einrichtung separat geprüft werden.

## Gestaltung und Technik

Weiß, tiefes Blau und warme orangefarbene Akzente. Responsive Formulare und Leistungsauswahl ergänzen die bestehende Gestaltung. Gemeinsames HTML-Layout, individuelle Quellseiten und ein statischer Python-Build ohne Paketabhängigkeiten bleiben erhalten.

Kontaktcode: src/assets/contact.js. Öffentliche Konfiguration: src/content/contact.json. Einrichtung und Vorlageninhalt: EMAILJS-SETUP.md und templates/contact-email.html. Private Schlüssel und Passwörter gehören nicht ins Repository.

## Prüfungen und offene Punkte

Build, lokale Verweise, Metadaten und deaktivierte Seiten werden geprüft. Neun automatisierte Kontaktformular-Tests bestehen mit simulierten Netzwerkantworten; keine echten E-Mails wurden versendet. Die Vorschau zeigt alle neun aktiven Seiten und enthält Desktop-/Mobilumschaltung.

Eine visuelle Browserkontrolle und eine private Online-Veröffentlichung sind in der aktuellen Umgebung weiterhin nicht möglich. Die vorhandene private Veröffentlichungsvorgabe bleibt bestehen; es wird kein öffentliches Pages-Deployment gestartet.

Noch erforderlich: HTML-Vorlage und Empfänger im EmailJS-Dashboard speichern bzw. prüfen, echten Versand und Postfacheingang prüfen, bestätigte Firmenkontakte und persönliche Angaben ergänzen sowie rechtliche Hinweise für den tatsächlichen Betrieb vervollständigen.

Quellen:
- https://www.emailjs.com/pricing/
- https://www.emailjs.com/docs/rest-api/send/
