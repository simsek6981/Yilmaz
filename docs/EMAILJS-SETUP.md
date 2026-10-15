# EmailJS für F-Tax

Öffentliche Konfiguration in `index.html`: Service `service_ja02fgi`, Template `template_tk14gwp`, Public Key `VaQ_PnlLN756oJY4H`. `assets/js/contact.js` nutzt die REST-API. Der Empfänger wird nicht aus dem Browser übergeben.

Das neue Template liegt unter `assets/email-templates/contact-notification.html`. Es wurde **nicht** ins Live-Dashboard eingesetzt. Es wurden keine echten E-Mails versendet; das endgültige Zielpostfach ist noch nicht bestätigt.

## Dashboard

1. **Email Templates → template_tk14gwp** öffnen.
2. Den Code-Editor öffnen und den gesamten HTML-Code der Datei einsetzen.
3. Subject: `F-Tax Terminanfrage: {{topic}}`.
4. From Name: `F-Tax Website`. From Email: Standardadresse des verbundenen Dienstes; nicht die Besucheradresse als fremden Absender verwenden.
5. To Email: die tatsächliche Empfängeradresse fest eintragen.
6. Reply To: `{{reply_to}}`.
7. Speichern. Über die tatsächliche HTTPS-Seite eine Anfrage mit freigegebenen Testdaten senden, Postfacheingang und Antwortadresse prüfen.

## Formular

Nur Name und E-Mail sind erforderlich. Ein Erstgespräch kann ohne weitere Angaben angefragt werden. Der Termin ist erst nach persönlicher Rückmeldung bestätigt. Das in der Referenz genannte office@f-tax.at muss als tatsächlicher Empfänger im Konto bestätigt und fest eingetragen werden; der Browser wählt kein Zielpostfach.

## Variablen und Gestaltung

| Variable | Inhalt |
| --- | --- |
| `{{from_name}}` | Name |
| `{{from_email}}` | Besucheradresse |
| `{{reply_to}}` | Dieselbe Adresse für den Reply-To-Header |
| `{{company}}` | Unternehmen, optional |
| `{{phone}}` | Telefon, optional |
| `{{topic}}` | Gewählte Leistung bzw. Anliegen |
| `{{appointment}}` | Optionaler Terminwunsch, maximal 160 Zeichen |
| `{{message}}` | Optionale Nachricht, maximal 4.000 Zeichen |

EmailJS escaped doppelte Klammern standardmäßig. Inverse Abschnitte zeigen bei leeren optionalen Angaben „Nicht angegeben“. Die Nachricht steht in einem `pre`-Block mit Sans-Serif-Schrift, `white-space:pre-wrap` und Zeilenumbruch. Tabellen, Inline-CSS und ein Outlook-Breiten-Fallback tragen das Layout. Eine kleine Media-Query reduziert mobile Abstände. Keine Skripte, externen Bilder oder Fonts. Die konkrete Darstellung in E-Mail-Programmen bleibt ungeprüft.

`python tools/email-preview.py` erzeugt `docs/contact-notification-preview.html` mit markierten fiktiven Beispieldaten. Nicht diese Beispieldatei in EmailJS einsetzen.

## Free-Tarif und Domains

Offizielle Preisübersicht, geprüft am 14.10.2026: 200 Requests monatlich, zwei Templates, maximal 50 KB pro Request. Eine Formularanfrage verwendet einen API-Aufruf. Keine zweite automatische Antwort und keine Anhänge. Der Anbieter kann einen eigenen Footer ergänzen; dessen Entfernung ist im Free-Tarif nicht enthalten.

Die Domain-Allowlist gehört laut Preisübersicht nicht zu Free. Die Kontokonfiguration wurde mangels Dashboard-Zugriff nicht geprüft. Falls später ein Tarif mit Allowlist genutzt wird, ist laut Dokumentation der Ursprung einzutragen, beispielsweise `https://simsek6981.github.io`, nicht `/Yilmaz/`. Bei eigener Domain den tatsächlichen Ursprung verwenden. Kein kostenpflichtiger Wechsel wird vorausgesetzt oder vorgenommen.

Validierung und Honeypot laufen vor dem Netzwerkaufruf. Während des Versands und kurz nach Annahme werden Mehrfachsendungen verhindert. Bei Fehler bleiben die Eingaben erhalten; Timeouts werden nicht automatisch wiederholt. Clientseitige Maßnahmen sind kein vollständiger Missbrauchsschutz.

## Betrieb und Datenschutz

Die Datenschutzhinweise beschreiben den implementierten Ablauf, bleiben jedoch ein Entwurf. Verantwortlicher, tatsächliche E-Mail-/Hosting-Dienste, Zwecke, Rechtsgrundlagen, Aufbewahrung und Empfänger müssen für den Betrieb festgelegt werden. Keine privaten Schlüssel oder Passwörter im Repository speichern.

## Offizielle Quellen

- https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/
- https://www.emailjs.com/docs/rest-api/send/
- https://www.emailjs.com/docs/faq/can-i-add-my-domain-to-allowlist/
- https://www.emailjs.com/pricing/
- https://www.emailjs.com/legal/privacy-policy/


## Aktuelle Gestaltung: Clarity

Das Template ist neu als geschäftliche Nachricht in Petrol/Mint gestaltet: Absenderblock, Anliegen, optionale Kontakte und Terminwunsch, vollständige Nachricht und Unternehmensfooter. Es benötigt keine Bilder, Fonts oder Animationen. Der bestehende Parameter-/Reply-To-Vertrag gilt unverändert. Noch nicht im Live-Dashboard eingesetzt; echte Clientdarstellung und Zustellung sind nicht bestätigt.
