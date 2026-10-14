# EmailJS Free für das F-Tax-Kontaktformular

Der Formularcode ist umgesetzt. Echter Versand bleibt deaktiviert, bis die drei öffentlichen Konfigurationswerte eingetragen sind und das Empfängerpostfach in EmailJS festgelegt wurde. Es wurden keine echten Nachrichten gesendet.

## Kostenloser Tarif

Stand der offiziellen Preisübersicht am 14.10.2026: 200 Anfragen pro Monat, zwei Vorlagen, Anfragegröße bis 50 KB. Die Website nutzt eine Vorlage und eine API-Anfrage pro Formularsendung. Eine zusätzliche automatische Antwort ist nicht aktiviert; diese würde weitere Versandanforderungen verursachen. Anhänge sind nicht vorgesehen.

Quelle: https://www.emailjs.com/pricing/

## Einrichtung im eigenen EmailJS-Konto

1. Ein kostenloses Konto unter https://dashboard.emailjs.com/sign-up anlegen bzw. ein vorhandenes Konto verwenden.
2. Unter „Email Services“ den gewünschten E-Mail-Dienst verbinden. Den Dienst im Dashboard prüfen und die Service-ID übernehmen.
3. Unter „Email Templates“ eine Kontaktvorlage anlegen. Die gewünschte Empfängeradresse **fest** in „To Email“ eintragen; keine aus dem Browser übergebene Empfängeradresse verwenden.
4. Als „Reply To“ die Variable `{{reply_to}}` einstellen. Als Absender den vom verbundenen E-Mail-Dienst vorgesehenen Absender verwenden. Die Besucheradresse gehört ins Antwortfeld, nicht als frei erfundene Absenderadresse.
5. Betreff: `F-Tax Website: {{topic}}`. Den Text aus `templates/contact-email.txt` als Vorlage verwenden.
6. Die Template-ID und unter „Account“ den Public Key übernehmen.
7. In `src/content/contact.json` nur `serviceId`, `templateId` und `publicKey` eintragen. Keine Passwörter oder Private Keys in Website oder Repository speichern.
8. `python build.py` und `python verify.py` ausführen. Auf der tatsächlich verwendeten HTTPS-Vorschau eine Testanfrage senden und den Eingang im Zielpostfach prüfen. Eine erfolgreiche API-Antwort allein beweist den Postfacheingang nicht.

Die Empfängeradresse wird im EmailJS-Dashboard festgelegt. Der Browsercode übermittelt lediglich die Angaben der Anfrage an die feste Vorlage.

## Formularfelder und Vorlagenvariablen

| Variable | Formularinhalt |
| --- | --- |
| from_name | Name |
| from_email | E-Mail-Adresse |
| reply_to | Dieselbe E-Mail-Adresse für Antworten |
| company | Unternehmen, optional |
| phone | Telefon, optional |
| topic | Buchhaltung, Lohnverrechnung, Bilanzierung, Steuerberatung oder Sonstiges |
| message | Nachricht mit 20 bis 4.000 Zeichen |

## Verhalten und Prüfstand

Validierung erfolgt vor dem API-Aufruf. Während einer Sendung sind weitere Sendungen gesperrt. Nach einer angenommenen Anfrage wird eine unmittelbare Mehrfachsendung kurz begrenzt. Bei Fehlern bleiben Eingaben erhalten. Zeitüberschreitungen werden nicht automatisch erneut gesendet, um doppelte Anfragen zu vermeiden.

Eine Honeypot-Falle verwirft ausgefüllte Botfelder. Diese clientseitigen Maßnahmen sind kein vollständiger Schutz vor Missbrauch des öffentlichen Endpunkts. Die für das verwendete Konto verfügbaren Schutzmöglichkeiten im EmailJS-Dashboard prüfen; keine kostenpflichtigen Tarifmerkmale für Free voraussetzen.

Die Offline-Vorschau sperrt den Versand ausdrücklich, auch wenn die tatsächliche Website später konfiguriert ist. Die acht automatisierten Tests verwenden simulierte Netzwerkantworten und verbrauchen kein EmailJS-Kontingent.

Vor Aktivierung für den tatsächlichen Betrieb die noch unvollständigen Angaben zum Verantwortlichen und zu den verwendeten Diensten in den Datenschutzhinweisen ergänzen.

Offizielle API-Dokumentation: https://www.emailjs.com/docs/rest-api/send/

Öffentlicher Schlüssel: https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
